import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./components/common/ProtectedRoute";
const GetProducts = lazy(() => import("./pages/GetProducts"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/allProducts"
            element={
              <Suspense fallback={<p>Loading products...</p>}>
                <ProtectedRoute element={<GetProducts />} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
