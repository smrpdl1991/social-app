import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default RoutesComponent;