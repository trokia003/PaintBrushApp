import React, { Component } from 'react';

class DrawingSpace extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBrushType: props.current_brush,
      currentBrushColor_red: props.current_redColor,
      currentBrushColor_green: props.current_greenColor,
      currentBrushColor_blue: props.current_blueColor,

      //these are states for drawing
      canvas: null,
      isDrawing: false,
      context: null
    }

    this.draw = this.draw.bind(this);
    this.rgbToHex = this.rgbToHex.bind(this);
    this.componentToHex = this.componentToHex.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.addRandomPoint = this.addRandomPoint.bind(this);
  }

  //when the class loads do this
  componentDidMount()
  {
    this.setState({
      canvas: document.getElementById("DrawingArea"),
      context: document.getElementById("DrawingArea").getContext('2d')
    });

    console.log(this.state.currentBrushColor_red);
  }
  componentDidUpdate(){
    console.log(this.state.currentBrushColor_red);
  }

  componentToHex(colorComponent){
    var hexValue = parseInt(colorComponent, 10).toString(16);
    return hexValue.length == 1 ? "0" + hexValue : hexValue;
  }
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  //other necessary methods
  getRandomInt(min, max) {
    return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  addRandomPoint(e) {
    var canvas = this.state.canvas;
    var points = [];
    points.push({
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - 85,
      angle: this.getRandomInt(0, 180),
      width: this.getRandomInt(1,10),
      opacity: Math.random(),
      scale: this.getRandomInt(1, 20) / 10,
      color: ('rgb('+this.getRandomInt(0,255)+','+this.getRandomInt(0,255)+','+this.getRandomInt(0,255)+')')
    });
  }

  render() {
    return (
      <div>
        <canvas id="DrawingArea" width="800" height="600" onMouseOver={this.draw}/>
      </div>
    );
  }

  draw(){
    //boolean variables
    var isDrawing = this.state.isDrawing;
    //canvas variables
    var context = this.state.context;
    var canvas = this.state.canvas;
    var clientX, clientY, timeout;
    //string variables
    var currentBrushSelected = this.state.currentBrushType;
    var currentColor = this.rgbToHex(this.state.currentBrushColor_red, this.state.currentBrushColor_green, this.state.currentBrushColor_blue);
    //int variables
    var currentBrushSize = 5;
    var density = 50;
    var radius = 15;
    //point variables
    var lastPoint;
    var points = [];
    canvas.onmousedown = function(e) {
            //run a switch statement to select which brushes' onmousedown to apply
            switch(parseInt(currentBrushSelected, 10))
            {
                case 1: //simple pencil
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.strokeStyle = currentColor;
                    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                    console.log(currentColor);
                    break;
                case 2: //smooth connections
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.strokeStyle = currentColor;
                    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                    break;
                case 3: //smooth connections with shadowing effect
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.strokeStyle = currentColor;
                    context.shadowBlur = currentBrushSize;
                    context.shadowColor = 'rgb(0, 0, 0)';
                    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                    break;
                case 4: //dry brush

                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.strokeStyle = currentColor;
                    context.lineJoin = context.lineCap = 'round';
                    density = 40;
                    break;
                case 5: //point - based with shadows
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                    break;
                case 6: //edge smoothing with radial gradient
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.shadowBlur = currentBrushSize;
                    context.shadowColor = 'rgb(0, 0, 0)';
                    context.strokeStyle = currentColor;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 });
                    break;
                case 7: //bezier curves
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.strokeStyle = currentColor;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 });
                    break;
                case 8: //brush, fur, pen
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.strokeStyle = currentColor;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 });
                    break;
                case 9: //fur (rotating strokes)
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.strokeStyle = currentColor;
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 10: //variable segment width
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.strokeStyle = currentColor;
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 11: //multiple strokes
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.strokeStyle = currentColor;
                    points.push({
                      x: e.clientX - canvas.offsetLeft,
                      y: e.clientY - 85,
                      width: this.getRandomInt(Math.abs(currentBrushSize - 2), currentBrushSize)
                    });
                    break;
                case 12: //thick brush
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineJoin = context.lineCap = 'round';
                    context.lineWidth = currentBrushSize;
                    context.strokeStyle = currentColor;
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 13: //"sliced" strokes
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'butt';
                    context.strokeStyle = currentColor;
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 14: //"sliced" strokes with opacity
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.strokeStyle = currentColor;
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 15: //multiple lines
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.strokeStyle = currentColor;
                    context.lineJoin = context.lineCap = 'round';
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                case 16: //multiple lines with opacity
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.strokeStyle = currentColor;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 });
                    break;
                case 17: //stamp-like
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.strokeStyle = currentColor;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 });
                    break;
                case 18: //trail effect
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.fillStyle = currentColor;
                    radius = currentBrushSize;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 });
                    break;
                case 19: //random radius, opacity
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.fillStyle = currentColor;
                    context.strokeStyle = currentColor;
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 20: //shapes
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.fillStyle = currentColor;
                    radius = currentBrushSize;
                    points.push({
                      x: e.clientX - canvas.offsetLeft,
                      y: e.clientY - 85,
                      radius: this.getRandomInt(1, currentBrushSize),
                      opacity: Math.random()
                    });
                    break;
                case 21: //shapes with rotation
                    isDrawing = true;
                    radius = currentBrushSize;
                    context.lineJoin = context.lineCap = 'round';
                    context.fillStyle = currentColor;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85, l: currentBrushSize });
                    break;
                case 22: //randomize everything
                    isDrawing = true;
                    context.lineJoin = context.lineCap = 'round';
                    context.strokeStyle = currentColor;
                    radius = currentBrushSize;
                    points.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - 85, l: currentBrushSize, angle: this.getRandomInt(0, 180) });
                    break;
                case 23: //collored pixels
                    isDrawing = true;
                    this.addRandomPoint(e);
                    break;
                case 24: //spray
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineJoin = context.lineCap = 'round';
                    lastPoint = { x: e.clientX - canvas.offsetLeft, y: e.clientY - 85 };
                    break;
                case 25: //time-based spray
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.lineWidth = currentBrushSize;
                    context.strokeStyle = currentColor;
                    context.lineJoin = context.lineCap = 'round';
                    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                    density = 50;
                    break;
                case 26: //Time-based spray with round distribution
                    context.lineJoin = context.lineCap = 'round';
                    clientX = e.clientX - canvas.offsetLeft;
                    clientY = e.clientY - 85;
                    density = 50;

                    timeout = setTimeout(function spray() {
                      for (var i = density; i--; ) {
                        var radius = 30;
                        var offsetX = this.getRandomInt(-radius, radius);
                        var offsetY = this.getRandomInt(-radius, radius);
                        context.fillRect(clientX + offsetX, clientY + offsetY, 1, 1);
                      }
                      if (!timeout) return;
                      timeout = setTimeout(spray, 50);
                    }, 50);
                    break;
                case 27: //randomizing dots
                    context.lineJoin = context.lineCap = 'round';
                    clientX = e.clientX - canvas.offsetLeft;
                    clientY = e.clientY - 85;
                    density = 50;

                    timeout = setTimeout(function spray() {
                      for (var i = density; i--; ) {
                        var angle = Math.getRandomFloat(0, Math.PI*2);
                        var radius = Math.getRandomFloat(0, 20);
                        context.fillRect(
                          clientX + radius * Math.cos(angle),
                          clientY + radius * Math.sin(angle),
                          1, 1);
                      }
                      if (!timeout) return;
                      timeout = setTimeout(spray, 50);
                    }, 50);
                    break;
                case 28: //Neighbor points connection
                    density = 40;
                    context.lineJoin = context.lineCap = 'round';
                    clientX = e.clientX - canvas.offsetLeft;
                    clientY = e.clientY - 85;

                    timeout = setTimeout(function spray() {
                      for (var i = density; i--; ) {
                        var angle = Math.getRandomFloat(0, Math.PI * 2);
                        var radius = Math.getRandomFloat(0, 30);
                        context.globalAlpha = Math.random();
                        context.fillRect(
                          clientX + radius * Math.cos(angle),
                          clientY + radius * Math.sin(angle),
                          Math.getRandomFloat(1, 2), Math.getRandomFloat(1, 2));
                      }
                      if (!timeout) return;
                      timeout = setTimeout(spray, 50);
                    }, 50);
                    break;
                default:
                    if(!isDrawing){
                        context.beginPath();
                    }
                    isDrawing = true;
                    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetLeft);
                    break;
            }
        };
        canvas.onmousemove = function(e) {
            //run a switch statement to select which brushes' onmousemove to apply
            switch(parseInt(currentBrushSelected, 10))
            {
                case 1: //simple pencil
                    if (isDrawing) {
                        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                        context.stroke();
                    }
                    break;/*
                case 2: //smooth connections
                    SmoothConnections_onmousemove(e);
                    break;
                case 3: //point - based approach
                    EdgeSmoothingWithShadows_onmousemove(e);
                    break;
                case 4: //point - based approach
                    DryBrush_onmousemove(e);
                    break;
                case 5: //point - based with shadows
                    PointBasedApproach_onmousemove(e);
                    break;
                case 6: //edge smoothing with radial gradient
                    PointBasedWithShadows_onmousemove(e);
                    break;
                case 7: //bezier curves
                    EdgeSmoothingWithRadialGradient_onmousemove(e);
                    break;
                case 8: //brush, fur, pen
                    BezierCurves_onmousemove(e);
                    break;
                case 9: //fur (rotating strokes)
                    BrushFurPen_onmousemove(e);
                    break;
                case 10: //variable segment width
                    FurRotatingStrokes_onmousemove(e);
                    break;
                case 11: //multiple strokes
                    PenVariableSegmentWidth_onmousemove(e);
                    break;
                case 12: //thick brush
                    PenMultipleStrokes_onmousemove(e);
                    break;
                case 13: //"sliced" strokes
                    ThickBrush_onmousemove(e);
                    break;
                case 14: //"sliced" strokes with opacity
                    SlicedStrokes_onmousemove(e);
                    break;
                case 15: //multiple lines
                    SlicedStrokesWithOpacity_onmousemove(e);
                    break;
                case 16: //multiple lines with opacity
                    MultipleLines_onmousemove(e);
                    break;
                case 17: //stamp-like
                    MultipleLinesWithOpacity_onmousemove(e);
                    break;
                case 18: //trail effect
                    StampLikeBasic_onmousemove(e);
                    break;
                case 19: //random radius, opacity
                    StampLikeTrailEffect_onmousemove(e);
                    break;
                case 20: //shapes
                    RandomRadiusOpacity_onmousemove(e);
                    break;
                case 21: //shapes with rotation
                    Stars_onmousemove(e);
                    break;
                case 22: //randomize everything
                    StarsWithRotation_onmousemove(e);
                    break;
                case 23: //collored pixels
                    RandomizeEverything_onmousemove(e);
                    break;
                case 24: //spray
                    ColoredPixels_onmousemove(e);
                    break;
                case 25: //time-based spray
                    Spray_onmousemove(e);
                    break;
                case 26: //Time-based spray with round distribution
                    TimeBasedSpray_onmousemove(e);
                    break;
                case 27: //randomizing dots
                    TimeBasedSprayWithRoundDistribution_onmousemove(e);
                    break;
                case 28: //Neighbor points connection
                    RandomizingDots_onmousemove(e);
                    break;*/
                default:
                    if (isDrawing) {
                        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - 85);
                        context.stroke();
                    }
                    break;
            }
        };
        canvas.onmouseup = function() {
            //run a switch statement to select which brushes' onmouseup to apply
            switch(parseInt(currentBrushSelected, 10))
            {
                case 1: //simple pencil
                    if(isDrawing){
                        context.closePath();
                    }
                    isDrawing = false;
                    context.closePath();
                    break;/*
                case 2: //smooth connections
                    SmoothConnections_onmouseup();
                    break;
                case 3: //point - based approach
                    EdgeSmoothingWithShadows_onmouseup();
                    break;
                case 4: //point - based approach
                    DryBrush_onmouseup();
                    break;
                case 5: //point - based with shadows
                    PointBasedApproach_onmouseup();
                    break;
                case 6: //edge smoothing with radial gradient
                    PointBasedWithShadows_onmouseup();
                    break;
                case 7: //bezier curves
                    EdgeSmoothingWithRadialGradient_onmouseup();
                    break;
                case 8: //brush, fur, pen
                    BezierCurves_onmouseup();
                    break;
                case 9: //fur (rotating strokes)
                    BrushFurPen_onmouseup();
                    break;
                case 10: //variable segment width
                    FurRotatingStrokes_onmouseup();
                    break;
                case 11: //multiple strokes
                    PenVariableSegmentWidth_onmouseup();
                    break;
                case 12: //thick brush
                    PenMultipleStrokes_onmouseup();
                    break;
                case 13: //"sliced" strokes
                    ThickBrush_onmouseup();
                    break;
                case 14: //"sliced" strokes with opacity
                    SlicedStrokes_onmouseup();
                    break;
                case 15: //multiple lines
                    SlicedStrokesWithOpacity_onmouseup();
                    break;
                case 16: //multiple lines with opacity
                    MultipleLines_onmouseup();
                    break;
                case 17: //stamp-like
                    MultipleLinesWithOpacity_onmouseup();
                    break;
                case 18: //trail effect
                    StampLikeBasic_onmouseup();
                    break;
                case 19: //random radius, opacity
                    StampLikeTrailEffect_onmouseup();
                    break;
                case 20: //shapes
                    RandomRadiusOpacity_onmouseup();
                    break;
                case 21: //shapes with rotation
                    Stars_onmouseup();
                    break;
                case 22: //randomize everything
                    StarsWithRotation_onmouseup();
                    break;
                case 23: //collored pixels
                    RandomizeEverything_onmouseup();
                    break;
                case 24: //spray
                    ColoredPixels_onmouseup();
                    break;
                case 25: //time-based spray
                    Spray_onmouseup();
                    break;
                case 26: //Time-based spray with round distribution
                    TimeBasedSpray_onmouseup();
                    break;
                case 27: //randomizing dots
                    TimeBasedSprayWithRoundDistribution_onmouseup();
                    break;
                case 28: //Neighbor points connection
                    RandomizingDots_onmouseup();
                    break;*/
                default:
                    if(isDrawing){
                        context.closePath();
                    }
                    isDrawing = false;
                    context.closePath();
                    break;
            }
        };
    }//This is the end of the draw() method

}//this is the end of the DrawingSpace Class


export default DrawingSpace;
