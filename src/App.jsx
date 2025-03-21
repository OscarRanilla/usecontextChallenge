import './App.css';
import { ThemeProvider, useTheme } from "./themes/ThemeContext.jsx";
import RoutesApp from "./routes/RoutesApp";

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <RoutesApp />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

//! EL ThemeProvider 
//* Envuelve la app para proporcionar el contexto a todos
//* los componentes