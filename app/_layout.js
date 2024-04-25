import { Stack } from "expo-router";

const RootLayout = () => {
  return <RootLayoutNav/>;
};

function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ presentation: 'index' }} />
      </Stack>
  );
}

export default RootLayout;