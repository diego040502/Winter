import { useState, useEffect } from "react"

export const useUser = () => {
  const [usersData, setUsersData] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((usersData) => setUsersData(usersData))
      .finally(() => setLoadingUsers(false))
  }, [])


  return { usersData }
}