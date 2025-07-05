import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesAccessButton = StyleSheet.create({
    container: {
        backgroundColor: Colors.redPrimary,
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        height: 50,
        borderRadius: 50,
        padding: 5,
    },
    text: {
        color: "white",
        fontSize: 18,
        fontFamily: "Lato-Bold",
    },
});
