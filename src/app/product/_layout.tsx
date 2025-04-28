import { Stack } from "expo-router"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from "react-native"
export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: true,
          title: "[slug]",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <Ionicons name="arrow-back" />
            </TouchableOpacity>
          ),
        })}
      />

      {/* <Stack.Screen
        name=""
        options={{
          headerShown: true,
          title: "Orders",
        }}
      /> */}
    </Stack>
  )
}
