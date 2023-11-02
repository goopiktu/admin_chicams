import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: Order, loading } = useFetch("/api/orders");
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (Order && Order.fname) {
      setFirstName(Order.fname);
    }
    console.log(Order.fname)
  }, [Order]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{Order.fname}</p>
      )}
    </div>
  );
}

export default App;
