window.addEventListener('DOMContentLoaded', ()=>{

    // Pointy McPointFace
    let pointy = document.querySelector("#PointyMcPointFace"),
        pointyTarget = document.querySelector("#pointys_target"),
        pointyY = 0,
        pointyInterval = setInterval( ()=>{
            pointyY += 1;
            if(pointyY>1) pointyY=0;
            pointy.style.backgroundPositionY = (pointyY*100)+'%';
        }, 690);
    pointyTarget.onclick = pointyTarget.onmouseover = ()=>{
        pointy.style.opacity = 0;
        pointy.style.right = '-6px';
        setTimeout(()=>{
            clearInterval(pointyInterval);
        },1000);
    };

});