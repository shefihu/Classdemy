import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

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
        <Route
          path="test"
          element={<Test coundownTimestampMs={1652990998} />}
        />
        <Route path="test2" element={<Test2 />} />
      </Routes>
    </div>
  );
}

export default App;
