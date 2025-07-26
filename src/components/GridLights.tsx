import { useState } from "react"

export const GridLights = () => {
   const grid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
   ];

   const [stack, setStack] = useState<number[]>([]);
   const [isDeactivating, setIsDeactivating] = useState<boolean>(false);

   const activateCell = (index: number) => {
      const newStack = [...stack, index]
      setStack(newStack);
      if (newStack.length === grid.flat().filter(val => val !== 0).length) {
         setIsDeactivating(true);
         deactivateCell();
      }
   }

   const deactivateCell = () => {
      const interval = setInterval(() => {
         setStack(stack => {
            const newStack = [...stack];
            newStack.pop();
            if (newStack.length === 0) {
               setIsDeactivating(false);
               clearInterval(interval);
            }
            return newStack;
         });
      }, 500);
   }

   return (
      <div className="container">
         <h1 className="headline">GridLights</h1>
         <div className="grid">
            {grid.flat().map((cell, index) => {
               return cell ?
                  <button
                     key={index}
                     onClick={() => activateCell(index)}
                     className={stack.includes(index) ? 'cell-activated' : 'cell'}
                  /> : <span key={index} />
            })}
         </div>
      </div >
   )
}
