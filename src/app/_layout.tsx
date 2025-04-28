import { Stack } from "expo-router"
import "../../global.css"
import React from "react"
import { ToastProvider } from "react-native-toast-notifications"

export default function RootLayout() {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{
            headerShown: false,
            title: "shop",
          }}
        />

        <Stack.Screen
          name="categories"
          options={{
            headerShown: false,
            title: "categories",
          }}
        />
        <Stack.Screen
          name="product"
          options={{
            headerShown: false,
            title: "product",
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            presentation: "modal",
            headerShown: true,
            title: "cart",
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerShown: true,
            title: "auth",
          }}
        />
      </Stack>
    </ToastProvider>
  )
}
