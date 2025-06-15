import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { stylesHome } from "@/styles/home";
import NotificationButton from "@/components/Button/NotificationButton";
import AccessButton from "@/components/Button/AccessButton";
import Swiper from "react-native-swiper";
import Svg, { Path } from "react-native-svg";
import { Colors } from "@/constants/Colors";

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
