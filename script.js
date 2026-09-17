const photographs = [
  ["music", "live-vocalist", "Vocalist performing under red stage light"],
  ["music", "live-red-guitar", "Guitarist performing in red stage light"],
  ["music", "catpiss-vocal", "Collaged live performance artwork"],
  ["music", "live-guitarist", "Long-haired guitarist on a dark stage"],
  ["music", "live-backstage-dark", "Musician isolated in a dark venue"],
  ["music", "live-portrait", "Black-and-white portrait at a live show"],
  ["music", "catpiss-red", "Red graphic treatment of a guitarist"],
  ["music", "live-green", "Vocalist in angular green stage light"],
  ["music", "live-orange", "Musician performing in warm orange light"],
  ["music", "catpiss-collage", "Black-and-white live music collage"],

  ["skate", "skater-lamp-action", "Skateboarder airborne beneath a magenta street light"],
  ["skate", "skate-ledge", "Skateboarder landing on a concrete ledge"],
  ["skate", "skater-walk", "Skater carrying a board in monochrome"],
  ["skate", "skater-ramp", "Skater beside a concrete bank"],
  ["skate", "skater-lamp-portrait", "Skater standing beneath a pink street light"],
  ["skate", "skate-bowl-air", "Skateboarder launching from a bowl"],
  ["skate", "skate-stair-set", "Skateboarder clearing a stair set"],
  ["skate", "skate-sunset-ledge", "Skateboarder sliding a ledge at sunset"],
  ["skate", "skate-detail", "Close view of a skateboard trick"],
  ["skate", "skate-black-white", "Black-and-white skateboarding action"],
  ["skate", "skate-blue-sky", "Skater above a ramp against bright clouds"],

  ["portraits", "portrait-blue", "Portrait against a vivid blue sky"],
  ["portraits", "portrait-silhouette", "Silhouetted portrait against evening clouds"],
  ["portraits", "portrait-cafe", "Candid portrait at a café"],
  ["portraits", "portrait-dancefloor", "Portrait on a crowded dance floor"],
  ["portraits", "portrait-candid", "Black-and-white candid portrait"],

  ["sport", "boxing-corner", "Boxing team gathered in the corner between rounds"],
  ["sport", "boxing-action", "Boxer competing in the ring"],
  ["sport", "boxing-portrait", "Black-and-white portrait of a boxer"],

  ["animals", "dog-portrait", "German shepherd portrait in warm light"],
  ["animals", "bird-green", "Green bird perched among sunlit leaves"],
  ["animals", "bird-profile", "Colourful bird in profile"],
  ["animals", "dog-waterfront", "German shepherd looking across the water"],
  ["animals", "dog-closeup", "Close portrait of a German shepherd"],

  ["landscapes", "beach-figure", "Figure standing on a wide beach beneath a pastel sky"],
  ["landscapes", "creek-monochrome", "Monochrome creek beneath dense trees"],
  ["landscapes", "mist-figure", "Lone figure in a misty landscape"],
  ["landscapes", "ocean-wave", "Ocean swell beneath a clouded horizon"],

  ["art", "woven-pair", "Two handmade woven figures in grass"],
  ["art", "painted-shelter", "Colourful painted shelter and fabric"],
  ["art", "woven-figure", "Handmade woven figure portrait"],
  ["art", "woven-portrait", "Woven figure in golden light"],
  ["art", "spinner-sculpture", "Metal spinner sculpture lit against black"],
  ["art", "corro-collage", "Layered orange portrait collage"]
];

const gallery = document.querySelector("#gallery");
const count = document.querySelector("#work-count");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

function openLightbox(source, alt) {
  lightboxImage.src = source;
  lightboxImage.alt = alt;
  lightbox.showModal();
  closeButton.focus();
}

photographs.forEach(([category, file, alt]) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "gallery-item";
  button.dataset.category = category;
  button.setAttribute("aria-label", `Open photograph: ${alt}`);

  const image = document.createElement("img");
  image.src = `assets/images/${file}.webp`;
  image.alt = alt;
  image.loading = "lazy";
  image.decoding = "async";
  button.append(image);
  button.addEventListener("click", () => openLightbox(image.src, alt));
  gallery.append(button);
});

document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
  button.addEventListener("click", () => openLightbox(button.dataset.lightboxSrc, button.dataset.lightboxAlt));
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => {
      const active = item === filter;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    let visible = 0;
    document.querySelectorAll(".gallery-item").forEach((item) => {
      const show = selected === "all" || item.dataset.category === selected;
      item.hidden = !show;
      if (show) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? "photograph" : "photographs"}`;
  });
});

closeButton.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
  lightboxImage.alt = "";
});

document.querySelector("#year").textContent = new Date().getFullYear();
