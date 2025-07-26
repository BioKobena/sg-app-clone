import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";



export default function RootLayout() {
  const [loaded] = useFonts({
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("../assets/fonts/Lato-Thin.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-SemiBold": require("../assets/fonts/Lato-SemiBold.ttf"),
  });

  if (!loaded) {
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
        color={Colors.primary}
        size={"large"}
      />
    );
  }
  return (
    <Stack initialRouteName="(menu)">
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(menu)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "slide_from_bottom",
          animationDuration: 2000,
        }}
      />
    </Stack>
  );
}
