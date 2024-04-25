import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Home from "../../screens/Home/home";
import Colors from "../../costants/Colors";

export default function User(){
    const router = useRouter();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: Colors.onPrimary}}>
            <Home/>
        </View>
    )
}