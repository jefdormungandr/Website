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
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons and content
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add 'active' class to the clicked button and its content
      button.classList.add('active');
      const targetTabId = button.dataset.tab;
      document.getElementById(targetTabId).classList.add('active');
    });
  });
});
