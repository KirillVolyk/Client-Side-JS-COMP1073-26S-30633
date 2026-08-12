// My student name and id
document.getElementById("studentInfo").textContent = "Kirill.V - 200638948";

// API key
const accessKey = "";

// constant elmeents variables
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
})