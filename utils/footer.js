document.addEventListener("DOMContentLoaded", function() {

    const url = "/utils/footer.html"
    const myRequest = new Request(url);
    const topnav = document.getElementById("footer")

    fetch(myRequest)

        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })

        .then((text) => {
            topnav.innerHTML = text;
            setActiveLink();
        })

        .catch((error) => {
            topnav.innerText = `Error: ${error.message}`;
        });
        
});