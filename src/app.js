import React from 'react';
import ToDo from './components/calculator/calculator.js';
import SettingsProvider from './context/context.js'


function App () {
  return (
    <>
      <ToDo />
    </>  
  )
}

export default App;

// import React from 'react';
// import Calories from './components/calculator/calculator.js'
// import SettingsProvider from './context/context.js';

// function App() {
//   return (
//     <SettingsProvider>

//       <Calories />
      
//     </SettingsProvider>
//   )
// }

// export default App;