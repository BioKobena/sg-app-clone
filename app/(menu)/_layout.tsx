import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo, FontAwesome6, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                headerShown: false,
                tabBarInactiveTintColor: Colors.black,
            }}
            initialRouteName="(home)"
        >
            <Tabs.Screen
                name="(home)"
                options={{
                    title: "Accueil",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Octicons size={23} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(virements)"
                options={{
                    title: "Virements",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={23} name="exchange" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(cartes)"
                options={{
                    title: "Cartes",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            size={23}
                            name="credit-card-alt"
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="(contact)"
                options={{
                    title: "Contact",
                    tabBarIcon: ({ color }) => (
                        <Entypo size={30} name="message" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="(autres)"
                options={{
                    title: "Autres",
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={23} name="help-circle" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
