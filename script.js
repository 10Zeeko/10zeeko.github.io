function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function changeInfo(button){
    var mainContent = document.getElementById("main-content");
    var animation = document.querySelector(".main_content");
    //Remove fade class
    animation.classList.remove("fadeOut");
    animation.classList.remove("fadeIn");
    animation.classList.add("fadeOut");
    loadHTML = "content/"
    switch (button){
        case 0:
            loadHTML += "home.html";
            break;
        case 1:
            loadHTML += "videogames.html";
            break;
        case 2:
            loadHTML += "projects.html";
            break;
        case 3:
            loadHTML += "about_me.html";
            break;
    }
    delay(500).then(() => mainContent.setAttribute("data", loadHTML));
    delay(500).then(() => animation.classList.add("fadeIn"));
}

