<?php
include("con_db.php");

if (isset($_POST['register'])) {
    if (
        strlen($_POST['nombres']) >= 1 &&
        strlen($_POST['apellidos']) >= 1 &&
        strlen($_POST['correo']) >= 1 &&
        strlen($_POST['telefono']) >= 1 &&
        strlen($_POST['dni']) >= 1 &&
        strlen($_POST['edad']) >= 1 &&
        strlen($_POST['sexo']) >= 1 &&
        strlen($_POST['departamento']) >= 1 &&
        strlen($_POST['provincia']) >= 1 &&
        strlen($_POST['distrito']) >= 1 &&
        strlen($_POST['direccion']) >= 1 &&
        strlen($_POST['ticket']) >= 1
    ) {
        $nombres = trim($_POST['nombres']);
        $apellidos = trim($_POST['apellidos']);
        $correo = trim($_POST['correo']);
        $telefono = trim($_POST['telefono']);
        $dni = trim($_POST['dni']);
        $edad = trim($_POST['edad']);
        $sexo = trim($_POST['sexo']);
        $departamento = trim($_POST['departamento']);
        $provincia = trim($_POST['provincia']);
        $distrito = trim($_POST['distrito']);
        $direccion = trim($_POST['direccion']);
        $ticket = trim($_POST['ticket']);
        $fecha_reg = date("d/m/y");

        // Verificar si el código de ticket ya existe
        $verificarConsulta = "SELECT * FROM registros WHERE codigo_ticket = '$ticket'";
        $verificarResultado = mysqli_query($conex, $verificarConsulta);

        if (mysqli_num_rows($verificarResultado) > 0) {
            // El código de ticket ya ha sido utilizado
            echo "<h3 class='error'>El código de ticket ya ha sido utilizado. Por favor, ingresa otro código.</h3>";
        } else {
            // Insertar el registro en la base de datos
            $consulta = "INSERT INTO registros (nombres, apellidos, correo, telefono, dni, edad, sexo, departamento, provincia, distrito, direccion, codigo_ticket, fecha_reg) VALUES ('$nombres','$apellidos','$correo','$telefono','$dni','$edad','$sexo','$departamento','$provincia','$distrito', '$direccion', '$ticket', '$fecha_reg')";
            $resultado = mysqli_query($conex, $consulta);

            if ($resultado) {
                echo "<h3 class='success'>Tu registro se ha completado</h3>";
            } else {
                echo "<h3 class='error'>Ocurrió un error al insertar en la base de datos</h3>";
            }
        }
    } else {
        echo "<h3 class='error'>Por favor, completa todos los campos</h3>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta DB</title>
    <link rel="stylesheet" href="../css/tabla.css">
</head>

<body>
    <!-- Formulario de registro -->
    <form action="" method="POST">
        <!-- Campos del formulario... -->
    </form>

    <!-- Mostrar la tabla de registros -->
    <?php include("tabla.php"); ?>
</body>

</html>

