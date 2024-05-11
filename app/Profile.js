import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../costants/Matrcies";
import { router } from "expo-router";
import{firebase}from"../FireBaseConfig/firebaseConfig"
export default function Profile() {
  const [error,setError]=useState('');
  const[password,setPassword]=useState("karemmohamed")
  const[newpassword,setNewPassword]=useState("")
  const [username, setUserName] = useState("KimoElfager");
  const [newname, setNewname] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("")
  const [newEmail, setNewEmail] =useState('');
  const [user,setuser]=useState("");
  useEffect(()=>{
    firebase.firestore().collection('users').
    doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setuser(snapshot.data())
      }
      else{
        console.log("User does not exist")
      }
    })
  },[])
  const handleLogout = () => {
 
    
  };
  const onNamepressed = () => {
    router.push("ChangeName")
  };

  const Phonepressed = () => {
    router.push("ChangePhone")
  };

  const Passwordpressed = () => {
    router.push("ChangePassword")
  };

  const Emailpressed = () => {
    router.push("ChangeEmail")
  };
  function handlesavename(name) {
    if (name.length < 5) {
      setError("invalid input")
      console.error("input must be at least 5 chars")
      
    }
    //add to the firebase
    else {
    setUserName(name);
    setNameModal(false);
    setError('');
    }
  }
  
  function handlesaveemail(name) {
    if (name.length < 5) {
      setError("invalid input")
      console.error("input must be at least 5 chars")
      
    }
    //add to the firebase
    else {
    setEmail(name);
    setEmailModal(false);
    setError('');
    }
  }
  function handlesavepassword(name) {
    if (name.length < 5) {
      setError("invalid input")
      console.error("input must be at least 5 chars")
      
    }
    //add to the firebase
    else {
    setPassword(name);
    setPasswordModal(false);
    setError('');
    }
  }
  function handlesavephone(name) {
    //add to the firebase

    setPhone(name);
    setPhoneModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.Profilepic}
          source={{uri:user.pic}}
        />
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.nameText} onPress={onNamepressed}>
            <Text>{user.username}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.item} onPress={Emailpressed}>
        <View style={styles.icontext}>
          <Image source={require("../assets/icons/Message.png")} />
          <Text style={styles.Text}>Email</Text>
          <View style={styles.sideTextContainer}>
            <Text style={styles.sidetext} numberOfLines={1}>
              {user.email}
            </Text>
          </View>
          <Image source={require("../assets/icons/Right.png")} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={Phonepressed}>
        <View style={styles.icontext}>
          <Image source={require("../assets/icons/Phone.png")} />
          <Text style={styles.Text}>Phone</Text>
          <View style={styles.sideTextContainer}> 
            <Text style={styles.sidetext} numberOfLines={1}>
              {user.phone}
            </Text>
          </View>
          <Image source={require("../assets/icons/Right.png")} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={Passwordpressed}>
        <View style={styles.icontext}>
          <Image source={require("../assets/icons/Message.png")} />
          <Text style={styles.Text}>Change password</Text>
          <View style={[styles.sideTextContainer, styles.proto]}>
            <Text style={styles.sidetext} numberOfLines={1}>
              {user.password}
            </Text>
          </View>
          <Image source={require("../assets/icons/Right.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{firebase.auth().signOut()
      .then(() => {
        console.log("User logged out");
       
        const userToken = AsyncStorage.setItem(null)
        router.replace("login");
      })
      .catch(error => {
        // Handle logout error
        console.error("Logout error:", error);
      });}} style={styles.item}>
       <View style={[styles.icontext,{fontSize:30,borderRadius:moderateScale(60),backgroundColor:'#40BFFF',flex:1,height:moderateScale(50),alignItems:"center",margin:"13%",justifyContent:"center"}]}>
        <Text style={{fontSize:moderateScale(20)}} >
          Sign Out
        </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icontext: {
    flexDirection: "row",
  },
  sideTextContainer: {
    width: horizontalScale(70),
    marginLeft: horizontalScale(150),
  },
  btncontainer:{
   paddingTop:verticalScale(-10)
  },
  proto: {
    marginLeft: horizontalScale(50),
  },
  sidetext: {
    color: "gray",
    fontSize: moderateScale(12),
    paddingLeft: horizontalScale(10),
    paddingTop: verticalScale(5),
    overflow: "hidden",
  },
  Text: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    paddingLeft: horizontalScale(20),
  },
  Profilepic: {
    width: horizontalScale(100),
    height: verticalScale(100),
    marginTop: verticalScale(40),
    marginLeft: horizontalScale(18),
    borderRadius: moderateScale(100),
    marginRight: moderateScale(10),
  },
  nameText: {
    fontSize: moderateScale(18),
  },
  textContainer: {
    marginTop: verticalScale(80),
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
    paddingBottom: verticalScale(20),
    paddingTop: verticalScale(50),
    paddingLeft: horizontalScale(13),
  },
  listcontainer: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
    marginTop: verticalScale(15),
    height: verticalScale(7),
  },
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: moderateScale(20),
    width: moderateScale(300),
    height: moderateScale(300),
    borderRadius: moderateScale(10),
    justifyContent:'space-around'
  },
  modalText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  modalButton: {
    marginTop:verticalScale(10),
    backgroundColor: '#40BFFF',
    color: 'white',
    textAlign: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
});