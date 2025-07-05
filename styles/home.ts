import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "column",
        padding: 10,
    },
    imageContainer: {
        width: "50%",
        height: "20%",
        position: "absolute",
        top: "0%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    sliderContainer: {},
    buttonContainer: {
        width: "100%",
        flexDirection: "column",
        gap: 15,
    },
    amountContainer: {

        width: "100%",
    },
    accessButton: {
        width: "100%",
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "7%",
    },
    slide: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#9DD6EB",
        height: "100%",
        width: "100%",
        // flexDirection:"column",
    },
    swiperContainer: {
        width: "100%",
        height: "40%",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    modalOpen: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "2%",
    },
    textHelp: {
        fontSize: 16,
    },
});
