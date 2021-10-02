import React,{useState} from "react";
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
import Modal from "react-native-modal";

const PinCodeScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);

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
          LogIn to account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: color.offWhite,
          flex: 1,
          marginTop: 30,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
          <View style={{marginTop:30,alignItems:'center'}}>
        <Text style={{fontSize:16}}>WELCOME BACK!<Text style={{color:color.headerBackClr}}> GLEB IVANOVICH</Text></Text>
        <Text style={{fontSize:12}}>Type your Pincode to login to Das’Min</Text>
        </View>

        <View style={{backgroundColor:color.white,marginTop:20,height:50,marginHorizontal:20
            ,borderRadius:50,justifyContent:'center'}}>
            <TextInput placeholder="------"  style={{marginHorizontal:30,textAlign:'center',letterSpacing:10,fontSize:30,fontWeight:'bold'}}/>
        </View>
        <View style={{marginTop:20,alignItems:'center'}}>
         <TouchableOpacity onPress={()=>{toggleModal()}}  style={{borderBottomWidth:1,borderBottomColor:color.splash_bg}}><Text style={{color:color.splash_bg,fontWeight:'bold'}}>FORGET PIN CODE</Text></TouchableOpacity>
         <View style={{borderBottomWidth:1,borderBottomColor:color.splash_bg,marginTop:10}}><Text style={{color:color.splash_bg,fontWeight:'bold'}}>SIGN UP</Text></View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.bottomBtn}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ color: color.white, fontWeight: "bold" }}>LOGIN</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:color.white,padding:20,borderRadius:20,height:'40%'}}>
          <View style={{flex:1 }}>
 <Text style={{color:color.splash_bg,fontSize:20,fontWeight:'bold',textAlign:'center'}}>Reset code</Text>

<View style={{borderBottomWidth:1,borderBottomColor:color.grey}}><TextInput placeholder="New Code" style={{height:40}}/></View>
<View style={{borderBottomWidth:1,borderBottomColor:color.grey}}><TextInput placeholder="Re-enter Code" style={{height:40}}/></View>

<TouchableOpacity onPress={()=>{toggleModal()}} style={{width:100,height:50,borderRadius:50
,backgroundColor:Platform.OS==='android'?color.splash_bg:color.offWhite,alignSelf:'center',marginTop:15
,justifyContent:'center',alignItems:'center'}}><Text style={{color:Platform.OS==='android' ? color.white:color.splash_bg}}>Set</Text></TouchableOpacity>
</View>
        
        </View>
      </Modal>
    </SafeAreaView>
  );
};

PinCodeScreen.navigationOptions = (navData) => {
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

export default PinCodeScreen;
