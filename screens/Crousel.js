import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { width, height, totalSize } from "react-native-dimension";
import assets from "../assets";
const Crousel = (props) => {
  const inset = useSafeAreaInsets();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLast, setLast] = useState(false);
  const [entries, setEntires] = useState([
    {
      id: 0,
      title: `Hi! We’re Das'min`,
      discription:
        "You simply turn on the phone, we will make sure you have a great meal",
      image: assets.images.first,
    },
    {
      id: 1,
      title: "More Food, More Choices",
      discription:
        "With a large number of partner restaurants, we can serve most of your dining preferences.",
      image: assets.images.second,
    },
    {
      id: 2,
      title: "Delivery to Your Door",
      discription: `With this professional delivery staff, Das'Min will serve you the most professional way with the best quality`,
      image: assets.images.third,
    },
  ]);

  const carousel = useRef(null);

  useEffect(() => {
    if (isLast) {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
      props.navigation.navigate("Login");
    }
  }, [isLast]);

  const _renderItem = ({ item, index }) => {
    return (
      <KeyboardAwareScrollView
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 25,
          }}
        >
          <Text
            style={{
              // fontFamily: 'Quicksand-Bold',
              fontSize: 22,
              color: "white",
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              // fontFamily: 'Quicksand-SemiBold',
              fontSize: 15,
              color: "white",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            {item.discription}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 40,
            // padding: 5
          }}
        >
          <Image
            source={item.image}
            style={{
              resizeMode: "stretch",
              width: "100%",
              height: "100%",
              flex: 1,
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  function onNextClick() {
    if (activeIndex === 2) {
      console.log("222222222222222222222222")
      props.navigation.navigate("Login");
      // setLast(true);
    }
else{
  console.log("33333333333333333333333333")
    carousel.current?.snapToNext();
}
  }

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: assets.colors.appColor_Yellow,
        }}
      >
        <View
          style={{
            marginTop: inset.top,
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              marginVertical: 35,
              width: "90%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={assets.icons.logo}
                style={{
                  resizeMode: "contain",
                  height: 44,
                  width: 44,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  onNextClick();
                }}
                style={{}}
              >
                <Text
                  style={{
                    // fontFamily: 'Montserrat-Regular',
                    fontSize: 17,
                    color: "white",
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Carousel
              ref={(ref) => {
                carousel.current = ref;
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
              // inactiveSlideOpacity={0}
              // inactiveSlideScale={1}
            />
          </View>
          <TouchableOpacity onPress={onNextClick} style={styles.opacityView}>
            <Text style={styles.opacityText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

Crousel.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  opacityView: {
    alignItems: "center",
    width: "100%",
    height: 83,
    justifyContent: "center",
    backgroundColor: assets.colors.appColor,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    position: "absolute",
    bottom: 0,
  },
  opacityText: {
    color: "white",
    // fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    textAlign: "center",
  },
});

export default Crousel;
