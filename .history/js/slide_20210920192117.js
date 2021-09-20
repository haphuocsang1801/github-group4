window.addEventListener("load",function(){
    const slider=document.querySelector(".slider");
    const sliderMain=document.querySelector(".slider-main");
    const nextBtn=document.querySelector(".slider-next");
    const prveBtn=document.querySelector(".slider-prev");
    const sliderItems=document.querySelectorAll(".slider-item");
    const dotItem=document.querySelectorAll(".slider-dot-item");

    const sliderItemWidth=sliderItems[0].offsetWidth;
    const sliderLength=sliderItems.length;

    let positionX = 0;
    let index=0;
    nextBtn.addEventListener("click",function(){
        handleChangeSlider(1);
    });
    prveBtn.addEventListener("click",function(){
        handleChangeSlider(-1);
    });
    function handleChangeSlider(direction){
        if(direction==1){
            index++;  
            if(index >= sliderLength ) return;  
            positionX = positionX - sliderItemWidth;
            console.log("next lide",positionX);
            sliderMain.style=`transform: translateX(${positionX}px)`;
        }
        else if(direction==-1){
            index--;
            if(index <= 0)
            positionX=positionX + sliderItemWidth;
            sliderMain.style=`transform: translateX(${positionX}px)`;
            console.log("preves slide")
        }
    }
});