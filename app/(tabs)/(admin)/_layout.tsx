import { Stack } from "expo-router"


export default function AdminLayout() {
  return (
    <Stack screenOptions={{headerShown: false,
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: '#b1a9ff',
        },
        headerTintColor: "white",
    }}>
        <Stack.Screen name="user/[id]" options={{title: "User Detail"}}/>
        <Stack.Screen name="user/profile" options={{title: "User Profile"}}/>
    </Stack>
  )
}

