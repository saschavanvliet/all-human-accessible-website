// script.js
document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Verberg alle andere accordeons
            document.querySelectorAll(".accordion-content").forEach(c => {
                if (c !== content) {
                    c.style.display = "none";
                }
            });

            // Toon/verberg de huidige accordeon
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});