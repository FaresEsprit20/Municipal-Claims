<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Custom-Header, Origin, Content-Type , Authorisation , X-Requested-With");
header("Content-Type: application/json; charset=UTF-8 ");


$json = file_get_contents('php://input');
$decoded = json_decode($json);

$cinadmin = $decoded->cin;
$cinagent = $decoded->cinagent;
$sujet = $decoded->sujet;
$adresse = $decoded->adresse;
$id = $decoded->id;


function conn ()
{
	$dbhost="localhost";
	$user="root";
	$pass="";
	$db="database";

	$conn = new PDO('mysql:host=localhost;dbname=database', $user, $pass);

	return $conn;
}

$db = conn();
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$prepred = $db->prepare("INSERT INTO tache (sujet_tache, etat_tache, cin_agent, cin_admin , rec_id, adresse) Values (?,'En Cours',?,?,?,?)");
$prepred->execute([$sujet, $cinagent, $cinadmin, $id, $adresse]);
echo json_encode(true);
    
?>		