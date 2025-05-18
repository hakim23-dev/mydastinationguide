import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Review from "./pages/Review"
import Dashboard from "./pages/Dashboard"


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="review" element={<Review/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </>
    )
  )

  return (
    <RouterProvider router={router}  />
  )
}

export default App
