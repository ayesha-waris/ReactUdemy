import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Component, useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
 const counter =  useSelector(state => state.counter);
  const toggleCounterHandler = () => {

  };

  const handleIncrement = () => {
    dispatch({type:'increment'});

  }
  const handleDecrement = () => {
    dispatch({type:'decrement'});
  }
  const changeHandler= (event) => {
    setValue(event.target.value);
  }

const HandleIncrease = () => {
  dispatch({type:'increase', value: 5})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter}</div>
      <div>
        <button onClick=  {handleIncrement}>Increment</button>
        <button onClick={HandleIncrease}> Increase </button>
        {/* <input onSelect={HandleIncrease} type="number" min="0" max="50" step="1"  onChange={changeHandler} value={value}/> */}
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};



export default Counter;


// class Counter extends Component {
//   toggleCounterHandler = () => {};

//   handleIncrement = () => {
//     this.props.increment();
//   };

//   handleDecrement = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}> {this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToprops = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement:() => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToprops)(Counter);


