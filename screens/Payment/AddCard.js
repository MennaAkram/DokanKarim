import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useId, useEffect } from "react";
import ComponentTitle from "../../components/componentTitle";
import InputText from "./components/InputText";
import Button from "../../components/Button";
import { router, useNavigation } from "expo-router";

const screenWidth = Dimensions.get("window").width;

const AddCard = ({id}) => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState("");
  const [date, onChangeDate] = React.useState("");
  const [previosDate, onChangePreviosDate] = React.useState(date);
  const [code, onChangeCode] = React.useState("");
  const [name, onChangeName] = React.useState("");

  const onChangeCardNumber = (text) => {
    const formattedText = text.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1          ').trim();
    onChangeNumber(formattedText);
  }

  const onChangeCardDate = (text) => {

    if(text.length == 2 && previosDate.length == 1){
      text = text + '/';
    }
    if(text.length == 3 && previosDate.length == 2){
      text = previosDate + '/' + text[text.length - 1];
    }
    if(text.length == 2 && previosDate.length == 3){
      text = text.slice(0, 1);
    }
    if(text.length == 3 && previosDate.length == 4){
      text = text.slice(0, 2);
    }
    
    onChangeDate(text);
    onChangePreviosDate(text);
  }

  const handleAddCard = (cardId) => {
    if (number.length < 46 || date.length < 5 || code.length < 4 || name.length < 1) {
      alert("Please enter all fields");
      return;
    }
    navigation.navigate('CardPreview', {cardId, number, date, code, name})
  }

  return (
    <View>

    <View style={styles.container}>
    <View style={{marginTop:16}}>
      <ComponentTitle title="Card Number" />
      <InputText
        onChangeText={(text) => {onChangeCardNumber(text)}}
        text={number}
        placeholder={"Enter Card Number"}
        keyboardType="numeric"
        length={46}
      />
      </View>

      <View style={{flexDirection:'row', marginTop: 24}}>
      <View style={{width: screenWidth/2}}>
      <ComponentTitle title="Expiration Date" />
      <InputText
        onChangeText={onChangeCardDate}
        text={date}
        placeholder={"Enter Expiration Date"}
        keyboardType="numeric"
        length={5}
      />
      </View>
      <View style={{ width: screenWidth/2}}>
      <ComponentTitle title="Security Code" />
      <InputText
        onChangeText={onChangeCode}
        text={code}
        placeholder={"Enter Security Code"}
        keyboardType="numeric"
        length={4}
      />
      </View>
      </View>

      <View style={{marginTop: 24}}>
      <ComponentTitle title="Card Holder" />
      <InputText
        onChangeText={onChangeName}
        text={name}
        placeholder={"Enter Holder Name"}
      />
      </View>

    </View>
          <View style={styles.Button}>
            <Button text="Add Card" 
            onPress={() => handleAddCard(id)}
            />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  Button: {
    margin: 16,
    position: "absolute",
    bottom: 0,
  },
});
export default AddCard;
