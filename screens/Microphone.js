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


const MicrophoneScreen = ({navigation}) => {
    const [searchTitle,setSearchTitle]=useState('')
    const data=[
        {
          id: "1",
          title: "220 Palm Pay",
          description: "220 Palm Pay Rd NE, Florida, United States",
        },
        {
          id: "2",
          title: "220 School Dr",
          description: "220 School Dr, PALMDALE,  Florida, United States",
        },
        {
          id: "3",
          title: "220 Glenham Dr NE",
          description: "220 Glenham Dr NE, PALMDALE, Florida, United…",
        },
        {
          id: "4",
          title: "220 Palm Pay",
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
  const [dummy, setDummy] = useState([]);


const changeTextFilter=(e)=>{

    let text = e.toLowerCase()
  
   
    let filteredName = data.filter((item) => {
        const itemData=item.title?item.title.toLowerCase():''.toLowerCase()
        
      return itemData.indexOf(text)>-1
    })
    if(!text ||text===''){
        setDummy([])
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

{dummy && dummy.length===0 ?  <View style={styles.bottomView}>
    <Text>No list to show</Text>
</View>  : <View style={styles.bottomList}>
 
        <FlatList
          data={dummy}
          renderItem={({item})=> <DeliveryCard data={item} navigation={navigation} route={'Search'}></DeliveryCard>}
          keyExtractor={(item) => item.id}
        />
      </View>}
      <View
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
</View>

    </View>
  );
};

MicrophoneScreen.navigationOptions = (navData) => {
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
    paddingTop:20
  },
  bottomView: {
    backgroundColor: color.white,
    flex: 1,
    marginTop: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    justifyContent:'center',
    alignItems:'center'
  },
});
export default MicrophoneScreen;
