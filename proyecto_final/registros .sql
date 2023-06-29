-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 26-05-2023 a las 15:06:27
-- Versión del servidor: 8.0.33-0ubuntu0.22.04.2
-- Versión de PHP: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(9) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `edad` int NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `departamento` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `distrito` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `codigo_ticket` varchar(24) NOT NULL,
  `fecha_reg` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `nombres`, `apellidos`, `correo`, `telefono`, `dni`, `edad`, `sexo`, `departamento`, `provincia`, `distrito`, `direccion`, `codigo_ticket`, `fecha_reg`) VALUES
(1, 'Jose Robertó', 'Lopez Carrasco', 'gmail@gmail.com', '973763627', '98236172', 24, 'Masculino', 'Lima', 'Lima', 'Comas', 'lima comas av los lecaros 12', 'HDDSDIS829W20DWIDWHDIWIQ', '2026-05-23'),
(2, 'santos claudio', 'Lopez Carrasco', 'hola@gmail.com', '973763627', '98236172', 24, 'Masculino', 'Lima', 'Lima', 'Comas', 'lima comas av los lecaros 12', 'HDDSDIS829W20DWIDWHDIWIW', '2026-05-23'),
(3, 'santos claudio', 'Lopez Carrasco', 'hola@gmail.com', '973763627', '98236172', 24, 'Masculino', 'Lima', 'Lima', 'Comas', 'lima comas av los lecaros 12', 'HDDSDIS829W20DWIDWHDIWI4', '2026-05-23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo_ticket` (`codigo_ticket`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
