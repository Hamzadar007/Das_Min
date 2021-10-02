import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import color from "../common/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreateAccScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
       
      ]}
    >
      <View
        style={{
          marginTop: 60,
          marginHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <Feather
          name="chevron-left"
          size={20}
          color={color.white}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ color: color.white, flex: 1, textAlign: "center" }}>
          Create an account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: color.offWhite,
          flex: 1,
          marginTop: 30,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <View style={{ marginTop: 30, marginHorizontal: 30 }}>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            CREATE A
            <Text style={{ color: color.headerBackClr }}> PIN CODE</Text> WITH 6
            NUMBERS TO SAFEGUARD YOUR ACCOUNT
          </Text>
        </View>
        <View
          style={{
            backgroundColor: color.white,
            marginTop: 20,
            marginHorizontal: 20,
            height: 50,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Enter password"
            style={{ marginHorizontal: 30 }}
          />
        </View>
        <View
          style={{
            backgroundColor: color.white,
            marginTop: 20,
            marginHorizontal: 20,
            height: 50,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Re-enter password"
            style={{ marginHorizontal: 30 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: color.white,
            marginTop: 20,
            borderTopLeftRadius: 50,
            borderTopLeftRadius: 50,
          }}
        >
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Text style={{ color: color.black }}>YOUR INFORMATION</Text>
          </View>
          <View
            style={{
              backgroundColor: color.offWhite,
              marginTop: 20,
              marginHorizontal: 20,
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Full name"
              style={{ marginHorizontal: 30 }}
            />
          </View>
          <View
            style={{
              backgroundColor: color.offWhite,
              marginTop: 20,
              marginHorizontal: 20,
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Your email"
              style={{ marginHorizontal: 30 }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.bottomBtn}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ color: color.white, fontWeight: "bold" }}>DONE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

CreateAccScreen.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.headerBackClr,
  },
  bottomBtn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: color.splash_bg,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateAccScreen;
