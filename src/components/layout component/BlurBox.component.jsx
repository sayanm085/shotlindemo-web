import React from "react";



function BlurBox({ children, className = "", style = {}}) {
    return (
        <div className={` rounded-2xl border border-[#001170] backdrop-blur-md ${className}`} 
        style={{
          background:
            "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)",
          ...style 
        }}>
        {children}
        </div>
    );


}
export default BlurBox;