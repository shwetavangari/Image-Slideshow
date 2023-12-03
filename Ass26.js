var btnPrev=document.querySelector(".btnPrev");
var btnNext=document.querySelector(".btnNext");
var slides=document.querySelectorAll(".slide1");

var counter=0;
// console.log(slides)
slides.forEach(function(slide1,index){
    slide1.style.left=`${index*100}%`;
})

// Previous Button
btnPrev.addEventListener("click",function(){
    counter--;
    console.log(counter);
    if(counter<0){
        counter=0;
    }
    // console.log("Hello",counter);
    slides.forEach(function(slide1){
        slide1.style.transform=`translate(-${counter*100}%)`;
    })
})

// Next Button
btnNext.addEventListener("click",function(){
    counter++;
    console.log(counter);
    if(counter>4){
        counter=0;
    }
    slides.forEach(function(slide1){
        slide1.style.transform=`translate(-${counter*100}%)`;
    })
})

setInterval(sliding(),3000);

