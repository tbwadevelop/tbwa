-- MySQL dump 10.13  Distrib 5.7.18, for macos10.12 (x86_64)
--
-- Host: localhost    Database: angularcode
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers_auth`
--

DROP TABLE IF EXISTS `customers_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers_auth` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `type_doc` varchar(50) NOT NULL,
  `cc` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `departament` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `terms` varchar(100) NOT NULL,
  `policies` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_auth`
--

LOCK TABLES `customers_auth` WRITE;
/*!40000 ALTER TABLE `customers_auth` DISABLE KEYS */;
INSERT INTO `customers_auth` VALUES (190,'juan','ceballos','cedula','1013646203','jdcb1218@hotmail.com','3183868584','Cundinamarca','bogota','1','','$2a$10$1523ecfe30e897cdceeb9uk89980TV8de0PemO6fX/npOT7b.W0nW','2017-08-02 22:02:56'),(191,'juan','ceballos','1014','87987897','mile@gmail.com','8098098','Cundinamarca','bogota','','','$2a$10$73698f9de88d700fefd81uHKCrzUTrbbA2ciEGQBXzMSIZB8mHHT6','2017-08-03 00:04:30'),(192,'juan','ceballs','08','98','jwwwceballos@tbwacolombia.com','9080989','hjh','hj','','','$2a$10$59115a476ca02ea50ac19Ohehop49xYA6jYLH98DCdeD9UVERNkwy','2017-08-03 00:05:31'),(193,'david','bermudez','cedula','89898','jcenallos@gmail.com','089098098','cun','bogot','1','1','$2a$10$429de3eb2159f2b19c3fbOfuYhbPHsXRMqLuE9rUWT9g3KsAXhEja','2017-08-03 01:45:39');
/*!40000 ALTER TABLE `customers_auth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-02 20:47:19
