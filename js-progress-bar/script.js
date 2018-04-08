function progress(){
  let top = window.scrollY;
  docHeight = document.documentElement.scrollHeight;
  winHeight = window.innerHeight;
  let totalScroll = (top/(docHeight-winHeight))*100;
  document.querySelector('.fill').style.width = totalScroll + '%';}
window.addEventListener('scroll', progress);