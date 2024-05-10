import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import CartSucces from "../screens/Cart/CartSucces";

export default function User(){
    const router = useRouter();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <CartSucces/>
        </View>
    )
}