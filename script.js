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

const photographSizes = {"beach-figure":{"width":1280,"height":1600,"srcset":"assets/images/beach-figure-640.webp 640w, assets/images/beach-figure-960.webp 960w, assets/images/beach-figure.webp 1280w"},"bird-green":{"width":1600,"height":1600,"srcset":"assets/images/bird-green-640.webp 640w, assets/images/bird-green-960.webp 960w, assets/images/bird-green.webp 1600w"},"bird-profile":{"width":1600,"height":899,"srcset":"assets/images/bird-profile-640.webp 640w, assets/images/bird-profile-960.webp 960w, assets/images/bird-profile.webp 1600w"},"boxing-action":{"width":1600,"height":1600,"srcset":"assets/images/boxing-action-640.webp 640w, assets/images/boxing-action-960.webp 960w, assets/images/boxing-action.webp 1600w"},"boxing-corner":{"width":1280,"height":1600,"srcset":"assets/images/boxing-corner-640.webp 640w, assets/images/boxing-corner-960.webp 960w, assets/images/boxing-corner.webp 1280w"},"boxing-portrait":{"width":899,"height":1600,"srcset":"assets/images/boxing-portrait-640.webp 640w, assets/images/boxing-portrait.webp 899w"},"catpiss-collage":{"width":1600,"height":1066,"srcset":"assets/images/catpiss-collage-640.webp 640w, assets/images/catpiss-collage-960.webp 960w, assets/images/catpiss-collage.webp 1600w"},"catpiss-red":{"width":1600,"height":1600,"srcset":"assets/images/catpiss-red-640.webp 640w, assets/images/catpiss-red-960.webp 960w, assets/images/catpiss-red.webp 1600w"},"catpiss-vocal":{"width":1200,"height":1600,"srcset":"assets/images/catpiss-vocal-640.webp 640w, assets/images/catpiss-vocal-960.webp 960w, assets/images/catpiss-vocal.webp 1200w"},"corro-collage":{"width":1600,"height":1600,"srcset":"assets/images/corro-collage-640.webp 640w, assets/images/corro-collage-960.webp 960w, assets/images/corro-collage.webp 1600w"},"creek-monochrome":{"width":1066,"height":1600,"srcset":"assets/images/creek-monochrome-640.webp 640w, assets/images/creek-monochrome-960.webp 960w, assets/images/creek-monochrome.webp 1066w"},"dog-closeup":{"width":1600,"height":900,"srcset":"assets/images/dog-closeup-640.webp 640w, assets/images/dog-closeup-960.webp 960w, assets/images/dog-closeup.webp 1600w"},"dog-portrait":{"width":1200,"height":1600,"srcset":"assets/images/dog-portrait-640.webp 640w, assets/images/dog-portrait-960.webp 960w, assets/images/dog-portrait.webp 1200w"},"dog-waterfront":{"width":1600,"height":1066,"srcset":"assets/images/dog-waterfront-640.webp 640w, assets/images/dog-waterfront-960.webp 960w, assets/images/dog-waterfront.webp 1600w"},"live-backstage-dark":{"width":1280,"height":1600,"srcset":"assets/images/live-backstage-dark-640.webp 640w, assets/images/live-backstage-dark-960.webp 960w, assets/images/live-backstage-dark.webp 1280w"},"live-green":{"width":1066,"height":1600,"srcset":"assets/images/live-green-640.webp 640w, assets/images/live-green-960.webp 960w, assets/images/live-green.webp 1066w"},"live-guitarist":{"width":1066,"height":1600,"srcset":"assets/images/live-guitarist-640.webp 640w, assets/images/live-guitarist-960.webp 960w, assets/images/live-guitarist.webp 1066w"},"live-orange":{"width":1600,"height":1499,"srcset":"assets/images/live-orange-640.webp 640w, assets/images/live-orange-960.webp 960w, assets/images/live-orange.webp 1600w"},"live-portrait":{"width":1200,"height":1600,"srcset":"assets/images/live-portrait-640.webp 640w, assets/images/live-portrait-960.webp 960w, assets/images/live-portrait.webp 1200w"},"live-red-guitar":{"width":1066,"height":1600,"srcset":"assets/images/live-red-guitar-640.webp 640w, assets/images/live-red-guitar-960.webp 960w, assets/images/live-red-guitar.webp 1066w"},"live-vocalist":{"width":1066,"height":1600,"srcset":"assets/images/live-vocalist-640.webp 640w, assets/images/live-vocalist-960.webp 960w, assets/images/live-vocalist.webp 1066w"},"mist-figure":{"width":899,"height":1600,"srcset":"assets/images/mist-figure-640.webp 640w, assets/images/mist-figure.webp 899w"},"ocean-wave":{"width":1200,"height":1600,"srcset":"assets/images/ocean-wave-640.webp 640w, assets/images/ocean-wave-960.webp 960w, assets/images/ocean-wave.webp 1200w"},"painted-shelter":{"width":1600,"height":899,"srcset":"assets/images/painted-shelter-640.webp 640w, assets/images/painted-shelter-960.webp 960w, assets/images/painted-shelter.webp 1600w"},"portrait-blue":{"width":900,"height":1600,"srcset":"assets/images/portrait-blue-640.webp 640w, assets/images/portrait-blue.webp 900w"},"portrait-cafe":{"width":1280,"height":1600,"srcset":"assets/images/portrait-cafe-640.webp 640w, assets/images/portrait-cafe-960.webp 960w, assets/images/portrait-cafe.webp 1280w"},"portrait-candid":{"width":1600,"height":1600,"srcset":"assets/images/portrait-candid-640.webp 640w, assets/images/portrait-candid-960.webp 960w, assets/images/portrait-candid.webp 1600w"},"portrait-dancefloor":{"width":899,"height":1600,"srcset":"assets/images/portrait-dancefloor-640.webp 640w, assets/images/portrait-dancefloor.webp 899w"},"portrait-silhouette":{"width":1280,"height":1600,"srcset":"assets/images/portrait-silhouette-640.webp 640w, assets/images/portrait-silhouette-960.webp 960w, assets/images/portrait-silhouette.webp 1280w"},"skate-black-white":{"width":1600,"height":1600,"srcset":"assets/images/skate-black-white-640.webp 640w, assets/images/skate-black-white-960.webp 960w, assets/images/skate-black-white.webp 1600w"},"skate-blue-sky":{"width":970,"height":970,"srcset":"assets/images/skate-blue-sky-640.webp 640w, assets/images/skate-blue-sky-960.webp 960w, assets/images/skate-blue-sky.webp 970w"},"skate-bowl-air":{"width":899,"height":1600,"srcset":"assets/images/skate-bowl-air-640.webp 640w, assets/images/skate-bowl-air.webp 899w"},"skate-detail":{"width":1600,"height":1066,"srcset":"assets/images/skate-detail-640.webp 640w, assets/images/skate-detail-960.webp 960w, assets/images/skate-detail.webp 1600w"},"skate-ledge":{"width":1200,"height":1600,"srcset":"assets/images/skate-ledge-640.webp 640w, assets/images/skate-ledge-960.webp 960w, assets/images/skate-ledge.webp 1200w"},"skate-stair-set":{"width":1600,"height":1066,"srcset":"assets/images/skate-stair-set-640.webp 640w, assets/images/skate-stair-set-960.webp 960w, assets/images/skate-stair-set.webp 1600w"},"skate-sunset-ledge":{"width":1600,"height":1066,"srcset":"assets/images/skate-sunset-ledge-640.webp 640w, assets/images/skate-sunset-ledge-960.webp 960w, assets/images/skate-sunset-ledge.webp 1600w"},"skater-lamp-action":{"width":899,"height":1600,"srcset":"assets/images/skater-lamp-action-640.webp 640w, assets/images/skater-lamp-action.webp 899w"},"skater-lamp-portrait":{"width":1066,"height":1600,"srcset":"assets/images/skater-lamp-portrait-640.webp 640w, assets/images/skater-lamp-portrait-960.webp 960w, assets/images/skater-lamp-portrait.webp 1066w"},"skater-ramp":{"width":1066,"height":1600,"srcset":"assets/images/skater-ramp-640.webp 640w, assets/images/skater-ramp-960.webp 960w, assets/images/skater-ramp.webp 1066w"},"skater-walk":{"width":899,"height":1600,"srcset":"assets/images/skater-walk-640.webp 640w, assets/images/skater-walk.webp 899w"},"spinner-sculpture":{"width":1200,"height":1600,"srcset":"assets/images/spinner-sculpture-640.webp 640w, assets/images/spinner-sculpture-960.webp 960w, assets/images/spinner-sculpture.webp 1200w"},"woven-figure":{"width":1280,"height":1600,"srcset":"assets/images/woven-figure-640.webp 640w, assets/images/woven-figure-960.webp 960w, assets/images/woven-figure.webp 1280w"},"woven-pair":{"width":1600,"height":1066,"srcset":"assets/images/woven-pair-640.webp 640w, assets/images/woven-pair-960.webp 960w, assets/images/woven-pair.webp 1600w"},"woven-portrait":{"width":1600,"height":1066,"srcset":"assets/images/woven-portrait-640.webp 640w, assets/images/woven-portrait-960.webp 960w, assets/images/woven-portrait.webp 1600w"}};

photographs.forEach(([category, file, alt]) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "gallery-item";
  button.dataset.category = category;
  button.setAttribute("aria-label", `Open photograph: ${alt}`);

  const image = document.createElement("img");
  image.src = `assets/images/${file}.webp`;
  image.alt = alt;
  const dimensions = photographSizes[file];
  image.width = dimensions.width;
  image.height = dimensions.height;
  image.srcset = dimensions.srcset;
  image.sizes = "(max-width: 540px) 47vw, (max-width: 900px) 45vw, 31vw";
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


document.querySelectorAll('[data-reveal]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const details=document.getElementById(link.dataset.reveal);
    details.open=true;
    details.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
    details.querySelector('summary').focus({preventScroll:true});
  });
});
document.querySelectorAll('details').forEach(details => {
  details.addEventListener('toggle',()=>{
    if(!details.open) details.querySelectorAll('video').forEach(video=>video.pause());
  });
});
