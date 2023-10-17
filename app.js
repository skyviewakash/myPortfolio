(function () {
    const menuButtons = [...document.querySelectorAll(".control")];

    function setActiveSection() {
        const urlHash = window.location.hash;
        const homeButton = document.querySelector("[data-id='home']");
        menuButtons.forEach(button => {
            button.classList.remove("active-btn");
        });
        document.querySelectorAll(".container").forEach(section => {
            section.classList.remove("active");
        });

        if (urlHash) {
            const activeButton = document.querySelector(`[data-id="${urlHash.substr(1)}"]`);
            const activeSection = document.getElementById(urlHash.substr(1));

            if (activeButton && activeSection) {
                activeButton.classList.add("active-btn");
                activeSection.classList.add("active");
            } else {
                homeButton.classList.add("active-btn");
                document.getElementById("home").classList.add("active");
            }
        } else {
            homeButton.classList.add("active-btn");
            document.getElementById("home").classList.add("active");
        }
    }

    menuButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const urlHash = "#" + button.dataset.id;
            if (urlHash === "#home") {
                history.pushState("", document.title, window.location.pathname);
            } else {
                window.location.hash = urlHash;
            }
            setActiveSection();
        });
    });

    window.addEventListener("hashchange", setActiveSection);
    window.addEventListener("load", setActiveSection);
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
