import './App.css';
import { connect } from 'react-redux';
import {incrementCount,decrementCount,reset} from './actions/CounterActions'

function App(props) {
  const incrementCountfn = (e) =>{
    console.log("increment",props);
    e.preventDefault()
    props.incrementCount()
  }
  const decrementCountfn = (e) =>{
    console.log("decrement");
    e.preventDefault()
    props.decrementCount()
  }
  const resetfn = (e) =>{
    console.log("Reset");
    e.preventDefault()
    props.reset()
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.counts}</h1>
        <button onClick={incrementCountfn}>Add</button>
        <button onClick={decrementCountfn}>Dec</button>
        <button onClick={resetfn}>Reset</button>
      </header>
    </div>
  );
}
const mapStateToProps=(state)=>({
  counts: state.counter
})
export default connect(mapStateToProps,{incrementCount,decrementCount,reset})(App);
