level1Img.onclick = ()=> {
     menuBar.className = "hide";
     map.className = "show";
}

pos=0;
function onsetting(){
     if(pos==0){
          //    menuSlider.style.filter="blur(2px);";
             settingPage.style.top= "-5px";
             settingPage.style.transition="1s";
             pos=1;
        }else if(pos==1){
          //    menuSlider.style.filter="blur(0px)";
             settingPage.style.top= "-492px";
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

shopButton.onclick =()=> {
    alert("shopping closed");
}

backButtonMap.onclick=()=>{
     map.className="hide";
     menuBar.className="show";
}