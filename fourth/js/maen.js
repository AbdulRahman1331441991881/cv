var lis = document.getElementById('lis'),
    i1 = document.getElementById('i1'),
    i2 = document.getElementById('i2'),
    h1 = document.getElementById('h1');
i1.addEventListener('click', () => {
    lis.style.display = "block";
    h1.style.display = "none";
    i1.style.display = "none";
    document.getElementById('carouselExampleControls').style.display = "none";
    // i1.style.marginRight = "1000px";

});
i2.addEventListener('click', () => {
    lis.style.display = "none";
    h1.style.display = "block";
    // i1.style.marginLeft = "1000px";
    document.getElementById('carouselExampleControls').style.display = "flex";
    
    i1.style.display = "block";
});