import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from "./components/nav/index";
import MyUser from "./pages/user/index";
import EditTarefa from './pages/user/edit';



const RoutesApp = () => {
    return(
        <>
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route path='/' element={<MyUser/>} />
                    <Route path='/edit' element={<EditTarefa/>} />
                </Routes>
            </BrowserRouter> 
        </>
    )
}

export default RoutesApp