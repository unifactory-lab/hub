window.MathJax = {
  loader: {load: ['[tex]/boldsymbol']},
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['boldsymbol']}
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};



var paletteSwitcher1 = document.getElementById("__palette_1");
var paletteSwitcher2 = document.getElementById("__palette_2");

paletteSwitcher1.addEventListener("change", function () {
  location.reload();
});

paletteSwitcher2.addEventListener("change", function () {
  location.reload();
});

document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})

p5.prototype.darkMode = function () {
  return (__md_get("__palette").index == 1);
}

p5.prototype.palette = function (inverted = false) {
  if (this.darkMode()!= inverted) {
    this.stroke(220); // light
    this.fill(220); //lighter
  }
  else {
    this.stroke(0); // darker
    this.fill(0); // dark
  }
}

p5.prototype.secondaryPalette = function (inverted= false) {
  if (this.darkMode()!= inverted) {
    this.stroke(50); // dark
    this.fill(190); // light
  }
  else {
    this.stroke(150);// light
    this.fill(230);  // lighter
  }
}

p5.prototype.textPalette = function (inverted= false, bold= false) {
  if (this.darkMode() != inverted) {
    if (!bold) this.noStroke();
    else this.stroke(190);
    this.fill(190);
  }
  else {
    if (!bold) this.noStroke();
    else this.stroke(0);
    this.fill(0);
  }
}

p5.prototype.defaultTextPalette = function (bold= false) {
    if (!bold) this.noStroke();
    else this.stroke(0);
    this.fill(0);
}

p5.prototype.drawPotato = function (px, py, radius) {
  let yoff = 0.0;
  this.push();
  this.translate(px, py);
  if (this.darkMode()) this.fill(120); 
  else this.fill(251); 

  this.beginShape();
  let xoff = 0;
  let firstX = 0; 
  let firstY = 0; 
  let first = true;
  
  for (var a = 0; a < this.TWO_PI; a += 0.1) {
    let offset = this.map(this.noise(xoff, yoff), 0, 1.0, -25, 25);
    let r = radius + offset;
    let x = r * this.cos(a);
    let y = r * this.sin(a);
    if(first){
    firstX = x; 
      firstY = y;
    first = false;
    }
    this.curveVertex(x, y);
    xoff += 0.1;
    //ellipse(x, y, 4, 4);
  }
  //curveVertex(firstX, firstY);
  this.endShape(this.CLOSE);
  
  yoff += 0.01;
  this.pop();
}

p5.prototype.drawAbsNamedArrowDot = function (cx, cy, tx, ty, name, location, offX, offY){
  this.drawNamedArrowDot(cx, cy, this.sqrt((ty-cy)*(ty-cy) + (tx-cx)*(tx-cx)), this.degrees(this.atan2(ty-cy, tx-cx)), name, location, offX, offY)
}

p5.prototype.drawAbsNamedArrow = function (cx, cy, tx, ty, name, location, offX, offY){
  this.drawNamedArrow(cx, cy, this.sqrt((ty-cy)*(ty-cy) + (tx-cx)*(tx-cx)), this.degrees(this.atan2(ty-cy, tx-cx)), name, location, offX, offY)
}

p5.prototype.drawNamedArrow = function (cx, cy, len, angle, name, location, offX, offY, use_palette = true) {
  this.push();
  if(use_palette) this.palette();
  this.translate(cx, cy);
  this.rotate(this.radians(angle));
  this.line(0,0,len, 0);

  this.triangle(len, 0, len - 7, -2, len -7, 2);
  this.rotate(-this.radians(angle));
  this.noStroke();
  this.text(name, this.cos(this.radians(angle))*len*location + offX, this.sin(this.radians(angle))*len*location + offY);
  this.pop();
}

p5.prototype.drawNamedArrowDot = function (cx, cy, len, angle, name, location, offX, offY){
  this.push();
  this.palette();
  this.translate(cx, cy);
  this.rotate(this.radians(angle));
  for(i = 0; i < len - 5; i += 10){
    this.line(i, 0, i+5, 0);
      }

      //this.fill(0);

  this.triangle(len, 0, len - 7, -2, len -7, 2);
  this.rotate(-this.radians(angle));
  this.noStroke();
  this.text(name, this.cos(this.radians(angle))*len*location + offX, this.sin(this.radians(angle))*len*location + offY);
  this.pop();
}

p5.prototype.dotline = function (xa, ya, xb, yb, bstep = 5, wstep = 5) {
  this.push();
  
  // Calculate the length of the line
  let dx = xb - xa;
  let dy = yb - ya;
  let len = this.dist(xa, ya, xb, yb);
  
  // Calculate the angle of the line
  let angle = this.atan2(dy, dx);
  
  // Translate and rotate the canvas to draw the line
  this.translate(xa, ya);
  this.rotate(angle);
  
  // Draw the dotted line
  for (let i = 0; i < len; i += bstep + wstep) {
    let nextX = i + bstep;
    if (nextX > len) {
      nextX = len;
    }
    this.line(i, 0, nextX, 0);
  }

  this.pop();
};


p5.prototype.lineGradient = function (xa, ya, xb, yb, colorA, colorB) {
  this.push();
  
  this.strokeGradient({
    from : [xa, ya],
    to : [xb, yb],
    steps : [
      colorA,
      colorB
    ]
  });

  this.line(xa, ya, xb, yb);

  this.pop();
};


p5.prototype.drawArrow = function (cx, cy, len, angle){
  this.push();
  this.palette();
  this.translate(cx, cy); 
  this.rotate(this.radians(angle));
  this.line(0,0,len, 0);
  
  this.triangle(len, 0, len - 7, -2, len -7, 2);
  this.pop();
}

p5.prototype.drawRotatingArrow = function (cx, cy, radius, angle) {
  this.push();
  this.palette();
  this.noFill();
  this.ellipseMode(this.CENTER);
  this.translate(cx, cy);
  this.rotate(this.radians(angle));
  this.arc(0, 0, radius, radius, 2.0*this.PI, -this.HALF_PI);
  this.translate(radius/2, radius-7);
  this.rotate(this.PI + this.HALF_PI);
  this.fill(0);
  this.triangle(radius, 0, radius - 7, -2, radius -7, 2);
  this.pop();
}













