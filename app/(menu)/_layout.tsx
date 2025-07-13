import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    AntDesign,
    Entypo,
    FontAwesome5,
    FontAwesome6,
    Ionicons,
    Octicons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

export const unstable_settings = {
    initialRouteName: "index",
};

export default function RootLayout() {
    const logoutIcon = () => {
        return (
            <FontAwesome
                name="power-off"
                color="white"
                size={25}
                style={{
                    transform: "rotate(0deg)",
                    position: "absolute",
                    top: 5,
                    right: 25,
                }}
            />
        );
    };
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: false,
                tabBarInactiveTintColor: Colors.iconBottom,
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: 60,
                    padding: 5,
                },
                tabBarLabelStyle: {
                    fontFamily: "Lato-Regular",
                },
            }}
            initialRouteName="(home)"
        >
            <Tabs.Screen
                name="(home)"
                options={{
                    title: "Accueil",
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <Octicons size={25} name="home" color={color} />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.redPrimary,
                        height: "41%",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitle: "ACCUEIL",
                    headerTitleStyle: {
                        fontFamily: "Lato-Black",
                        letterSpacing: 0.8,
                    },
                    headerRight: logoutIcon,
                }}
            />
            <Tabs.Screen
                name="(virements)"
                options={{
                    title: "Virements",
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5
                            size={20}
                            name="exchange-alt"
                            color={color}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.redPrimary,
                        height: "41%",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitle: "VIREMENTS",
                    headerTitleStyle: {
                        fontFamily: "Lato-Black",
                        letterSpacing: 0.8,
                    },
                    headerRight: logoutIcon,
                }}
            />
            <Tabs.Screen
                name="(cartes)"
                options={{
                    title: "Cartes",
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            size={20}
                            name="credit-card-alt"
                            color={color}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.redPrimary,
                        height: "41%",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitle: "VOS CARTES",
                    headerTitleStyle: {
                        fontFamily: "Lato-Black",
                        letterSpacing: 0.8,
                    },
                    headerRight: logoutIcon,
                }}
            />

            <Tabs.Screen
                name="(contact)"
                options={{
                    title: "Contact",
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <Entypo size={30} name="message" color={color} />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.redPrimary,
                        height: "41%",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitle: "CONTACT",
                    headerTitleStyle: {
                        fontFamily: "Lato-Black",
                        letterSpacing: 0.8,
                    },
                    headerRight: logoutIcon,
                }}
            />
            <Tabs.Screen
                name="(autres)"
                options={{
                    title: "Autres",
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={30} name="help-circle" color={color} />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.redPrimary,
                        height: "41%",
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerTitle: "AUTRES",
                    headerTitleStyle: {
                        fontFamily: "Lato-Black",
                        letterSpacing: 0.8,
                    },
                    headerRight: logoutIcon,
                }}
            />
        </Tabs>
    );
}
