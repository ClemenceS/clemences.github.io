function setActiveLink() {
    const currentPath = window.location.pathname;

    document.querySelectorAll(".topnav a").forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {

    const url = "/utils/topnav.html"
    const myRequest = new Request(url);
    const topnav = document.getElementById("topnav")

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
            // window.location = "pages/404.html";
        });
        
});
    