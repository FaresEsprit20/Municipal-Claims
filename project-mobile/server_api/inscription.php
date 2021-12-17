<?php

header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Credentials: true ");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header ("Access-Control-Allow-Headers: X-Custom-Header, Origin, Content-Type , Authorisation , X-Requested-With");
header ("Content-Type: application/json; charset=UTF-8 ");

include "config.php";

$postjson = file_get_contents('php://input', true);
$postjson = json_decode($postjson, true);




  $query= mysqli_query ($con, " SELECT * FROM citoyen WHERE cin_cit = '$postjson[cin]'  ");
  $check = mysqli_num_rows($query);

  if( $check > 0 )
  {
    $res=json_encode (array('success' => false));
  }else {

    $res=json_encode (array('success' => true));
    mysqli_query ($con, " INSERT INTO compte  (cin, nom_prenom, mailadress, password, occupation) VALUES
    (
      '$postjson[cin]' ,
      '$postjson[fullname]' ,
      '$postjson[mailadress]' ,
      '$postjson[password]' ,
      'Citoyen'
    )
    ");

    mysqli_query ($con,
    " INSERT INTO citoyen  (cin_cit) VALUES
    (
      '$postjson[cin]'
    )
    ");
  }
echo $res;
?>
