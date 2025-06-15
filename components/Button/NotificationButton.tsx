import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { stylesButton } from "@/styles/button";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type ButtonProps = {
    label: string;
    icon?: "notifications-outline";
    description?: string;
};
const NotificationButton = ({ label, icon, description }: ButtonProps) => {
    if (description) {
        return (
            <TouchableOpacity style={[stylesButton.container, { height: 70 }]}>
                <View style={stylesButton.leftContainer}>
                    <View style={stylesButton.containerText}>
                        <Text style={stylesButton.textTitle}>{label}</Text>
                        <Text
                            style={[stylesButton.textTitle, {
                                fontFamily: "Lato-Light",
                                color: "#000",
                                fontSize: 14,
                            }]}
                        >
                            {description}
                        </Text>
                    </View>
                    <Ionicons
                        name="help-circle"
                        size={35}
                        color={Colors.primary}
                    />
                </View>
                <View style={stylesButton.rightContainer}>
                    <Entypo name="chevron-small-right" size={40} />
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity style={stylesButton.container}>
            <View style={stylesButton.leftContainer}>
                <Text style={stylesButton.textTitle}>{label}</Text>
                <Ionicons
                    name="notifications-outline"
                    size={35}
                    color={Colors.iconColor}
                />
            </View>
            <View style={stylesButton.rightContainer}>
                <Entypo name="chevron-small-right" size={40} />
            </View>
        </TouchableOpacity>
    );
};

export default NotificationButton;
