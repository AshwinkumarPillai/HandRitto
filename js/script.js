// All variables to be used
let userInpData = "Neccessity is the mother of all inventions! - Capt. Levi (maybe)";
let curr_sheet = "";
let sheetNum = 1;

// Fonts
let fonts = [];
let fi = 0,
  fn = 18,
  fsize = 30;

// Axis - Alignment
let hori = 110,
  verti = 100,
  w = 700;

let lineHeight = 24;

// color- pallete
colors = ["#264180", "#000000", "#c0392b"];
color_index = 0;

// popup
let currPopup = 1;
let body = document.getElementsByTagName("body")[0];
let popup_container = document.getElementById("popup_container");
let font_list = document.getElementById("font_list");

// --------------------------------------------- :Custom functions: ----------------------------------------------------------

(() => {
  for (let i = 0; i < colors.length; i++) {
    document.getElementById(`circle-${i}`).style.backgroundColor = colors[i];
  }
})();

function changeHori(val) {
  hori = float(val); // change horizontal distance
}

function changeVerti(val) {
  verti = float(val); // change vertical distance
}

function changeFontSize(val) {
  fsize = val;
}

function selectFont(val) {
  fi = val;
  closePopup();
}

function changeFont() {
  fi = (fi + 1) % fn;
}

function UserInput(val) {
  userInpData = val;
}

function changeColor(index) {
  color_index = index;
}

function openPopup(val) {
  currPopup = val;
  body.style.overflowY = "hidden";
  popup_container.style.display = "block";
  if (val == 1) {
    font_list.style.display = "block";
    for (let i = 0; i < fn; i++) {
      let ele = document.createElement("div");
      ele.innerHTML = "Click to use this font";
      ele.style.fontFamily = `font${i}`;
      ele.classList.add("font_list_ele");
      font_list.appendChild(ele);
      ele.addEventListener("click", () => selectFont(i));
    }
  }
}

function closePopup() {
  popup_container.style.display = "none";
  body.style.overflowY = "scroll";
  if (currPopup == 1) {
    font_list.style.display = "none";
  }
}

//---------------------------------------------- :P5.js functions: -----------------------------------------------------------
function preload() {
  curr_sheet = loadImage("../assets/sheets/sheet.JPG");
  for (let i = 0; i < fn; i++) fonts.push(loadFont(`../assets/fonts/font${i}.ttf`));
}

function setup() {
  canvas = createCanvas(800, 800);
  canvas.parent("sheetResultArea");
  rectMode(CORNER);
}

function draw() {
  image(curr_sheet, 0, 0, width, height); // load the sheet here
  textFont(fonts[fi]); // Load the current Font
  textSize(fsize); // font size
  fill(colors[color_index]); // color of ink to be used
  data = "\n" + userInpData; // Data to be written
  textLeading(lineHeight);
  text(data, hori, verti, w, 900); // apply all these values to sheet with this function call
}
