import React, {useState} from 'react';

const Counter = (props) => {
    //State was handled here . this was not included in final code
    const [count, setCount] = useState(props.counter.value);

    const format= () => {
        return count === 0? "Zero": count;
    }
    
    function increment() {
        setCount( count+1)
    }
    function decrement () {
        setCount( count-1)
    }

    return (
        <div>
            <span  className={getClasses(count)}>{format()}</span>
            <button onClick={increment }
                className="btn btn-secondary btn-sm m-1" > Increment</button>  
            <button onClick={decrement}
                className="btn btn-secondary btn-sm m-1" > Decrement</button>
                <button onClick={() => props.onDelete (props.counter.id)}
                className="btn btn-danger btn-sm m-2" >Handling delete</button>            
        </div>
    )
    
}

export default Counter
function getClasses(count) {
    let classes = "badge m-2 badge-";
    classes += (count === 0) ? "warning" : "primary";
    return classes;
}

