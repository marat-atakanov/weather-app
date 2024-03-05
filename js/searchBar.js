import { fetchDataChangeInfo } from "./app.js";
import { closeMenu } from "./mobileDeviceMenu.js";

export const searchBarInput = document.querySelector("#searchBarInput");
export let isSearchBarOpen = false;

const searchBarToggle = document.querySelector("#searchBarToggle");
const searchBarDiv = document.querySelector("#searchBarDiv");
const searchArrow = document.querySelector("#searchArrow");
const searchArrowMobile = document.querySelector("#searchArrowMobile");
const closeSearchBarBtn = document.querySelector("#closeSearchBarBtn");
const addFavoriteBtn = document.querySelector("#addFavoriteBtn");
const favoritesDiv = document.querySelector("#favorites");

export const openSearchBar = () => {
  searchArrow.style.transform = "scaleX(-100%)";
  searchArrowMobile.style.transform = "scaleY(-100%)";
  searchBarDiv.style.transform = "translateX(0)";
  searchBarInput.focus();
  closeMenu()
};

export const closeSearchBar = () => {
  searchArrow.style.transform = "scaleX(100%)";
  searchArrowMobile.style.transform = "scaleY(100%)";
  searchBarDiv.style.transform = "translateX(-100%)";
  searchBarInput.value = "";
  searchBarInput.blur();
  isSearchBarOpen = false;
};

closeSearchBarBtn.onclick = () => {
  closeSearchBar();
};

export const openCloseSearchBarOnBtn = () => {
  searchBarToggle.onclick = () => {
    isSearchBarOpen = !isSearchBarOpen;
    if (isSearchBarOpen) openSearchBar();
    else closeSearchBar();
  };
};

export const closeSearchBarOnScrollDown = () => {
  let prevScrollPoint = window.scrollY;
  window.onscroll = (e) => {
    const currentScrollPoint = window.scrollY;
    if (prevScrollPoint < currentScrollPoint) {
      closeSearchBar();
      prevScrollPoint = currentScrollPoint;
    } else {
      prevScrollPoint = currentScrollPoint;
    }
  };
};

export const searchBarFunc = () => {
  closeSearchBarOnScrollDown();
  openCloseSearchBarOnBtn();
};

const showFavorites = () => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favoritesDiv.innerHTML = "";
  favorites.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("searchBar-favorites-item");

    const btnsDiv = document.createElement("div");
    btnsDiv.classList.add("searchBar-favorites-item-btns");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("searchBar-favorites-item-btns-deleteBtn");
    deleteBtn.innerText = "delete";
    deleteBtn.onclick = () => {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      div.remove();
    };

    const findBtn = document.createElement("button");
    findBtn.classList.add("searchBar-favorites-item-btns-findBtn");
    findBtn.innerText = "find";
    findBtn.onclick = () => {
      fetchDataChangeInfo(item);
      closeSearchBar();
    };

    const p = document.createElement("p");
    p.classList.add("searchBar-favorites-item-name");
    p.innerText = item.length > 30 ? item.slice(0, 30) + "..." : item;

    btnsDiv.append(findBtn, deleteBtn);
    div.append(p, btnsDiv);
    favoritesDiv.prepend(div);
  });
};

showFavorites();

addFavoriteBtn.onclick = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const input = searchBarInput.value
  if (input !== "") {
    if (favorites.includes(input)) {
        favorites.splice(favorites.indexOf(input), 1)
    }
    favorites.push(input);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    showFavorites(favorites);
  }
};
