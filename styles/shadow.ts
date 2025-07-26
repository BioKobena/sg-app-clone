import { StyleSheet } from "react-native";

// export const stylesShadow = StyleSheet.create({
//     shadow: {
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
// });

type ShadowProps = {
    borderRadius: number;
    shadowColor?: string;
    shadowOffset?: {
        width: number;
        height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
};
export const styleShadow = (
    {
        borderRadius,
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
        elevation,
    }: ShadowProps,
) => StyleSheet.create({
    shadow: {
        borderRadius: borderRadius ? borderRadius : 3,
        shadowColor: shadowColor ? shadowColor : "#000",
        shadowOffset: shadowOffset ? shadowOffset : { width: 0, height: 1 },
        shadowOpacity: shadowOpacity ? shadowOpacity : 0.50,
        shadowRadius: shadowRadius ? shadowRadius : 1.41,
        elevation: elevation ? elevation : 3,
    },
});
