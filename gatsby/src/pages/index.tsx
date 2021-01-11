import React, { useEffect, useState } from "react"

const fetchFromGo = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/api/")
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

type Response = {
  status: number
  data: string
}

export default function Home() {
  const [isReady, setIsReady] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchFromGo().then((res: any) =>
      res.json().then((result: Response) => {
        setMessage(result.data)
        setIsReady(true)
      })
    )
  }, [])

  return (
    <div>
      <div>Status : {isReady ? "Ready" : "Fetching..."}</div>
      <div>
        Golang Server said:
        <br />
        {isReady ? (
          <div style={{ fontWeight: "bold" }}>{message}</div>
        ) : (
          "Fetching"
        )}
      </div>
    </div>
  )
}
