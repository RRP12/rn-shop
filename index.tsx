import React from "react"
import { Button } from "react-native"
// import { AppText } from "@/components/AppText"
import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

export default function IndexScreen() {
  return (
    <SafeAreaView className="justify-center flex-1 p-4">
      {/* <AppText center>
        Open up <AppText bold>app/index.tsx</AppText> to start working on your
        app!
      </AppText> */}

      <Link
        href={{ pathname: "/second", params: { name: "rushikesh" } }}
        asChild
        push
      >
        <Button title=" push to second"></Button>
      </Link>

      <Link href="/proverbs/1]" asChild push>
        <Button title=" push to proverb 1 "></Button>
      </Link>

      <Link href="/proverbs/2]" asChild push>
        <Button title=" push to proverb 2 "></Button>
      </Link>
      <Link href="/proverbs/3]" asChild push>
        <Button title=" push to proverb 3 "></Button>
      </Link>
    </SafeAreaView>
  )
}
