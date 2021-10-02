import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import color from "../common/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";

const Promotion = ({ navigation }) => {
  const bSheetRef = useRef();
  return (
    <SafeAreaView
      style={[
        styles.container,
        // { marginTop: Platform.OS === "android" ? 20 : 0 },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 60,
          alignItems: "center",
          marginHorizontal: 20,
          justifyContent: "center",
        }}
      >
        <Feather name="chevron-left" size={20} color={color.white} />
        <Text style={{ textAlign: "center", flex: 1, color: color.white }}>
          Promotions
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 30,
          backgroundColor: color.white,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: color.white, marginTop: 35 }}
        >
          <TouchableOpacity
            onPress={() => {
              bSheetRef.current.open();
            }}
            style={{
              width: "90%",
              height: 200,
              borderRadius: 20,
              backgroundColor: color.grey,
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                width: "50%",
                marginLeft: 20,
                marginTop: 10,
                color: color.white,
                fontWeight: "bold",
              }}
            >
              Discount up to
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: color.headerBackClr,
                marginLeft: 20,
              }}
            >
              50%
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "90%",
              height: 200,
              borderRadius: 20,
              backgroundColor: color.grey,
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, width: "50%", marginLeft: 20 }}>
              The Best Choices <Text style={{ fontSize: 20 }}> for</Text>
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: color.splash_bg,
                marginLeft: 20,
                fontWeight: "bold",
              }}
            >
              Summer
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 200,
              borderRadius: 20,
              backgroundColor: color.grey,
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: color.white,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              More
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: color.headerBackClr,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Salad
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: color.white,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              More
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: color.headerBackClr,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Health
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: 200,
              borderRadius: 20,
              backgroundColor: color.grey,
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
              marginBottom: 15,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: color.white,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              More
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: color.headerBackClr,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Salad
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: color.white,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              More
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: color.headerBackClr,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Health
            </Text>
          </View>
        </ScrollView>
      </View>
      <RBSheet
        ref={(ref) => {
          bSheetRef.current = ref;
        }}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            //   justifyContent: "center",
            //   alignItems: "center"
            backgroundColor: "#F7F7F7",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          },
        }}
      >
        <View style={{ flex: 1, backgroundColor: color.grey }}>
          <View
            style={{
              justifyContent: "center",
              marginLeft: 20,
              paddingVertical: 30,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: color.white,
                fontWeight: "bold",
                width: "50%",
              }}
            >
              Discount up to
            </Text>
            <Text
              style={{
                fontSize: 45,
                color: color.splash_bg,
                fontWeight: "bold",
              }}
            >
              50%
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: color.white,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                PROMOTION
              </Text>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text>10 Oct</Text>
                <Text> - </Text>
                <Text>10 Nov</Text>
              </View>
            </View>

            <Text style={{ marginTop: 20, marginHorizontal: 15 }}>
              <Text style={{ fontWeight: "bold", color: color.headerBackClr }}>
                Up to 50%
              </Text>{" "}
              off from DasMin partner restaurants, apply for newly registered
              accounts, and pay with{" "}
              <Text style={{ fontWeight: "bold" }}> DasMin Wallet </Text>for the
              first time.
            </Text>

            <View
              style={{
                height: 60,
                backgroundColor: color.headerBackClr,
                borderRadius: 20,
                flexDirection: "row",
                marginHorizontal: 20,
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: color.white }}>Add Promo Code</Text>
              <Text style={{ fontWeight: "bold", color: color.white }}>
                DASMIN50
              </Text>
              <MaterialCommunityIcons
                name="content-copy"
                color={color.white}
                size={16}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                borderBottomColor: color.splash_bg,
                borderBottomWidth: 1,
                alignSelf: "center",
              }}
            >
              <Text style={{ textAlign: "center", color: color.splash_bg }}>
                *Infomotion for Coupon
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                bSheetRef.current.close();
                navigation.navigate("AllPromotion");
              }}
              style={{
                flex: 1,
                backgroundColor: color.splash_bg,
                marginTop: 60,
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: color.white,
                  fontSize: 16,
                }}
              >
                Use the coupon now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

Promotion.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.headerBackClr,
  },
});

export default Promotion;
