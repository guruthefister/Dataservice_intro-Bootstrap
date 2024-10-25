import { createBrowserRouter, RouterProvider } from "react-router-dom"

import About from "./pages/About"
import Contact from "./pages/Contact"
import News from "./pages/News"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"
import Layout from "./layout/Layout"

import 'bootstrap/dist/js/bootstrap.bundle'
import './App.scss'

function App() {

  const router = createBrowserRouter (
    [
      {
        path: "/", element: <Layout />, children: [
          {
            index: true, element: <Home />
          },
          {
            path: "/about", element: <About />
          },
          {
            path: "/news", element: <News />
          },
          {
            path: "/contact", element: <Contact />
          },
          {
            path: "*", element: <Page404 />
          }
        ]
      }
    ]
  )

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
