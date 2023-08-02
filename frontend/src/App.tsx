import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./page/client/authen/login";
import Register from "./page/client/authen/register";
import ListPoduct from "./page/client/products/ListPoduct";
import Dashboard from "./page/admin/Dashboard";
import AdminLayout from "./page/layouts/AdminLayout";
import ProductList from "./page/admin/product/ProductList";
import ProductAdd from "./page/admin/product/ProductAdd";
import ProductUpdate from "./page/admin/product/ProductUpdate";
import CategoryList from "./page/admin/categories/CategoryList";
import CategoryAdd from "./page/admin/categories/CategoryAdd";
import CategoryEdit from "./page/admin/categories/CategoryEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<ListPoduct />} />
        </Route>
        <Route path="admin" element={<AdminLayout/> } >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path="edit/:id" element={<ProductUpdate />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryList />} />
            <Route path="add" element={<CategoryAdd />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
