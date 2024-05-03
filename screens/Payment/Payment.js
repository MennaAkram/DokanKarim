import { SafeAreaView, FlatList, View } from "react-native";
import { React, useState } from "react";
import PaymentMethodItem from "./components/paymentMethodItem";
import Colors from "../../costants/Colors";
import bank from "../../assets/icons/Bank.png";
import paypal from "../../assets/icons/Paypal.png";
import creditCard from "../../assets/icons/CreditCard.png";
import { router } from "expo-router";

const Data = [
  {
    text: "Credit Card Or Debit",
    icon: creditCard,
    newRoute: '/CreditCards'
  },
  {
    text: "Paypal",
    icon: paypal,
    newRoute: '/Paypal'
  },
  {
    text: "Bank Transfer",
    icon: bank,
    newRoute: '/BankTransfer'
  },
];

const Payment = () => {
  const [selected, setSelected] = useState();
  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor:
                selected === index ? Colors.border : Colors.onPrimary,
            }}
          >
            <PaymentMethodItem
              icon={item.icon}
              text={item.text}
              onPress={() => {
                setSelected(index), router.navigate(item.newRoute)
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Payment;
