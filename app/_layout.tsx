import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="create-account" options={{
        statusBarBackgroundColor: "#1B1A1C",
        title: "Create Account",
        headerStyle:{
          backgroundColor: "#1B1A1C",
        },
        headerTitleStyle:{color: "white"},
        headerTitleAlign: "center",
        headerTintColor: "white"
      }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
