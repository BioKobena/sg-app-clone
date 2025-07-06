import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export const stylesModule = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "31%",
        height: "90%",
        backgroundColor: Colors.cardBackground,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        gap: 15,
    },
    icon: {
        position: "absolute",
        top: 20,
    },
    textTitle: {
        fontFamily: "Lato-SemiBold",
        fontSize: 16,
        color: Colors.iconColor,
        position: "absolute",
        bottom: 20,
        textAlign: "center",
    },
});
