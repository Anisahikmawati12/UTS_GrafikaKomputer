function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(135, 206, 235); // Langit biru muda

  // Gambar Matahari
  fill(255, 223, 0); // Warna kuning untuk matahari
  noStroke();
  ellipse(700, 100, 100, 100); // Posisi dan ukuran matahari

  // Gambar Gunung
  fill(34, 139, 34); // Warna hijau gelap untuk gunung
  triangle(200, 400, 400, 150, 600, 400); // Gunung 1
  triangle(400, 400, 600, 200, 800, 400); // Gunung 2
  triangle(0, 400, 200, 200, 400, 400);   // Gunung 3

  // Gambar Burung
  drawBird(100, 150);
  drawBird(150, 100);
  drawBird(200, 180);

  // Gambar Jalan
  fill(50); // Warna abu-abu gelap untuk jalan
  rect(350, 400, 100, 200); // Jalan vertikal
  
   // Gambar Marka Jalan
  fill(255); // Warna putih untuk marka jalan
  for (let i = 410; i < 600; i += 30) {
    rect(395, i, 10, 20); // Marka jalan vertikal
  }

  // Gambar Mobil
  drawCar(370, 500);
}

// Fungsi untuk menggambar burung
function drawBird(x, y) {
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(x, y, 20, 20, PI, 0);       // Sayap kiri burung
  arc(x + 20, y, 20, 20, PI, 0);  // Sayap kanan burung
}

// Fungsi untuk menggambar mobil
function drawCar(x, y) {
  fill(255, 0, 0); // Warna merah untuk badan mobil
  rect(x, y, 60, 30); // Badan mobil
  fill(0, 0, 255); // Warna biru untuk atap mobil
  rect(x + 10, y - 20, 40, 20); // Atap mobil

fill(0); // Warna hitam untuk roda
  ellipse(x + 15, y + 30, 20, 20); // Roda kiri
  ellipse(x + 45, y + 30, 20, 20); // Roda kanan
}
