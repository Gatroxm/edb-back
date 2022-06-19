-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-09-2019 a las 16:21:40
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heroes`
--

CREATE TABLE `heroes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `poder` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `description` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `heroes`
--

INSERT INTO `heroes` (`id`, `nombre`, `poder`, `description`) VALUES
(1, 'Iron Man', 'Orgullo', 'Lorem ipsum dolor sit amet consectetur adipiscing, elit tellus vulputate placerat dapibus blandit, nullam lacus nulla molestie consequat. Primis inceptos per posuere pellentesque morbi viverra mattis, sapien magnis leo sagittis auctor tempor hac duis, conubia vitae rutrum rhoncus facilisis ridiculus. Mi arcu nullam porta ornare penatibus imperdiet risus, pharetra vitae dapibus varius sed urna molestie, lacinia fusce cras malesuada platea cursus.'),
(2, 'Hulk', 'Super Fuerza ', 'Lorem ipsum dolor sit amet consectetur adipiscing, elit tellus vulputate placerat dapibus blandit, nullam lacus nulla molestie consequat. Primis inceptos per posuere pellentesque morbi viverra mattis, sapien magnis leo sagittis auctor tempor hac duis, conubia vitae rutrum rhoncus facilisis ridiculus. Mi arcu nullam porta ornare penatibus imperdiet risus, pharetra vitae dapibus varius sed urna molestie, lacinia fusce cras malesuada platea cursus.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `heroes`
--
ALTER TABLE `heroes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `heroes`
--
ALTER TABLE `heroes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;