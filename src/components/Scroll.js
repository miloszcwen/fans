import React from "react";

const Scroll =(props)=>{
    return (
        <div style={{ overflowX: 'scroll', height: '100vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;