import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = ({ photos }: { photos: Array<string> }) => {
  return (
    <View style={styles.container}>
      <Swiper loop showsButtons>
        {photos.map((photo) => (
          <TouchableOpacity key={photo} activeOpacity={1}>
            <View>
              <Image style={styles.image} source={{ uri: photo }} />
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default Carousel;
