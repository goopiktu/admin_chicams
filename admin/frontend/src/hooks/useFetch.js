import { useState, useCallback, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(process.env.REACT_APP_API_URL + url);
            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
            }

            setData(data);
            setLoading(false);
            setError(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetch = () => {
        setLoading(true);
        fetchData();
    };

    return { data, loading, error, refetch };
};

export default useFetch;
