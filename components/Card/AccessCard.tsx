import { Image, ImageStyle, Text, View, ViewStyle } from "react-native";
import React from "react";
import { stylesAccessCard } from "@/styles/accessCard";

const card = require("@/assets/images/icon/myCard.png");
const AccessCard = () => {
    const imageStyle: ImageStyle = {
        width: "100%",
        height: "100%",
    };
    return (
        <View style={stylesAccessCard.container}>
            <View style={stylesAccessCard.miniCard}>
                <Image style={imageStyle} source={card} />
            </View>
            <View style={stylesAccessCard.visaContainer}>
                <Text style={stylesAccessCard.title}>CB Visa</Text>
                <View style={stylesAccessCard.infoVisa}>
                    <Text style={stylesAccessCard.creditNumber}>
                        N° **** 8292
                    </Text>
                    <Text style={stylesAccessCard.instantedDebit}>
                        Débit immédiat
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default AccessCard;
