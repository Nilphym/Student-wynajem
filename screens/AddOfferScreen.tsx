import { Text, View } from '../components/Themed';
import { Controller, useForm } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../providers/UserProvider';
import { RootTabScreenProps } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

export default function AddOfferScreen({
  navigation
}: RootTabScreenProps<'Add'>) {
  const [image, setImage] = useState('');
  const [region, setRegion] = useState({
    latitude: 51.1079,
    longitude: 17.0385,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  const userContext = useContext(UserContext);

  const onSubmit = async ({ lokalizacja, opis_oferty, nazwa_oferty }: any) => {
    console.log({ lokalizacja, opis_oferty, nazwa_oferty });
    // call user provider
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const { handleSubmit, control, reset } = useForm();
  const submitHandler = (data: any) => {
    onSubmit(data);
    setImage('');
    reset({
      name: '',
      description: '',
      localization: ''
    });
  };

  return true ? (
    // return userContext.state.user ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Dodawanie ofert</Text>
        <View style={styles.tabContainer}>
          <Text style={styles.label}>Nazwa oferty</Text>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.field}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />

          <Text style={styles.label}>Krótki opis</Text>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                style={{
                  ...styles.field,
                  ...{
                    height: 100
                  }
                }}
              />
            )}
          />

          <Text style={styles.label}>Lokalizacja</Text>
          <MapView
            style={styles.map}
            initialRegion={region}
            onRegionChangeComplete={(region) => setRegion(region)}
          >
            <Marker coordinate={region} />
          </MapView>

          <Text style={styles.label}>Wybierz zdjęcia</Text>
          <TouchableOpacity style={styles.field} onPress={pickImage}>
            <Text>Zdjęcie</Text>
            <MaterialCommunityIcons
              name="cursor-default-click"
              size={20}
              color="black"
              style={{ position: 'absolute', left: 15, top: '31%' }}
            />
          </TouchableOpacity>
          {!!image && <Image source={{ uri: image }} style={{ height: 100 }} />}

          <View style={{ marginTop: 15 }}>
            <Button
              title="Dodaj ofertę"
              onPress={handleSubmit(submitHandler)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      style={{
        height: '100%',
        justifyContent: 'center',
        marginHorizontal: 15
      }}
    >
      <Text style={styles.title}>Zaloguj się, by dodawać własne oferty!</Text>
      <Button
        title="Zaloguj się"
        onPress={() => navigation.navigate('Account')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    paddingVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  label: {
    color: 'black'
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 20,
    backgroundColor: 'transparent'
  },
  field: {
    position: 'relative',
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 17,
    backgroundColor: 'white'
  },
  map: {
    width: '100%',
    height: 150,
    marginVertical: 10
  }
});
