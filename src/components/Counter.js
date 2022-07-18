import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

  
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const ifToggle = useSelector((state) => state.counter.showCounter);

 const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());

  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }


const HandleIncrease = () => {
  dispatch(counterActions.increase(5)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
 { ifToggle && <>   <div className={classes.value}> {counter}</div>
      <div>
        <button onClick=  {handleIncrement}>Increment</button>
        <button onClick={HandleIncrease}> Increase </button>
       
        <button onClick={handleDecrement}>Decrement</button>
      </div> </> }
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


