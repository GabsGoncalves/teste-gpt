<?php
// Obtém os dados enviados via AJAX
$usuarios = $_POST['usuarios'];

// Caminho para o arquivo JSON
$arquivoJson = 'usuarios.json';

// Converte o array de usuários em formato JSON
$usuariosJson = json_encode(array('Usuarios' => $usuarios));

// Escreve os dados no arquivo JSON
file_put_contents($arquivoJson, $usuariosJson);

// Retorna uma resposta de sucesso
header('Content-Type: application/json');
echo json_encode(array('mensagem' => 'Usuários atualizados com sucesso'));
?>