import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function User() {
  // const router = useRouter();
  // const [visible, setVisible] = useState(false);
  // const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  // const searchRef = useRef();
  // const listRef = useRef();
  // const [ind, setInd] = useState(0);
  // const [oldData, setOldData] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setData(response);
  //       setOldData(response);
  //     });
  // }, []);

  // const onSearch = (text) => {
  //   if (text == "") {
  //     setData(oldData);
  //   } else {
  //     let tempList = data.filter((item) => {
  //       return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
  //     });
  //     setData(tempList);
  //   }
  // };

  // const onSortPress = (sortType) => {
  //   switch (sortType) {
  //     case "name":
  //       setData(data.sort((a, b) => (a.title > b.title ? 1 : -1)));
  //       break;
  //     case "price-low-to-high":
  //       setData(data.sort((a, b) => a.price - b.price));
  //       break;
  //     case "price-high-to-low":
  //       setData(data.sort((a, b) => b.price - a.price));
  //       break;
  //     case "rating":
  //       setData(data.sort((a, b) => b.rating.rate - a.rating.rate));
  //       break;
  //     default:
  //       break;
  //   }

  //   listRef.current.scrollToIndex({
  //     animated: true,
  //     index: 0,
  //   });

  //   setVisible(false);
  // };

  return (
    <View style={styles.container}>
    <Text>User</Text>
    </View>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.container}>
    //     <View
    //       style={{
    //         width: "100%",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         height: 70,
    //         marginTop: 20,
    //         justifyContent: "space-between",
    //       }}
    //     >
    //       <View
    //         style={{
    //           width: "80%",
    //           height: 50,
    //           borderRadius: 10,
    //           borderWidth: 0.2,
    //           flexDirection: "row",
    //           alignItems: "center",
    //           marginLeft: 15,
    //         }}
    //       >
    //         <Image
    //           source={require("../../assets/icons/Search.png")}
    //           style={{ width: 24, height: 24, marginLeft: 15, opacity: 0.5 }}
    //         />
    //         <TextInput
    //           ref={searchRef}
    //           placeholder="search item here ... "
    //           style={{ width: "76%", height: 50 }}
    //           value={search}
    //           onChangeText={(txt) => {
    //             onSearch(txt);
    //             setSearch(txt);
    //           }}
    //         />
    //         {search == "" ? null : (
    //           <TouchableOpacity
    //             style={{ marginRight: 15 }}
    //             onPress={() => {
    //               searchRef.current.clear();
    //               onSearch(""), setSearch("");
    //             }}
    //           >
    //             <Image
    //               source={require("../../assets/icons/Left.png")}
    //               style={{ width: 16, height: 16, opacity: 0.5 }}
    //             />
    //           </TouchableOpacity>
    //         )}
    //       </View>
    //       <TouchableOpacity
    //         style={{
    //           marginRight: 15,
    //         }}
    //         onPress={() => {
    //           setVisible(true);
    //         }}
    //       >
    //         <Image
    //           source={require("../../assets/icons/love.png")}
    //           style={{ width: 24, height: 24 }}
    //         />
    //       </TouchableOpacity>
    //     </View>

    //     <FlatList
    //       data={data}
    //       ref={listRef}
    //       showsVerticalScrollIndicator={false}
    //       initialScrollIndex={ind}
    //       renderItem={({ item, index }) => {
    //         return (
    //           <View
    //             style={{
    //               width: "90%",
    //               borderRadius: 10,
    //               borderWidth: 0.5,
    //               alignSelf: "center",
    //               marginTop: 20,
    //               marginBottom: index == data.length - 1 ? 20 : 0,
    //               alignItems: "center",
    //               flexDirection: "row",
    //             }}
    //           >
    //             <Image
    //               source={{ uri: item.image }}
    //               style={{
    //                 width: 60,
    //                 height: "90%",
    //                 marginLeft: 10,
    //                 borderRadius: 10,
    //               }}
    //             />
    //             <View style={{ width: "80%" }}>
    //               <Text
    //                 style={{ fontWeight: "600", marginLeft: 10, marginTop: 10 }}
    //               >
    //                 {item.title.substring(0, 30)}
    //               </Text>
    //               <Text style={{ fontSize: 12, margin: 10 }}>
    //                 {item.description.substring(0, 50)}
    //               </Text>

    //               <View
    //                 style={{
    //                   flexDirection: "row",
    //                   alignItems: "center",
    //                   marginBottom: 10,
    //                 }}
    //               >
    //                 <Text
    //                   style={{
    //                     fontSize: 18,
    //                     marginLeft: 10,
    //                     fontWeight: "800",
    //                     color: "green",
    //                   }}
    //                 >
    //                   {"$ " + item.price}
    //                 </Text>
    //                 <Text
    //                   style={{
    //                     fontSize: 16,
    //                     marginLeft: 50,
    //                     fontWeight: "800",
    //                     color: "orange",
    //                   }}
    //                 >
    //                   {item.rating.rate}
    //                 </Text>
    //                 <Image
    //                   source={require("../../assets/icons/love.png")}
    //                   style={{ width: 12, height: 12, marginLeft: 5 }}
    //                 />
    //               </View>
    //             </View>
    //           </View>
    //         );
    //       }}
    //     />

    //     <Modal
    //       animationType="fade"
    //       transparent={true}
    //       visible={visible}
    //       onRequestClose={() => {
    //         setVisible(!visible);
    //       }}
    //     >
    //       <View
    //         style={{
    //           flex: 1,
    //           justifyContent: "center",
    //           alignItems: "center",
    //           backgroundColor: "rgba(0,0,0,.5)",
    //         }}
    //       >
    //         <View
    //           style={{
    //             width: "80%",
    //             height: 200,
    //             borderRadius: 10,
    //             backgroundColor: "#fff",
    //           }}
    //         >
    //           <TouchableOpacity
    //             style={{
    //               width: "100%",
    //               height: 50,
    //               borderBottomWidth: 0.5,
    //               justifyContent: "center",
    //               paddingLeft: 20,
    //             }}
    //             onPress={() => {
    //               onSortPress("name");
    //             }}
    //           >
    //             <Text style={{ fontSize: 18, color: "#000" }}>
    //               Sort By Name
    //             </Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             style={{
    //               width: "100%",
    //               height: 50,
    //               borderBottomWidth: 0.5,
    //               justifyContent: "center",
    //               paddingLeft: 20,
    //             }}
    //             onPress={() => {
    //               onSortPress("price-low-to-high");
    //             }}
    //           >
    //             <Text style={{ fontSize: 18, color: "#000" }}>
    //               Low to High Price
    //             </Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             style={{
    //               width: "100%",
    //               height: 50,
    //               borderBottomWidth: 0.5,
    //               justifyContent: "center",
    //               paddingLeft: 20,
    //             }}
    //             onPress={() => {
    //               onSortPress("price-high-to-low");
    //             }}
    //           >
    //             <Text style={{ fontSize: 18, color: "#000" }}>
    //               Hight to Low Price
    //             </Text>
    //           </TouchableOpacity>

    //           <TouchableOpacity
    //             style={{
    //               width: "100%",
    //               height: 50,
    //               borderBottomWidth: 0.5,
    //               justifyContent: "center",
    //               paddingLeft: 20,
    //             }}
    //             onPress={() => {
    //               onSortPress("rating");
    //             }}
    //           >
    //             <Text style={{ fontSize: 18, color: "#000" }}>
    //               Sort By Rating
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     </Modal>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    borderBlockColor: "blue",
    paddingLeft: 20,
    margin: 15,
    borderColor: "#009688",
    backgroundColor: "white",
    borderRadius: 10,
  },
  counterText: {
    alignSelf: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  noItemText: {
    alignSelf: "center",
    marginVertical: 10,
    fontWeight: "bold",
    color: "red",
  },
});
