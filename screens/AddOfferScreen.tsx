import { Text, View } from '../components/Themed';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import {
  Button,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  ScrollView
} from 'react-native';
import React from "react";

export default function AddOfferScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodaj ofertę</Text>
          <TextInput
            value={"value"}
          />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  field: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 17,
    backgroundColor: 'white'
  }
});
