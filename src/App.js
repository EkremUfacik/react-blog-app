import AuthProvider from "./contexts/AuthProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppRouter />
          <ToastContainer />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
