import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons';
import Colors from "../../costants/Colors";

export default function _layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarItemStyle: {padding:16}, tabBarStyle:{height: 68}
      }} >
      <Tabs.Screen name="Home"  options={{
        tabBarActiveTintColor: Colors.primary,
        tabBarIcon: ({focused}) => (
          <Feather name="home" size={24} color={focused ? Colors.primary : Colors.greyText} />
        )
      }}/>
      <Tabs.Screen name="Explore" options={{
        tabBarActiveTintColor: Colors.primary,
        tabBarIcon: ({focused}) => (
          <Feather name="search" size={24} color={focused ? Colors.primary : Colors.greyText} />
        )
      }}/>
      <Tabs.Screen name="Cart" options={{
        tabBarActiveTintColor: Colors.primary,
        tabBarIcon: ({focused}) => (
          <Feather name="shopping-cart" size={24} color={focused ? Colors.primary : Colors.greyText} />
        )
      }}/>
      <Tabs.Screen name="Account" options={{
        tabBarActiveTintColor: Colors.primary,
        tabBarIcon: ({focused}) => (
          <Feather name="user" size={24} color={focused ? Colors.primary : Colors.greyText} />
        )
      }}/>
    </Tabs>
  );
}
