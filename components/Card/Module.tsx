import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesModule } from "@/styles/module";

type ModuleProps = {
  icon?: React.ReactNode;
  textTitle?: string;
};
const Module = ({ icon, textTitle }: ModuleProps) => {
  return (
    <View style={stylesModule.container}>
      <View style={stylesModule.icon}>
        {icon}
      </View>
      <Text style={stylesModule.textTitle}>{textTitle}</Text>
    </View>
  );
};

export default Module;
