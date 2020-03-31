import React from "react";

//FOOTER -->

const footer = props => {
  const date = new Date();
  const year = date.getFullYear();  
  return (
      
    <footer id="main-footer" className="bg-dark text-white mt-5 p-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="lead text-center">
              Copyright &copy;
              {props.appName}&nbsp;
              <span>{year}</span>            
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default footer;
