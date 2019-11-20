-- query to create users table
CREATE TABLE users (user_id SERIAL PRIMARY KEY, email varchar(50), password varchar(250), name varchar(20), ig_handle varchar(20));
-- query to create posts table
CREATE TABLE posts (post_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id), image varchar(50), text varchar(280));
-- query to create products table
CREATE TABLE products (product_id SERIAL PRIMARY KEY, title varchar(50), brand varchar(20), category varchar(20), url varchar(100));
-- query to create posts-products table
CREATE TABLE posts_products (pp_id SERIAL PRIMARY KEY, post_id INT REFERENCES posts(post_id), product_id INT REFERENCES products(product_id));