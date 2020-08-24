import React, { createContext, useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';

export const userReducer = createContext(); 

const UserProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem('users')) || [];
    const [usuarios, guardarUsuarios] = useState([initialState]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(usuarios)); 
    }, [usuarios])

    useEffect(() => {
        getUser();
    }, [])
    const getUser = async()=>{
        try {
            const url = 'https://arsene.azurewebsites.net/User';
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            guardarUsuarios(data);

        } catch (error) {
            console.log(error);
        }
    }

    const addUser = (name, lastname, email) =>{
        guardarUsuarios([...usuarios, {id: uuid(), name, lastname, email}]);
    }
    
    
    return (
        <userReducer.Provider value={{usuarios, addUser}}>
            {props.children}
        </userReducer.Provider>
    )
}

export default UserProvider
