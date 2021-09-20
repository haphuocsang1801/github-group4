window.addEventListener("load",function(){
    const slider=document.querySelector(".slider");
    const sliderMain=document.querySelector(".slider-main");
    const nextBtn=document.querySelector(".slider-next");
    const prveBtn=document.querySelector(".slider-prve");
    const sliderItems=document.querySelectorAll(".slider-item");
    const dotItem=document.querySelectorAll(".slider-dot-item");

    const sliderItemWidth=sliderItems[0].offsetWidth;
    const sliderLength=sliderItems.length;

    console.log("sliderItemWidth",sliderItemWidth);

    nextBtn.addEventListener("click",function(){

    })
    prveBtn.addEventListener("click",function(){

    })
    function handleChangeSlider(direction){
        if(direction==1){
            console.log("next lide");
        }
        else{
            console.log("pre")
        }
    }
});