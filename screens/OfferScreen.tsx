import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import openMap from 'react-native-open-maps';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Carousel from '../components/Carousel';
import { offers } from '../assets/data';
import { OfferTabScreenProps } from '../types';

export default function OfferScreen({
  navigation,
  route
}: OfferTabScreenProps<'Offer'>) {
  const offer = offers.find((offer) => offer.offerId === route.params.offerId);

  if (!offer) {
    navigation.goBack();
    return null;
  }

  const openMaps = () => {
    openMap({
      end: `${offer.location.latitude}, ${offer.location.longitude}`,
      travelType: 'drive'
    });
  };

  const toggleObserved = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome
        style={styles.backButton}
        name="arrow-circle-o-left"
        onPress={navigation.goBack}
      />
      <Carousel photos={offer.photos} />
      <ScrollView>
        <View
          style={{
            ...styles.section,
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <Text style={styles.date}>
              Dodane {offer.publishDate.split('-').reverse().join('.')}
            </Text>
            <Text style={styles.date}>
              Wygaśnie {offer.expirationDate.split('-').reverse().join('.')}
            </Text>
            <Text style={styles.name}>{offer.name}</Text>
            <Text style={styles.price}>{offer.price} zł</Text>
          </View>
          <View>
            <TouchableOpacity onPress={toggleObserved}>
              {offer.observed ? (
                <FontAwesome size={30} name="heart" color="#3a78c2" />
              ) : (
                <FontAwesome size={30} name="heart-o" color="#3a78c2" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          {offer.tags.map((tag, index) => (
            <Text
              style={{
                ...styles.tag,
                ...{ marginBottom: index !== offer.tags.length - 1 ? 5 : 0 }
              }}
              key={tag.label}
            >
              {tag.label}: {tag.content}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Opis</Text>
          <Text style={{ lineHeight: 22 }}>{offer.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Kontakt</Text>
          <Text>
            {offer.user.firstName} {offer.user.secondName}
          </Text>
          <Text>Telefon: {offer.user.phone}</Text>
          <Text>E-mail: {offer.user.email}</Text>
        </View>
        <View style={{ ...styles.section, marginBottom: 0 }}>
          <Text style={styles.sectionHeading}>Nawiguj do miejsca!</Text>
          <TouchableOpacity onPress={openMaps}>
            <Image
              style={{
                width: '100%',
                height: 150,
                marginVertical: 10,
                borderRadius: 10,
                alignSelf: 'center'
              }}
              source={require('../assets/images/map.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ ...styles.date, padding: 15, alignSelf: 'flex-end' }}>
          Wyświetlenia: {offer.views}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 8,
    backgroundColor: 'white'
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  date: {
    fontSize: 11,
    color: '#595959'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'flex-start',
    borderColor: '#ddd'
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
    fontSize: 50,
    color: '#3a78c2'
  }
});
