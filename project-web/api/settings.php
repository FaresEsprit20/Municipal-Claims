<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Custom-Header, Origin, Content-Type , Authorisation , X-Requested-With");
header("Content-Type: application/json; charset=UTF-8 ");


$json = file_get_contents('php://input');
$decoded = json_decode($json);


$cin = $decoded->cin;
$mail = $decoded->mail;
$telephone = $decoded->telephone;
$password = $decoded->password;


function conn ()
{
	$dbhost="localhost";
	$user="root";
	$pass="";
	$db="databasee";

	$conn = new PDO('mysql:host=localhost;dbname=database', $user, $pass);

	return $conn;
}

$db = conn();
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$res = $db->exec("UPDATE compte SET 
password='$password',
mailadress='$mail',
telephone='$telephone'
where cin='$cin' ");
echo json_encode(true);


?>