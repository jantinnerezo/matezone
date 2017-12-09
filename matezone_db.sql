-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2017 at 11:51 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matezone_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` varchar(255) NOT NULL,
  `img` text,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `forgot_password_token` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `gender` varchar(50) NOT NULL,
  `location` varchar(255) NOT NULL,
  `date_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `img`, `lastname`, `firstname`, `username`, `password`, `forgot_password_token`, `email`, `birth_date`, `gender`, `location`, `date_created`) VALUES
('020fbbe4441b09f48dd4', NULL, 'Erezo', 'Jantinn', 'silentroom102', '$2y$12$t1oOVdCjkIrwZiA56cZ0IuNeuxU/6jg3UEURyhjREl/Aq8TVDb23C', NULL, 'janerezo10@gmail.com', '2017-12-07', 'male', '', '2017-12-07 17:15:05'),
('15affa9408ea867061ae', NULL, 'Erezo', 'Jantinn', 'silentroom12321', '$2y$12$mjGltQEn.c7kJizl8lifi.Og7fN3mxTRU2.Z54XiW4g4ZzmRW6EI2', NULL, 'silentroomman@gmail.com', '2017-12-09', 'Male', '', '2017-12-09 11:18:29'),
('33a109981854b3bf4da3', NULL, 'Erez', 'sdfsdfdsf', 'hakla', '$2y$12$beY51TJn6MnzoGeM1HeKEug7MBbFInGUGqEM2F8993PZZfn5kSrmq', NULL, 'janerezo10ds@gmail.com', '2017-12-09', 'Male', '', '2017-12-09 11:32:43'),
('43ef75cf92ed4fbee31b', NULL, 'Erezo', 'Jantinn', 'silentroom10101', '$2y$12$Ik2i94F060pkjEVrScHFE.R4fbWypSSQ4oy4Ry8QPIoDMIxNQhxuC', NULL, 'janerezo1010@gmail.com', '2017-04-08', 'male', '', '2017-12-08 15:59:22'),
('44fac3a27a3fe562e857', NULL, 'Wick', 'Jan', 'silentroom101', '$2y$12$Qi7h6R6Mij86xvnpzvfMvuo6wqtAdjXnAlOV.eVzC7s5.COlbbRui', NULL, 'janerezo10@gmail.com', '2017-12-07', 'male', '', '2017-12-07 17:11:19'),
('4d051dbfd96a396d40cf', NULL, 'Erezo', 'Jantinn', 'silentroom2346', '$2y$12$SGJN9TA8M47siqVUxwUO/uNUEnfcBGzkYBWI95xWQnVZd8fwZdyQ2', NULL, 'jerezo@gmail.com', '2017-12-09', 'Male', '', '2017-12-09 11:20:07'),
('5bb6c1a03ec95d81e96a', NULL, 'Erezo', 'Jantinn', 'sil', '$2y$12$4LPTPeoJE7bIGILlQC0zTeXdWmo1lS3HdwM8ymecfzshj3TadOjdm', NULL, 'janerezo134@gmail.com', '2017-12-09', 'Male', '', '2017-12-09 11:21:45'),
('7b9549871fc4801f48ef', NULL, 'dgdfgfdg', 'dfgfdgfdg', 'sdfsdfsdf', '$2y$12$f4slCZ2wVoKiybMi600.UeF4.a4krduAV6kossffdIzOK4iMK/TSK', NULL, 'erezojantinn@gmail.com', '2017-12-08', 'male', '', '2017-12-08 16:02:23'),
('95da407b156fe9523c51', NULL, 'Erezo', 'Jantinn', 'silentroom', '$2y$12$kdJWFFzE8.oNintXNjyj8ebdgdATdu2o8DxEclesj5o.5DWxD9yxu', NULL, 'janerezo10@gmail.com', '2017-12-07', 'male', '', '2017-12-07 17:07:40'),
('9ee4f4209ae4ef5fee12', NULL, 'Erezo', 'Jantinn', 'silentroom104', '$2y$12$FTqcKjT18wH1MwqYAd1hxectsU.38q8v7Wi6p2iuOkH.Dl6EStqK.', NULL, 'janerezo10@gmail.com', '2017-12-07', 'male', '', '2017-12-07 17:20:42'),
('9fc4788f1596c3845e6c', NULL, 'Erezo', 'Jantinn', 'silentroom103', '$2y$12$A5m5uYGHnOdzB2PCahHHSeuOltAKwmuWXL2RdWfMXWAB4US4lb/o6', NULL, 'janerezo10@gmail.com', '2017-12-07', 'male', '', '2017-12-07 17:18:51'),
('a90939e9368b5845e074', NULL, 'fdgfdgfdg', 'dgfdgdfgdf', 'fdgdfgdfgdgtret', '$2y$12$naOL1Oi97QooZa2kz4o2jO65NBeax/p9C2HoqIg0moq2lBpj4pOme', NULL, 'jan59@gmail.com', '2017-12-09', 'Male', '', '2017-12-09 11:33:57'),
('ed7d0c02ce86ccb6effa', NULL, 'Erezo', 'Jan', 'rockenroll', '$2y$12$Ek6hU.e7vJp/Di14Ov1apOgQxgemyXAjAnRi7LleYrfD6tPsSUO.K', NULL, 'janerezo10@gmail.com', '2017-12-07', 'male', '', '2017-12-07 17:13:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
