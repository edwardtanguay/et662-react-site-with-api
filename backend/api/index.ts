import express from 'express';

const app = express();
const port = 5112;

app.get('/', (req, res) => {
	res.json({
		appName: 'et662-react-site-with-api'
	});
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});