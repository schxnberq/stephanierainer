<footer class="footer">

    <div class="footer-cnt">
        <ul class="footer-cnt__list">
            <li class="footer-cnt__list__item"><a href="">© 2017 Stephanie Rainer</a></li>
            <li class="footer-cnt__list__item"><a href="">--</a></li>
            <li class="footer-cnt__list__item"><a href="mailto:info@stefanie-rainer.at?subject=Tolle Kunstwerke">info@stefanie-rainer.at</a></li>
            <li class="footer-cnt__list__item"><a href="">--</a></li>
            <li class="footer-cnt__list__item"><a href="tel:+43 676 483 3168">+43 676 483 3168</a></li>
        </ul>
    </div>

</footer>


<?php



include "content/script.php";

if ($_GET['page'] === "home" || !isset($_GET['page'])) {
    foreach ($GSAP as $single_script) {
        echo $single_script;
    }
    echo $home_js;
    echo $main_js;

} elseif ($_GET['page'] === "exhibitions") {
    foreach ($GSAP as $single_script) {
        echo $single_script;
    }
    echo $main_js;
    echo $exhibitions_js;
}

?>

</body>
</html>