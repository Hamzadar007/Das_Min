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
  ScrollView
} from "react-native";
import color from "../common/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({navigation}) => {
  const [fav,setFav]=useState(0)
  const [entries, setEntires] = useState([
    {
      id: 0,
      title: `Hi! We’re Das'min`,
      
    },
    {
      id: 1,
      title: "More Food, More Choices",
    },
    {
      id: 2,
      title: "Delivery to Your Door",
    },
  ]);

  const [food, setFood] = useState([
    {
      id: 0,
      title: `Pizza`,
      image: require("../assets/icons/Pizza.png"),
    },
    {
      id: 1,
      title: `Milk Tea`,
      image: require("../assets/icons/softdrink.png"),
    },
    {
      id: 2,
      title: `Noodle`,
      image: require("../assets/icons/noodle.png"),
    },
    {
      id: 3,
      title: `Cakes`,
      image: require("../assets/icons/cake.png"),
    },
    {
      id: 4,
      title: `Snacks`,
      image: require("../assets/icons/chicken.png"),
    },
  ]);


  const [food1, setFood1] = useState([
    {
      id: 0,
      title: `Pizza`,
      image: require("../assets/icons/Pizza.png"),
    },
    {
      id: 1,
      title: `Pizza2`,
      image: require("../assets/icons/softdrink.png"),
    },
    {
      id: 2,
      title: `Pizza3`,
      image: require("../assets/icons/noodle.png"),
    },
    {
      id: 3,
      title: `Pizza4`,
      image: require("../assets/icons/cake.png"),
    },
    {
      id: 4,
      title: `Pizza5`,
      image: require("../assets/icons/chicken.png"),
    },
  ]);
  const [food2, setFood2] = useState([
    {
      id: 0,
      title: `Burger`,
      image: require("../assets/icons/Pizza.png"),
    },
    {
      id: 1,
      title: `Burger`,
      image: require("../assets/icons/softdrink.png"),
    },
    {
      id: 2,
      title: `Burger`,
      image: require("../assets/icons/noodle.png"),
    },
    {
      id: 3,
      title: `Burger`,
      image: require("../assets/icons/cake.png"),
    },
    {
      id: 4,
      title: `Burger`,
      image: require("../assets/icons/chicken.png"),
    },
  ]);
  const [foodBar,setFoodBar]=useState(food)


  const renderItem = () => {
    return (
      <View>
        <View
          style={{
            width: 300,
            height: 170,
            backgroundColor: color.grey,
            borderRadius: 20,
            justifyContent: "center",
            marginRight: 20,
          }}
        >
          <Text
            style={{
              width: "50%",
              fontSize: 30,
              marginLeft: 15,
              color: color.white,
            }}
          >
            Discount up to
          </Text>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 15,
              fontWeight: "bold",
              color: color.headerBackClr,
            }}
          >
            50%
          </Text>
        </View>
      </View>
    );
  };

  const foodItemRender = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate('Search')}} style={{ alignItems: "center", marginRight: 20 }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            padding: 15,
            backgroundColor: item.id === 0 ? color.headerBackClr : color.grey,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={item.image} style={{width:30,height:30}} />
        </View>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };
const [heart,setHeart]=useState(false)
const foodCardRender=({item})=>{
    return    <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate('Delivery')}}
    style={{
      width: 150,
    
      backgroundColor: color.white,
      paddingBottom:5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20,
      marginRight:20,
      marginLeft:item.id===0?20:0,
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    }}
  >
    <View
      style={{
        height: 170,
        backgroundColor: color.grey,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          padding: 10,
          backgroundColor: color.offWhite,
          width: 40,
          justifyContent: "flex-end",
          right: 0,
          position: "absolute",
          borderBottomLeftRadius: 20,
        }}
      >
        <MaterialCommunityIcons
          name= {fav!==item.id ? "heart-outline":"heart"}
          size={16}
          color={fav===item.id ? color.red:color.black}
          onPress={()=>{setFav(item.id)}}
        />
      </View>
    </View>
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold",marginTop:15 }}>
      {item.title}
      </Text>
      <Text>Italian taste</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>0.1 Km</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <MaterialCommunityIcons name="star" color={color.splash_bg} />
          <Text style={{ color: color.splash_bg }}> 4.8</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
}

const [typeData,setTypeData]=useState([
  {
    id:1,
    title:'Featured'
  },
  {
    id:2,
    title:'Near'
  },
  {
    id:3,
    title:'Popular'
  },
])

const [typeSelect,setTypeSelect]=useState(1)


const foodType=({item})=>{
  return <TouchableOpacity onPress={()=>{setTypeSelect(item.id)
  if(item.id===1){
    setFoodBar(food)
  }
  else if(item.id===2){
    setFoodBar(food1)
  }
  else{
    setFoodBar(food2)
  }
  }} style={{flex:1,marginHorizontal:40,alignItems:'center',borderBottomColor:item.id===typeSelect? color.headerBackClr:'',
  borderBottomWidth:item.id===typeSelect ? 2:0
  ,paddingBottom:10}}>
     <Text style={{color:item.id===typeSelect ?color.headerBackClr:color.black}}>{item.title}</Text>
  </TouchableOpacity>
}

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ marginTop: 50, marginLeft: 20, flexDirection: "row" }}>
        <Text style={{ fontSize: 15 }}>
          Deliver to
          <Text style={{ color: color.splash_bg }}> 50 Palm Pay Rd NE</Text>
        </Text>
        <Feather name="chevron-down" size={20} color={color.splash_bg} />
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          backgroundColor: color.white,
          height: 50,
          borderRadius: 50,
          alignItems: "center",
          paddingHorizontal: 20,
          flexDirection: "row",
        }}
      >
        <Feather
          name="search"
          size={20}
          color={color.headerBackClr}
          style={{ marginRight: 15 }}
        />
        <TextInput placeholder="Type some thing" style={{ flex: 1 }} />
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

      <View style={{ marginTop: 30}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Promotion')}} style={{ marginTop: 10,marginBottom:15,marginLeft:15  }}>
          <Text
            style={{
             
              color: color.headerBackClr,
            }}
          >
            Promotions
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1,marginLeft:10 }}>
          <FlatList
            data={entries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={{ marginTop: 20, marginLeft: 20 }}>
     
        <FlatList
          data={food}
          renderItem={foodItemRender}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ marginTop: 20,marginBottom:20 }}>
      <View style={{marginBottom:20,}}>
      <FlatList
          data={typeData}
          renderItem={foodType}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
          {/* <View style={{borderBottomColor:color.headerBackClr,borderBottomWidth:2,paddingBottom:10}}>
            <Text style={{}}>Featured</Text></View>
          <View><Text>Near</Text></View>
          <View><Text>Popular</Text></View> */}
        </View>
      <FlatList
          data={foodBar}
          renderItem={foodCardRender}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

     
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: color.offWhite,
  },
});

export default Home;
