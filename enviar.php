<?php

require_once('vendor/autoload.php');

  SimpleMail::make()
    ->setTo("sbm2391@hotmail.com", 'Contacto desde la web del '.  date())
    ->setFrom($_POST['correo'], $_POST['nombre'])
    ->setSubject($_POST['asunto'])
    ->setMessage($_POST['mensaje'])
    ->setWrap(70)
    ->send();

    header("location:gracias.html");
