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

const DeliveryTypeCard = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.route);
      }}
      activeOpacity={0.8}
      style={{
        marginTop: props.data.id === "1" ? 25 : 0,
        marginBottom: 20,
        marginHorizontal: 30,
        backgroundColor: color.white,
        padding: 20,
        borderRadius: 20,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{props.data.title}</Text>
      <Text numberOfLines={1} style={{ color: color.textGrey }}>
        {props.data.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default DeliveryTypeCard;
