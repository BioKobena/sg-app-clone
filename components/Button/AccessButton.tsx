import { Text, View } from "react-native";
import React from "react";
import { stylesAccessButton } from "@/styles/access";
import { Link } from "expo-router";

type AccessButtonProps = {
    label: string;
};
const AccessButton = ({ label }: AccessButtonProps) => {
    return (
        <View style={stylesAccessButton.container}>
            <Text style={stylesAccessButton.text}>
                <Link href={"/(menu)/(home)"}>
                    {label}
                </Link>
            </Text>
        </View>
    );
};

export default AccessButton;
