(function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");

        // Recuperar tema guardado
        const savedTheme = localStorage.getItem("theme");

        // Aplicar tema guardado o usar light por defecto
        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
            themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggle.textContent = "🌙";
        }

        themeToggle.addEventListener("click", () => {
            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            // Aplicar nuevo tema
            document.documentElement.setAttribute("data-theme", newTheme);

            // Guardar en localStorage
            localStorage.setItem("theme", newTheme);

            // Actualizar icono
            themeToggle.textContent =
                newTheme === "dark" ? "☀️" : "🌙";
        });
    });
})();
