import React from "react";

const landing = (props) => {
  return (
       
    <header id="main-header" className={props.colorName}>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>
                    <i className="fas fa-home"></i>{props.type}</h1>
            </div>
        </div>
    </div>
    </header>
  );
};

export default landing;
