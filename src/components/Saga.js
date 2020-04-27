import React from "react";

const Saga = (props) => {
  const generator =sayhi();
  //const iterator =generator.iterator;
//   for (const iterator of generator) 
//   console.log(iterator);  



  return (
    <div>
      <h1>{generator.next().value}</h1>
      <h2>{generator.next().value}</h2>
      <h3>{generator.next('punk4').value}</h3>
      <h4>{generator.next().value}</h4>

    </div>
  );
};

function* sayhi(){
    yield 'punk'
    yield 'punk2'
    const temp = yield 'day'
    return temp
}
export default Saga;