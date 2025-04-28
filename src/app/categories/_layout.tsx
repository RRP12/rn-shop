import { Stack } from "expo-router"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from "react-native"
export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: true,
          title: "Orders",
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
