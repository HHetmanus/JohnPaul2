var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("jpg1");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
let img2 = document.getElementById("jpg2");
    img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

let img3 = document.getElementById("jpg3");
    img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
    
let img4 = document.getElementById("jpg4");
    img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
  
let img5 = document.getElementById("jpg5");
    img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
    

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
