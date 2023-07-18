$(document).ready(function() {
    // Carrega os usuários do arquivo JSON
    $.getJSON("usuarios.json", function(data) {
      var usuarios = data.Usuarios;
  
      // Manipula o formulário de login
      $("#loginForm").submit(function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
  
        var username = $("#username").val();
        var password = $("#password").val();
  
        // Verifica se o usuário e senha estão corretos
        var usuarioEncontrado = false;
        for (var i = 0; i < usuarios.length; i++) {
          if (usuarios[i].nome === username && usuarios[i].senha === password) {
            usuarioEncontrado = true;
            break;
          }
        }
  
        if (usuarioEncontrado) {
          $("#result").html("<p>Login realizado com sucesso!</p>");
        } else {
          $("#result").html("<p>Usuário ou senha inválidos!</p>");
        }
      });
  
      // Manipula o formulário de cadastro
      $("#registerForm").submit(function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
  
        var newUsername = $("#newUsername").val();
        var newPassword = $("#newPassword").val();
  
        // Verifica se o novo usuário já existe
        var usuarioExistente = false;
        for (var i = 0; i < usuarios.length; i++) {
          if (usuarios[i].nome === newUsername) {
            usuarioExistente = true;
            break;
          }
        }
  
        if (usuarioExistente) {
          $("#result").html("<p>Usuário já existe!</p>");
        } else {
          // Adiciona o novo usuário à lista
          usuarios.push({ "nome": newUsername, "senha": newPassword });
  
          // Atualiza o arquivo JSON com os novos usuários
          $.ajax({
            type: "POST",
            url: "atualizar_usuarios.php", // Arquivo PHP para atualizar o JSON
            data: { "usuarios": usuarios },
            success: function() {
              $("#result").html("<p>Novo usuário cadastrado!</p>");
            }
          });
        }
      });
    });
  });
  