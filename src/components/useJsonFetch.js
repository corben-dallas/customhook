import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts = {}) {
const [data, setData] = useState(null);
const [isLoading, setLoading] = useState(false);
const [hasError, setError] = useState(null);

useEffect(() => {
	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch(url, {...opts});
			
			if (!response.ok) {
				throw new Error(response.statusText);
			} else {
				const data = await response.json();
				setData(data.status);
			}
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};
	fetchData();
}, []);

return [data, isLoading, hasError];
};
