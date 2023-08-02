import { Route, Routes } from "react-router-dom"
import Login from "./page/client/authen/login"
import Register from "./page/client/authen/register"
import ListPoduct from "./page/client/products/ListPoduct"

function App() {


  return (
    <>
      <Routes>
        <Route path='/'>
            <Route index element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="products" element={<ListPoduct/>} />
        </Route>
        <Route path='admin'>

        </Route>
      </Routes>
    </>
  )
}

export default App
