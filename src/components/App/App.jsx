import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/index";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem("is_authenticated")));
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
