import React from "react";

const Scroll =(props)=>{
    return (
        <div style={{ overflowX: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;