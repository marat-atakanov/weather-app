const mobileProfilePictureBtn = document.querySelector(
  "#mobileProfilePictureBtn"
);
const mobileDeviceMenu = document.querySelector("#mobileDeviceMenu");
const closeMenuBtn = document.querySelector("#closeMenuBtn");
const htmlBody = document.querySelector("body");
let isMenuOpen = false;

export const openMenu = () => {
  mobileDeviceMenu.style.transform = "translateX(0)";
  htmlBody.style.overflow = "hidden";
  isMenuOpen = true;
};

export const closeMenu = () => {
  mobileDeviceMenu.style.transform = "translateX(100%)";
  htmlBody.style.overflow = "auto";
  isMenuOpen = false;

};

closeMenuBtn.onclick = () => {
    closeMenu()
}

export const mobileDeviceMenuFunc = () => {
  mobileProfilePictureBtn.onclick = () => {
    if (isMenuOpen) closeMenu();
    else openMenu();
  };
};
