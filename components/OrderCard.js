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

const OrderCard = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={()=>{props.onClick()}} style={{flexDirection:'row',marginHorizontal:15,width:'90%',marginVertical:5}}>
    <View style={{width:'30%',height:100,borderRadius:20,backgroundColor:color.grey}}></View>
  <View style={{marginLeft:15,width:'68%'}}>
    <Text style={{fontWeight:'bold',fontSize:18,marginTop:5}}>Pizza Prime Beef</Text>
  <Text numberOfLines={2} style={{width:'100%'}}>Japan beef, cheese sauce, italian style, beef balls, mozallla cheese aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
  <Text style={{fontSize:16,color:'green',marginTop:5}}>$ 20.0</Text>
  </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default OrderCard;
