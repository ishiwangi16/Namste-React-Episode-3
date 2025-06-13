// const heading = React.createElement(
//     "h1", {id:"heading"}, 
//     "Hello world from React"
// );
/*
<div>
   <div>
       <h1></h1>
   </div>
</div>
*/
import React from "react";
import ReactDOM from 'react-dom/client'; 

const parent=React.createElement(
    "div",
    {id:"parent"},
    
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{key:"h1"},"Iam a Shiwangi tag"),
         React.createElement("h2",{key:"h2"},"Iam a h2  tag") ]  
    )
);


console.log(parent);  //ob ject

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

 