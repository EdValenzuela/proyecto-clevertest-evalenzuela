import React from 'react';

const UsersNames = ({item, detectarUser }) => {
    const {id, name} = item; 

    return (
        <p className="card-text d-block p-2" onClick={ ()=> detectarUser(id) }>{name}</p>
    )
}

export default UsersNames
