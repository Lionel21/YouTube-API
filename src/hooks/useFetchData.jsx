import { useState, useEffect, useContext } from "react";

const useFetchData = ({ url }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const fetchedData = await response.json();
                    setData(fetchedData);
                }
            } catch (e) {
                alert(`Oops! Error! ${e.message}`);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return [[data, setData], isLoading, error];
};

export default useFetchData;
