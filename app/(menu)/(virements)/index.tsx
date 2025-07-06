import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { stylesVirement } from "@/styles/virements";
import Module from "@/components/Card/Module";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const index = () => {
  return (
    <View style={stylesVirement.container}>
      <StatusBar style="light" />
      <View style={stylesVirement.firstModule}>
        <Module
          textTitle="Virements"
          icon={
            <FontAwesome5
              size={25}
              name="exchange-alt"
              color={Colors.secondIcon}
            />
          }
        />
        <Module
          textTitle="Virement PEL"
          icon={
            <MaterialCommunityIcons
              name="bank-transfer-in"
              size={45}
            />
          }
        />
        <Module
          textTitle="Virement international"
          icon={
            <SimpleLineIcons
              name="globe"
              size={25}
            />
          }
        />
      </View>
      <View style={stylesVirement.secondModuleContainer}>
        <Text style={stylesVirement.textTitleSecondModule}>
          Suivi et bénéficiaires
        </Text>
        <View style={stylesVirement.secondModule}>
          <Module
            textTitle="Suivi des virements"
            icon={
              <MaterialIcons
                name="av-timer"
                size={35}
                color={Colors.secondIcon}
              />
            }
          />
          <Module
            textTitle="Gestion des bénéficiaires"
            icon={
              <MaterialIcons
                name="face"
                size={35}
                color={Colors.secondIcon}
              />
            }
          />
        </View>
      </View>
      <View style={stylesVirement.secondModuleContainer}>
        <Text style={stylesVirement.textTitleSecondModule}>
          Paiements mobiles 
        </Text>
        <View style={stylesVirement.secondModule}>
          <Module
            textTitle="Wero"
            icon={
              <MaterialIcons
                name="money"
                size={35}
                color={Colors.secondIcon}
              />
            }
          />
          <Module
            textTitle="QR Code"
            icon={
              <MaterialIcons
                name="qr-code"
                size={35}
                color={Colors.secondIcon}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
