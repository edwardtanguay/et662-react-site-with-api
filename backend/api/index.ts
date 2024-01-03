import * as config from '../config';
import express from 'express';
import cors from 'cors';
import * as tools from '../tools';

const app = express();
app.use(cors());
const port = 5112;

app.get('/', (req, res) => {
	res.json({
		appName: config.getAppName()
	});
});

// string
app.get('/node-version', (req, res) => {
	res.json(process.version);
});

// number
app.get('/number-of-files', (req, res) => {
	const baseDirectory = process.cwd();
	const files = tools.getAllFilesInDirectory(baseDirectory);
	res.json(files.length);
});


app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});