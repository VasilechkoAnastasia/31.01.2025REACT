import React from 'react';

// const user = {
//     name: 'Bill Gates',
//     imageUrl: 'bg.png',
//     imageW: 290,
//     imageH: 200,
//   };
  var style={
    display:"inline-block",
    fontFamily:"'Times New Roman', Times, serif",
    padding:"10px",
    margin:"10px",
    border:"2px solid #826641",
    borderRadius:"40px",
    backgroundColor: "#F8D07B",
    color:"#826641"
  }
  
  export function Profile(props) {
  
    return (
      <div style={style}>
      {/* интерполяция - встраивание значения перменной в строку */}
        <h1>{props.user.name}</h1>
        <img
          src={props.user.imageUrl}
          style={{width: props.user.imageW, height: props.user.imageH, borderRadius: props.user.imageR}}/> 
          <p>{props.user.city}</p>
          <p>{props.user.phone}</p>
          <p>{props.text}</p>
           </div>
      
    );
  }


