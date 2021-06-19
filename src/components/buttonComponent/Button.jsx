import React from 'react';

function Button(props) {
  return (
    <div>
      <p className={props.title}>{props.head}</p>
      <button className={`textFont ${props.styles}`}>
        {props.icon && <img className={props.img} src={props.icon} alt=''/>}
        {props.child}
      </button>
    </div>
  );
}

export default Button;
