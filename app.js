(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Your form submission logic here
        // For demonstration purposes, let's just show the pop-up immediately
        popup.style.display = 'block';
    });
});
