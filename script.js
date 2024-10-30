level1Img.onclick = function () {
     menuBar.className = "hide";
     map.className = "show";
}

pos=0;
setting.onclick = function onSetting () {
        if(pos==0){
             menuSlider.style.filter="blur(2px);";
             settingPage.style.top= "-5px";
             settingPage.style.transition="1s";
             pos=1;
        }else if(pos==1){
             menuSlider.style.filter="blur(0px)";
             settingPage.style.top= "-492px";
             settingPage.style.transition="1s";
             pos=0;
            }
}
closePage.onclick=function(){
             menuSlider.style.filter="blur(0px)";
             settingPage.style.top= "-492px";
             settingPage.style.transition="1s";
             pos=0;
}




shopButton.onclick = function () {
    alert("...");
}