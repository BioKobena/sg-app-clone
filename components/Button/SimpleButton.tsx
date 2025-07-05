import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { stylesSimpleButton } from "@/styles/simplebutton";

const SimpleButton = () => {
    return (
        <View style={stylesSimpleButton.container}>
            <Text style={stylesSimpleButton.textTitle}>
                Pour gérer l'affichage de votre jauge \(Solde, dernières
                opérations, ...)
            </Text>
            <TouchableOpacity style={stylesSimpleButton.buttonContainer}>
                <Text style={stylesSimpleButton.text}>Paramétrer</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SimpleButton;

const styles = StyleSheet.create({});
