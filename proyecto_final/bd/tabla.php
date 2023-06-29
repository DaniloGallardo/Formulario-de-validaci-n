<?php
include("con_db.php");

// Función para obtener los registros de la base de datos y mostrarlos en una tabla
function mostrarRegistros()
{
    global $conex;
    $consulta = "SELECT * FROM registros";
    $resultado = mysqli_query($conex, $consulta);

    if (mysqli_num_rows($resultado) > 0) {
        echo "<table class='tabla'>";
        echo "<tr>";
        echo "<th>ID</th>";
        echo "<th>Nombres</th>";
        echo "<th>Apellidos</th>";
        echo "<th>Correo</th>";
        echo "<th>Teléfono</th>";
        echo "<th>DNI</th>";
        echo "<th>Edad</th>";
        echo "<th>Sexo</th>";
        echo "<th>Departamento</th>";
        echo "<th>Provincia</th>";
        echo "<th>Distrito</th>";
        echo "<th>Dirección</th>";
        echo "<th>Código de Ticket</th>";
        echo "<th>Fecha de Registro</th>";
        echo "</tr>";

        while ($fila = mysqli_fetch_assoc($resultado)) {
            echo "<tr>";
            echo "<td>" . $fila['id'] . "</td>";
            echo "<td>" . $fila['nombres'] . "</td>";
            echo "<td>" . $fila['apellidos'] . "</td>";
            echo "<td>" . $fila['correo'] . "</td>";
            echo "<td>" . $fila['telefono'] . "</td>";
            echo "<td>" . $fila['dni'] . "</td>";
            echo "<td>" . $fila['edad'] . "</td>";
            echo "<td>" . $fila['sexo'] . "</td>";
            echo "<td>" . $fila['departamento'] . "</td>";
            echo "<td>" . $fila['provincia'] . "</td>";
            echo "<td>" . $fila['distrito'] . "</td>";
            echo "<td>" . $fila['direccion'] . "</td>";
            echo "<td>" . $fila['codigo_ticket'] . "</td>";
            echo "<td>" . $fila['fecha_reg'] . "</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "<p>No hay registros en la base de datos.</p>";
    }
}

mostrarRegistros();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta DB</title>

</head>

<body>

<a href="../index.html" class="cerrar-sesion">Volver al formulario</a> <!-- Botón para volver al formulario -->
</body>

</html>
