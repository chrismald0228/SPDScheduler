import { useEffect, useState } from "react"
import { userApi } from "./api/user"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    userApi.getAll().then((res) => setData(res.data));
}, []);

  return (
    <>
      <h1>Hi</h1>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App