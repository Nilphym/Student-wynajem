import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootTabScreenProps } from '../types';
import { offers } from '../assets/data';

export default function FindScreen({ navigation }: RootTabScreenProps<'Find'>) {
  const [text, onChangeText] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Znajdź coś dla siebie"
        />
        <Button
          onPress={() => inputRef.current?.focus()}
          icon={<FontAwesome name="search" style={styles.backIcon} />}
          type="clear"
          containerStyle={styles.searchButton}
        />
      </View>
      <ScrollView>
        {offers.map(({ offerId, name, price, publishDate, photos }) => (
          <TouchableOpacity
            key={offerId}
            onPress={() => navigation.push('Offer', { offerId })}
          >
            <View style={styles.offer}>
              <Image style={styles.image} source={{ uri: photos[0] }} />
              <View style={styles.textContainer}>
                <Text>{name}</Text>
                <Text style={{ fontWeight: 'bold' }}>{price} zł</Text>
                <Text style={{ color: '#595959' }}>{publishDate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 80
  },
  input: {
    flex: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white'
  },
  header: {
    height: 80,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchButton: {
    height: 50,
    paddingTop: 4,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white'
  },
  backIcon: {
    fontSize: 25,
    color: 'black'
  },
  offer: {
    height: 110,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 7,
    marginHorizontal: 15
  },
  image: {
    flex: 1.3
  },
  textContainer: {
    flex: 2,
    padding: 20,
    justifyContent: 'space-between'
  }
});
