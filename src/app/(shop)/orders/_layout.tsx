import { Stack } from "expo-router"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
export default function OrderLayout() {
  return (
    // <SafeAreaView>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Orders",
        }}
      />
      <Stack.Screen
        name="[slug]"
        options={{
          headerShown: false,
          title: "Orders",
        }}
      />
    </Stack>
    // </SafeAreaView>
  )
}
