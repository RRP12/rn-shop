import { useLocalSearchParams } from "expo-router"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"

export default function ProversAccodingtoId() {
  const params = useLocalSearchParams<{ id: string | string[] }>()
  // If id is an array, take the first element. Also, remove any trailing brackets.
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const cleanId = id ? id.replace(/[\[\]]/g, "") : ""

  const [data, setdata] = useState<any>(null)

  useEffect(() => {
    if (!cleanId) return
    fetch(`https://jsonplaceholder.typicode.com/todos/${cleanId}`)
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((error) => {
        console.error("Error fetching data:", error)
        setdata(null)
      })
  }, [cleanId])

  return (
    <View>
      <Text>
        ProversAccodingtoId{" "}
        {data === null ? "Loading..." : JSON.stringify(data)}
      </Text>
    </View>
  )
}
