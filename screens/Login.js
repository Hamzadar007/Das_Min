import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import color from "../common/color";
import RBSheet from "react-native-raw-bottom-sheet";
import CountryPicker from "react-native-country-picker-modal";
import Carousel from "react-native-snap-carousel";
import { width, height, totalSize } from "react-native-dimension";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";


Feather.loadFont();
MaterialCommunityIcons.loadFont();


const Login = ({navigation}) => {
  const bSheetRef = useRef();
  const [countryCode, setCountryCode] = useState();
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withCurrencyButton, setWithCurrencyButton] = useState(false);
  const [withFlagButton, setWithFlagButton] = useState(true);
  const [withCallingCodeButton, setWithCallingCodeButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withCurrency, setWithCurrency] = useState(true);
  const [withModal, setWithModal] = useState(true);
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const [fontScaling, setFontScaling] = useState(true);
  const [disableNativeModal, setDisableNativeModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    console.log(countryCode);
  };
  const switchVisible = () => setVisible(!visible);

  const [entries, setEntires] = useState([
    {
      id: 0,
      title: `Screen 1`,
      
     
    },
    {
      id: 1,
      title: "SCreen 2",

    },
  ]);

  const cerouselRef = useRef();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);

  };

const [number,setNumber]=useState("")

  

 const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>

{
  index ===0 &&
  <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text>HELLO!</Text>
            <Text>WHAT'S YOUR PHONE NUMBER?</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={styles.countryCodeWrapper}>
              <CountryPicker
                {...{
                  allowFontScaling: fontScaling,
                  countryCode,
                  withFilter,
                  excludeCountries: ["FR"],
                  withFlag,
                  withCurrencyButton,
                  withCallingCodeButton,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withCurrency,
                  withEmoji,
                  withModal,
                  withFlagButton,
                  onSelect,
                  disableNativeModal,
                  preferredCountries: ["US"],
                  modalProps: {
                    visible,
                  },
                  containerButtonStyle: {
                    alignSelf: "center",
                  },
                  onClose: () => setVisible(false),
                  onOpen: () => setVisible(true),
                }}
              />
              <TouchableOpacity onPress={()=>{switchVisible()}}>
              <Feather name="chevron-down" size={15} color={color.black} style={{marginLeft:5,marginTop:3}}/>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: color.white,
                borderRadius: 50,
                justifyContent: "center",
                marginHorizontal: 10,
                flexDirection:'row',
                alignItems:'center'
              }}
            >
              <TextInput keyboardType={"numeric"} style={{ marginLeft: 20,flex:1 }} onChangeText={(text)=>{setNumber(text)}} />
              <Feather name="x" size={15} color={color.black} style={{marginRight:10}}/>
            </View>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                cerouselRef.current.snapToNext();
              }}
              style={{
                backgroundColor: color.splash_bg,
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <Text style={{ color: color.white, fontWeight: "bold" }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
}


       {index ===1 &&  <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text>VERIFICATION CODES OTP</Text>
         
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={styles.countryCodeWrapper}>
              <CountryPicker
                {...{
                  allowFontScaling: fontScaling,
                  countryCode,
                  withFilter,
                  excludeCountries: ["FR"],
                  withFlag,
                  withCurrencyButton,
                  withCallingCodeButton,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withCurrency,
                  withEmoji,
                  withModal,
                  withFlagButton,
                  onSelect,
                  disableNativeModal,
                  preferredCountries: ["US"],
                  modalProps: {
                    visible,
                  },
                  containerButtonStyle: {
                    alignSelf: "center",
                  },
                  onClose: () => setVisible(false),
                  onOpen: () => setVisible(true),
                }}
              />
              <TouchableOpacity onPress={()=>{switchVisible()}}>
              <Feather name="chevron-down" size={15} color={color.black} style={{marginLeft:5,marginTop:3}}/>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: color.white,
                borderRadius: 50,
                justifyContent: "center",
                marginHorizontal: 10,
                flexDirection:'row',
                alignItems:'center'
              }}
            >
              <TextInput value={number}  onChangeText={(text)=>{setNumber(text)}} keyboardType={"numeric"} style={{ marginLeft: 20,flex:1 }} />
              <Feather name="x" size={15} color={color.black} style={{marginRight:10}} onPress={()=>{setNumber('')}}/>
            </View>
          </View>
          <View style={{marginHorizontal:20,justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'center'}}> <Text style={{fontWeight:'bold'}}>Das’Min </Text><Text>uses Account Kit, a Facebook technology, to help you sign in. You don’t need a Facebook account.
Message and data rates may apply </Text> <View style={{borderBottomColor:color.black,borderBottomWidth:1}}><Text >Learn how Facebook users your info.</Text></View></Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
               toggleModal()
              }}
              style={{
                backgroundColor: color.splash_bg,
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
              }}
            >
              <Text style={{ color: color.white, fontWeight: "bold" }}>
              GET A WHATSAPP CODE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                cerouselRef.current.snapToNext();
              }}
              style={{
                backgroundColor: color.splash_bg,
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginTop:10
              }}
            >
              <Text style={{ color: color.white, fontWeight: "bold" }}>
                USE SMS
              </Text>
            </TouchableOpacity>
          </View>
        </View>  }
     
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/Images/Logo.png")} />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: color.fbBackGroundclr,
          height: 50,
          marginBottom: 100,
          paddingHorizontal: 20,
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <View style={styles.fbTextWrapper}>
          <Text style={styles.fbtxtLeft}>CONNECT WITH</Text>
          <Text style={styles.fbtxtRight}> FACEBOOK</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.phoneViewWrapper}
        onPress={() => {
          bSheetRef.current.open();
        }}
        activeOpacity={0.7}
      >
        <View style={styles.phoneTextWrapper}>
          <Text style={styles.phonetxtLeft}>CONNECT WITH</Text>
          <Text style={styles.phonetxtRight}> PHONE NUMBER</Text>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={(ref) => {
          bSheetRef.current = ref;
        }}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            //   justifyContent: "center",
            //   alignItems: "center"
            backgroundColor: "#F7F7F7",
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
            paddingTop:10
          },
        }}
      >
        <Carousel
          ref={(c) => {
            cerouselRef.current = c;
          }}
          data={entries}
          sliderWidth={width(100)}
          itemWidth={width(100)}
          slideStyle={{ width: width(100) }}
          renderItem={_renderItem}
          onSnapToItem={(index) => {
            setActiveIndex(index);
          }}
          scrollEnabled={true}
        />
      </RBSheet>
<View style={{flex:isModalVisible?1:0}}>
      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:color.white,padding:20,borderRadius:20,height:'60%' }}>
      <Feather name="x" size={20} color={color.black} onPress={()=>{toggleModal()
          navigation.navigate("Otp")
          bSheetRef.current.close()
    }}/>
          <View style={{flex:1, justifyContent:'center',alignItems:'center', }}>
<MaterialCommunityIcons name="checkbox-marked-circle" size={150} color={color.splash_bg} style={{marginBottom:10}}/>
<Text>Successflly send verification code</Text>
</View>
        
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  );
};

Login.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.splash_bg,

  },
  phoneViewWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 80,
    backgroundColor: color.white,
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  phoneTextWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  phonetxtLeft: {
    color: color.splash_bg,
  },
  phonetxtRight: {
    color: color.splash_bg,
    fontWeight: "bold",
  },
  fbTextWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
  fbtxtLeft: {
    color: color.white,
  },
  fbtxtRight: {
    color: color.white,
    fontWeight: "bold",
  },
  countryCodeWrapper: {
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: color.white,
    marginLeft: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
});

export default Login;
