export const GridLights = () => {
   const grid = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
   ];

   return (
      <div className="container">
         <h1 className="headline">GridLights</h1>
         <div className="grid">
            {grid.flat().map((cell, index) => {
               return cell ?
                  <button
                     key={index}
                     className='cell'
                  /> : <span key={index} />
            })}
         </div>
      </div >
   )
}
