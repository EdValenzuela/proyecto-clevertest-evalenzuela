import React, { useState } from 'react';
import {Icon} from '@material-ui/core';

const SearchUser = ({guardarBuscar, buscar}) => {

    
    
    // const [inputBuscar, setInputBuscar] = useState({
    //     user: ''
    // });
    
     const [error, setError] = useState(false);
    // const {user} = inputBuscar;
    
    const handleSubmit = e =>{
        e.preventDefault();
        if(buscar.trim() === ''){
            console.log('user vacio !!!');
            setError(true);
            return;
        }
        //buscar(user);
        setError(false); //Reinicio mi bandera
        guardarBuscar(buscar = '');
    }

    const handleChange = e =>{
        // setInputBuscar({
        //     ...inputBuscar,
        //     [e.target.name]:e.target.value
        // })
        guardarBuscar(e.target.value.toLowerCase()); 
        setError(false);
    }

    return (
        <>
            <form className="form-inline" onSubmit={ handleSubmit }>
                <div className="form-group mx-sm-3 mb-2">
                    <Icon>search</Icon>
                    <input 
                        type="text" 
                        className="ml-2 form-control" 
                        name= "user"
                        value= {buscar}
                        onChange = { handleChange } 
                        placeholder="Search User" 
                    />
                </div>
            <button type="submit" className="btn btn-primary mb-2 mr-5">Search</button>
            { 
                error && (<p className="alert alert-danger text-danger">Debe ingresar un nombre de usuario</p>)
            }
            
            </form>
        </>


)
}

export default SearchUser
