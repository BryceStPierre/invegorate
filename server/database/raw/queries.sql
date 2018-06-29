CREATE TABLE categories
(
  id serial NOT NULL,
  name character varying(40) NOT NULL,
  label character varying(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE items
(
  id serial NOT NULL,
  name character varying(35),
  name_formatted character varying(35),
  name_species character varying(100),
  category_id serial REFERENCES categories(id),
  PRIMARY KEY (id)
);

CREATE TABLE prices
(
  id serial NOT NULL,
  plant_id serial REFERENCES items(id),
  product_name character varying(40),
  price_regular money NOT NULL,
  price_sale money NOT NULL,
  unit_id integer NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  postal_code character varying(8),
  city character varying(80),
  province character varying(30),
  country character varying(50),
  PRIMARY KEY (id)
);

SELECT items.name_formatted, items.name_species, categories.label as category from
items INNER JOIN categories ON items.category_id = categories.id WHERE items.name = 'broccoli';


SELECT product_name, price_regular, price_sale, unit_id from prices INNER JOIN items ON prices.plant_id = items.id WHERE items.name = 'american-groundnut';