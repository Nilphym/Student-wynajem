import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootTabScreenProps } from '../types';
import { offers } from '../assets/data';
import { UserContext } from '../providers/UserProvider';

export default function ObservedScreen({
  navigation
}: RootTabScreenProps<'Observed'>) {
  const userContext = useContext(UserContext);

  return userContext.state.user ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {offers
          .filter(({ observed }) => observed)
          .map(({ offerId, name, price, publishDate, photos }) => (
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
  ) : (
    <SafeAreaView
      style={{
        height: '100%',
        justifyContent: 'center',
        marginHorizontal: 15
      }}
    >
      <Text style={styles.title}>
        Zaloguj się, by dodawać oferty do obserwowanych!
      </Text>
      <Button
        title="Zaloguj się"
        onPress={() => navigation.navigate('Account')}
      />
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
  },
  title: {
    fontSize: 30,
    paddingVertical: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  }
});
