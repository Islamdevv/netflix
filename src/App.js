import "./App.css";
import MyRoutes from "./MyRoutes";
import AuthContext from "./context/AuthContext";
import MoviesContext from "./context/MoviesContext";
function App() {
  return (
    <div>
      <AuthContext>
        <MoviesContext>
          <MyRoutes />
        </MoviesContext>
      </AuthContext>
    </div>
  );
}

export default App;
