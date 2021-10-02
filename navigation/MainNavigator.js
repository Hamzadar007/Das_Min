import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CrouselScreen from "../screens/Crousel";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import OtpScreen from "../screens/OTPscreen";
import CreateAccScreen from "../screens/CreateAccount";
import PinCodeScreen from "../screens/PinCode";
import DeliveryScreen from "../screens/Delivery";
import TypeScreen from "../screens/Type";
import MicrophoneScreen from "../screens/Microphone";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import color from "../common/color";
import { View } from "react-native-animatable";
import SearchTypeScreen from "../screens/SearchType";
import PromotionScreen from "../screens/Promotion";
import AllPromotionScreen from "../screens/AllPromotions";
import CartDetailScreen from "../screens/CartDetail";

const screenConfig = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Feather name="home" size={25} color={tabInfo.tintColor} />;
      },
      headerShown: "none",
      tabBarColor: color.white,
    },
  },
  FIle: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Feather name="file" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: color.white,
    },
  },
  Favourites: {
    screen: HomeScreen,
    navigationOptions: {
      headerMode: "none",
      tabBarIcon: (tabInfo) => {
        return <Feather name="heart" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: color.white,
    },
  },
  Profile: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <View style={{ borderRadius: 100 }}>
            <Ionicons name="person" size={25} color={tabInfo.tintColor} />
          </View>
        );
      },
      tabBarColor: color.white,
    },
  },
};

const MainBottomTabNavigator = createBottomTabNavigator(screenConfig, {
  // initialRouteName: "Find",

  tabBarOptions: {
    activeTintColor: color.splash_bg,
    // labelStyle: {
    //     fontSize: ScreenUtil.scale(14),
    // },
    style: {
      backgroundColor: color.white,
      //----------add this line------------------------//
      height: 70,

      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    headerMode: "none",
  },
});

MainBottomTabNavigator.navigationOptions = {
  headerShown: false,
};

const MainStackNavigator = createStackNavigator(
  {
    Crousel: CrouselScreen,
    Login: LoginScreen,
    Home: MainBottomTabNavigator,
    Otp: OtpScreen,
    CreateAcc: CreateAccScreen,
    PinCode: PinCodeScreen,
    Delivery: DeliveryScreen,
    Type: TypeScreen,
    Microphone: MicrophoneScreen,
    Search: SearchTypeScreen,
    Promotion: PromotionScreen,
    AllPromotion: AllPromotionScreen,
    CartDetail: CartDetailScreen,
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(MainStackNavigator);
