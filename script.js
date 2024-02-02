let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 3000)

function nextImage() {
    count++;
    if(count>3) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

window.onload = function() {
    let sections = document.querySelectorAll('.conteudo-quinario-subsecao');
    sections.forEach(function(section) {
      section.querySelector('img').addEventListener('click', function() {
        let paragraph = section.nextElementSibling;
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
          paragraph.style.display = 'block';
          this.src = "images/icons/icons8-menos-24 (1).png";
        } else {
          paragraph.style.display = 'none';
          this.src = "images/icons/icons8-mais-24 (1).png";
        }
      });
    });
}