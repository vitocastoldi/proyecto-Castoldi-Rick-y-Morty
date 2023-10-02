import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "../Pages/Home/Home";
import Home from '../Pages/Home/Home';
import Characters from '../Pages/Characters/Characters';
import Contact from '../Pages/Contact/Contact';


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}