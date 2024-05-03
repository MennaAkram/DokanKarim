import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import CardItem from "./components/CardItem";
import Button from "../../components/Button";
import { useNavigation, router, useLocalSearchParams } from "expo-router";

const CreditCards = () => {
  const [cards, setCards] = React.useState([]);
  const navigation = useNavigation();
  const { cardId, number, date, code, name } = useLocalSearchParams();

const handleAddCard = (cardId) => {
  const newCard = {
    id: cards.length + 1,
    text: number,
  };
  setCards([...cards, newCard]);
}

useEffect(() => {
  if(cardId){
    handleAddCard(cardId);
  }
}
, [cardId]);

  return (
    <View>
    <FlatList
    showsVerticalScrollIndicator={false}
    style={{ height: "100%"}}
    data={cards}
    renderItem={({ item }) => (
    <CardItem text={number} name={name} date={date}/>
    )}
    ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    keyExtractor={(item, index) => index.toString()}
        />
      <View style={styles.container}>
        <Button text="Add Card" 
        onPress={() => router.navigate('/AddCard')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    position: "absolute",
    bottom: 0,
  },
});

export default CreditCards;
