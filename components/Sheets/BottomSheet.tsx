import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = () => {
    const refRBSheet = useRef(null);

  return (
    <View>
      <Text>BottomSheet</Text>
    </View>
  )
}

export default BottomSheet

const styles = StyleSheet.create({})