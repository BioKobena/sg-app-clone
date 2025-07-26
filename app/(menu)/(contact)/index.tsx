import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { stylesContactIndex } from "@/styles/contactIndex";
import { Item, Question } from "@/components/Button/contact/Question";
import { Colors } from "@/constants/Colors";
import { FontAwesome, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const index = () => {
  const pressableStyle: ViewStyle = {
    backgroundColor: Colors.redPrimary,
    padding: 5,
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  };

  const handlePressable = () => {
    console.log("The button is press...");
  };
  return (
    <View style={stylesContactIndex.container}>
      <Question />
      <View style={stylesContactIndex.list}>
        <Item
          label="Messagerie"
          icon={<FontAwesome name="envelope-o" size={35} />}
        />
        <Item
          label="Prendre RDV"
          icon={
            <SimpleLineIcons
              name="calendar"
              size={35}
              color={Colors.secondIcon}
            />
          }
        />
        <Item
          label="Trouver une agence ou un distributeur"
          icon={<FontAwesome name="bank" size={35} color={Colors.secondIcon} />}
        />
        <Item
          label="Mes autres contacts"
          icon={
            <Ionicons
              name="person-outline"
              size={35}
              color={Colors.secondIcon}
            />
          }
        />
      </View>

      {/* <Pressable/> */}
    </View>
  );
};

export default index;

/**
 * @BioKobena
 *  @hitSlop : This method permits you to have more sensibility of your button
 *  <Pressable
        hitSlop={{
          left: 20,
          right: 500,
          top: 20,
          bottom: 20,
        }}
        unstable_pressDelay={0}
        onPress={handlePressable}
        style={pressableStyle}
      >
        <Text>Pressable test</Text>
      </Pressable>
 */
