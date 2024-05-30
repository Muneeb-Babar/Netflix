
import {  Route,Routes, BrowserRouter } from 'react-router-dom';
import SignUp from '../screens/SignUp';
import Dashboard from '../components/Dashboard';  // Import Dashboard if needed


function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='signup' element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;