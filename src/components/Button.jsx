// AQUÍ Será el botón que hará que cambie el estado de light a dark
// este botón estará en todas las páginas.

import { useTheme } from "../themes/ThemeContext.jsx";

const Button = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`mt-8 p-3 rounded-lg text-lg font-semibold transition-all duration-300 
                ${theme === "light" ? "bg-gray-200 text-black" : "bg-black text-white border-white"}`}
        >
        {theme === "light" ? " Modo Oscuro 🌙 " : " Modo Claro ☀️ "}
        </button>
    );
};

export default Button;
