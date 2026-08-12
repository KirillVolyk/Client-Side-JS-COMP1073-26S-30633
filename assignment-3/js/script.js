// My student name and id
document.getElementById("studentInfo").textContent = "Kirill.V - 200638948";

// API key
const accessKey = "WKUM7_tKhbZdLrBKivA3eCrdocYbfTqoSmaVEZJ9awc";

// constant elmeents variables
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    // trim white spaces for better searches
    const query = searchInput.value.trim();
    // if search is empty give error
    if (!query) {
        return alert("Please enter a search term.");
    } 

    // fetch the image from Unsplash API (url)
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const photo = data.results[0];

            //  if no image found, display error message
            if (!photo) {
                resultDiv.innerHTML = "<p>No images found.</p>";
                return;
            }else{

            // Display the image and its details(author, description)
            resultDiv.innerHTML = `
                <div class="card">
                    <img src="${photo.urls.small}" alt="${photo.alt_description}">
                    <h3>${photo.alt_description || "Untitled Image"}</h3>
                    <p>By: ${photo.user.name}</p>
                </div>
            `;
            }
        })
        // handle errors(basic) (for some reason api does this error, instead of cant find an image, need to explore docs more)
        .catch(error => {
            console.error(error);
            resultDiv.innerHTML = "<p>Error loading image.</p>";
        });
});