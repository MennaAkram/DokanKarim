import { Stack } from "expo-router";

const RootLayout = () => {
  return <RootLayoutNav/>;


};
function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(screens)"/>

           </Stack>
  );
}

export default RootLayout;