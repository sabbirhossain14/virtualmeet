import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from './Home';
import CallRoom from './pages/callroom/CallRoom';


function App() {



  return (
    <>
       <Routes>
        <Route>
          <Route index element={<Home />} />
          {/* <Route path ="callroom" element={<CallRoom />} /> */}
          <Route path ="/callroom/:roomCode" element={<CallRoom />} />
        </Route>
       
      </Routes>
    </>
  )
}

export default App
