import { useRouter } from "expo-router";
import { View } from "react-native";
import AddCard from "../screens/Payment/AddCard";

export default function User(){
    const router = useRouter();
    return (
        <View>
            <AddCard/>
        </View>
    )
}