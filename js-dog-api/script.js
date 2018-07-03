const doggos = document.querySelector('.doggos');

fetch("https://dog.ceo/api/breeds/image/random")
.then(res=>res.json())
.then(res=>{
  const img = document.createElement('img');
  img.src = res.message;
  img.alt = "cute dog";
  doggos.appendChild(img)
});
