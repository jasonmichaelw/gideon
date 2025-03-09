document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".openBtn").forEach(button => {
        button.addEventListener("click", () => {
            const jobDetails = button.closest(".job").querySelector("p, ul");
            jobDetails.style.display = jobDetails.style.display === "none" ? "block" : "none";
            button.classList.toggle("fa-plus");
            button.classList.toggle("fa-minus");
        });
    });
});
