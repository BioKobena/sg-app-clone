import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesVirement = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    },
    firstModule: {
        width: "100%",
        height: "30%",
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    secondModuleContainer: {
        width: "100%",
        height: "30%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 10,
        alignItems: "flex-start",
    },
    secondModule: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        gap: 10,
    },
    textTitleSecondModule: {
        fontFamily: "Lato-Bold",
        fontSize: 16,
        color: Colors.secondIcon,
        marginLeft: 10,
        textAlign: "left",
        marginBottom: 10,
    },
    thirdModuleContainer: {},
    thirdModule: {},
    textTitleThirdModule: {},
});
