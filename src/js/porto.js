const navbarList = document.querySelector(".list");
const navbarMenu = document.querySelector(".menu");

navbarMenu.addEventListener("click", () => {
  navbarList.classList.toggle("aktif");
});

document.addEventListener("click", function (e) {
  if (!navbarList.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarList.classList.remove("aktif");
  }
});

const sertifAll = document.querySelectorAll(".sertif");
sertifAll.forEach((sertif) => {
  sertif.addEventListener("mouseover", () => {
    const deskripsi = sertif.querySelector(".deskripsi");

    if (deskripsi) {
      deskripsi.style.opacity = "80%";
    }
  });
  sertif.addEventListener("mouseout", () => {
    const deskripsi = sertif.querySelector(".deskripsi");

    if (deskripsi) {
      deskripsi.style.opacity = "0";
    }
  });
});

const contentWebsite = document.querySelector(".content-website");
const contentApi = document.querySelector(".content-api");
const projekWebsite = document.querySelector(".website");
const projekApi = document.querySelector(".api");

contentWebsite.addEventListener("click", () => {
  contentWebsite.classList.add("aktif");
  projekApi.classList.add("hidden");
  projekWebsite.classList.remove("hidden");
  console.log("website ditekan");

  if (contentApi.classList.contains("aktif")) {
    contentApi.classList.remove("aktif");
  }
});

contentApi.addEventListener("click", () => {
  contentApi.classList.add("aktif");
  projekWebsite.classList.add("hidden");
  projekApi.classList.remove("hidden");
  console.log("api ditekan");

  if (contentWebsite.classList.contains("aktif")) {
    contentWebsite.classList.remove("aktif");
  }
});

const showMore = document.querySelector('#showMoreBtn');
const showMoreText = document.querySelector('#showMoreText');
const certificateItems = document.querySelectorAll('.certificate-item');

const initialVisibleCount = 3;

certificateItems.forEach((item, index) => {
  if (index >= initialVisibleCount) {
    item.classList.add('hidden');
  }
});

let isExpanded = false;

showMore.addEventListener('click', function () {
  isExpanded = !isExpanded;

  certificateItems.forEach((item, index) => {
    if (isExpanded) {
      item.classList.remove('hidden');
    } else {
      if (index >= initialVisibleCount) {
        item.classList.add('hidden');
      }
    }
  });

  showMoreText.innerHTML = isExpanded ? 'Lihat lebih sedikit' : 'Lihat lebih banyak';
});

