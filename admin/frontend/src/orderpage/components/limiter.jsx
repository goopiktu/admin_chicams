// Limiter.js
import { useEffect } from "react";
import React, { useState } from "react";
import useUpdate from "../../hooks/useUpdate";
import useFetch from "../../hooks/useFetch";

const Limiter = () => {
  const [count, setCount] = useState(0);
  const { updateData, loading, error } = useUpdate("/api/updateLimit", "PATCH", { limit: count });
  const { data: limit } = useFetch("/api/getLimit");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
  

  }, [limit]);


  const handleUpdate = async () => {
    try {
      await updateData( count );
      console.log("Document updated successfully");
      // Additional logic after a successful update
    } catch (error) {
      console.error("Error updating document:", error);
      // Handle the error appropriately
    }
  };
  

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Limiter: {limit}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={handleUpdate}>Update Document</button>
        </div>
      )}
    </div>
  );
};

export default Limiter;
