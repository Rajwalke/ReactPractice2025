import React from "react";
import reactDOM from "react-dom/client";

// React Elemnt
const heading=(
    <h1 id="header">
    Namaste React 2 </h1>
    );


const Title=()=>{
    return(
        <div>
            <h1>My Name Is Raj Walke</h1>
        </div>
    )
}

// React Component
const Heading1=()=>{
    return(
       <>
        <div>
            <itle/>
            <h1>Namaste React 1</h1>
            {heading}
        </div>
        <div>

        </div>
       </>
        
    )
}

const root=reactDOM.createRoot(document.getElementById('root'));

root.render(<Heading1/>);