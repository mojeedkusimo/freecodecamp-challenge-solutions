// Option 1
let projectImg = document.querySelectorAll(".project-img");
let projectPara = document.querySelectorAll(".project-p");
let projectSpan = document.querySelectorAll(".project-span");
let socialMediaLinks = document.querySelectorAll("li.social-media-links");
let moreProjects = document.querySelector("#more");
let showAll = document.querySelector("#show-all a");


for (let i = 0; i < projectImg.length; i++) {
    projectImg[i].addEventListener("mouseover", function() {
        projectSpan[i].style.visibility = "visible";
        projectSpan[i].style.visibility = "visible";
    });

    projectImg[i].addEventListener("mouseout", function() {
        projectSpan[i].style.visibility = "hidden";
        projectSpan[i].style.visibility = "hidden";
    });
}

for (let i = 0; i < projectImg.length; i++) {
    projectPara[i].addEventListener("mouseover", function() {
        projectSpan[i].style.visibility = "visible";
        projectSpan[i].style.visibility = "visible";
    });

    projectPara[i].addEventListener("mouseout", function() {
        projectSpan[i].style.visibility = "hidden";
        projectSpan[i].style.visibility = "hidden";
    });
}

showAll.addEventListener("click", function(e) {
    e.preventDefault();
    if (showAll.textContent === "Show more") {
        moreProjects.style.display = "flex";
        showAll.textContent = "Hide Projects";
    } else {
        moreProjects.style.display = "none";
        showAll.textContent = "Show more";
    }
});