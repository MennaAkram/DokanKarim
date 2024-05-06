import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Markets from "../../screens/admin/Markets/Markets";
import { StatusBar } from "expo-status-bar";
import Colors from "../../costants/Colors";

export default function User(){
    const router = useRouter();
    return (
        <View >
        <StatusBar hidden={true}/>
            <Markets/>
        </View>
    )
}