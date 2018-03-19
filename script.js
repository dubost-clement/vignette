var lien = document.querySelector("nav").querySelectorAll("a");

for (var i = 0; i < lien.length; i++) {
  lien[i].addEventListener("click", fond);
}

function fond(event) {
  var menuSelection = event.target;
  var menuActive = document.querySelector(".menuactive");
  menuSelection.classList.add("menuactive");
  menuActive.classList.remove("menuactive");
}

/* vignette */
var un = document.querySelector(".un");
var deux = document.querySelector(".deux");
var trois = document.querySelector(".trois");
var quatre = document.querySelector(".quatre");
var liens = document.querySelector("nav").querySelectorAll("a");

let stickerStatus = {1: 'block', 2: 'block', 3: 'block', 4: 'block'};

const selectSticker = (newStickerStatus) => {
  stickerStatus = Object.assign({}, newStickerStatus);
  un.style.display = stickerStatus[1];
  deux.style.display = stickerStatus[2];
  trois.style.display = stickerStatus[3];
  quatre.style.display = stickerStatus[4];
};

liens[0].addEventListener("click", () => selectSticker({ 1: 'block', 2: 'block', 3: 'block', 4: 'block' }));
liens[1].addEventListener("click", () => selectSticker({ 1: 'none', 2: 'block', 3: 'none', 4: 'none' }));
liens[2].addEventListener("click", () => selectSticker({ 1: 'none', 2: 'none', 3: 'block', 4: 'none' }));
liens[3].addEventListener("click", () => selectSticker({ 1: 'none', 2: 'none', 3: 'none', 4: 'block' }));

for (var i = 0; i < liens.length; i++) {
  liens[i].addEventListener("click", triage);
}

function triage(event) {
  console.log(event.target.textContent);
  console.log(event);
}


    
    

        
