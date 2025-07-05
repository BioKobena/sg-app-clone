import { Text, View } from "react-native";
import React from "react";
import { stylesAmount } from "@/styles/amout";
import { Feather } from "@expo/vector-icons";

type AmountProps = {
    see?: boolean;
};
const Amount = ({ see }: AmountProps) => {
    if (see) {
        return (
            <View style={stylesAmount.container}>
                <Text style={stylesAmount.textShow}>Masquer le solde</Text>
                <Feather name="eye-off" size={24} color="black" />
            </View>
        );
    }

    return (
        <View style={stylesAmount.container}>
            <Text style={stylesAmount.textShow}>Afficher le solde</Text>
            <Feather name="eye" size={24} color="black" />
        </View>
    );
};

export default Amount;
