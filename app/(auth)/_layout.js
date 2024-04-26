
import React from 'react';
import { Stack } from "expo-router";

export default function _layout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack>
    );
    }
