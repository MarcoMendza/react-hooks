import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, restart } = useCounter();

  return (
    <>
        <h1>Counter with custom hook: { counter }</h1>
        <hr/>

        <button className="btn btn-primary" onClick={ () => {
            increment(2)
        }}>+1</button>
        <button className="btn btn-primary" onClick={ restart }>Reset</button>
        <button className="btn btn-primary" onClick={() => {
            decrement(2)
        }}>-1</button>

    </>
  )
}
