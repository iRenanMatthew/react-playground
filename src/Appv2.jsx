import { useState } from 'react';
import './App.css';


const AddCounter = () => {
  const [counter, setCounter] = useState(0);
  setTimeout (() => {
    setCounter(counter + 1)
  }, 1000)

  console.log('rendering', counter)

  return(
    <>
    <p>{counter}</p>
    </>
  )
}


export default AddCounter