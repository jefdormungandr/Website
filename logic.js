document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("colortoggle");
 
    // Load mode from localStorage if it exists
    if (localStorage.getItem("darkmode") === "true") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }
 
    toggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkmode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkmode", "false");
        }
    });
});