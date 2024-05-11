import { Link ,router} from "expo-router";
import { useState,useEffect} from "react";
import {horizontalScale, verticalScale, moderateScale} from '../../costants/Matrcies';
import { View, Image, StyleSheet ,Text, TouchableOpacity,Alert } from "react-native";
import{firebase}from '../../firebase/firebaseConfig'
export default function User() {
  const [profilepressed, setProfilepressed] = useState(false);
  const [orderpressed, setOrderpressed] = useState(false);
  const [Paymentpressed, setPaymentpressed] = useState(false);
  const [Addrasspressed, setAdresspressed] = useState(false);
  const [initializing,setInitializing] = useState(true);
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checklogin = async () => {
      try {
        const userDoc = await firebase.firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .get();
  
        if (userDoc.exists) {
          setUser(true);
        } else {
          setUser(false);
        }
      } catch (error) {
        setUser(false);
      }
    };
  
    checklogin();
    const unsubscribe = firebase.auth().onAuthStateChanged(checklogin);
    return () => unsubscribe();
  }, []);
  
  const Profile = (user)=>{
    if (user) {
      router.push("Profile");
    } else {
      Alert.alert("Login Required", "Please Login to view the profile.");
      router.push("/login");
    }
  }
  
  const Order = (user) => {
    if (user) {
      router.push("Order");
    } else {
      Alert.alert("Login Required", "Please Login to view your orders.");
      router.push("/login");
    }
  };
  
  const Payment = (user) => {
    if (user) {
      router.push("Payment");
    } else {
      Alert.alert("Login Required", "Please Login to view payment information.");
  router.push("/login");
    }
  };
  
  const Addresses = (user) => {
    if (user) {
      router.push("Address");
    } else {
      Alert.alert("Login Required", "Please Login to view your addresses.");
  router.push("/login");
    }
  };
  return (
    <View style={styles.listcontainer}>
  <TouchableOpacity style={[styles.item]} onPress={() => Profile(user)}>
  <Image style={styles.icon} source={require("../../assets/icons/User.png")} />
  <Text style={styles.title}>Profile</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.item]} onPress={() => Order(user)}>
  <Image style={styles.icon} source={require("../../assets/icons/bag.png")} />
  <Text style={styles.title}>Order</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.item]} onPress={() => Payment(user)}>
  <Image style={styles.icon} source={require("../../assets/icons/CreditCard.png")} />
  <Text style={styles.title}>Payment</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.item]} onPress={() => Addresses(user)}>
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