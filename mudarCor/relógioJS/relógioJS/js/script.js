function relogio() {
  let horaAgora = new Date();
  console.log(horaAgora);

  let hora = horaAgora.getHours();
  console.log(hora);

  let minuto = horaAgora.getMinutes();
  console.log(minuto);

  let segundo = horaAgora.getSeconds();
  console.log(segundo);
  
  if (segundo < 10) {
    segundo = "0" + segundo     
   }

   if (minuto < 10) {
    minuto = "0" + minuto
   }
  
  document.getElementById("relogio").innerHTML =
    hora + ":" + minuto + ":" + segundo;
}

setInterval(relogio, 1000);