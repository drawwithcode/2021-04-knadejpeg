/*definizione delle variabili*/
const phrase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const words = phrase.split(" ");
let buttons;
let iterator = 0;
let r;
let bg;
let img1;



function preload() {
  bg = loadImage('assets/tovaglia.jpg');
  img1 = loadImage('assets/zuppa.png');
};



function setup() {
  frameRate(60);
  createCanvas (windowWidth, windowHeight);

  /* buttons */
  words.forEach(word => {
    createElement("button", word);
  });
 
  buttons = selectAll("button");
  buttons.forEach(button => {
    button.style("position: absolute" );
    button.mouseOver(noLoop);
    button.mouseOut(loop);
  });

  /* slider to control bottons position */
  rSlider = createSlider(0, 200, 50);
  rSlider.position(windowWidth/2-75, windowHeight-100);
};



function draw() {
  
  /*styling buttons */
  let colorButton = color(255, 250, 202)
  let colorTextButton = color(106, 146, 46)
  buttons.forEach(button => {
    button.style('font-size', '20px');
    button.style('background-color', colorButton);
    button.style('font-family', 'Poppins');
    button.style('color', colorTextButton);
  });
 
  /* image */
  image(bg, 0, 0, 1920, 1080);
  push(); 
  imageMode (CENTER);
  angleMode (DEGREES);
  translate (windowWidth/2, windowHeight/2);
  rotate (frameCount*10);
  image (img1, 0, 0, 1300, 1300);
  pop ();

  /*slider*/
  push();
  translate (windowWidth/2, windowHeight/2);
  const r = rSlider.value(); 
  iterator ++;
  buttons.forEach((button, i) => {
   /* position and distribution of buttons get */
   /* controlled by the slider */
    let a = random (windowWidth/3-r, windowWidth/3*2+r);
    let b = random (windowHeight/3-r, windowHeight/3*2+r);
    button.position(a, b);
  });
  pop(); 

  /* text */
  var myText = "Play with food!";
  drawingContext.font = "96px Pinyon Script";
  drawingContext.textAlign = "center";
  fill("#EDFF86");
  text(myText, windowWidth/2, 100);
};
