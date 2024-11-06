// import PropTypes from 'prop-types'
import React from "react";

export const Otro = ({ titulo = 'messi' }) => {
  // console.log(props);

  return (
    <React.Fragment>
      <h1>{titulo}</h1>
      {/* <p>{props.titulo}</p> */}
    </React.Fragment>
  );
};

// Otro.propTypes = {
//   titulo: PropTypes.string.isRequired
// }


// rafc
// react arrow function compont
// export const Otro = () => {
//   return (
//     <div>Otro</div>
//   )
// }

// react arrow function export component
// const Otro = () => {
//   return (
//     <div>Otro</div>
//   )
// }

// export default Otro
