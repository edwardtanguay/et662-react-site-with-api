import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = "http://localhost:5112";

export const PageWelcome = () => {
	const [appName, setAppName] = useState("");
	const [nodeVersion, setNodeVersion] = useState("");
	const [numberOfFiles, setNumberOfFiles] = useState(0);

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

	return (
		<>
			<p>APP NAME: {appName}</p>
			<p>NODE VERSION: {nodeVersion}</p>
			<p>NUMBER OF FILES: {numberOfFiles}</p>
		</>
	);
};
