import React from 'react'
import Homepage from './Homepage'
import Layout from './Components/Layout/Layout'
import Resume from './Resume'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <Layout>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/resume' element={<Resume/>}/>
    </Routes>
</Layout>
  )
}

export default App