import { useState } from "react"

export const GridLights = () => {
   const grid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
   ];

   const [stack, setStack] = useState<number[]>([]);

   const activateCell = (index: number) => {
      const newStack = [...stack, index];
      setStack(newStack);
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
