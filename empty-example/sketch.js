var distance;
var position;

function setup(){
  createCanvas(640, 480);
  intervalCurrentPosition(positionPing, 5000);
}

function positionPing(position){
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
  
    distance = calcGeoDistance(position.latitude, position.longitude, 55.65, 12.59, 'km');
  
  }

function draw(){
    background(255);
    print("distance is: ");
    mdistance = distance*1000;
    print(mdistance);
    textSize(32);
    text("distance is: ",10, 30);
    text(distance, 10, 70);
 
}


