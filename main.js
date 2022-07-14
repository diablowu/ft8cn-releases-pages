






window.onload = function () {
  document.getElementById("close").onclick = function () {
    document.getElementById("weixin-tip").style.display = "none";
  }

  const tip = document.getElementById("weixin-tip");
  const tipBg = document.getElementById("weixin-tip-bg");
  const isWeixin = navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1;


  let links = document.getElementsByClassName("download-link");

  for(let link of links){
    if(isWeixin){
      link.onclick = function(e){
        e.preventDefault();
        tip.style.height = window.innerHeight + "px";
        tipBg.style.width = window.innerWidth + "px";
        tip.style.display = "block";
        document.getElementById("close").style.display = "block";
      }
    }else{
      link.setAttribute("href",link.getAttribute("data-href"));
    }
  }
}










