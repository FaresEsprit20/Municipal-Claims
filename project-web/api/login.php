<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Custom-Header, Origin, Content-Type , Authorisation , X-Requested-With");
header("Content-Type: application/json; charset=UTF-8 ");

$json = file_get_contents('php://input');

$decoded = json_decode($json);



$cin = $decoded->cin;

$pass = $decoded->pass;

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

$res = $db->query("SELECT * FROM compte WHERE occupation='Administrateur' and cin='$cin' and password='$pass'");

$values = $res->fetchAll();

echo json_encode(sizeof($values) > 0 ? true : false);




?>