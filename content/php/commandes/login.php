<html>
<body>
<?php
    @include("connexion.php");
    $a=$_POST["id"];
    $b=$_POST["mdp"];

    $requete= "SELECT * from login where id= '$a' and mdp= '$b' ";
    $resultat=mysqli_query($conn, $requete);

    $ligne=mysqli_num_rows($resultat);
    if ($ligne==1)
        header("location:index2.html");
    else
        header("location:faux.html");
?>
</body>
</html>