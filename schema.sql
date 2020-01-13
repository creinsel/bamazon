DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name  VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(4) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
('Jumprope', 'Sports', 02.50, 100),
('Calculator','Electronics',05.00,500),
('Stickers','Misc', 0.50, 1000),
('iPhone Charger', 'Electronics', 12.50, 1500),
('Blue Coffee Mug', 'Home', 07.50, 900),
('Slime', 'Toys', 01.75, 400),
('Kitchen Knives', 'Home', 32.50, 100),
('MP3 Player', 'Electronics', 07.50, 80),
('Red Wig', 'Beauty', 40.00, 73),
('Black Hoodie', 'Clothing', 20.00, 1001);