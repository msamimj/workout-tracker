import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Day from './components/day';
import { useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Day/>}/>
  )
)

function App() {

  const date = useState<Date>(new Date())

  return (
    <div id="container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
