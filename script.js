function Login(){
    var done=0;
    var username=document.login.usuario.value;
    username=username.toLowerCase();

    var password=document.login.senha.value;
    password=password.toLowerCase();
    
    if(username=="bruno" && password=="admin"){
        window.location= "index.html";
        done = 1;
    }
    if (done == 0){
        alert("Usuário incorreto e/ou senha inválida");
    }

}