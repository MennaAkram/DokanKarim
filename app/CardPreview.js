import { useRouter } from "expo-router";
import { View } from "react-native";
import CardPreview from "../screens/Payment/CardPreview";

export default function User(){
    const router = useRouter();
    return (
        <View>
            <CardPreview/>
        </View>
    )
}