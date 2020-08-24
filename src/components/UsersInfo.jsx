import React from 'react';

const UsersInfo = ({seleccion}) => {
    //console.log(typeof seleccion);
    return (
        <div className="card">
            <div className="card-header">
                User Info
            </div>
            <div className="card-body">
                {
                    <pre>{JSON.stringify(seleccion, null, 2) }</pre>
                }
            </div>
        </div>
    )
}

export default UsersInfo
