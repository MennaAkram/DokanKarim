import { useRouter } from "expo-router";
import { View } from "react-native";
import CreditCards from "../screens/Payment/CreditCards";

export default function User(){
    const router = useRouter();
    return (
        <View>
            <CreditCards/>
        </View>
    )
}