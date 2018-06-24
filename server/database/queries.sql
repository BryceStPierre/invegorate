CREATE TABLE items
(
  id serial NOT NULL,
  name character varying(35),
  name_formatted character varying(35),
  name_species character varying(100),
  category_id serial NOT NULL,
  CONSTRAINT items_pkey PRIMARY KEY (id)
)