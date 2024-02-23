-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-02-2024 a las 12:08:00
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `user_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` int(11) NOT NULL,
  `location` varchar(100) NOT NULL,
  `hobby` varchar(45) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `phone`, `location`, `hobby`, `createdAt`, `updatedAt`) VALUES
(2, 'Jacob', 'Thomson', 'jacob.thomson@demo.com', 609234234, 'Chicago , Illinois', 'Music', '2024-02-22 10:11:13', '2024-02-22 10:11:13'),
(5, 'Larry', 'Bird', 'larry.bird@demo.com', 609345345, 'Los Ángeles, California', 'Travel', '2024-02-22 20:18:27', '2024-02-22 20:18:27'),
(6, 'Louise', 'Smith', 'louise.smith@demo.com', 609456456, 'Las Vegas, Nevada', 'Astronomy', '2024-02-22 20:18:27', '2024-02-22 20:18:27'),
(7, 'Larry', 'Bird', 'larry.bird@demo.com', 609345345, 'Los Ángeles, California', 'Travel', '2024-02-22 20:18:32', '2024-02-22 20:18:32'),
(9, 'test', 'lastTest', 'test@demo.com', 600789789, 'testb', 'testh', '2024-02-22 20:33:20', '2024-02-22 20:33:20'),
(10, 'Antonio', 'test2L', 'test2@test2.com', 678876789, 'TEST2L', 'test2h', '2024-02-22 20:44:52', '2024-02-23 10:34:45'),
(11, 'Alberta', 'aea', 'aee@adda.com', 1313131, 'eadea', 'aeae', '2024-02-22 20:45:44', '2024-02-23 10:32:58'),
(12, 'Paco', 'Lopez', 'aee@adda.com', 22222, 'eadea', 'aeae', '2024-02-23 10:12:06', '2024-02-23 10:29:05'),
(13, 'Marcos', 'aea', 'aee@adda.com', 333, 'Brasil', 'aeae', '2024-02-23 10:13:35', '2024-02-23 10:26:48'),
(14, 'joana', 'aea', 'aee@adda.com', 9999, 'gdsgadsg', 'sdaggd', '2024-02-23 10:14:15', '2024-02-23 10:22:45'),
(15, 'Luis', 'Amstrong', 'buenvo@demos.com', 6869790, 'nuevo ', 'nuevo', '2024-02-23 10:30:10', '2024-02-23 10:30:31'),
(16, 'Joaquin', 'Fenix', 'dada@test.com', 9786148, 'fdsgdsa', 'dsgaadgs', '2024-02-23 10:33:20', '2024-02-23 10:33:20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
