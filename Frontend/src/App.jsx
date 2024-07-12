import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks'
import EditbBook from './Pages/EditBook'
import DeleteBook from './Pages/DeleteBook'
import ShowBook from './Pages/ShowBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditbBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App
