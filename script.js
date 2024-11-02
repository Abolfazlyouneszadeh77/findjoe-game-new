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



level1Img.onclick = () => {
     menuBar.className = "hide";
     map.className = "show";
}

selectLevel.onclick = () => {
     console.log("object");
     map.className = "hide";
     firstPlace.className = "show";
}


// game setting
pos = 0;
function onsetting() {
     if (pos == 0) {
          //    menuSlider.style.filter="blur(2px);";
          settingPage.style.top = "-5px";
          settingPage.style.transition = "1s";
          pos = 1;
     } else if (pos == 1) {
          //    menuSlider.style.filter="blur(0px)";
          settingPage.style.top = "-492px";
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

shopButton.onclick = () => {
     alert("shopping closed");
}

backButtonMap.onclick = () => {
     map.className = "hide";
     menuBar.className = "show";
}
backButtonLand.onclick = () => {
     map.className = "show";
     firstPlace.className = "hide";
}
