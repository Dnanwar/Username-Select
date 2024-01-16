import React from "react";
const UserBubble = ({select,setSelects,setSugges}) => {
  const handleClose=()=>{
    setSelects((s)=>
        s.filter((item) => item !== select)
    )
    setSugges((s)=>[...s,select])
  }
  return (
    <div
      style={{
        display: "inline",
        marginRight: "0.3%",
        background: "#C8C8C8",
        borderRadius: "15px",
      }}
    >
      <div style={{ display: "inline", padding: "7px",paddingRight:'5px' }}>
        <div style={{ display: "inline"}}>{select}</div>
        <div style={{ display: "inline",marginLeft:'1%' }} onClick={handleClose}>x</div>
      </div>
    </div>
  );
};
export default UserBubble;
