import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import ModalProf from "../componants/ModalProf";
import React, { useState } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../costants/Matrcies";

export default function Profile() {
  const [error,setError]=useState('');
  const [nameModal, setNameModal] = useState(false);
  const [PhoneModal, setPhoneModal] = useState(false);
  const [PasswordModal, setPasswordModal] = useState(false);
  const[password,setPassword]=useState("karemmohamed")
  const[newpassword,setNewPassword]=useState("")
  const [EmailModal, setEmailModal] = useState(false);
  const [username, setUserName] = useState("KimoElfager");
  const [newname, setNewname] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("")
  const [newEmail, setNewEmail] =useState('')
  const onNamepressed = () => {
    setNameModal(true);
  };

  const Phonepressed = () => {
    setPhoneModal(true);
  };

  const Passwordpressed = () => {
    setPasswordModal(true);
  };

  const Emailpressed = () => {
    setEmailModal(true);
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
          source={require("../assets/images/logo.png")}
        />
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.nameText} onPress={onNamepressed}>
            <Text>{username}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ModalProf
        visible={nameModal}
        typ="Change your name"
        onRequestClose={() => setNameModal(false)}
        onChangeText={(text) => setNewname(text)}
        onSave={() => handlesavename(newname)}
        placeholder="Enter your new name"
        error={error}
      />
      
      <ModalProf
        visible={PasswordModal}
        typ="Change your Password"
        onRequestClose={() => setPasswordModal(false)}
        onChangeText={(text) => setNewPassword(text)}
        onSave={() => handlesavepassword(newpassword)}
        placeholder="Enter your new password"
        keyboardType="visible-password"
        error={error}
      />
      
      <ModalProf
        visible={PhoneModal}
        typ="Change your Phone"
        onRequestClose={() => setPhoneModal(false)}
        onChangeText={(text) => setNewPhone(text)}
        onSave={() => handlesavephone(newPhone)}
        keyboardType="numeric"
        placeholder="Enter your new phone"
      />
      <ModalProf
        visible={EmailModal}
        typ="Change your Email"
        onRequestClose={() => setEmailModal(false)}
        onChangeText={(text) => setNewEmail(text)}
        onSave={() => handlesaveemail(newEmail)}
        keyboardType="email-address"
        placeholder="Enter your new email"
      />
      <TouchableOpacity style={styles.item} onPress={Emailpressed}>
        <View style={styles.icontext}>
          <Image source={require("../assets/icons/Message.png")} />
          <Text style={styles.Text}>Email</Text>
          <View style={styles.sideTextContainer}>
            <Text style={styles.sidetext} numberOfLines={1}>
              {email}
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
              {Phone}
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
              {" "}
              ****************
            </Text>
          </View>
          <Image source={require("../assets/icons/Right.png")} />
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