<html>
<body>
<?php
@include("connexion.php"); 
?>

<center>
    <h1>Rechercher un client</h1>
    <form method="POST" action="">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>
        <button type="submit">Rechercher</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['nom'])) {
        $nom = mysqli_real_escape_string($conn, $_POST['nom']); 
        $requete = "SELECT id_client, prenom, nom, email, date_inscription FROM clients WHERE nom = '$nom'";
        $resultat = mysqli_query($conn, $requete);

        if ($resultat && mysqli_num_rows($resultat) > 0) {
            echo '<table border="1">
                    <tr><th>ID</th><th>Prenom</th><th>Nom</th><th>Email</th><th>Date Inscription</th></tr>';
            while ($client = mysqli_fetch_assoc($resultat)) {
                echo '<tr><td>' . htmlspecialchars($client['id_client']) . '</td>
                          <td>' . htmlspecialchars($client['prenom']) . '</td>
                          <td>' . htmlspecialchars($client['nom']) . '</td>
                          <td>' . htmlspecialchars($client['email']) . '</td>
                          <td>' . htmlspecialchars($client['date_inscription']) . '</td></tr>';
            }
            echo '</table>';
        } else {
            echo '<p>Aucun client trouver.</p>';
        }

        mysqli_free_result($resultat);
    }
    mysqli_close($conn);
    ?>
    <br>
    <a href="index2.html">Retour Accueil</a>
</center>
</body>
</html>
