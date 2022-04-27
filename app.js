// hero array
const heroes = [
  {
    id: 1,
    logo: "https://seeklogo.com/images/1/3-colors-superman-logo-ACD3F1907B-seeklogo.com.png",
    name: "Superman",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapersmug.com%2Fdownload%2F720x1280%2Fc4bc09%2Fcomics_superman.jpg&f=1&nofb=1",
    description:
      "Superman is Earth's champion and he is the last son of Krypton, his home planet. There, he is known by a different name, Kal-El, son of Jor-El.",
  },
  {
    id: 2,
    logo: "https://seeklogo.com/images/B/batman-logo-67F6E4934C-seeklogo.com.png",
    name: "Batman",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmajorspoilers.com%2Fwp-content%2Fuploads%2F2019%2F12%2FBATMAN_Cv86-scaled.jpg&f=1&nofb=1",
    description:
      "A playboy billionaire by day, Bruce Wayne’s double life affords him the comfort of a life without financial worry, the Knight of Gotham City.",
  },
  {
    id: 3,
    logo: "https://seeklogo.com/images/A/aquaman-icon-logo-BBD1334140-seeklogo.com.png",
    name: "Aquaman",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcomicartcommunity.com%2Fgallery%2Fdata%2Fmedia%2F242%2FAQUAMAN_7.jpg&f=1&nofb=1",
    description:
      "The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his realm of the sea.",
  },
];

// targeting the values needed
const heroName = document.querySelector(".hero-name");
const heroDescription = document.querySelector(".hero-description");
const heroWallpaper = document.querySelector(".hero-wallpaper");
const heroLogo = document.querySelector(".hero-logo");

// targeting the btns
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// currentitem index for array
let currentItem = 0;
// loading the inital content on window load
window.addEventListener("DOMContentLoaded", function () {
  const item = heroes[currentItem];

  heroName.textContent = item.name;
  heroDescription.textContent = item.description;
  heroWallpaper.src = item.img;
  heroLogo.src = item.logo;
});

// show hero based on item
function showHero(hero) {
  const item = heroes[hero];
  heroWallpaper.src = item.img;
  heroLogo.src = item.logo;
  heroDescription.textContent = item.description;
  heroName.textContent = item.name;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > heroes.length - 1) {
    currentItem = 0;
  }
  showHero(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = heroes.length - 1;
  }
  showHero(currentItem);
});
