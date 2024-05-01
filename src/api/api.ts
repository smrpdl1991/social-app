//       __        ___      ___  __       ___    __           ___            __    ___  __
//  /\  |__) |    |__  \_/ |__  /  ` |  |  |  | /  \ |\ |    |__  |  | |\ | /  ` |  |  /  \ |\ |
// /~~\ |    |    |___ / \ |___ \__, \__/  |  | \__/ | \|    |    \__/ | \| \__, |  |  \__/ | \|

import type { z } from 'zod';
import axios, { AxiosError } from 'axios';

export enum AllowedHTTPMethods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
}

const API_BASE_URL = import.meta.env.API_BASE_URL;

export enum HTTPStatusCode {
    OK = 200,
}
type IApiCallPayload<Request, Response> = {
    method: AllowedHTTPMethods;
    path: string;
    requestSchema: z.ZodType<Request>;
    responseSchema: z.ZodType<Response>;
};

export default function api<Request, Response>({
    method,
    path,
    requestSchema,
    responseSchema,
}: IApiCallPayload<Request, Response>) {
    return function (requestData: Request) {
        requestSchema.parse(requestData);

        async function apiCall() {
            const response = await axios({
                baseURL: API_BASE_URL,
                method,
                url:
                    requestData && (method === 'GET' || method === 'DELETE')
                        ? path + `${requestData}`
                        : path,
                data:
                    requestData && (method === 'POST' || method === 'PUT')
                        ? requestData
                        : null,
            });

            const result = responseSchema.safeParse(response.data);
            if (result.success) {
                return result.data;
            } else {
                result.error &&
                    console.error('💀 Safe-Parsing Failed ❌', result.error);
            }
        }

        return apiCall();
    };
}
