DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT(4) NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Purple Punch", "Hybrid", 10, 20),
 ("Sunset Sherbert", "Indica", 8, 17),
 ("Girl Scout Cookies", "Sativa", 11, 5),
 ("Gorilla Glue", "Hybrid", 7, 12),
 ("Lemon Haze", "Sativa", 9, 6),
 ("Green Crack", "Sativa", 10, 20),
 ("White Widow", "Indica", 10, 20),
 ("Dutch Treat", "Sativa", 12, 10),
 ("Blue Dream", "Hybrid", 8, 15),
 ("Northern Lights", "Indica", 9, 15)