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

import DeliveryCard from '../components/DeliveryTypeCard'
import SearchType from "../components/SearchTypeCard";


const TypeScreen = ({navigation}) => {
    const [searchTitle,setSearchTitle]=useState('')
    const [microphone,setMicophone]=useState(false)
    const data=[
        {
          id: "1",
          title: "Pizza Farmer",
          description: "220 Palm Pay Rd NE, Florida, United States",
        },
        {
          id: "2",
          title: "Pizza Gevan Korean",
          description: "220 School Dr, PALMDALE,  Florida, United States",
        },
        {
          id: "3",
          title: "Miyua Pizza",
          description: "220 Glenham Dr NE, PALMDALE, Florida, United…",
        },
        {
          id: "4",
          title: "Mew’Pizza",
          description: "220 Palm Pay Rd NE, Florida, United States",
        },
        {
          id: "5",
          title: "220 Palm Pay",
          description: "220 Palm Pay Rd NE, Florida, United States",
        },
        {
          id: "6",
          title: "220 Palm Pay",
          description: "220 Palm Pay Rd NE, Florida, United States",
        },
      ]
  const [dummy, setDummy] = useState(data);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Microphone')
      }}
      activeOpacity={0.8}
        style={{
          marginTop:item.id==="1" ? 25:0,
          marginBottom:20,
          marginHorizontal: 30,
          backgroundColor: color.white,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        <Text numberOfLines={1} style={{ color: color.textGrey }}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };

const changeTextFilter=(e)=>{

    let text = e.toLowerCase()
  
    let dummyArr = data
    let filteredName = dummyArr.filter((item) => {
        const itemData=item.title?item.title.toLowerCase():''.toLowerCase()
        
      return itemData.indexOf(text)>-1
    })
    if(!text ||text===''){
        setDummy(data)
    }
   
    if(filteredName && filteredName.length>0){
        setDummy(filteredName)
    }

    if(text!=='' &&filteredName.length===0){
setDummy([])
    }
}


  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 60,
          marginHorizontal: 20,
        }}
      >
        <Feather name="chevron-left" size={25} color={color.white} onPress={()=>{navigation.goBack()}}/>
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
          <TextInput placeholder="Type some thing" style={{ flex: 1 }} 
          onChangeText={searchT=>changeTextFilter(searchT)}/>
          <TouchableOpacity
           onPress={()=>{setMicophone(!microphone)
          }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 60,
              backgroundColor: color.headerBackClr,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="mic" size={15} color={color.white} onPress={()=>{setMicophone(!microphone)
          }}/>
          </TouchableOpacity>
        </View>
      </View>

 {  !microphone ?   <View style={styles.bottomList}>
 
        <FlatList
          data={dummy}
          renderItem={({item})=><SearchType data={item} navigation={navigation} route={'Order'}></SearchType>}
          keyExtractor={(item) => item.id}
        />
      </View>: <View style={styles.bottomList}></View>}
   {microphone &&   <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "85%", //for center align
          alignSelf: "center",
          padding:10,
          borderRadius:100,
        //   backgroundColor:color.white,
          
        //   left: "45%", //for align to right
        }}
      >

<View style={{width:90,height:90,borderRadius:90,borderWidth:1,borderColor:color.splash_bg,justifyContent:'center',alignItems:'center'}}>
<View style={{width:60,height:60,borderRadius:60,borderWidth:1,borderColor:color.splash_bg,}}>
</View>
</View>
</View>}


    </View>
  );
};

TypeScreen.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.headerBackClr,
  },
  bottomList: {
    backgroundColor: color.offWhite,
    flex: 1,
    marginTop: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});
export default TypeScreen;
