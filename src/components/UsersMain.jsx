import React, { useContext, useState } from 'react';

import UsersNames from './UsersNames';
import UsersInfo from './UsersInfo';
import AddUser from './AddUser';

import { userReducer } from '../context/UserProvider';
import SearchUser from './SearchUser';

const UsersMain = () => {
    
    const { usuarios } = useContext(userReducer);
    const [seleccion, guardarSeleccion] = useState();
    const [buscar, guardarBuscar] = useState('');

    const querySearch = usuarios.filter(item => { return (buscar !== '') ? item.name.toLowerCase().includes(buscar) : usuarios } )
    //console.log(querySearch);
    //console.log(usuarios);

    const detectarUser = id =>{
        const usuarioElegido = usuarios.find( item => item.id === id);
        
        guardarSeleccion(usuarioElegido);
    }

    /*const encontrarUser = name =>{
        guardarBuscar({
            ...buscar,
            name
        })
        console.log(name);
        const usuarioBuscado = usuarios.filter( item=>item.name === name );
        guardarBuscar(usuarioBuscado);
        console.log(usuarioBuscado);
    }*/

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 col-md-10">
                    <SearchUser guardarBuscar={guardarBuscar} buscar={buscar} />
                </div>
                <div className="col-4 col-md-2 justify-content-end d-flex">
                    <AddUser/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6 col-md-6">
                    <div className="card">
                        <div className="card-header">User names</div>
                        <div className="card-body">
                        {
                            querySearch.map(item => (
                                <UsersNames key={ item.id } item={ item } detectarUser={ detectarUser }  />
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6">
                    <UsersInfo seleccion={ seleccion } />
                </div>
            </div>
        </div>
    )
}

export default UsersMain
