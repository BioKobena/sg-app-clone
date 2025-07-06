import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesSimpleButton = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        gap: 15,
        marginBottom: 30,
    },
    buttonContainer: {
        borderWidth: 2.5,
        backgroundColor: "transparent",
        borderColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: 25,
        padding: 1,
        width: 165,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontFamily: "Lato-Bold",
        padding: 10,
    },
    textTitle: {
        fontSize: 16,
        fontFamily: "Lato-SemiBold",
        textAlign: "center",
        padding: 10,
    },
});
