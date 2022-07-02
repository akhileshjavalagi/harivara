import React from 'react';
import { Routes, Route } from 'react-router';
import Form from './Form';
import Users from './Users';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Users />}/>
                <Route path='/users/:id' element={<Form />}/>
            </Routes>
        </div>
    );
};
export default Routers;
