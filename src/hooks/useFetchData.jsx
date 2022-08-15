import { useState, useEffect } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                if (response.ok) {
                    const newData = await response.json();
                    setData(newData.items);
                } else {
                    alert(`Oops! Error! ${response.status}`);
                }
            } catch (e) {
                alert(`Oops! Error! ${e.message}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return [[data, setData], isLoading];
};

export default useFetchData;
