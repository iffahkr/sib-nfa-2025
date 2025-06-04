import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import CreateBook from "./pages/admin/books/create";
import AdminBooks from "./pages/admin/books";
import CreateAuthor from "./pages/admin/authors/create";
import AdminAuthors from "./pages/admin/authors";
import CreateGenre from "./pages/admin/genres/create";
import AdminGenres from "./pages/admin/genres";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          {/* Public */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
          </Route>

          {/* Auth */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<CreateBook />} />
            </Route>

            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<CreateAuthor />} />
            </Route>

            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<CreateGenre />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
