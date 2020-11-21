import React, { useState } from 'react'
import Counter from './counter'

const Counters = () => {
     //State was handled here . this was not included in final code
    const [counters, setCounters] = useState([
        {id:1, value:5},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]);

    function deleteCounter(id) {
        const Counter = counters.filter((counter) => counter !== id);
        setCounters(Counter);
     }

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
        <div>
            <button onClick={reset} className="btn btn-primary btn-lg m-2">Reset</button>
            {counters.map(counter=> 
           <><Counter key={counter.id} counter={counter} 
                onDelete={handleDelete}  onIncrement={increment} onDecrement={decrement}>
            </Counter>
               <button onClick={() => deleteCounter(counter)}
                  type="button"  className="btn btn-danger btn-sm m-2">Delete from Parent Component</button></>
               )}
        </div>
    )
}

export default Counters
