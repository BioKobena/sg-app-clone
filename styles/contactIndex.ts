import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesContactIndex = StyleSheet.create({
    container: {
        backgroundColor: Colors.blanc,
        padding: 12,
        width: "100%",
        height: "100%",
        gap: 20,
        alignItems: "center",
    },
    list: {
        width: "95%",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    },
});
