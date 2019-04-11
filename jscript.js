var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (let i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
    let GetPost = document.getElementById("GetPost");

/*const getPosts = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/posts");

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            alert(xhr.status + ": " + xhr.statusText);
        } else {
            const data = JSON.parse(xhr.responseText);
            const wrapper = document.querySelector(".post-wrapper");
            data.forEach(post => {...});
        }

    }
}*/

// document.body.style.backgroundColor = "red";




