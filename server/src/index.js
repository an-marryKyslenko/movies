import fs from 'fs';
import Query from "./resolvers/Query.js";
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resolvers = {
	Query
}
const typeDefs = fs.readFileSync(
	new URL('schema.graphql', import.meta.url),
	'utf-8'
)
const context = ({ req, res }) => ({
	locale: req?.headers?.locale || 'en-US'
})

const PORT = process.env.PORT || 4000;

async function startApolloServer(typeDefs, resolvers) {
	const app = express();
	const httpServer = http.createServer(app);

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageLocalDefault({ embed: true })
		],
	});
	await server.start();
	server.applyMiddleware({ app });

	app.use(express.static(path.join(__dirname, '../../client', 'build')))
	app.use(express.static("pablic"))

	app.get('/rest', function (req, res) {
		res.json({ data: 'rest work' })
	})

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'))
	})

	await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)

export default startApolloServer;