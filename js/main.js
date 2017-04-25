function translate(){
	var title= document.getElementById("form-signin-heading");
	var email= document.getElementById("inputEmail");
	var password= document.getElementById("inputPassword");
	var remember= document.getElementsByTagName("span")[0];
	var button= document.getElementsByClassName("btn")[0];

	title.innerHTML= "Por favor inicia sesión";
	email.placeholder= "Correo Electrónico";
	password.placeholder= "Contraseña";
	remember.innerHTML= "Recordar Datos";
	button.innerHTML= "Iniciar sesión"; 
	div.innerHTML= "Datos de formulario <br> El correo electrónico ingresado es: <br>";
}

translate();

var imprimir= document.getElementById("datos").value.innerHTML

