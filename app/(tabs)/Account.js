import { Link ,router} from "expo-router";
import { useState} from "react";
import {horizontalScale, verticalScale, moderateScale} from '../../costants/Matrcies';
import { View, Image, StyleSheet ,Text, TouchableOpacity,Alert } from "react-native";

export default function User() {
  const [profilepressed, setProfilepressed] = useState(false);
  const [orderpressed, setOrderpressed] = useState(false);
  const [Paymentpressed, setPaymentpressed] = useState(false);
  const [Addrasspressed, setAdresspressed] = useState(false);
  const [isLogined,setLogin]=useState(true);
  function Profile(Login) {
    if (Login) {
      router.push("Profile");
    } else {
        console.log("here is there")
      Alert.alert("Login Required", "Please Login to view the profile.");
      router.push("Login");
    }
  }
  
  const Order = (Login) => {
    if (Login) {
      router.push("Order");
    } else {
      Alert.alert("Login Required", "Please Login to view your orders.");
      router.push("../(auth)/Login");
    }
  };
  
  const Payment = (Login) => {
    if (Login) {
      router.push("Payment");
    } else {
      Alert.alert("Login Required", "Please Login to view payment information.");
      router.push("../(auth)/Login");
    }
  };
  
  const Addresses = (Login) => {
    if (Login) {
      router.push("Address");
    } else {
      Alert.alert("Login Required", "Please Login to view your addresses.");
      router.push("../(auth)/Login");
    }
  };
  return (
    <View style={styles.listcontainer}>
  <TouchableOpacity style={[styles.item]} onPress={() => Profile(isLogined)}>
  <Image style={styles.icon} source={require("../../assets/icons/User.png")} />
  <Text style={styles.title}>Profile</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.item]} onPress={() => Order(isLogined)}>
  <Image style={styles.icon} source={require("../../assets/icons/bag.png")} />
  <Text style={styles.title}>Order</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.item]} onPress={() => Payment(isLogined)}>
  <Image style={styles.icon} source={require("../../assets/icons/CreditCard.png")} />
  <Text style={styles.title}>Payment</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.item]} onPress={() => Addresses(isLogined)}>
  <Image style={styles.icon} source={require("../../assets/icons/Location.png")} />
  <Text style={styles.title}>Addresses</Text>
</TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  listcontainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
    marginTop:verticalScale(40),
    height: verticalScale(7),
  },
  Text: {
    fontSize: moderateScale(15),
    paddingLeft: horizontalScale(13),
    width: horizontalScale(500),
    paddingVertical: verticalScale(20),
    flexDirection: "row",
    alignItems: "center",
  },
  
  item: {
    flexDirection: "row",
    padding: verticalScale(20),
    alignItems: "center",
    
  },
  textPressed: {
    color: "blue",
  },
  itemPressed: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  icon: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
});
