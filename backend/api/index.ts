import * as config from '../config';
import express from 'express';
import cors from 'cors';
import * as tools from '../tools';
import axios from 'axios';

interface IEmpHireItem {
	fullName: string;
	hireDate: string;
}

const app = express();
app.use(cors());
const port = 5112;

// serve OBJECT
app.get('/', (req, res) => {
	res.json({
		appName: config.getAppName()
	});
});

// serve STRING
app.get('/node-version', (req, res) => {
	res.json(process.version);
});

// serve NUMBER
app.get('/number-of-files', (req, res) => {
	const baseDirectory = process.cwd();
	const files = tools.getAllFilesInDirectory(baseDirectory);
	res.json(files.length);
});

// serve ARRAY
app.get('/employee-hire-dates', (req, res) => {
	(async () => {
		const response = await axios.get('https://edwardtanguay.vercel.app/share/employees.json');
		const empHireItems: IEmpHireItem[] = [];
		const employees = response.data;
		for (const employee of employees) {
			empHireItems.push({
				fullName: `${employee.firstName} ${employee.lastName}`,
				hireDate: employee.hireDate.substring(0,10)
			});
		}
		console.log(empHireItems.length);
		res.json(empHireItems);
	})();
});


app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});