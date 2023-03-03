// function setup() {
//     createCanvas(800, 600);
//     noFill();
//     strokeWeight(2);
//     stroke(0);
//   }

//   function draw() {
//     background(255);
//     drawDominos();
//   }

//   function drawDominos() {
//     const pieceWidth = 30;
//     const pieceHeight = 40;
//     const spacing = 5;
//     const rows = 4;
//     const cols = 7;
//     const startX = 100;
//     const startY = 100;

//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < cols; col++) {
//         const x = startX + col * (pieceWidth + spacing);
//         const y = startY + row * (pieceHeight + spacing);
//         drawDomino(x, y, row * cols + col + 1);
//       }
//     }
//   }

//   function drawDomino(x, y, value) {
//     // dibuja la parte superior de la ficha
//     rect(x, y, 30, 20);
//     if (value % 2 === 1) {
//       circle(x + 15, y + 10, 5);
//     }
//     if (value >= 2) {
//       circle(x + 10, y + 5, 5);
//       circle(x + 20, y + 15, 5);
//     }
//     if (value >= 4) {
//       circle(x + 20, y + 5, 5);
//       circle(x + 10, y + 15, 5);
//     }
//     if (value === 6) {
//       circle(x + 10, y + 10, 5);
//       circle(x + 20, y + 10, 5);
//     }

//     // dibuja la parte inferior de la ficha
//     rect(x, y + 20, 30, 20);
//     if (value >= 2) {
//       circle(x + 10, y + 25, 5);
//       circle(x + 20, y + 35, 5);
//     }
//     if (value >= 4) {
//       circle(x + 20, y + 25, 5);
//       circle(x + 10, y + 35, 5);
//     }
//   }

// function setup() {
//     createCanvas(400, 400);
//   }

//   function draw() {
//     background(255);
//     stroke(0);
//     noFill();

//     const rectWidth = 30;
//     const rectHeight = 40;
//     const spacing = 5;
//     const startX = 50;
//     const startY = 50;

//     for (let i = 0; i < 7; i++) {
//       const x = startX + i * (rectWidth + spacing);
//       rect(x, startY, rectWidth, rectHeight);
//     }

//     for (let i = 0; i < 7; i++) {
//       const x = startX + i * (rectWidth + spacing);
//       const y = startY + rectHeight + spacing;
//       rect(x, y, rectWidth, rectHeight);
//     }
//   }

// function setup() {
//     createCanvas(400, 400);
//   }

//   function draw() {
//     background(255);
//     stroke(0);
//     noFill();

//     const rectWidth = 30;
//     const rectHeight = 40;
//     const spacing = 5;
//     const startX = 50;
//     const startY = 50;

//     for (let i = 0; i < 7; i++) {
//       const x = startX + i * (rectWidth + spacing);
//       const topY = startY;
//       const bottomY = startY + rectHeight + spacing;
//       rect(x, topY, rectWidth, rectHeight);
//       rect(x, bottomY, rectWidth, rectHeight);

//       // Dibuja los puntos dentro del rectángulo superior
//       if (i > 0) {
//         const numDots = i;
//         const dotSize = 6;
//         const dotSpacing = 8;
//         const dotX = x + rectWidth / 2;
//         const dotY = topY + rectHeight / 2;
//         for (let j = 0; j < numDots; j++) {
//           const dotOffset = (numDots - 1) * dotSpacing / 2;
//           const dotPos = dotX - dotOffset + j * dotSpacing;
//           circle(dotPos, dotY, dotSize);
//         }
//       }
//     }
//   }
// function setup() {
//     createCanvas(400, 100); // Crea un canvas de 400x100 pixeles
// }

// function draw() {
//     background(220); // Establece el fondo a gris claro

//     for (let i = 0; i < 7; i++) {
//         // Bucle para dibujar los 7 rectángulos
//         let rectPosX = i * 40 + 20; // Posición x del rectángulo
//         let linePosX1 = rectPosX; // Posición x de la línea divisoria (comienzo)
//         let linePosX2 = rectPosX + 30; // Posición x de la línea divisoria (fin)
//         rect(rectPosX, 10, 30, 80); // Dibuja el rectángulo en la posición correcta
//         line(linePosX1, 10 + 40, linePosX2, 10 + 40); // Dibuja la línea divisoria en el medio del rectángulo
//     }
// }

// function setup() {
//     createCanvas(400, 100); // Crea un canvas de 400x100 pixeles
// }

// function draw() {
//     background(220); // Establece el fondo a gris claro

//     for (let i = 0; i < 7; i++) {
//         // Bucle para dibujar los 7 rectángulos
//         let rectPosX = i * 40 + 20; // Posición x del rectángulo
//         let linePosX1 = rectPosX; // Posición x de la línea divisoria (comienzo)
//         let linePosX2 = rectPosX + 30; // Posición x de la línea divisoria (fin)
//         rect(rectPosX, 10, 30, 80); // Dibuja el rectángulo en la posición correcta

//         let num = i.toString(); // Convierte el número de rectángulo a una cadena
//         let numWidth = textWidth(num - 1); // Ancho del número
//         let numHeight = textAscent() + textDescent(); // Altura del número
//         let numPosX = rectPosX + 15 - numWidth / 2; // Posición x del número
//         let numPosY = 10 + 40 + numHeight / 2; // Posición y del número
//         textSize(16); // Tamaño de fuente para el número
//         textAlign(CENTER, CENTER); // Alineación del texto
//         text(num - 1, numPosX, numPosY); // Dibuja el número

//         line(linePosX1, 10 + 40, linePosX2, 10 + 40); // Dibuja la línea divisoria en el medio del rectángulo
//     }
// }

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    // Dibujar la ficha de dominó con 0 puntos
    drawDominoTile(50, 50, 60, 50, 0, 0);
    drawDominoTile(50, 100, 60, 50, 0, 0);

    // Dibujar la ficha de dominó con 1 punto
    drawDominoTile(150, 50, 60, 50, 1, 0);
    drawDominoTile(150, 100, 60, 50, 1, 0);

    // Dibujar la ficha de dominó con 2 puntos
    drawDominoTile(250, 50, 60, 50, 2, 0);
    drawDominoTile(250, 100, 60, 50, 2, 0);

    // Dibujar la ficha de dominó con 3 puntos
    drawDominoTile(50, 180, 60, 50, 3, 0);
    drawDominoTile(50, 230, 60, 50, 3, 0);

    // Dibujar la ficha de dominó con 4 puntos
    drawDominoTile(150, 180, 60, 50, 4, 0);
    drawDominoTile(150, 230, 60, 50, 4, 0);

    // Dibujar la ficha de dominó con 5 puntos
    drawDominoTile(250, 180, 60, 50, 5, 0);
    drawDominoTile(250, 230, 60, 50, 5, 0);

    // Dibujar la ficha de dominó con 6 puntos
    drawDominoTile(50, 300, 60, 50, 6, 0);
    drawDominoTile(50, 350, 60, 50, 6, 0);

    // // Dibujar la ficha de dominó con 0 puntos en la parte inferior
    // drawDominoTile(150, 250, 60, 30, 0, 180);

    // // Dibujar la ficha de dominó con 1 punto en la parte inferior
    // drawDominoTile(250, 250, 60, 30, 1, 180);
}

function drawDominoTile(x, y, w, h, dots1, dots2) {
    // Dibujar la ficha de dominó con los puntos especificados
    push();
    translate(x, y);

    // Dibujar el borde de la ficha
    strokeWeight(2);
    stroke(0);
    fill(255);
    rect(0, 0, w, h, 10);

    // Dibujar los puntos en la parte superior de la ficha
    drawDots(20, 15, dots1);

    // Dibujar los puntos en la parte inferior de la ficha
    push();
    translate(w, h);
    rotate(radians(dots2));
    drawDots(40, 15, dots2);
    pop();

    pop();
}

function drawDots(x, y, numDots) {
    // Dibujar los puntos en la posición especificada
    noStroke();
    fill(0);
    if (numDots % 2 === 1) {
        ellipse(x, y, 8, 8);
    }
    if (numDots >= 2) {
        ellipse(x - 15, y + 9, 8, 8);
        ellipse(x + 15, y - 9, 8, 8);
    }
    if (numDots >= 4) {
        ellipse(x + 15, y + 9, 8, 8);
        ellipse(x - 15, y - 9, 8, 8);
    }
}

// function setup() {
//     createCanvas(500, 500);
// }

// function draw() {
//     background(255);
//     drawDominoTile(50, 50, 60, 120, 0, 6); // 0 | 6
//     drawDominoTile(130, 50, 60, 120, 1, 5); // 1 | 5
//     drawDominoTile(210, 50, 60, 120, 2, 4); // 2 | 4
//     drawDominoTile(290, 50, 60, 120, 3, 3); // 3 | 3

//     drawDominoTile(50, 220, 60, 120, 6, 0); // 6 | 0
//     drawDominoTile(130, 220, 60, 120, 5, 1); // 5 | 1
//     drawDominoTile(210, 220, 60, 120, 4, 2); // 4 | 2
//     drawDominoTile(290, 220, 60, 120, 3, 3); // 3 | 3
// }

// function drawDominoTile(x, y, w, h, topDots, bottomDots) {
//     // Dibujar el rectángulo
//     noFill();
//     stroke(0);
//     rect(x, y, w, h);

//     // Dibujar los puntos superiores
//     drawDots(x + w / 2, y + h / 4, topDots);

//     // Dibujar los puntos inferiores
//     drawDots(x + w / 2, y + (h * 3) / 4, bottomDots);
// }

// function drawDots(x, y, numDots) {
//     // Dibujar los puntos en la posición especificada
//     noStroke();
//     fill(0);
//     if (numDots % 2 === 1) {
//         ellipse(x, y, 8, 8);
//     }
//     if (numDots >= 2) {
//         ellipse(x - 15, y + 10, 8, 8);
//         ellipse(x + 15, y - 10, 8, 8);
//     }
//     if (numDots >= 4) {
//         ellipse(x + 15, y + 10, 8, 8);
//         ellipse(x - 15, y - 10, 8, 8);
//     }
// }
