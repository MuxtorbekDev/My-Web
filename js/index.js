document.addEventListener("DOMContentLoaded", () => {
  // LOADER
  const loader = document.querySelector(".loaders");
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
      body.style.overflow = "";
    }, 1000);
  }, 4000);

  const hamburger = document.querySelector(".hamburger"),
    closed = document.querySelector(".close"),
    navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    navList.classList.add("open");
  });

  closed.addEventListener("click", () => {
    navList.classList.remove("open");
  });

  // Theme

  const icons = [...document.querySelectorAll(".theme-icon")];
  const divicon = document.querySelector("div.theme-icon i");
  const iIcon = document.querySelector("li.theme-icon i");
  icons.forEach((icon) => {
    if (icon) {
      icon.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
          // icon.innerHTML = `<i class="bx bx-sun></i>`;
          divicon.classList.add("bx-sun");
          divicon.classList.remove("bx-moon");
          iIcon.classList.add("bx-sun");
          iIcon.classList.remove("bx-moon");
          icon.style.color = "white";
        } else {
          // icon.innerHTML = `<i class="bx bx-moon></i>`;
          // icon.style.color = "#121713";

          divicon.classList.remove("bx-sun");
          divicon.classList.add("bx-moon");
          iIcon.classList.remove("bx-sun");
          iIcon.classList.add("bx-moon");
          icon.style.color = "#121713";
        }
      });
    }
  });

  const widget = document.querySelector(".widget"),
    control = document.querySelector(".control");
  widget.addEventListener("click", () => {
    control.classList.toggle("open");
  });

  const colors = [...document.querySelectorAll(".colors span")];

  colors.forEach((color) => {
    color.addEventListener("click", () => {
      const currentColor = color.dataset.id;
      document
        .querySelector(":root")
        .style.setProperty("--customColor", currentColor);
    });
  });
  window.addEventListener("scroll", () => {
    control.classList.remove("open");
  });

  // Typeit
  new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Oddiy Inson", { delay: 400 })
    .pause(500)
    .delete(11)
    .type("Alhamdulilloh Musulmon")
    .pause(500)
    .delete(22)
    .type("Junior Developer")
    .pause(500)
    .delete(16)
    .type("Telegram Bloger")
    .pause(500)
    .delete(15)
    .go();

  // Fix Nav

  const navBar = document.querySelector(".navigation");
  const navHeight = navBar.getBoundingClientRect().height;

  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
      navBar.classList.add("fix-nav");
    } else {
      navBar.classList.remove("fix-nav");
    }
  });

  // Filter Projects

  const filterBtn = document.querySelector(".filter-btns"),
    spans = [...document.querySelectorAll(".filter-btns span")],
    items = [...document.querySelectorAll(".projects .item")];

  filterBtn.addEventListener("click", (e) => {
    const filter = e.target.closest("span");
    if (!filter) return;
    const id = filter.dataset.id;
    spans.forEach((span) => span.classList.remove("active"));
    filter.classList.add("active");
    items.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("active");
      const targetId = item.dataset.id;
      if (targetId === id) {
        item.classList.remove("hide");
        item.classList.add("active");
      } else if (id === "all") {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  });
  let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  const footerYear = document.querySelector("footer .yil");
  const footerMonth = document.querySelector("footer .oy");
  const footerDay = document.querySelector("footer .kun");
  const footerTime = document.querySelector("footer .time");
  footerYear.innerHTML = new Date().getFullYear();
  footerMonth.innerHTML = new Date().getMonth();
  footerDay.innerHTML = new Date().getDate();
  footerTime.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
});
