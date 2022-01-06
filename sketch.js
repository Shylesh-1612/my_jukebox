function preload(){
  bgimg = loadImage("headphones.png")
  mysong1 = loadSound("song_codingclass.mp3")
  mysong2 = loadSound("In The End [Official HD Music Video] - Linkin Park.mp3")
  mysong3 = loadSound("Bon Jovi - It's my life w_ lyrics.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  s1  = createSlider(0,1,0.6,0.1)// min,max,default,min_adjustment
   s1.position(0.05*windowWidth,0.05*windowHeight)
   b1 = createButton("numb")
   b1.position(0.1*windowWidth,0.1*windowHeight)
   b1.style("height","50px")
   b1.style("width","100px")
   b1.mousePressed(song1control)
  
   b2 = createButton("in the end")
   b2.position(0.1*windowWidth,0.2*windowHeight)
   b2.style("height","50px")
   b2.style("width","100px")
   b2.mousePressed(song2control)
  
   b3 = createButton("Stop")
   b3.position(0.1*windowWidth,0.4*windowHeight)
   b3.style("height","50px")
   b3.style("width","100px")
   b3.mousePressed(stop)
  
    b4 = createButton("its my life")
   b4.position(0.1*windowWidth,0.3*windowHeight)
   b4.style("height","50px")
   b4.style("width","100px")
   b4.mousePressed(song3control)
  
   
}
function draw() {
  background(bgimg);
  mysong1.setVolume(s1.value())
}

function song1control(){
  mysong1.play()
  mysong2.stop()
  mysong3.stop()
  
}

function song2control(){
  mysong1.stop()
  mysong2.play()
  mysong3.stop()
  
}

function song3control(){
  mysong1.stop()
  mysong2.stop()
  mysong3.play()
  
}

function stop(){
  mysong1.stop()
  mysong2.stop()
  mysong3.stop()
  
}
