`heroku login`
`heroku create invegorate`
`heroku addons:create heroku-postgresql:hobby-dev --name=invegorate-db`
`heroku addons:attach invegorate-db --app=invegorate`
`git push heroku master`
`heroku ps:scale web=1`
`heroku open`
`heroku logs --tail`

`\c invegorate_db`
`heroku pg:reset --app invegorate invegorate-db`
`pg_dump -U postgres skeam --no-owner --no-acl -f skeam.sql`
`cat file.sql | heroku pg:psql --app invegorate`

`TRUNCATE TABLE items`
`\copy items(id,name,name_formatted,name_species,category_id) FROM 'C:\Users\bryce\Projects\invegorate\server\database\raw\items.csv' DELIMITER ',' CSV HEADER;`
`TRUNCATE TABLE categories`
`\copy categories(id,name,label) FROM 'C:\Users\bryce\Projects\invegorate\server\database\raw\categories.csv' DELIMITER ',' CSV HEADER;`

