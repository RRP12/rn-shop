import { Button, SafeAreaView } from "react-native"
// import { AppText } from "@/components/AppText"
import React from "react"
import { Link } from "expo-router"

export default function SecondScreen() {
  // let params = useLocalSearchParams()
  return (
    <SafeAreaView className="justify-center flex-1 p-4">
      {/* <AppText center>Second Screen by {params.name}</AppText> */}
      <Link href="/third" asChild push>
        <Button title=" push to third"></Button>
      </Link>
    </SafeAreaView>
  )
}
