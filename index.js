const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')

const app = express()
const PORT = 5678

app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({ schema })
)

app.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql'
	})
)

app.listen(PORT, () => {
  console.log('Server is running OK!')
})
