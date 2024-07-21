import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./App.css";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout(null));
        }
      })
      .finally(() => setloading(true));
  }, []);

  return (
    loading && (
      <>
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          Hello World
        </div>
      </>
    )
  );
}

export default App;
