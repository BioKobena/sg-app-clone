import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { stylesHome } from "@/styles/home";
import NotificationButton from "@/components/Button/NotificationButton";
import AccessButton from "@/components/Button/AccessButton";
import Swiper from "react-native-swiper";
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import Amount from "@/components/Button/Amount";
import { useState } from "react";
import SimpleButton from "@/components/Button/SimpleButton";
import RBSheet from "react-native-raw-bottom-sheet";
import type RBSheetComponent from "react-native-raw-bottom-sheet";

export function Example() {
  const refRBSheet = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Button title="OPEN BOTTOM SHEET"// onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
      </RBSheet>
    </View>
  );
}

type Props = {
  isOpen: boolean;
  toogleSheet: () => void;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: 250,
  },
  buttonContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  toggleButton: {
    backgroundColor: "#b58df1",
    padding: 12,
    borderRadius: 48,
  },
  toggleButtonText: {
    color: "white",
    padding: "0.5%",
  },
  safeArea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomSheetButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 2,
  },
  bottomSheetButtonText: {
    fontWeight: 600,
    textDecorationLine: "underline",
  },
});

const sheetStyles = StyleSheet.create({
  sheet: {
    padding: 16,
    paddingRight: "2%",
    paddingLeft: "2%",
    height: 150,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default function Index() {
  const [viewAmount, setViewAmount] = useState(false);
  const toggleAmount = () => {
    setViewAmount(!viewAmount);
  };

  const router = useRouter();
  useEffect(() => {
    router.replace("/(menu)/(cartes)");
  }, []);

  return (
    <View
      style={stylesHome.container}
    >
      <StatusBar style="dark" />
      <View style={stylesHome.imageContainer}>
        <Image
          style={stylesHome.image}
          source={require("@/assets/images/home/top-sg.png")}
        />
      </View>
      <View style={stylesHome.swiperContainer}>
        <Swiper
          buttonWrapperStyle={{
            backgroundColor: "#FFF",
            width: 15,
            padding: 5,
          }}
          paginationStyle={{
            top: "65%",
            borderColor: "red",
            borderStyle: "solid",
            // left: 10,
          }}
          activeDotColor={Colors.primary}
          activeDotStyle={{
            borderWidth: 7,
            borderColor: Colors.primary,
            borderBlockColor: "transparent",
            borderRadius: 15,
          }}
          dotStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: 10,
            height: 10,
            borderRadius: 50,
          }}
          showsPagination={true}
          loop={true}
        >
          <View style={stylesHome.slide}>
            <AnimatedCircularProgress
              size={250}
              width={20}
              style={{
                position: "absolute",
                bottom: 0,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              fill={5}
              tintColor="#8ac926"
              backgroundColor="rgba(0, 0, 0, 0.1)"
              arcSweepAngle={200}
              rotation={-100}
              lineCap="round"
              renderCap={({ center }) => (
                <Circle cx={center.x} cy={center.y} r="10" fill="transparent" />
              )}
            >
              {() => (
                <TouchableOpacity
                  onPress={toggleAmount}
                  style={stylesHome.amountContainer}
                >
                  <Amount see={viewAmount} />
                </TouchableOpacity>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={stylesHome.slide}>
            <SimpleButton />
          </View>
        </Swiper>
      </View>
      <View style={stylesHome.buttonContainer}>
        <NotificationButton label="Voir mes notifications" />
        <NotificationButton
          description="J'ai un problème avec mon pass sécurité"
          label="Posez-moi une question"
        />
      </View>
      <View style={stylesHome.accessButton}>
        <AccessButton label="Accéder à mes comptes" />
      </View>
      <TouchableOpacity style={stylesHome.modalOpen}>
        <Text style={stylesHome.textHelp}>
          <Link href={"/modal"}>
            Aide & Urgence
          </Link>
        </Text>
        <Ionicons name="chevron-up" size={25} />
      </TouchableOpacity>
    </View>
  );
}
