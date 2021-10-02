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


const DeliveryTypeCard=(props)=>{
    return  <TouchableOpacity
    onPress={()=>{
       props.navigation.navigate(props.route)
    }}
    activeOpacity={0.8}
      style={{
         marginTop:props.data.id==="1" ? 25:0,
        marginBottom:20,
        marginHorizontal: 30,
        backgroundColor: color.white,
        padding: 20,
        borderRadius: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}
    >
   
<View style={{flexDirection:'row'}}>
    <View style={{width:100,height:100,borderRadius:20,backgroundColor:color.grey}}></View>
    <View style={{marginTop:10,marginLeft:10}}>
        <Text style={{color:color.black,fontWeight:'bold'}}>{props.data.title}</Text>
        <Text numberOfLines={1} style={{color:color.grey,width:"90%",marginTop:10}}>Squid Pizza & Champain</Text>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
            <Text>0.1 km</Text>
            <Feather name="star" size={16} color={color.splash_bg} style={{marginLeft:10}}/>
            <Text style={{color:color.splash_bg}}> 4.6</Text>
        </View>
    </View>
</View>
<Ionicons name="heart" size={20} color="red"/>

    </TouchableOpacity>
}

const styles=StyleSheet.create({

})


export default DeliveryTypeCard