import type { User } from "@/types/user";
import { useEffect, useState } from "react";
import { userApi } from "../../api/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
    const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    userApi.getAll().then((res) => setData(res.data));
}, []);

  return (
    <>
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