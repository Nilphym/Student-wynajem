import { Text, View } from "../components/Themed";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useContext} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from '../providers/UserProvider';

export default function AddOfferScreen() {
  const [image, setImage] = useState(null); // adding more images and then showing them in loop

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
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const { handleSubmit, control, reset } = useForm();
  const submitHandler = (data: any) => {
    
    onSubmit(data)
    setImage(null);
    reset({
      nazwa_oferty: '',
      opis_oferty: '',
      lokalizacja: ''
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dodawanie ofert</Text>
      <View style={styles.tabcontainer}>
        <Text style={styles.label}>Nazwa oferty</Text>
        <Controller
          name="nazwa_oferty"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="nazwa oferty"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.field}
            />
          )}
        />

        <Text style={styles.label}>Krótki opis</Text>
        <Controller
          name="opis_oferty"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="krótki opis"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={{
                height: 100,
                width: 350,
                paddingHorizontal: 15,
                borderRadius: 5,
                marginVertical: 10,
                fontSize: 17,
                backgroundColor: "white",
              }}
            />
          )}
        />

        <Text style={styles.label}>lokalizacja</Text>
        <Controller
          name="lokalizacja"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="lokalizacja"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.field}
            />
          )}
        />

        <Text style={styles.label}>Wybierz zdjęcia</Text>
        <View style={styles.hairline} />

        <TouchableOpacity style={styles.photo_button} onPress={pickImage}>
          <Text>Zdjęcie</Text>
        </TouchableOpacity>

        {image && (
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        )}

        <View style={{ marginTop: 15, width: 350 }}>
          <Button title="Dodaj ofertę" onPress={handleSubmit(submitHandler)} />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  tabcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  photo_button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 12,
    padding: 20,
    textAlign: "center",
  },
  hairline: {
    backgroundColor: "#A2A2A2",
    height: 3,
    marginTop: 12,
    marginBottom: 12,
    width: 340,
  },
  title: {
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginTop: 40,
    backgroundColor: "#24AFAF",
    color: "#ffffff",
    fontFamily: "sans-serif-light",
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  field: {
    height: 50,
    width: 350,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 17,
    backgroundColor: "white",
  },
});
