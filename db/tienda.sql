/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS productos;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` int NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `stock` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO productos(id,nombre,precio,imagen,stock,descripcion) VALUES(1,'Producto 1',50000,'/img/producto-1.jpg',10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat massa at diam porta tincidunt. Integer feugiat sem nulla. Maecenas rhoncus non urna eu fermentum.'),(2,'Producto 2',60000,'/img/producto-2.jpg',20,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat massa at diam porta tincidunt. Integer feugiat sem nulla. Maecenas rhoncus non urna eu fermentum.'),(3,'Producto 3',70000,'/img/producto-3.jpg',30,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat massa at diam porta tincidunt. Integer feugiat sem nulla. Maecenas rhoncus non urna eu fermentum.'),(4,'Producto 4',80000,'/img/producto-4.jpg',40,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat massa at diam porta tincidunt. Integer feugiat sem nulla. Maecenas rhoncus non urna eu fermentum.'),(5,'Producto 5',90000,'/img/producto-5.jpg',50,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat massa at diam porta tincidunt. Integer feugiat sem nulla. Maecenas rhoncus non urna eu fermentum.'),(6,'Producto 6',100000,'/img/producto-6.jpg',60,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat massa at diam porta tincidunt. Integer feugiat sem nulla. Maecenas rhoncus non urna eu fermentum.');