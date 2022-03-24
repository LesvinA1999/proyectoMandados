-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mandaditos
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `IdCliente` int NOT NULL AUTO_INCREMENT,
  `NombreCliente` varchar(150) NOT NULL,
  `ApellidoCliente` varchar(150) NOT NULL,
  `TelefonoCliente` varchar(8) DEFAULT NULL,
  `Direccion` varchar(200) NOT NULL,
  `Usuario` varchar(100) NOT NULL,
  `Contrasena` varchar(200) NOT NULL,
  `TipoUsuario` varchar(45) DEFAULT NULL,
  `EstadoUsuario` enum('AC','IN','BL') DEFAULT 'AC',
  PRIMARY KEY (`IdCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (13,'Jose','Martinez','9568545','colonia','11','','','AC'),(14,'Lesvin Josue','Ardon','123456','Barrio centro','LesvinA','hola01','Admin','AC'),(15,'Lesvin','Ardon Acosta','9816324','El centro','Ardon99','Lesvin','','AC'),(16,'Lesvin jose','Ardon Acosta','9816324','El centro','Ardon99','Kk','','AC'),(17,'Lesvin jose','Ardon','9816324','El centro','Ardon19999','Hhhh','','AC'),(18,'Jose','Ardon','9816324','El centro','Acosta1999','$2b$10$idGphmJShlNQvE478m6a2.nub4U2ZKW.MoZ/LZPg5dSa5R/yfZgbe','','AC');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comercio`
--

DROP TABLE IF EXISTS `comercio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comercio` (
  `IdComercio` int NOT NULL AUTO_INCREMENT,
  `NombreComercio` varchar(250) NOT NULL,
  `IdTipoComercio` int NOT NULL,
  PRIMARY KEY (`IdComercio`),
  KEY `IdTipoComercio_idx` (`IdTipoComercio`),
  CONSTRAINT `IdTipoComercio` FOREIGN KEY (`IdTipoComercio`) REFERENCES `tipocomercio` (`IdTipoComercio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comercio`
--

LOCK TABLES `comercio` WRITE;
/*!40000 ALTER TABLE `comercio` DISABLE KEYS */;
/*!40000 ALTER TABLE `comercio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallepedido`
--

DROP TABLE IF EXISTS `detallepedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detallepedido` (
  `IdDetallePedido` int NOT NULL AUTO_INCREMENT,
  `Cantidad` int NOT NULL,
  `subTotal` decimal(10,0) NOT NULL,
  `IdEstadoPedido` int NOT NULL,
  `IdComercio` int NOT NULL,
  `IdFacctura` int NOT NULL,
  PRIMARY KEY (`IdDetallePedido`),
  KEY `IdComercio_idx` (`IdComercio`),
  KEY `IdFactura_idx` (`IdFacctura`),
  CONSTRAINT `IdComercio` FOREIGN KEY (`IdComercio`) REFERENCES `comercio` (`IdComercio`),
  CONSTRAINT `IdFactura` FOREIGN KEY (`IdFacctura`) REFERENCES `factura` (`IdFactura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallepedido`
--

LOCK TABLES `detallepedido` WRITE;
/*!40000 ALTER TABLE `detallepedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallepedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `IdDireccion` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(400) NOT NULL,
  PRIMARY KEY (`IdDireccion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
INSERT INTO `direccion` VALUES (1,'Colonia Montecarlo Choluteca');
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `IdEmpleado` int NOT NULL AUTO_INCREMENT,
  `NombreEmpleado` varchar(150) NOT NULL,
  `ApellidoEmpleado` varchar(150) NOT NULL,
  `TelefonoEmpleado` int NOT NULL,
  `Idusuario` int NOT NULL,
  PRIMARY KEY (`IdEmpleado`),
  KEY `Idusuario_idx` (`Idusuario`),
  CONSTRAINT `Idusuario` FOREIGN KEY (`Idusuario`) REFERENCES `usuarios` (`Idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (12,'Kevin','Hernandez',95658989,2);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadofactura`
--

DROP TABLE IF EXISTS `estadofactura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadofactura` (
  `IdEstadoFactura` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(400) NOT NULL,
  PRIMARY KEY (`IdEstadoFactura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadofactura`
--

LOCK TABLES `estadofactura` WRITE;
/*!40000 ALTER TABLE `estadofactura` DISABLE KEYS */;
/*!40000 ALTER TABLE `estadofactura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadopedido`
--

DROP TABLE IF EXISTS `estadopedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadopedido` (
  `IdEstadoPedido` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(400) NOT NULL,
  PRIMARY KEY (`IdEstadoPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadopedido`
--

LOCK TABLES `estadopedido` WRITE;
/*!40000 ALTER TABLE `estadopedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `estadopedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `IdFactura` int NOT NULL AUTO_INCREMENT,
  `NumeroFactura` int NOT NULL,
  `FechaEmision` datetime NOT NULL,
  `EstadoFactura` tinyint NOT NULL,
  PRIMARY KEY (`IdFactura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `IdPedido` int NOT NULL AUTO_INCREMENT,
  `IdCliente` int NOT NULL,
  `precioEnvio` smallint DEFAULT NULL,
  `IdEmpleado` int NOT NULL,
  `IdDetallePedido` int NOT NULL,
  `FechaPedido` datetime NOT NULL,
  `EstadoPedido` tinyint NOT NULL,
  PRIMARY KEY (`IdPedido`),
  KEY `IdDetallePedido_idx` (`IdDetallePedido`),
  KEY `IdEmpleado_idx` (`IdEmpleado`),
  KEY `IdCliente_idx` (`IdCliente`),
  CONSTRAINT `IdCliente` FOREIGN KEY (`IdCliente`) REFERENCES `clientes` (`IdCliente`),
  CONSTRAINT `IdDetallePedido` FOREIGN KEY (`IdDetallePedido`) REFERENCES `detallepedido` (`IdDetallePedido`),
  CONSTRAINT `IdEmpleado` FOREIGN KEY (`IdEmpleado`) REFERENCES `empleado` (`IdEmpleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productoscomercio`
--

DROP TABLE IF EXISTS `productoscomercio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productoscomercio` (
  `IdProductos` int NOT NULL AUTO_INCREMENT,
  `NombreProducto` varchar(250) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `CategoriaProducto` varchar(200) NOT NULL,
  `IdComercio` int NOT NULL,
  `precio` smallint NOT NULL,
  PRIMARY KEY (`IdProductos`),
  KEY `comercioProductos_idx` (`IdComercio`),
  CONSTRAINT `comercioProductos` FOREIGN KEY (`IdComercio`) REFERENCES `comercio` (`IdComercio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productoscomercio`
--

LOCK TABLES `productoscomercio` WRITE;
/*!40000 ALTER TABLE `productoscomercio` DISABLE KEYS */;
/*!40000 ALTER TABLE `productoscomercio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipocomercio`
--

DROP TABLE IF EXISTS `tipocomercio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipocomercio` (
  `IdTipoComercio` int NOT NULL,
  `DescripcionComercio` varchar(250) NOT NULL,
  PRIMARY KEY (`IdTipoComercio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocomercio`
--

LOCK TABLES `tipocomercio` WRITE;
/*!40000 ALTER TABLE `tipocomercio` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipocomercio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipousuario` (
  `IdTipoUsuario` int NOT NULL AUTO_INCREMENT,
  `DescripcionTipo` varchar(250) NOT NULL,
  PRIMARY KEY (`IdTipoUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuario`
--

LOCK TABLES `tipousuario` WRITE;
/*!40000 ALTER TABLE `tipousuario` DISABLE KEYS */;
INSERT INTO `tipousuario` VALUES (1,'Administrador');
/*!40000 ALTER TABLE `tipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `Idusuario` int NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(100) NOT NULL,
  `Contrasena` varchar(200) NOT NULL,
  `IdTipoUsuario` varchar(200) NOT NULL,
  PRIMARY KEY (`Idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (11,'noramartinez1466@gmail.com','$2b$10$GuX3Klb43hOMULkA/.gcWOdCnn/NEnqARv7nXgVtDRwJtmvtKXxSK','1');
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

-- Dump completed on 2022-03-24  1:16:12
