window.addEventListener ('load',function(event){ //con esto nos aseguramos que el window haya cargado
/*  console.log(event);//ver caracteristicas del evento en consola
  console.log(event.target);//Recibe la carga
  console.log(event.currentTarget);//El que escucha el evento--No todos los elementos se asocian a todos los eventos--
*/
var title = document.body.firstElementChild;
//console.log(title);
title.addEventListener('mouseover',function(event){
  title.textContent = 'Hola otra vez!';
})
title.addEventListener('mouseout', function(event){
  event.target.textContent = 'Hola mundo';

})
var image1 = document.body.getElementsByTagName('img')[0];
  image1.addEventListener('mouseover', function(event){
image1.src = 'assets/imgs/garfielOdie.png';
  //event.currentTarget.src = 'assets/imgs/GarfieldCurious.png';
})
  image1.addEventListener('mouseout', function(event){
  image1.src='assets/imgs/GarfieldCurious.png';
  })
})
