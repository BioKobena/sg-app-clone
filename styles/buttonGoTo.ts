import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const stylesGoTo = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.redPrimary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        height: 45,
        width: "65%",
    },
    text: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: "Lato-SemiBold",
    },
});
