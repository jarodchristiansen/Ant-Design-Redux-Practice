import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';




const Second = () => {
  const counter = useSelector((state) => state.count.count)
  const dispatch = useDispatch();

  return (
      <div>
        <h2>Counter</h2>
        {counter}
          <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
          <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
          <button onClick={() => dispatch({type: 'CLEAR'})}>clear</button>
      </div>
    )
};

export default Second;

// class Second extends React.Component {


//   increment = () => {
//     this.props.dispatch({type: 'INCREMENT'})
//   }

//   decrement = () => {
//     this.props.dispatch({type: 'DECREMENT'})
//   }
//   zeroOut = () => {
//     this.props.dispatch({type: 'CLEAR'})
//   }

//   render() {
//     return (
      // <div>
      //   <h2>Counter</h2>
      //   <span>{this.props.count.count}</span>
      //     <button onClick={this.decrement}>-</button>
      //     <button onClick={this.increment}>+</button>
      //     <button onClick={this.zeroOut}>clear</button>
      // </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//     return {
//         count: state.count
//     }
// }

// export default connect(mapStateToProps)(Second);