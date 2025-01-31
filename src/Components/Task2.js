import React from 'react';

const user = {
    name: 'Bill Gates',
    imageUrl: 'bg.png',
    imageW: 290,
    imageH: 200,
  };
  var style={
    margin:"10px",
    border:"1px solid red",
    color:"blue"
  }
  
  export function Profile() {
  
    return (
      <div style={style}>
      {/* интерполяция - встраивание значения перменной в строку */}
        <h1>{user.name}</h1>
        <img
          src={user.imageUrl}
          alt={'Фото ' + user.name}
          style={{width: user.imageW, height: user.imageH}}/>  
          {/* <p>{props.text}</p> */}
           </div>
      
    );
  }


