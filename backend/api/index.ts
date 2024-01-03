import * as config from '../config';
import express from 'express';

const app = express();
const port = 5112;

app.get('/', (req, res) => {
	res.json({
		appName: config.getAppName()
	});
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});