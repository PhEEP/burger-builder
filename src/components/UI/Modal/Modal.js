import React from 'react';
import Ox from '../../../hoc/Ox';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal = (props) => (
  <Ox>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div 
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      className={classes.Modal}
      >
      {props.children}
    </div>
  </Ox>
);


export default modal;