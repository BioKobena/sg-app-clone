import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

/**
 * J'essaie de nouvelle façon de faire les styles
 * Je pense que je vais bien m'amuser 🤭
 */

// type StyleProps = {
//     widthSize?: number | string;
// };
// export const style = ({ widthSize }: StyleProps) => StyleSheet.create({
//     container: {
//         width: widthSize || "100%",
//         height: 60,
//         backgroundColor: Colors.white,
//         borderRadius: 3,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.50,
//         shadowRadius: 1.41,
//         elevation: 3,
//     },
//     textTitle: {
//         fontSize: 20,
//         fontFamily: "Lato-SemiBold",
//     },
// });
export const stylesButton = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5,
        width: "100%",
        height: 60,
        backgroundColor: Colors.buttonBackgroud,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.50,
        shadowRadius: 1.41,
        elevation: 3,
    },
    leftContainer: {
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    rightContainer: {
        position: "absolute",
        right: 5,
    },
    textTitle: {
        fontSize: 20,
        fontFamily: "Lato-SemiBold",
    },
    containerText: {
        flexDirection: "column",
        gap: 5,
    },
});
