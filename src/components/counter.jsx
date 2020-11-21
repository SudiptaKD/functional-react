const Counter = (props) => {

    const format= () => {
        return props.counter.value === 0? "Zero": props.counter.value;
    }

    return (
        <div className="row">
            <div className="col-1">
                <span  className={ getClasses(props.counter.value) }>{ format() }</span>
            </div>
            <div className="col">
                <button onClick={ () => props.onIncrement(props.counter) }
                    className="btn btn-secondary btn-sm " >+</button>  
                <button  onClick={ () => props.onDecrement(props.counter)}
                    disabled= {props.counter.value === 0}
                    className="btn btn-secondary btn-sm m-2" > -</button>
                <button onClick={ () => props.onDelete (props.counter.id)}
                    className="btn btn-danger btn-sm " >x</button>  
            </div>                  
        </div>
    )
    
}

export default Counter
function getClasses(value) {
    let classes = " badge mt-3 ml-4 badge-";
    classes += (value === 0) ? "warning" : "primary";
    return classes;
}

