import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Contacts from "./pages/contact";
import Teams from "./pages/team";
import LoginForm from "./components/shared/LoginForm";
import Register from "./components/shared/RegisterForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="teams" element={<Teams />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
