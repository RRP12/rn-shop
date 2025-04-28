import { Button, View } from "react-native"
// import { AppText } from "@/components/AppText"
import React from "react"
import { Link } from "expo-router"

export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      {/* <AppText center>Third screeens</AppText> */}

      <Link href="/" push asChild>
        <Button title="Push to /" />
      </Link>

      <Link href="/" dismissTo asChild>
        <Button title="dismiss to / " />
      </Link>
      <Link href="/second" replace asChild>
        <Button title="replace to / " />
      </Link>
    </View>
  )
}
