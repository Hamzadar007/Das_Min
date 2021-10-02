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
  FlatList,
} from "react-native";
import color from "../common/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";

const AllPromotion = ({ navigation }) => {
  const [typeData, setTypeData] = useState([
    {
      id: 1,
      title: "Featured",
    },
    {
      id: 2,
      title: "Near",
    },
    {
      id: 3,
      title: "Popular",
    },
  ]);

  const promotionRender = ({}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: color.offWhite,
          width: "90%",
          alignSelf: "center",
          borderRadius: 20,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
            borderRadius: 20,
            backgroundColor: color.grey,

            alignSelf: "center",
            justifyContent: "center",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text>Egg chng salad</Text>
          <Text>1.2 km</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
          All Promotions
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 30,
          backgroundColor: color.white,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingTop: 25,
        }}
      >
        <FlatList
          data={typeData}
          renderItem={promotionRender}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

AllPromotion.navigationOptions = (navData) => {
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

export default AllPromotion;
