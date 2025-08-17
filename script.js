const dateDiv = document.getElementById("current-date");
if (dateDiv) {
    const today = new Date();
    dateDiv.textContent = "Last updated: " + today.toDateString();
    console.log("Page loaded successfully.");
}