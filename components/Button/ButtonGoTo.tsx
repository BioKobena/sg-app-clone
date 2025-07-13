import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { stylesGoTo } from "@/styles/buttonGoTo";

type ButtonGoToProps = {
    title: string;
};
const ButtonGoTo = ({ title }: ButtonGoToProps) => {
    return (
        <View style={stylesGoTo.container}>
            <Text style={stylesGoTo.text}>{title}</Text>
        </View>
    );
};

export default ButtonGoTo;

const styles = StyleSheet.create({});
