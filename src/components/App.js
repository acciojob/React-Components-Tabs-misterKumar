import React from 'react';
import Tabs from './Tabs';
import { useState } from 'react';

function App() {
  const [tabNames , setTabNames] = useState(["Home", "About","Features"])
  return (
    <div className='app'>
         <div >
          <Tabs tabNames={tabNames} />
          <div className='viewport'> Pages Go Here</div>
         </div>

    </div>
  )
}

export default App