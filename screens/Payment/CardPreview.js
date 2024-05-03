import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import CardItem from '../Payment/components/CardItem'
import ComponentTitle from '../../components/componentTitle'
import InputText from '../Payment/components/InputText'
import { useNavigation, useLocalSearchParams } from 'expo-router'
import Button from '../../components/Button'

const screenWidth = Dimensions.get('window').width;

const CardPreview = () => {
  const navigation = useNavigation();
  const { cardId, number, date, code, name } = useLocalSearchParams();
  const AppbarName = name + ' Card';
  navigation.setOptions({ title: AppbarName });

  const handleSaveCard = (cardId) => {
    navigation.navigate('CreditCards', {cardId, number, date, code, name});
  }

  return (
    <View>
    <View style={styles.container}>
      <CardItem text={number} name={name} date={date}/>
      <View>
    <View>
      <ComponentTitle title="Card Number" />
      <InputText
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
        text={date}
        placeholder={"Enter Expiration Date"}
        keyboardType="numeric"
        length={5}
      />
      </View>
      <View style={{ width: screenWidth/2}}>
      <ComponentTitle title="Security Code" />
      <InputText
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
        text={name}
        placeholder={"Enter Holder Name"}
      />
      </View>
    </View>
    </View>
    <View style={styles.Button}>
            <Button text="Save" 
            onPress={() => handleSaveCard(cardId)}
            />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
    Button: {
      margin: 16,
      position: "absolute",
      bottom: 0,
    }
  });

export default CardPreview