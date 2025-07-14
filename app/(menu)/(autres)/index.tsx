import React, { useEffect, useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import NfcManager, { NfcTech, TagEvent } from 'react-native-nfc-manager';

const App = () => {
  const [cardInfo, setCardInfo] = useState<string | null>(null);

  useEffect(() => {
    NfcManager.start();
    return () => {
      NfcManager.cancelTechnologyRequest();
    };
  }, []);

  const readCard = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.NfcA, {
        alertMessage: 'Approchez votre carte bancaire NFC',
      });
      const tag = await NfcManager.getTag() as TagEvent;
      setCardInfo(JSON.stringify(tag, null, 2));
      Alert.alert('Carte détectée', JSON.stringify(tag, null, 2));
    } catch (ex) {
      Alert.alert('Erreur', 'Lecture échouée ou annulée');
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Scanner une carte bancaire" onPress={readCard} />
      {cardInfo && <Text selectable>{cardInfo}</Text>}
    </View>
  );
};

export default App;
