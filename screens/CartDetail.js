import React, { useState, useRef } from "react";
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
  Alert,
} from "react-native";
import color from "../common/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import OrderCard from "../components/OrderCard";
import RBSheet from "react-native-raw-bottom-sheet";
import { colors } from "../assets";

const CartDetail = ({ navigation }) => {
  const [showInput, setInput] = useState(false);
  const [deliverTxt, setDeliveryTxt] = useState("168 Palm Pay Rd NE, Florida");

  const [show2ndInput, set2ndInput] = useState(false);
  const [phone, setPhone] = useState("202-555-0148");

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 60,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Feather
          name="chevron-left"
          size={25}
          color={color.headerBackClr}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            color: color.black,
            fontWeight: "bold",
            textAlign: "center",
            flex: 1,
            fontSize: 20,
          }}
        >
          Miyua Pizza
        </Text>
      </View>
      <View
        style={{
          backgroundColor: color.white,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 20,
          padding: 15,
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 18 }}>Deliver To</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
            alignItems: "center",
          }}
        >
          {showInput ? (
            <TextInput
              value={deliverTxt}
              onChangeText={(val) => {
                setDeliveryTxt(val);
              }}
              style={{ color: color.headerBackClr, flex: 1 }}
            />
          ) : (
            <Text style={{ color: color.headerBackClr, fontSize: 17 }}>
              {deliverTxt}
            </Text>
          )}
          <TouchableOpacity
            onPress={() => {
              setInput(!showInput);
            }}
          >
            <Feather name="edit" color={color.headerBackClr} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: color.white,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 20,
          padding: 15,
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 18 }}>Mobile Phone</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
            alignItems: "center",
          }}
        >
          {show2ndInput ? (
            <TextInput
              value={phone}
              onChangeText={(val) => {
                setPhone(val);
              }}
              style={{ color: color.headerBackClr, flex: 1 }}
            />
          ) : (
            <Text style={{ color: color.headerBackClr, fontSize: 17 }}>
              {phone}
            </Text>
          )}
          <TouchableOpacity
            onPress={() => {
              set2ndInput(!show2ndInput);
            }}
          >
            <Feather name="edit" color={color.headerBackClr} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 40,
          backgroundColor: color.white,
          flex: 1,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <Text style={{ marginTop: 20, marginLeft: 20, color: color.textGrey }}>
          Menu
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            1X Pizzamin - Sea M
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>$19.30</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ color: color.textGrey }}>2x Spirte</Text>
          <Text style={{ color: color.textGrey }}>$ 4.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ color: color.textGrey }}>Subtotal</Text>
          <Text style={{ color: color.textGrey }}>$ 4.00</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ color: color.textGrey }}>Delivery Fee: 0.1 Km</Text>
          <Text style={{ color: color.textGrey }}>$ 4.00</Text>
        </View>

        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text style={{ color: color.splash_bg, fontSize: 15, marginTop: 20 }}>
            +Add a Promo
          </Text>
          <Text style={{ color: color.splash_bg, fontSize: 15, marginTop: 20 }}>
            +Add note to Drive
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              backgroundColor: color.grey,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
            }}
          >
            <View
              style={{
                padding: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text>Total</Text>
              <Text style={{ fontWeight: "bold" }}>$ 27.20</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {}}
              style={{
                backgroundColor: color.headerBackClr,
                padding: 30,
                justifyContent: "center",
                width: "100%",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: color.white,
                }}
              >
                Payment Method
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

CartDetail.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.offWhite,
  },
});

export default CartDetail;
