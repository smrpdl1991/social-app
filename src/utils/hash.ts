export async function hashPassword(password: string) {
    // Convert the password to a Uint8Array
    const passwordBuffer = new TextEncoder().encode(password);

    // Hash the password using the SHA-256 algorithm
    const hashBuffer = await crypto.subtle.digest('SHA-256', passwordBuffer);

    // Convert the hash buffer to a hexadecimal string
    const hashedPassword = Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

    return hashedPassword;
}