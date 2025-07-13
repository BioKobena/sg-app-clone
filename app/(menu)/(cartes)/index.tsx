import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesIndexCard } from "@/styles/cartesIndex";
import ButtonGoTo from "@/components/Button/ButtonGoTo";
import AccessCard from "@/components/Card/AccessCard";

const index = () => {
  return (
    <View style={stylesIndexCard.container}>
      <AccessCard />
      <ButtonGoTo title="Personnaliser ma carte" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
