import { useTheme } from "../themes/ThemeContext.jsx";
import Button from "../components/Button";

const Profile = () => {
    const { theme } = useTheme();

    return (
        <div className={`page ${theme}`}>
            <h1>Esta es la página Profile</h1>
            <Button />
        </div>
    );
};

export default Profile;
