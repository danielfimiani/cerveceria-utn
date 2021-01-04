-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: us-cdbr-east-02.cleardb.com    Database: heroku_60c72b60b19b114
-- ------------------------------------------------------
-- Server version	5.5.62-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `txt_categoria` varchar(100) NOT NULL,
  `sn_habilitado` bit(1) NOT NULL DEFAULT b'1',
  `ts_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Minutas',_binary '','2020-12-08 01:29:17','0000-00-00 00:00:00'),(11,'Entrada',_binary '','2021-01-03 22:29:05','0000-00-00 00:00:00'),(21,'Sopas',_binary '','2021-01-04 03:31:44','0000-00-00 00:00:00'),(31,'Bebidas',_binary '','2021-01-04 03:33:13','0000-00-00 00:00:00'),(41,'Pastas',_binary '','2021-01-04 03:34:05','0000-00-00 00:00:00'),(61,'Postres',_binary '','2021-01-04 03:43:38','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion_envio`
--

DROP TABLE IF EXISTS `direccion_envio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion_envio` (
  `id_direccion_envio` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `txt_direccion` varchar(100) NOT NULL,
  `codigo_postal` varchar(8) NOT NULL,
  `id_provincia` int(11) NOT NULL,
  `ts_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_direccion_envio`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_provincia` (`id_provincia`),
  CONSTRAINT `direccion_envio_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `direccion_envio_ibfk_2` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion_envio`
--

LOCK TABLES `direccion_envio` WRITE;
/*!40000 ALTER TABLE `direccion_envio` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion_envio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `txt_nombre` varchar(100) NOT NULL,
  `txt_desc` varchar(500) NOT NULL,
  `fecha_evento` datetime DEFAULT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `sn_habilitado` bit(1) DEFAULT b'1',
  `ts_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) NOT NULL,
  `txt_nombre` varchar(30) NOT NULL,
  `txt_desc` varchar(100) NOT NULL,
  `imp_precio` decimal(18,2) NOT NULL DEFAULT '0.00',
  `sn_especial` bit(1) DEFAULT b'0',
  `image` varchar(255) NOT NULL,
  `sn_habilitado` bit(1) DEFAULT b'0',
  `ts_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_producto`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (31,11,'Lomo al Malbec','Lomo bañado en vino Malbec con papas Rústicas, cebolla colorada y morrones verdes',650.00,_binary '','dfb9cbd4-a0d6-42ed-a4e6-3019359a1b08.jpeg',_binary '','2021-01-02 20:46:34','0000-00-00 00:00:00'),(41,11,'Sorrentinos','Sorrentinos de mozzarella ,  Ricota y jamón con salsa a elección',500.00,_binary '','fcd3cc82-d599-43c8-903a-7307581a58c9.jpg',_binary '','2021-01-02 20:47:50','0000-00-00 00:00:00'),(51,1,'Locro','Tradiciona Locro Argentino',700.00,_binary '\0','4aa508e5-d4d0-455e-8faa-e015cd239454.jpg',_binary '','2021-01-02 20:49:22','0000-00-00 00:00:00'),(61,1,'Ternera','Milanesa de carne con papas fritas',1200.00,_binary '\0','a9bbb479-7ab4-4104-8e19-6c53bbab985f.jpeg',_binary '','2021-01-02 20:52:13','0000-00-00 00:00:00'),(71,1,'Solomillo de Cerdo','Cerdo ibérico con una muselina de calabaza y manzana asada, salsa de sidra ',900.00,_binary '','a697afde-890b-4f5b-845c-c078bce0e668.jpg',_binary '','2021-01-02 21:38:42','0000-00-00 00:00:00'),(81,1,'Corona de Cordero','Cordero con pure de patata trufada, zanahoria caramelizada',850.00,_binary '','412f62d2-f460-4ef6-becf-381b9ec074c9.jpg',_binary '','2021-01-02 21:39:38','0000-00-00 00:00:00'),(101,11,'Sopa de Caracol','Sopa de verdura con agregados de caracol mediterraneo',600.00,_binary '','31ef9a6a-3b0b-43d8-b289-cfb4f24a8fc9.jpeg',_binary '','2021-01-03 23:31:29','0000-00-00 00:00:00'),(111,11,'Canelones','Canelones de verdura , carne o ricota , con salsa blanca o mixta.',1500.00,_binary '','0a0189b8-ffb7-42b5-bffc-833edcd0f7ba.jpeg',_binary '','2021-01-03 23:34:16','0000-00-00 00:00:00'),(121,1,'Pollo al Verdeo','pollo/papas españolas/salsa verdeo',750.00,_binary '\0','9c2dd894-f8df-4a64-94c1-0c172ff9f2b4.jpeg',_binary '','2021-01-04 01:18:05','0000-00-00 00:00:00'),(271,1,'Pollo al Disco','Pollo con verduras al wok',850.00,_binary '\0','d1f0722a-77a1-40a9-b2a1-88869b9c4e0f.jpeg',_binary '\0','2021-01-04 03:50:57','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provincia` (
  `id_provincia` int(11) NOT NULL AUTO_INCREMENT,
  `txt_Desc` varchar(22) NOT NULL,
  `ts_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_provincia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `txt_nombre` varchar(50) NOT NULL,
  `txt_apellido` varchar(50) NOT NULL,
  `nro_doc` int(11) NOT NULL,
  `txt_direccion` varchar(50) NOT NULL,
  `fec_nacimiento` date NOT NULL,
  `txt_email` varchar(50) NOT NULL,
  `txt_password` varchar(100) NOT NULL,
  `sn_admin` bit(1) NOT NULL DEFAULT b'0',
  `ts_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ts_update` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-04  1:30:25
