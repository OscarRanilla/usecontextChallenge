import { useTheme } from "../themes/ThemeContext.jsx";
import Button from "../components/Button";

const MyJob = () => {
    const { theme } = useTheme();

    return (
        <div className={`page ${theme}`}>
            <h1>Esta es la página MyJob</h1>
            <Button />
        </div>
    );
};

export default MyJob;
