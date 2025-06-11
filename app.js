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
const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Iam a h1 tag"),
         React.createElement("h2",{},"Iam a h2  tag") ]  
    )
);


console.log(parent);  //ob ject

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

 