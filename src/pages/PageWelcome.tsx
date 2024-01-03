import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = 'http://localhost:5112'; 

export const PageWelcome = () => {
	const [appName, setAppName] = useState('');

	useEffect(() => {
		(async () => {
			const response = await axios.get(backendUrl);
			const _appName = response.data.appName;
			setAppName(_appName);
		})();
	}, []);

	return (
		<p>APP NAME: {appName}</p>
		
	)
}