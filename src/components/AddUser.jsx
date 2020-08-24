import React, { useContext, useState } from 'react';
import { Icon } from '@material-ui/core';
import {userReducer} from '../context/UserProvider';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const AddUser = () => {

    const { addUser } = useContext(userReducer);
    const [error, setError] = useState(false);
    const [input, setInput] = useState({
         name: '',
         last:'',
         email:''
    });

    const {name, last, email} = input;

    const handleSubmit = e =>{
        e.preventDefault();

        if (name.trim() === '' || last.trim() === '' || email.trim() === ''){
            console.log('campos vacios');
            setError(true);
            return;
        }
        setError(false);
        setInput({
            name: '',
            last:'',
            email: ''
        })
        addUser(name, last, email); //Creo el usuario
    }

    const handleChange = e =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const body = (
        <div style={modalStyle} className={classes.paper}>
        <div className="row">
          <div className="card col-12">
              <div className="card-header d-flex justify-content-between">
                  Add User
                  <Icon onClick={ handleClose }>close</Icon>
              </div>
                <form className="card-body" onSubmit={ handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="name">User name</label>
                        <input type="text" className="form-control" id="name" name="name" value={name} onChange={ handleChange } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last">Last name</label>
                        <input type="text" className="form-control" id="lastname" name="last" value={last} onChange={ handleChange } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={ handleChange } />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary ">Save user</button>
                    </div>
                </form>
                { 
                    error && (<p className="alert alert-danger text-danger">Completa todos los campos!</p>)
                }
          </div>
        </div>
        </div>
      );

    return (
        <>
            <button 
                type="text" 
                className="btn btn-primary mb-2 d-flex align-items-center justify-content-between"
                onClick={ handleOpen }
            >
                <Icon>personOutline</Icon>
                Add User
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>
        </>
    )
}

export default AddUser
