import React from 'react';
import Backdrop from './Backdrop';
import classes from './Modal.module.css';

const modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} close={props.close} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0,
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 'auto' }}>
            <button class="circular ui icon button" onClick={props.left}>
              <i class="angle left icon"></i>
            </button>
          </div>
          <div>{props.children}</div>
          <div style={{ margin: 'auto' }}>
            <button class="circular ui icon button" onClick={props.right}>
              <i class="angle right icon"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
