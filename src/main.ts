import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// create our shape
const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});


const lemon = new Konva.Line({
  points: [
    165, 225,
    180, 180,
    600, 90,
    1000, 280,
    1100, 600,
    1105, 675,
    770, 820,


    220, 600,

  
  ],
  fill: '#ffee00',
  stroke: 'black',
  strokeWidth: 5,
  closed: true,
  tension : 0.3,
  draggable: true,

  offsetX: 500,
  offsetY: 500
  }
);

const text = new Konva.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black',
});

function writeMessage(message: string) {
  text.text(message);
}

lemon.on('mouseover', (e) => {
  writeMessage('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  e.target.getStage().container().style.cursor = 'pointer';
  //animation.start();
  

});

lemon.on('mouseout', (e) => {
  writeMessage('');
  e.target.getStage().container().style.cursor = 'default';
  //animation.stop();
  
});

const period = 500;

const animation = new Konva.Animation(function(frame){
  const scale = Math.sin(frame.time*0.5*Math.PI/period)+2;
  lemon.scale({x: scale, y: scale});
}, layer);

const tween = new Konva.Tween({
  node: lemon,
  scaleX : 1.5,
  scaleY: 1.5,
  duration: 0.1,
  easing: Konva.Easings.BackEaseOut
});


lemon.on('pointerdown', (e) => {
  writeMessage('ASDUYHASKJFLSDHBFJDSFHDS');
  //animation.stop();
  tween.play();
});

lemon.on('pointerup', (e) => {
  writeMessage('ASDUYHASKJFLSDHBFJDSFHDS');
  //animation.stop();
  tween.reverse();
});

// add the shape to the layer
//layer.add(circle);

layer.add(lemon)
layer.add(text)
// add the layer to the stage
stage.add(layer);


