const featuresAndCompanyContainers = document.querySelectorAll(".features-container , .company-container");
const innerContainers = document.querySelectorAll(".inner-features-container , .inner-company-container");

const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const sideNavBar = document.querySelector(".side-bar-nav");

for(let i=0;i<featuresAndCompanyContainers.length;i++){
    featuresAndCompanyContainers[i].addEventListener("click",()=>{
        const arrowImage = featuresAndCompanyContainers[i].querySelector("img");

        if (arrowImage.src.includes("icon-arrow-down.svg")) {
            arrowImage.src = "images/icon-arrow-up.svg";
        } 
        else {
            arrowImage.src = "images/icon-arrow-down.svg";
        }
        innerContainers[i].classList.toggle("hidden");
    });
}

openMenuButton.addEventListener("click",()=>{
    sideNavBar.classList.add("active");
});

closeMenuButton.addEventListener("click",()=>{
    sideNavBar.classList.remove("active");
})