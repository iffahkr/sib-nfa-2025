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
import EditBook from "./pages/admin/books/edit";
import EditAuthor from "./pages/admin/authors/edit";
import EditGenre from "./pages/admin/genres/edit";
import ShowBook from "./pages/public/books/show";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Route for public */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books">
              <Route index element={<Books />} />
              <Route path="show/:id" element={<ShowBook />} />
            </Route>
          </Route>

          {/* Route for auth */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Route for admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<CreateBook />} />
              <Route path="edit/:id" element={<EditBook />} />
            </Route>

            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<CreateAuthor />} />
              <Route path="edit/:id" element={<EditAuthor />} />
            </Route>

            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<CreateGenre />} />
              <Route path="edit/:id" element={<EditGenre />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
