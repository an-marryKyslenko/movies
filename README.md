Movies Recommendation
=============
### Project was created by :
+ client:
	+ React
	+ React Router Dom
	+ React final form
	+ GraphGL
	+ Apollo/client
	+ Material UI
+ server:
	+ Express
	+ Apollo/server
	+ Apollo Server Express
	+ GraphQL
	+ Axios

----
### Deploy with Vercel

----

[Link to app](https://movies-nine-alpha.vercel.app/ "go to app")



- Create folder `/api` and file 

`$ mkdir api`  and in it create `$ touch index.js`

- Insice index make inport and export Serverless function:
```javascript

    import startApolloServer from "../src/index.js";
    export { startApolloServer };

```
- create another folder and file in it:
`mkdir public && cd public && touch .gitkeep`

- last step, create `vercel.json`

```javascript
{
	"rewrites": [
		{
			"source": "/(.*)",
			"destination": "/api"
		}
	]
}
```



### End
