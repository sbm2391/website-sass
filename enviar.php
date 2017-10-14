<?php

require_once('vendor/autoload.php');

if (
  isset($_POST['nombre']) &&
  isset($_POST['correo']) &&
  isset($_POST['asunto']) &&
  isset($_POST['mensaje'])
) {
  SimpleMail::make()
    ->setTo("sbm2391@hotmail.com", 'Contacto desde la web del '.  date())
    ->setFrom($_POST['correo'], $_POST['nombre'])
    ->setSubject($_POST['asunto'])
    ->setMessage($_POST['mensaje'])
    ->setWrap(70)
    ->send();

    header("location:gracias.html");
} else {
  throw new Exception("Error Processing Request", 1);  
}
