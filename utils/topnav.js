function setActiveLink() {
    const currentPath = window.location.pathname;

    document.querySelectorAll(".topnav a").forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}


function toggleMenu() {
    var x = document.getElementById("topnav-id");

    if (x.className === "topnav") {
        x.className += " responsive";
    } 

    else {
        x.className = "topnav";
    }
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
        });
        
});
    