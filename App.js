import React from "react";
import ReactDOM from "react-dom/client";

//JSX - is not HTML in JS  - HTML-like or XML-like syntax  
// JSX (transpiled before ut reaches the JS) - PARCEL - Babel  
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)  

/*
//React Element  
const heading = (<h1 className="head">
    Namaste React using JSX!!
    </h1>);
*/



const elem = <span>React Element</span>;

const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX!!
    </h1>
);

const HeadingComponent = () => (
    <div id ="container">
        {title}
        <h1 className="heading"> Namaste React Functional Component!!</h1>
    </div>
);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);