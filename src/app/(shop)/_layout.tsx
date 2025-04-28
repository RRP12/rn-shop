/* eslint-disable prettier/prettier */
import { Tabs } from "expo-router"
import React from "react"
// import Ionicons from "@expo/vector-icons/Ionicons"
import { SafeAreaView } from "react-native-safe-area-context"
// import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome } from "@expo/vector-icons/"
console.log("Tabs.Screen", Tabs)

export default function _layout() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, borderWidth: 3, borderColor: "black" }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            borderWidth: 1,
            borderColor: "black",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon({
              focused,
              color,
              size,
            }: {
              focused: boolean
              color: string
              size: number
            }): JSX.Element {
              return (
                <FontAwesome
                  name="home"
                  size={size}
                  color={focused ? "#171817" : color}
                />
              )
            },
            headerShown: false,
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            tabBarIcon({
              focused,
              color,
              size,
            }: {
              focused: boolean
              color: string
              size: number
            }): JSX.Element {
              return (
                <FontAwesome
                  name="shopping-cart"
                  size={size}
                  color={focused ? "#171817" : color}
                />
              )
            },
            headerShown: false,
            title: "Orders",
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
