<?php
// Connexion à MySQL
$host = "sql123.infinityfree.com"; // Remplace par ton hôte
$user = "username"; // Remplace par ton utilisateur
$pass = "password"; // Remplace par ton mot de passe
$dbname = "portfolio_db"; // Remplace par ta base

$conn = new mysqli($host, $user, $pass, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

// Récupérer les données du formulaire
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (nom, email, message) VALUES ('$nom', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}

$conn->close();
?>

