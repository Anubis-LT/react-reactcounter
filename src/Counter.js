import { useState } from "react";

const Counter = () => {
   const [counter, setCounter] = useState(0);
   return (
      <div className="container">
         <div className="content">
            <button
               onClick={() => {
                  // on appelle setCounter pour mettre à jour le state
                  setCounter(counter - 1);
               }}
            >
               <i className="fas fa-minus"></i>
            </button>

            <div className="content1">
               <div className="counter">{counter > -1 && counter}</div>

               <button
                  onClick={() => {
                     // on appelle setCounter pour mettre à jour le state
                     setCounter(counter - counter);
                  }}
               >
                  <div className="reset">Reset</div>
               </button>
            </div>

            <button
               onClick={() => {
                  // on appelle setCounter pour mettre à jour le state
                  setCounter(counter + 1);
               }}
            >
               <i className="fas fa-plus"></i>
            </button>
         </div>
      </div>
   );
};
export default Counter;
