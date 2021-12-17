<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Custom-Header, Origin, Content-Type , Authorisation , X-Requested-With");
header("Content-Type: application/json; charset=UTF-8 ");


$json = file_get_contents('php://input');

$decoded = json_decode($json);


$cin = $decoded->cinadmin;
$password = $decoded->password;
$mail = $decoded->mail;
$tel = $decoded->tel;
$fullname = $decoded->fullname;
$nomgouv = $decoded->nomgouv;
$nomcom = $decoded->nomcom;

$result = [];

$result["cin"] = $cin;
$result["password"] = $password;
$result["mail"] = $mail;
$result["tel"] = $tel;
$result["fullname"] = $fullname;
$result["nomgouv"] = $nomgouv;
$result["nomcom"] = $nomcom;

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

$res = $db->query("SELECT * FROM compte WHERE cin='$cin'");
$values = $res->fetchAll();

$a = $db->query("SELECT cin_admin FROM administrateur WHERE nom_com='$nomcom'");
$b = $a->fetchAll();

$query = $db->query("SELECT password_admin FROM commune WHERE nom_com='$nomcom'");
$ress = $query->fetch();


if((sizeof($values)>0) || ($ress[0] != $password) || (sizeof($b) > 0) )

echo json_encode(false);

	else {

	$prepred = $db->prepare("INSERT INTO compte VALUES(?,?,?,?,'Administrateur',?)");
	$prepred->execute([$cin,$password,$mail,$fullname,$tel]);
	
		
		$query = $db->prepare("INSERT INTO administrateur VALUES(?,?)");
		$query->execute([$cin,$nomcom]);

echo json_encode(true);

}



?>