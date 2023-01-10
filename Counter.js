import { useSelector, useDispatch} from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch(); /* dispatch here is a function that will dispatch an action against our Redux store */
  const counter = useSelector(state => state.counter); /* The function in useSelector determines which piece of data we want to extract from our store */
  
  const incrementHandler = () => {
    dispatch({  /* dispatch takes an action which is an object with a type, which is an identifier from the redux store reducer */
      type: 'increment'
    });
  }

  const decrementHandler = () => {
    dispatch({
      type: 'decrement'
    })
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
