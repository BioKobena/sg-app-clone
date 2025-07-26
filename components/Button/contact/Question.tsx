import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { styleShadow } from "@/styles/shadow";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
export const Question = () => {
    console.log(styleShadow);
    return (
        <View style={styles.container}>
            <FontAwesome5
                name="question-circle"
                size={30}
                color={Colors.secondIcon}
            />
            <Text style={styles.textQuestion}>Posez-moi une question</Text>
        </View>
    );
};

type ItemProps = {
    label?: string;
    icon?: React.ReactNode;
};
export const Item = ({ label, icon }: ItemProps) => {
    return (
        <View style={styles.cardContainer}>
            {icon ? icon : (
                <Ionicons
                    name="chatbubble-ellipses"
                    size={30}
                    color={Colors.iconColor}
                />
            )}
            <Text style={styles.textContainer}>{label}</Text>
        </View>
    );
};

const shadow: ViewStyle = {
    shadowColor: Colors.black,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.50,
    shadowRadius: 1.41,
    elevation: 3,
    padding: 20,
    height: 70,
};

const styles = StyleSheet.create({
    container: {
        // ...styleShadow({
        //     borderRadius: 10,
        //     shadowColor: Colors.white,
        //     shadowOpacity: 0.2,
        // }),
        width: "95%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.blanc,
        flexDirection: "row",
        gap: 20,
        borderRadius: 5,
        padding: 20,
        height: 70,
        ...shadow,
    },
    textQuestion: {
        fontFamily: "Lato-SemiBold",
        fontSize: 18,
        color: Colors.secondIcon,
    },
    cardContainer: {
        ...shadow,
        width: "48%",
        height: 125,
        borderRadius: 5,
        backgroundColor: Colors.blanc,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        fontSize: 14,
        fontFamily: "Lato-SemiBold",
        color: Colors.secondIcon,
        width: "100%",
        textAlign: "center",
        marginTop: 15,
        // justifyContent: "center",
        // alignItems: "center",
    },
});
