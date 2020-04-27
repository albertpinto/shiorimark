import React, {Component} from "react";
// import axios from 'axios';

// class Header extends Component {

//   componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/users')
//           .then (response =>{
//             console.log(response);
//           })
//   }
//   render(){
//     return(
//       <header id="main-header" className={this.props.colorName}>
//           <div className="container">
//               <div className="row">
//                   <div className="col-md-6">
//                       <h1>
//                           <i className="fas fa-home"></i>{this.props.type}</h1>
//                   </div>
//               </div>
//           </div>
//       </header>
//     );
//   }
// }
// export default Header;

const header = props => {
  return (
    <header id="main-header" className={props.colorName}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <i className={props.category}></i>
              {props.type}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
