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

let positionLevel = 0;
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
backButtonLand2.onclick = () => {
     secondPlace.className = "hide";
     map.className = "show";
}

sheriffShow.onclick = () => {
     // alert("!!وچه ره دماسین!!");
     firstTalk.className = "hide";
     secondTalk.className = "show";
     if (secondTalk.className = "show") {
          sheriffShow.onclick = () => {
               sheriffShow.style.display = "none";
          }
     }

}

sheriffShow2.onclick = () => {
     // alert("!!وچه ره دماسین!!");
     firstTalk2.className = "hide";
     secondTalk2.className = "show";
     if (secondTalk2.className = "show") {
          sheriffShow2.onclick = () => {
               sheriffShow2.style.display = "none";
          }
     }

}

selectLevel.onclick = () => {
     if (positionLevel == 0) {
          map.className = "hide";
          firstPlace.className = "show";
     } else if (positionLevel == 1) {
          console.log(positionLevel);
          map.className = "hide";
          secondPlace.className = "show";
     } else if (positionLevel == 2) {
          console.log(positionLevel);
          console.log("خوبی عزیز مرحله ۳ رو نساختیم!");
          alert("خوبی عزیز مرحله ۳ رو نساختیم!");
     }
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
     auFound.play();
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
               // console.log(paper.style.left, paper.style.top);
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
          auFound.play();
     }
}
footerPos = 0;
leftButtonFooter.style.display = "none";
rightButtonFooter.onclick = () => {
     if (pos > -70) {
          pos = pos - 70;
          objectSlider.style.left = pos + "%";
          objectSlider.style.transition = "1s";
          rightButtonFooter.style.display = "none";
          leftButtonFooter.style.display = "block";
     }
     // else if(pos == -70){

     // }
}
leftButtonFooter.onclick = () => {
     if (pos < 0) {
          pos = pos + 70;
          objectSlider.style.left = pos + "%";
          objectSlider.style.transition = "1s";
          leftButtonFooter.style.display = "none";
          rightButtonFooter.style.display = "block";
     }
}

const tickElements = [
     document.getElementById('phoneTick'),
     document.getElementById('weedTick'),
     document.getElementById('gunTick'),
     document.getElementById('starTick'),
     document.getElementById('trashTick'),
     document.getElementById('dastbandTick')
];


function checkAllTicks() {
     const allVisible = tickElements.every(elem => getComputedStyle(elem).display === 'block');

     if (allVisible) {
          secondTalk.className = "hide";
          thirdTalk.className = "show";
          sheriffShow.style.display = "block";
          positionLevel++;
          if (sheriffShow.style.display = "block") {
               sheriffShow.onclick = () => {
                    firstPlace.className = "hide";
                    map.className = "show";
                    // getElementsByClassName("selectLevel").
                    selectLevel.style.left = "115px";
                    selectLevel.style.top = "290px";
               }
          }
          console.log(positionLevel);
     }
}

tickElements.forEach(elem => {
     const observer = new MutationObserver(checkAllTicks);
     observer.observe(elem, { attributes: true, attributeFilter: ['style'] });
});



// level twe

carWheel.onclick = () => {
     auFound.play();
     carWheel.style.display = "none";
     carWheelTick.style.display = "block";
}

bone.onclick = () => {
     auFound.play();
     bone.style.display = "none";
     boneTick.style.display = "block";
}

dollFace.onclick = () => {
     auFound.play();
     dollFace.style.display = "none";
     dollFaceTick.style.display = "block";
}

eggs.onclick = () => {
     auFound.play();
     eggs.style.display = "none";
     eggsTick.style.display = "block";
}

squirel.onclick = () => {
     auFound.play();
     squirel.style.display = "none";
     squirelTick.style.display = "block";
}

shoes.onclick = () => {
     auFound.play();
     shoes.style.display = "none";
     shoesTick.style.display = "block";
}

postPocket.onclick = () => {
     auFound.play();
     postPocket.style.display = "none";
     postPocketTick.style.display = "block";
}

closeDoor.onclick = () => {
     closeDoor.style.display = "none";
}

partOfTreeTopOfSquirel.onclick = () => {
     partOfTreeTopOfSquirel.style.transform = "rotate(40deg)";
     partOfTreeTopOfSquirel.style.top = "-24px";
     partOfTreeTopOfSquirel.style.left = "243px";


}

const tickElements2 = [
     document.getElementById('carWheelTick'),
     document.getElementById('boneTick'),
     document.getElementById('postPocketTick'),
     document.getElementById('dollFaceTick'),
     document.getElementById('eggsTick'),
     document.getElementById('squirelTick'),
     document.getElementById('shoesTick')
];

function checkAllTicks2() {
     const allVisible = tickElements2.every(elem => getComputedStyle(elem).display === 'block');

     if (allVisible) {
          secondTalk2.className = "hide";
          thirdTalk2.className = "show";
          sheriffShow2.style.display = "block";
          positionLevel++;
          if (sheriffShow2.style.display = "block") {
               sheriffShow2.onclick = () => {
                    secondPlace.className = "hide";
                    map.className = "show";
                    // getElementsByClassName("selectLevel").
                    selectLevel.style.left = "118px";
                    selectLevel.style.top = "160px";
               }
          }
          console.log(positionLevel);
     }
}

tickElements2.forEach(elem => {
     const observer = new MutationObserver(checkAllTicks2);
     observer.observe(elem, { attributes: true, attributeFilter: ['style'] });
});

footerPos2 = 0;
leftButtonFooter2.style.display = "none";
rightButtonFooter2.onclick = () => {
     console.log("object");
     if (pos > -70) {
          pos = pos - 70;
          objectSlider2.style.left = pos + "%";
          objectSlider2.style.transition = "1s";
          rightButtonFooter2.style.display = "none";
          leftButtonFooter2.style.display = "block";
     }
     // else if(pos == -70){

     // }
}
leftButtonFooter2.onclick = () => {
     if (pos < 0) {
          pos = pos + 70;
          objectSlider2.style.left = pos + "%";
          objectSlider2.style.transition = "1s";
          leftButtonFooter2.style.display = "none";
          rightButtonFooter2.style.display = "block";
     }
}