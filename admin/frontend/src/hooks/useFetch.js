import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    process.env.REACT_APP_API_URL + url
                );
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
        };

        getData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
