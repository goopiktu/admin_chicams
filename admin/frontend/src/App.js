import { useEffect } from "react";
import useFetch from "./hooks/useFetch"


function App() {
  
    const { data: Order } = useFetch("/");
    useEffect(() => {
      console.log(Order);
    }, [Order]);
  

  return (
    <div> 
      
    </div>
    
  )
}


export default App;
