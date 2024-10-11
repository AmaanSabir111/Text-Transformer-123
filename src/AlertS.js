import React from 'react'

export default function AlertS(props) {
 const capita=(w)=>{
    let k=w.toLowerCase();
    return k.charAt(0).toUpperCase()+k.slice(1);

 }
  return (
   
props.al&&<div className={`alert alert-${props.al.type} alert-dismissible fade show`} role="alert">
<strong>{capita(props.al.type)}</strong> : {props.al.message}
</div>
      
 
  )
}
