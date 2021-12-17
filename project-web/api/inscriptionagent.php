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
$password = $decoded->password;
$mail = $decoded->mail;
$tel = $decoded->tel;
$fullname = $decoded->fullname;
$com = $decoded->commune;


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



$res = $db->query("SELECT * FROM compte WHERE cin='$cinagent'");
$values = $res->fetchAll();



if((sizeof($values)>0)  )
{

echo json_encode(false);

}else {

	$prepred = $db->prepare("INSERT INTO compte VALUES(?,?,?,?,'Agent',?)");
	$prepred->execute([$cinagent,$password,$mail,$fullname,$tel]);
    
    $query = $db->prepare("INSERT INTO agent VALUES(?,?,?)");
	$query->execute([$cinagent,$cinadmin,$com]);

echo json_encode(true);

}


?>