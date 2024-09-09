document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeTextButton");
    const dynamicText = document.getElementById("dynamicText");

    changeTextButton.addEventListener("click", function () {
        dynamicText.textContent = "O texto foi alterado dinamicamente!";
    });
});
