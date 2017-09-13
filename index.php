<?php

$page = (!isset($_GET['page'])) ? "home" : $_GET['page'];

$content = "content/";

include "content/script.php";

if($page == "home") {
    include "content/header_home.php";
    include "content/main_aside.php";
    include "content/content_home.php";
    include "content/script.php";
    include "content/footer.php";
} elseif ($page == "exhibitions") {
    include "content/header.php";
    include "content/exhibitons.php";
    include "content/footer.php";
}

/*
$home_aside = new stdClass();
$home_aside->title_one = 'drawings';
$home_aside->items_one = ["blue", "body", "abstract", "red"];

$home_aside->title_two = 'drawings';
$home_aside->items_two = ["blue", "body", "abstract", "red"];



echo "<pre>";
var_dump($home_aside);

echo "</pre>";*/




?>









