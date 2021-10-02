import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Button,
} from "react-native";
import color from "../common/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MapView from "react-native-maps";
import { colors } from "../assets";

const DeliveryScreen = ({ navigation }) => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={mapRegion} />
      <View
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: "30%",
          backgroundColor: color.white,
        }}
      >
        <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: "500" }}>
          Delivery To
        </Text>
        <Text style={{ marginTop: 15, fontWeight: "bold", marginLeft: 20 }}>
          Pudd'Min Inc
        </Text>
        <Text style={{ marginTop: 5, marginLeft: 20, color: color.textGrey }}>
          168 Palm Pay Rd NE, Florida, United States
        </Text>
        <TextInput
          placeholder="  Exact Pickup Location (ex. builing, floor, unit)"
          style={{ color: color.textGrey, textAlign: "center", marginTop: 10 }}
        ></TextInput>
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={()=>{navigation.navigate('Type')}}
          style={{
            backgroundColor: color.splash_bg,

            height: "40%",
            width: "100%",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: color.white,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            CONFIRM
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "60%", //for center align
          alignSelf: "flex-end",
          marginRight: 10,
          left: "90%", //for align to right
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: color.white,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Ionicons name="locate" size={20} color={color.black} />
        </View>
      </View>

      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "10%", //for center align
          width: "90%",
          marginRight: 10,
          alignSelf: "center",
          //for align to right
        }}
      >
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Feather
            name="chevron-left"
            size={30}
            color={color.headerBackClr}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: color.white,
              height: 50,
              borderRadius: 50,
              alignItems: "center",
              paddingHorizontal: 20,
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Feather
              name="search"
              size={20}
              color={color.headerBackClr}
              style={{ marginRight: 15 }}
            />
            <TextInput placeholder="Type some thing" style={{ flex: 1 }} />
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 60,
                backgroundColor: color.headerBackClr,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="mic" size={15} color={color.white} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

DeliveryScreen.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DeliveryScreen;
