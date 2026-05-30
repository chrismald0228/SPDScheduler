import { useEffect, useState } from "react"
import { NavBar } from "./components/home/navbar"
import { userApi } from "./api/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { User } from "@/types/user"

function App() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    userApi.getAll().then((res) => setData(res.data));
}, []);

  return (
    <>
      <NavBar />
      <div className="p-8">
        {data.map((user) => (
          <Card key={user.username} className="m-2">
            <CardTitle className="p-2 font-bold underline decoration-2 decoration-sky-600">{user.username}</CardTitle>
            <CardHeader>{user.name}</CardHeader>
            <CardContent>{user.phoneNum}</CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default App