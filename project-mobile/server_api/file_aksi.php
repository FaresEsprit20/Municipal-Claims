<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Custom-Header, Origin, Content-Type , Authorisation , X-Requested-With");
header("Content-Type: application/json; charset=UTF-8 ");

include "config.php";

$postjson = file_get_contents('php://input', true);
$postjson = json_decode($postjson, true);


//requete
if ($postjson['aksi'] == 'add_Login') {

  $qr = mysqli_query(
    $con,
    " SELECT * FROM compte WHERE cin = '$postjson[cin]'  and occupation!='Administrateur'"
  );
  $chk = mysqli_num_rows($qr);

  $qs = mysqli_query(
    $con,
    " SELECT occupation FROM compte WHERE cin = '$postjson[cin]' AND occupation = 'Citoyen' "
  );
  $chi = mysqli_num_rows($qs);

  $query = mysqli_query(
    $con,
    " SELECT * FROM compte WHERE cin = '$postjson[cin]' AND password = '$postjson[password]' "
  );
  $check = mysqli_num_rows($query);

  if ($chk > 0) {
    if ($check > 0) {
      if ($chi > 0) {
        $prof = array();
        $q = mysqli_fetch_array(mysqli_query($con, " SELECT * FROM compte WHERE cin = '$postjson[cin]'  "));

        $prof[] = array(
          'cin'        => $q['cin'],
          'fullname'   => $q['nom_prenom'],
          'password'   => $q['password'],
          'mailadress' => $q['mailadress'],
          'occupation' => $q['occupation'],
          'telephone'  => $q['telephone']
        );

        $result = json_encode(array('success' => true, 'occupation' => true,  'profiles' => $prof, 'connexion' => true));
      } else {
        $profile = array();
        $qx = mysqli_fetch_array(mysqli_query($con, " SELECT * FROM compte WHERE cin = '$postjson[cin]'  "));

        $profile[] = array(
          'cin'        => $qx['cin'],
          'fullname'   => $qx['nom_prenom'],
          'password'   => $qx['password'],
          'mailadress' => $qx['mailadress'],
          'occupation' => $qx['occupation'],
          'telephone'  => $qx['telephone']
        );

        $result = json_encode(array('success' => true, 'occupation' => false, 'profiles' => $profile, 'connexion' => true));
      }
    } else {
      $result = json_encode(array('success' => false, 'msg' => ' CIN ou Mot de Passe incorrecte ! ',  'connexion' => true));
    }
  } else {
    $result = json_encode(array('success' => false, 'msg' => ' Utilisateur non inscrit ! ',  'connexion' => true));
  }
  echo $result;


  //requete
} else if ($postjson['aksi'] == 'settings') {


  $query = mysqli_query($con, " UPDATE compte SET
    mailadress =  '$postjson[mailadress]' ,
    telephone  =  '$postjson[telephone]'
    WHERE cin =   '$postjson[cin]' ");

  $result = json_encode(array('success' => true));
  echo $result;
} else if ($postjson['aksi'] == 'password') {


  $query = mysqli_query($con, " UPDATE compte SET
      password =  '$postjson[password]'
      WHERE cin =   '$postjson[cin]' ");

  $result = json_encode(array('success' => true));
  echo $result;
} else if ($postjson['aksi'] == 'settings') {


  $query = mysqli_query($con, " UPDATE compte SET
        mailadress =  '$postjson[mailadress]' ,
        telephone  =  '$postjson[telephone]'
        WHERE cin =   '$postjson[cin]' ");

  $result = json_encode(array('success' => true));
  echo $result;
} else if ($postjson['aksi'] == 'valider') {

  $datenow = date('y-m-d-h-i-s');
  $entry = base64_decode($postjson['images']);
  $img = imagecreatefromstring($entry);
  $directory = "images/img_user" . $datenow . ".jpg";
  imagejpeg($img, $directory);
  imagedestroy($img);

  $query = mysqli_query($con, " UPDATE tache SET
          etat_tache =  '$postjson[etat_tache]' ,
          justification =  '$directory' 
          WHERE cin_agent =   '$postjson[cin]' AND tache_id= '$postjson[tache_id]' ");

  $result = json_encode(array('success' => true));
  echo $result;
} else if ($postjson['aksi'] == 'add_Connection') {

  $result = mysqli_close($con);
  echo $result;

  //requete
} else if ($postjson['aksi'] == 'add_RecManuelle') {

  $q =  mysqli_fetch_array(mysqli_query($con, " SELECT cin_admin FROM administrateur WHERE nom_com = '$postjson[commune]' "));

  $datenow = date('y-m-d-h-i-s');
  $entry = base64_decode($postjson['images']);
  $img = imagecreatefromstring($entry);
  $directory = "images/img_user" . $datenow . ".jpg";
  imagejpeg($img, $directory);
  imagedestroy($img);

  mysqli_query($con, " INSERT INTO reclamation  (cin_cit , type_rec  , sujet , adresse , postal , photo , nom_gouv , cin_admin , nom_com)  VALUES
          (
            '$postjson[cin]' ,
            '$postjson[type_rec]' ,
            '$postjson[description]' ,
            '$postjson[adresse]' ,
            '$postjson[postal]' ,
            '$directory' ,
            '$postjson[gouvernorat]' ,
            '$q[cin_admin]' ,
            '$postjson[commune]'
          )
          ");

  $result = json_encode(array('success' => true));
  echo $result;

  //requete
} else if ($postjson['aksi'] == 'add_RecAutomatique') {
  $q =  mysqli_fetch_array(mysqli_query($con, " SELECT cin_admin FROM administrateur WHERE nom_com = '$postjson[commune]' "));
  $data = array();
  $datenow = date('y-m-d-h-i-s');
  $entry = base64_decode($postjson['images']);
  $img = imagecreatefromstring($entry);
  $directory = "images/img_user" . $datenow . ".jpg";
  imagejpeg($img, $directory);
  imagedestroy($img);

  mysqli_query($con, " INSERT INTO reclamation  ( type_rec , adresse , sujet , cin_cit, cin_admin, nom_gouv, nom_com , photo, laptitude , longitude)  VALUES
          (
            '$postjson[type_rec]' ,
            '$postjson[adresse]' ,
            '$postjson[description]' ,
            '$postjson[cin]',
            '$q[cin_admin]',
            '$postjson[gouvernorat]' ,
            '$postjson[commune]',
            '$directory' ,
            '$postjson[laptitude]' ,
            '$postjson[longitude]'
          )
          ");


  $result = json_encode(array('success' => true));
  echo $result;
} else if ($postjson['aksi'] == 'suivre_reclamation') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM reclamation where cin_cit='$postjson[cin]'");
  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result;

} else if ($postjson['aksi'] == 'load_tc') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM tache where rec_id='$postjson[id]'");
  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result; 

} else if ($postjson['aksi'] == 'load_t') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM tache where rec_id='$postjson[id]'");
  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result;
} else if ($postjson['aksi'] == 'load_tx') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM tache where rec_id='$postjson[id]'");
  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result;
}else if ($postjson['aksi'] == 'suivre_tache') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM tache where cin_agent='$postjson[cin]'");
  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result;
} else if ($postjson['aksi'] == 'load_commune') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM commune where nom_gouv='$postjson[gouvernorat]'");
  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result;
} else if ($postjson['aksi'] == 'load_tache') {

  $item = array();
  $q =  mysqli_query($con, "SELECT * FROM tache where cin_agent='$postjson[cin]'");

  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('items' => $item));
  echo $result;
}if ($postjson['aksi'] == 'suivre_notif') {


    $q =  mysqli_query($con, "SELECT * FROM reclamation where cin_cit='$postjson[cin]'");
  $check = mysqli_num_rows($q);
  echo json_encode($check);

}if ($postjson['aksi'] == 'delete_reclamation') {

  $item = array();

  $q =  mysqli_query($con, "SELECT * FROM reclamation where cin_cit= '$postjson[cin]' and rec_id= '$postjson[rec_id]' ");

  while ($row =  mysqli_fetch_array($q)) {
    $item[] = $row;
  }

  $result = json_encode(array('delete' => true, 'items' => $item));
  echo $result;

}if ($postjson['aksi'] == 'tache_notif') {

  $q =  mysqli_query($con, "SELECT * FROM tache where cin_agent='$postjson[cin]'");
  $check = mysqli_num_rows($q);
 echo json_encode($check);
  
} 

?>
