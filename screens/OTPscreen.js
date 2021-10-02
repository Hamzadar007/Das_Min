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
const OtpScreen = ({ navigation }) => {

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
          Verification codes OTP
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: color.offWhite,
          marginTop: 50,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <View style={{ marginTop: 30, marginHorizontal: 50 }}>
          <Text style={{ textAlign: "center" }}>
            A VERIFICATION CODES HAS BEEN SENT TO{" "}
            <Text style={{ color: color.headerBackClr }}> +1 202-555-0148</Text>
          </Text>
        </View>
        <View
          style={{
            backgroundColor: color.white,
            height: 50,
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <TextInput
            keyboardType="numeric"
            textAlign={"center"}
            style={{ marginHorizontal: 30, letterSpacing: 20 }}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={()=>{toggleModal()}}
            style={{ borderBottomColor: color.splash_bg, borderBottomWidth: 1 }}
          >
            <Text
              style={{
                color: color.splash_bg,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              I DIDN'T GET A CODE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
          <Text style={{ textAlign: "center" }}>
            Tap Continue to accept Facebook’s Terms, Data policy, cookie use and
            the Privacy Policy and Terms of Service of{" "}
            <Text style={{ fontWeight: "bold" }}>Das’Min</Text>{" "}
          </Text>
        </View>
      </View>
      {/* <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate('CreateAcc')}}> */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.bottomBtn}
        onPress={() => {
          navigation.navigate("CreateAcc");
        }}
      >
        <Text style={{ color: color.white, fontWeight: "bold" }}>CONTINUE</Text>
      </TouchableOpacity>
      {/* </TouchableOpacity> */}
      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:color.white,padding:20,borderRadius:20,height:'30%' }}>
      <Feather name="x" size={20} color={color.black} onPress={()=>{toggleModal()
          
       
    }}/>
          <View style={{flex:1, justifyContent:'center',alignItems:'center', }}>
 <Text style={{color:color.splash_bg,fontSize:20,fontWeight:'bold'}}>Resend code</Text>
<TouchableOpacity onPress={()=>{toggleModal()}} style={{marginTop:15,width:100,height:50,backgroundColor:color.splash_bg,borderRadius:50,justifyContent:'center',
alignItems:'center'}}><Text style={{color:color.white,fontWeight:'bold'}}>Send</Text></TouchableOpacity> 
</View>
        
        </View>
      </Modal>
    </SafeAreaView>
  );
};

OtpScreen.navigationOptions = (navData) => {
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

export default OtpScreen;
