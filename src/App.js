import './App.css';
import Counters  from './components/counters';
import Navbar  from './components/navbar';
import React, {useState} from 'react'

function App() {

  const [counters, setCounters] = useState([
    {id:1, value:5},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0}
]);
   
 function handleDelete (counterId){
  const Counter = counters.filter((counter) => counter.id !== counterId);
  setCounters(Counter);
 }
 function increment (counter) {
    const Counters = counters
    const index = counters.indexOf(counter)
    Counters[index] = counter
    Counters[index].value++
    //setCounters(Counters)
    setCounters([...Counters] );
 }
 function decrement (counter) {
    const Counters = counters
    const index = counters.indexOf(counter)
    Counters[index] = counter
    Counters[index].value--
    //setCounters(Counters)
    setCounters([...Counters] );
}

 function reset () {
     const Counter = counters.map(counter => {
         counter.value = 0;
         return counter;
     })
     setCounters(Counter)
 }

  return ( 
      <React.Fragment>
        <Navbar totalCounter={counters.filter(c => c.value > 0 ).length}/>
        <main className="container">
          <Counters counters={counters} onReset={reset} onDelete={handleDelete}  onIncrement={increment} onDecrement={decrement} />
        </main>
       </React.Fragment> 
  );
}

export default App;
