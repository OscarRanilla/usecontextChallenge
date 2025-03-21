import { useTheme } from "../themes/ThemeContext.jsx";
import Button from "../components/Button";

const Home = () => {
    const { theme } = useTheme();

    return (
        <div className={`page ${theme}`}>
            <h1>Esta es la página Home</h1>
            <Button />
        </div>
    );
};

export default Home;
