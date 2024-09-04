function setup() {
    createCanvas(400, 400);
  }
  
  function setup() {
    createCanvas(400, 400);
}



function draw() {
    background("lightgrey");
    fill("black");
    textSize(64);
    textAlign (CENTER, CENTER);
    
    let maximo = width;
    let minimo = 0;
    let palavra = "batata!";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
    

}
