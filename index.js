function setup() {
    createCanvas(400, 600);
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
    drawDominoTile(50, 300, 60, 70, 6, 0);
    drawDominoTile(50, 370, 60, 70, 6, 0);

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
    drawDots(30, 25, dots1);
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
    if (numDots >= 6) {
        ellipse(x - 15, y + 9, 8, 8);
        ellipse(x + 15, y - 9, 8, 8);
        ellipse(x - 15, y + 27, 8, 8);
        ellipse(x + 15, y - -27, 8, 8);
    }
}
