// menu slider
pos1=0
rightButtom.onclick=()=>{
     if(pos>-200){
          pos = pos - 100;
          menuSlider.style.left= pos + "%";
          menuSlider.style.transition="1s";

     }else if(pos==-200){
          alert("over")
     }
}
leftButtom.onclick=()=>{
     if(pos<0){
          pos = pos + 100;
          menuSlider.style.left= pos + "%";
          menuSlider.style.transition="1s";
     }else if(pos==0){
          alert("over")
     }
}

// game setting
pos=0;
function onsetting(){
     if(pos==0){
             settingPage.style.top= "-5px";
             settingPage.style.transition="1s";
             settingPage.style.backdropFilter="brightness(25%)";
             pos=1;
        }else if(pos==1){
             settingPage.style.top= "-700px";
             settingPage.style.transition="1s";
             pos=0;
            }
}
setting.onclick = ()=> {
     onsetting();
}
closePage.onclick=()=> {
     onsetting();
}

level1Img.onclick = ()=> {
     menuBar.className = "hide";
     map.className = "show";
}

shopButton.onclick =()=> {
    alert("shopping closed");
}

backButtonMap.onclick=()=>{
     map.className="hide";
     menuBar.className="show";
}

backButtonLand.onclick=()=>{
     firstPlace.className="hide";
     map.className="show";
}

sheriffShow.onclick=()=>{
     // alert("!!وچه ره دماسین!!");
     sheriffShow.style.display="none";
}

selectLevel.onclick=()=>{
     map.className="hide";
     firstPlace.className="show";
}

weed.onclick=()=>{
     alert("...");
     weed.style.display="none";
     weedTick.style.display="block";
}

star.onclick=()=>{
     alert("...");
     star.style.display="none";
     starTick.style.display="block";
}

phone.onclick=()=>{
     alert("....")
     phone.style.display="none";
     phoneTick.style.display="block";
}
drawerPic.onclick=()=>{
     drawerPic.style.display="none";
}
gun.onclick=()=>{
     alert("....")
     gun.style.display="none";
     gunTick.style.display="block";
}