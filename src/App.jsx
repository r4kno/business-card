import React, {useState} from 'react'
import Card from './card';
function App() {
  const [a, b] = useState(true);
  return (
   <>
    <Card />
   </>
  )
}
export default App