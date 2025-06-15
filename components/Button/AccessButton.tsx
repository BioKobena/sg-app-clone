import { Text, View } from "react-native";
import React from "react";
import { stylesAccessButton } from "@/styles/access";

type AccessButtonProps = {
    label: string;
};
const AccessButton = ({ label }: AccessButtonProps) => {
    return (
        <View style={stylesAccessButton.container}>
            <Text style={stylesAccessButton.text}>{label}</Text>
        </View>
    );
};

export default AccessButton;
