`heroku login`
`heroku create invegorate`
`heroku addons:create heroku-postgresql:hobby-dev --name=invegorate-db`
`heroku addons:attach invegorate-db --app=invegorate`
`git push heroku master`
`heroku ps:scale web=1`
`heroku open`
`heroku logs --tail`
