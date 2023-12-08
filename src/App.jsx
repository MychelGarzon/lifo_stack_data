/* 
- I installed the rooks library using npm install rooks.
- In the function App, I used the useStackState hook to manage a stack of numbers.
- Clicking "Push" adds a random number to the stack.
- Clicking "Pop" removes the last number from the stack.

*/

import { useRef } from "react";
import { useStackState } from "rooks";


const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

function App() {
  const numberToBeAdded = useRef(getRandomNumber(1, 100));
  const [list, { push, pop, peek }, numberReverseOrder] = useStackState([12, 6, 24]);


  function addToStack() {
    let newNumber;
    do {
      newNumber = getRandomNumber(1, 100);
    } while (list.includes(newNumber));

    numberToBeAdded.current = newNumber;
    push(newNumber);
  }

  return (
    <>
      <div className="stack_container">
        <h1>Last In First Out </h1>
        {numberReverseOrder.map((number) => (
          <div className="stack-item" key={number}>
            {number}

          </div>
        ))}
      </div >
      <button onClick={addToStack}> PUSH </button>
      <button onClick={pop}> POP </button>
      <p>Last number added {peek()}</p>

    </>
  )
}
export default App
