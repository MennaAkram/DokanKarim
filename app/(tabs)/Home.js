import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function User(){
    const router = useRouter();
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home</Text>
        </View>
    )
}