document.addEventListener("DOMContentLoaded", function() {
    // Show popup when page loads
    document.getElementById("popup").style.display = "flex";

    // Close popup when clicking the close button
    document.querySelector(".close-btn").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });

    // Close popup when clicking outside the image
    document.getElementById("popup").addEventListener("click", function(event) {
        if (event.target === this) {
            this.style.display = "none";
        }
    });
});
