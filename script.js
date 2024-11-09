// menu slider
pos1 = 0
rightButtom.onclick = () => {
     if (pos > -200) {
          pos = pos - 100;
          menuSlider.style.left = pos + "%";
          menuSlider.style.transition = "1s";

     } else if (pos == -200) {
          alert("over")
     }
}
leftButtom.onclick = () => {
     if (pos < 0) {
          pos = pos + 100;
          menuSlider.style.left = pos + "%";
          menuSlider.style.transition = "1s";
     } else if (pos == 0) {
          alert("over")
     }
}

// game setting
pos = 0;
function onsetting() {
     if (pos == 0) {
          settingPage.style.top = "-5px";
          settingPage.style.transition = "1s";
          settingPage.style.backdropFilter = "brightness(25%)";
          pos = 1;
     } else if (pos == 1) {
          settingPage.style.top = "-700px";
          settingPage.style.transition = "1s";
          pos = 0;
     }
}
setting.onclick = () => {
     onsetting();
}
settingButton.onclick = () => {
     onsetting();
}
closePage.onclick = () => {
     onsetting();
}

level1Img.onclick = () => {
     menuBar.className = "hide";
     map.className = "show";
}

shopButton.onclick = () => {
     alert("shopping closed");
}

backButtonMap.onclick = () => {
     map.className = "hide";
     menuBar.className = "show";
}

backButtonLand.onclick = () => {
     firstPlace.className = "hide";
     map.className = "show";
}

sheriffShow.onclick = () => {
     // alert("!!وچه ره دماسین!!");
     sheriffShow.style.display = "none";
}

selectLevel.onclick = () => {
     map.className = "hide";
     firstPlace.className = "show";
}

weed.onclick = () => {

     weed.style.display = "none";
     weedTick.style.display = "block";
}

starRate.onclick = () => {

     star.style.display = "none";
     starTick.style.display = "block";
}

phone.onclick = () => {

     phone.style.display = "none";
     phoneTick.style.display = "block";
}
drawerPic.onclick = () => {
     drawerPic.style.display = "none";
}
gun.onclick = () => {

     gun.style.display = "none";
     gunTick.style.display = "block";
}
medal.onclick = () => {

     medal.style.display = "none";
     auFound.play();
     starTick.style.display = "block";
}
paper.ondblclick = () => {
     // document.getElementById("paper").classList.remove("officePaper");
     // document.getElementById("paper").classList.add("officePaper2");
     onPaper();
}

handcuffs.onclick = () => {
     handcuffs.style.display = "none";
     dastbandTick.style.display = "block";
}

hatPic.ondblclick = () => {
     hatPic.style.top = "215px";
     hatPic.style.left = "310px";
}

// paper to trashCan 
function onPaper() {
     document.getElementById("paper").classList.remove("officePaper");
     document.getElementById("paper").classList.add("officePaper2");

     // console.log("crumpled paper");

     const draggable = document.getElementById("paper");
     const target = document.getElementById("trashCan");
     let isDragging = false;
     let offsetX, offsetY;

     draggable.onmousedown = function (event) {
          isDragging = true;
          offsetX = event.clientX - draggable.offsetLeft;
          offsetY = event.clientY - draggable.offsetTop;

          event.preventDefault();

          // console.log(offsetX, offsetY);
     }

     document.onmousemove = function (event) {
          if (isDragging) {
               paper.style.left = (event.clientX - offsetX) + "px";
               paper.style.top = (event.clientY - offsetY) + "px";
               console.log(paper.style.left, paper.style.top);
          }
     }
     document.onmouseup = function (event) {
          if (isDragging) {
               isDragging = false;
          }

          const draggableRect = paper.getBoundingClientRect();
          const targetRect = trashCan.getBoundingClientRect();

          if (
               draggableRect.left < targetRect.right &&
               draggableRect.right > targetRect.left &&
               draggableRect.top < targetRect.bottom &&
               draggableRect.bottom > targetRect.top
          ) {
               paper.style.display = "none";
               document.getElementById("trashCan").classList.remove("officeTrashCan");
               document.getElementById("trashCan").classList.add("officeTrashCan2");
          }
     }
}

trashCan.onclick = () => {
     if (
          document.getElementsByClassName("officeTrashCan2")
     ) {
          // console.log("shod");
          trashCan.style.display = "none";
          trashTick.style.display = "block";
     }
}
footerPos = 0;
leftButtonFooter.style.display= "none";
rightButtonFooter.onclick=()=>{
     if(pos > -70){
          pos = pos - 70;
          objectSlider.style.left = pos + "%";
          objectSlider.style.transition = "1s";
          rightButtonFooter.style.display= "none";
          leftButtonFooter.style.display= "block";
     } 
     // else if(pos == -70){

     // }
}
leftButtonFooter.onclick=()=>{
     if(pos < 0){
          pos = pos + 70;
          objectSlider.style.left = pos + "%";
          objectSlider.style.transition = "1s";
          leftButtonFooter.style.display= "none";
          rightButtonFooter.style.display= "block";
     }
}