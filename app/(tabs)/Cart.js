import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Cart from "../../screens/Cart/Cart";


export default function User(){
    const router = useRouter();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ffff'}}>
                <Cart />
        </View>
    )
}