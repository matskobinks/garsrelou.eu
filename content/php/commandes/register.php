<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Créer un compte</title>
</head>
<body>
    <h1>Créer un compte : suivez les instructions.</h1>
    <form action="register.php" method="POST">
        <label for="id">id:</label>
        <input type="text" id="id" name="id" required>
        <br>

        <label for="mdp">mdp:</label>
        <input type="password" id="mdp" name="mdp" required>
        <br>

        <button type="submit">Register</button>
    </form>
</body>
</html>

<?php
// register.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? '';
    $mdp = $_POST['mdp'] ?? '';

    // Basic validation
    if (empty($id) || empty($mdp)) {
        echo 'All fields are required.';
        exit;
    }

    // Database connection
    $conn=mysqli_connect("garsrehadmin.mysql.db","garsrehadmin","LaChiennete123","garsrehadmin");

    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    // Insert into the database
    $stmt = $conn->prepare('INSERT INTO users (id, mdp) VALUES (?, ?)');
    $stmt->bind_param('sss', $id, mdp_hash($mdp, mdp_DEFAULT));

    if ($stmt->execute()) {
        echo 'Registration successful!';
    } else {
        echo 'Error: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
