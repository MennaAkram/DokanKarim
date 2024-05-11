import { useRouter } from "expo-router";
import { StatusBar, Text, View } from "react-native";
import ProductDetails from "../screens/ProductDetails/ProductDetails";

export default function User(){
    const router = useRouter();
    return (
        <View>
            <ProductDetails/>
        </View>
    )
}