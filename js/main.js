const img1 = document.querySelector('.img-col1');
const img2 = document.querySelector('.img-col2');
const img3 = document.querySelector('.img-col3');

img1.addEventListener('mouseover', ()=>{
    img1.style.width = "50%";
    img2.style.width = "25%";
    img3.style.width = "25%";
});

img2.addEventListener('mouseover', ()=>{
    img1.style.width = "25%";
    img2.style.width = "50%";
    img3.style.width = "25%";
});

img3.addEventListener('mouseover', ()=>{
    img1.style.width = "25%";
    img2.style.width = "25%";
    img3.style.width = "50%";
});