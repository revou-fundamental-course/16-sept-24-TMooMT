// ini js



replaceName();
function replaceName() {
    let name = prompt('Masukkan nama anda')
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}



// Auto-slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function replaceName() {
    let name = prompt('Masukkan nama anda')
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}



function result() {
    // Valisadi input
    if (document.getElementById("nama").value == "") {
      alert("Masukkan Nama");
      document.getElementById("nama").focus();
      return false;
    }

    if (document.getElementById("tanggal-lahir").value == "") {
      alert("Masukkan Tanggal Lahir");
      document.getElementById("tanggal-lahir").focus();
      return false;
    }

    if (
      document.querySelector('input[name="gender"]:checked').value == ""
    ) {
      alert("Pilih Jenis Kelamin");
      document.querySelector('input[name="gender"]:checked').focus();
      return false;
    }

    if (document.getElementById("pesan").value == "") {
      alert("Masukkan Pesan");
      document.getElementById("pesan").focus();
      return false;
    }

    const nama = document.getElementById("nama").value;
    const tglLhr = document.getElementById("tanggal-lahir").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    const pesan = document.getElementById("pesan").value;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toDateString();

    // result
    document.getElementById("result-nama").innerHTML = nama;
    document.getElementById("result-tgl-lhr").innerHTML = tglLhr;
    document.getElementById("result-gender").innerHTML = gender;
    document.getElementById("result-pesan").innerHTML = pesan;

    // clear input
    document.getElementById("nama").value = "";
    document.getElementById("tanggal-lahir").value = "";
    document.getElementById("pesan").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
  }