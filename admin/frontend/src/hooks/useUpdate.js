import { useState } from "react";

const useUpdate = (url, method = "PATCH") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (dataToUpdate) => {
    try {
      setLoading(true);

      console.log("Inside updatedata", dataToUpdate);
      const response = await fetch(process.env.REACT_APP_API_URL + url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToUpdate),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setLoading(false);
      setError(null);

      return await response.json();
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  };

  return { updateData, loading, error };
};

export default useUpdate;
