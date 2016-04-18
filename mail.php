<?php

$recepient = "dovhanbv2015@gmail.com";
$sitename = "Photography portolio";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$temat = trim($_POST["temat"]);
$texte= trim($_POST["text"]);

$message = "Имя: $name \nЕмейл: $email \nТема: $temat \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");