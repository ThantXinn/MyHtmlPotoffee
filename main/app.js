const inputs = document.querySelectorAll(".field");
const hambugerMenuContainer = document.querySelector(".humburgerMenuContainer");
const navListContainer = document.querySelector(".navlist-container");
const hambugerMenuContainerLine1 = document.querySelector(".line1");
const hambugerMenuContainerLine2 = document.querySelector(".line2");
const hambugerMenuContainerLine3 = document.querySelector(".line3");
humburgerMenuContainer.addEventListener("click", () => {
    if (hambugerMenuContainer.classList.contains("isOpened")) {
        hambugerMenuContainer.classList.remove("isOpened");
        hambugerMenuContainerLine2.classList.remove("hideLine2");
        hambugerMenuContainerLine1.classList.remove("rotateClockwise");
        hambugerMenuContainerLine3.classList.remove("rotateAntiClockwise");
        navListContainer.classList.remove("activate");
        navListContainer.classList.add("overlay");
        document.body.style.overflow = "visible";
    } else {
        hambugerMenuContainer.classList.add("isOpened");
        hambugerMenuContainerLine2.classList.add("hideLine2");
        hambugerMenuContainerLine1.classList.add("rotateClockwise");
        hambugerMenuContainerLine3.classList.add("rotateAntiClockwise");
        navListContainer.classList.add("activate");
        navListContainer.classList.remove("overlay");
        document.body.style.overflow = "hidden";
    }
})

inputs.forEach((inpts) => {
    inpts.addEventListener("focus", () => {
        inpts.parentNode.classList.add("focus");
        inpts.parentNode.classList.add("not-empty");
    });
    inpts.addEventListener("blur", () => {
        if (inpts.value == "")
        {
            inpts.parentNode.classList.remove("not-empty");
            }
        inpts.parentNode.classList.remove("focus");
    });
});