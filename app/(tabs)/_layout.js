import { Tabs, router } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
export default function _layout() {
  const [login,setlogin]=useState(false);
  const [screen,setscreen]=useState("")
  function islogined(login) {
        if(login){
          setscreen("Account")
        }
        else {
          router.push("Login")
        }
  }
  return (
    <Tabs screenOptions={{headerShown: false}} >
      <Tabs.Screen name="Home"  options={{
        tabBarIcon: ({focused}) => (
          <Feather name="home" size={24} color={focused ? '#40BFFF' : '#9098B1'} />
        )
      }}/>
      <Tabs.Screen name="Explore" options={{
        tabBarIcon: ({focused}) => (
          <Feather name="search" size={24} color={focused ? '#40BFFF' : '#9098B1'} />
        )
      }}/>
      <Tabs.Screen name="Cart" options={{
        tabBarIcon: ({focused}) => (
          <Feather name="shopping-cart" size={24} color={focused ? '#40BFFF' : '#9098B1'} />
        )
      }}/>
      <Tabs.Screen name="Account"  options={{
        tabBarIcon: ({focused}) => (
          <Feather name="user" size={24} color={focused ? '#40BFFF' : '#9098B1'} />
        )
      }}/>
    </Tabs>
  );
}
