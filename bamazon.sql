CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id varchar (100) null,
product_name varchar (100) null,
department_name varchar (100) null,
price decimal (10,2) null,
stock_quantity int null
);
Insert into products (item_id, product_name, department_name, price, stock_quantity),
Values('1', 'Toyota Carrolla', 'automobiles', '10000.00', '10'),
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('2', 'Ludwig Questlove Backbeats portable 4-piece drum kit', 'musical instruments', '400.00', '20')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('3', 'ford f-150', 'automobiles', '30000.00', '20')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('4' ,'levis skinny jeans', 'clothing', '25.00', '100')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('5', '5 lb. weight dumbells', 'gym equipment', '75.00', '200')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('6' ,'Spaulding NBA Basketball', 'sports equipment', '50.00', '500')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('7', 'Gatorade Lemon-lime drink', 'beverages', '2.50', '5000')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('8', 'Converse Neon Yellow Sneakers', 'shoes', '20.00', '10000' )
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('9', 'Crayola 64-count crayons', 'Art Supplies', '10.00', '20000')
Insert into products (item_id, product_name, department_name, price, stock_quantity)
Values('10', 'Mead college-ruled notebook', 'Paper', '3.00', '30000')products