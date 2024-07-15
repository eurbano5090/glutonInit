

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  function mostrar(){ 
    document.querySelector("#comunica").style.display="block"}
function mostrar2(){ 
        document.querySelector("#reserva").style.display="block"}



$(document).ready(function(){
    $("#comunica").submit(function(evento){
        evento.preventDefault();

  var name=$("#name").val();
  var mail=$("#correo").val();
  var phone=$("#phone").val();
  var motivo=$("#motivo").val();
  var textarea1=$("#hora").val();
  var textarea=$("#textarea1").val();
  console.log(phone)

   if(name==""){
    console.log(name)
    alert('el campo nombre no  puede estar vacio')
  }else if(mail=="" || mail==null){
    alert('el campo correo es obligatorio')
  }else if(phone==""){
    alert('el campo telefono es obligatorio')
  }else if(motivo==""){
    alert('el campo fecha es necesario')
  }else if(textarea=="" ){
    alert('el campo hora es obligatorio')
  }

   $("#comunica").submit(function(){
    alert('Muchas Gracias '+ name +' Hemos registrado sus '+
    motivo +' y enviaremos una respuesta al correo ' + mail

     +'. Gracias por preferirnos.')
    });

    })
})
