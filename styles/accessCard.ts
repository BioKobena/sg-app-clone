import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesAccessCard = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.50,
        shadowRadius: 1.41,
        elevation: 3,
        marginBottom: "7%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    miniCard: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    visaContainer: {
        width: "90%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 1,
    },
    infoVisa: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    title: {
        fontSize: 16,
        fontFamily: "Lato-Bold",
    },
    instantedDebit: {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        color: "rgba(0, 0, 0, 0.5)",
        padding: 3,
        fontFamily: "Lato-Regular",
    },
    creditNumber: {
        fontFamily: "Lato-Regular",
    },
});
