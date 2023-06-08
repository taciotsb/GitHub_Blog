import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { DefaultLayout } from './layout/DefaultLayout';
import { Details } from './Pages/Details';

export function Router(){
    return(
        <Routes>
            <Route path='/' element ={<DefaultLayout />}>
                <Route path='/' element ={<Home />}/>
                <Route path='/Details' element ={<Details />}/>
            </Route>
        </Routes>
    )
}