import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { stylesHome } from "@/styles/home";
import NotificationButton from "@/components/Button/NotificationButton";
import AccessButton from "@/components/Button/AccessButton";
import Swiper from "react-native-swiper";
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

type Props = {
  isOpen: boolean;
  toogleSheet: () => void;
};
// function BottomSheet({ isOpen, toggleSheet, duration = 500, children }: Props) {
//   const { colorScheme } = useColorScheme();
//   const height = useSharedValue(0);
//   const progress = useDerivedValue(() =>
//     withTiming(isOpen.value ? 0 : 1, { duration })
//   );

//   const sheetStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: progress.value * 2 * height.value }],
//   }));

//   const backgroundColorSheetStyle = {
//     backgroundColor: colorScheme === "light" ? "#f8f9ff" : "#272B3C",
//   };

//   const backdropStyle = useAnimatedStyle(() => ({
//     opacity: 1 - progress.value,
//     zIndex: isOpen.value
//       ? 1
//       : withDelay(duration, withTiming(-1, { duration: 0 })),
//   }));

//   return (
//     <>
//       <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
//         <TouchableOpacity style={styles.flex} onPress={toggleSheet} />
//       </Animated.View>
//       <Animated.View
//         onLayout={(e) => {
//           height.value = e.nativeEvent.layout.height;
//         }}
//         style={[sheetStyles.sheet, sheetStyle, backgroundColorSheetStyle]}
//       >
//         {children}
//       </Animated.View>
//     </>
//   );
// }
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
            backgroundColor: Colors.primary,
            width: 30,
            height: 30,
          }}
          showsPagination={true}
          loop={true}
        >
          <View style={stylesHome.slide}>
            <Jauge progress={10} />
          </View>
          <View style={stylesHome.slide}>
            <Text>Slide 2</Text>
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

type JaugProps = {
  progress: number;
};
export function Jauge({ progress }: JaugProps) {
  const radius = 70;
  const strokeWidth = 10;
  const angle = Math.PI * progress;

  const x = radius + radius * Math.cos(Math.PI - angle);
  const y = radius - radius * Math.sin(Math.PI - angle);

  const d = `
    M ${radius - radius} ${radius}
    A ${radius} ${radius} 0 0 1 ${radius + radius} ${radius}
  `;

  return (
    <Svg width={radius * 2} height={radius + strokeWidth}>
      <Path
        d={d}
        stroke="#eee"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <Path
        d={`
          M ${radius - radius} ${radius}
          A ${radius} ${radius} 0 0 1 ${x} ${y}
        `}
        stroke="tomato"
        strokeWidth={strokeWidth}
        fill="none"
      />
    </Svg>
  );
}
