import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Test from "./pages/Test";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="App bg-white">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
