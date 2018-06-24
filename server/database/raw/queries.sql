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

SELECT items.name_formatted, items.name_species, categories.label as category from
items INNER JOIN categories ON items.category_id = categories.id WHERE items.name = 'broccoli';