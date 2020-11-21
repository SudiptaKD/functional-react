import Counter from './counter'

const Counters = (props) => {

    // argument destucturing . for this we can remove any props. from the code
    //const { onDecrement, onDelete, onIncrement, onReset} = props;

    return (
        <div>
            <button onClick={props.onReset} className="btn btn-primary btn-lg m-2">Reset</button>
            {   props.counters.map(counter=> 
                <>  <Counter key={counter.id} counter={counter} 
                         onDelete={props.onDelete}  onIncrement={props.onIncrement} onDecrement={props.onDecrement}>
                    </Counter>
                 </>
               )}
        </div>
    )
}

export default Counters
