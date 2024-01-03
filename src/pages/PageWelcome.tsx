import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = "http://localhost:5112";

interface IEmpHireItem {
	fullName: string;
	hireDate: string;
}

export const PageWelcome = () => {
	const [appName, setAppName] = useState("");
	const [nodeVersion, setNodeVersion] = useState("");
	const [numberOfFiles, setNumberOfFiles] = useState(0);
	const [empHireItems, setEmpHireItems] = useState<IEmpHireItem[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(backendUrl);
			const _appName = response.data.appName;
			setAppName(_appName);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/node-version`);
			setNodeVersion(response.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/number-of-files`);
			setNumberOfFiles(response.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(
				`${backendUrl}/employee-hire-dates`
			);
			setEmpHireItems(response.data);
		})();
	}, []);

	return (
		<>
			<p>APP NAME: {appName}</p>
			<p>NODE VERSION: {nodeVersion}</p>
			<p>NUMBER OF FILES IN WEBSITE DIRECTORY: {numberOfFiles}</p>
			<p>
				EMPLOYEE HIRE DATES:
				<ul className="list-disc ml-6">
					{empHireItems.map((empHireItem, index) => {
						return <li key={index}>{empHireItem.fullName} - {empHireItem.hireDate}</li>;
					})}
				</ul>
			</p>
		</>
	);
};
