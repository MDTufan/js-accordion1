var btn1 = document.getElementsByClassName("accordion");



for (i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", function() {
    
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
     panel.style.display = "none";
     
    } else {
     panel.style.display = "block";
    }
  });
}