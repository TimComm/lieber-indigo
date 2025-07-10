
'use client';

import Sketch from 'react-p5';
import p5Types from 'p5';

let angle = 0;
let points: p5Types.Vector[] = [];

const Tesseract = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);

    points[0] = p5.createVector(-1, -1, -1);
    points[1] = p5.createVector(1, -1, -1);
    points[2] = p5.createVector(1, 1, -1);
    points[3] = p5.createVector(-1, 1, -1);
    points[4] = p5.createVector(-1, -1, 1);
    points[5] = p5.createVector(1, -1, 1);
    points[6] = p5.createVector(1, 1, 1);
    points[7] = p5.createVector(-1, 1, 1);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.rotateX(-p5.PI / 2);
    p5.rotateY(angle);
    p5.scale(100);

    p5.stroke(255);
    p5.strokeWeight(4);
    p5.noFill();

    for (let i = 0; i < 4; i++) {
      p5.line(points[i].x, points[i].y, points[i].z, points[(i + 1) % 4].x, points[(i + 1) % 4].y, points[(i + 1) % 4].z);
      p5.line(points[i + 4].x, points[i + 4].y, points[i + 4].z, points[((i + 1) % 4) + 4].x, points[((i + 1) % 4) + 4].y, points[((i + 1) % 4) + 4].z);
      p5.line(points[i].x, points[i].y, points[i].z, points[i + 4].x, points[i + 4].y, points[i + 4].z);
    }

    angle += 0.01;
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default Tesseract;
