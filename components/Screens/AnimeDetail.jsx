import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AnimeDetail = ({ route }) => {
  const [loadedFont] = useFonts({
    'FiraSans-Thin': require('../../fonts/FiraSans-Thin.ttf'),
    'FiraSans-Medium': require('../../fonts/FiraSans-Medium.ttf'),
  });

  const { AnimeDetail } = route.params;
  const { title, synopsis, images, episodes, type, duration, score, rating } = AnimeDetail;

  if (!loadedFont) {
    return <ActivityIndicator size="large" color="#000" style={styles.loading} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: images.jpg.large_image_url }} style={styles.animeImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoRow}>
          <Icon name="television-classic" size={20} color="#555" />
          <Text style={styles.info}>
            <Text style={styles.boldText}> Type: </Text> {type}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="animation-play" size={20} color="#555" />
          <Text style={styles.info}>
            <Text style={styles.boldText}> Episodes: </Text> {episodes}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="clock-outline" size={20} color="#555" />
          <Text style={styles.info}>
            <Text style={styles.boldText}> Duration: </Text> {duration}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.info}>
            <Text style={styles.boldText}> Score: </Text> {score}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="account-check" size={20} color="#555" />
          <Text style={styles.info}>
            <Text style={styles.boldText}> Rating: </Text> {rating}
          </Text>
        </View>
        <Text style={styles.synopsisHeader}>Synopsis</Text>
        <Text style={styles.synopsis}>{synopsis}</Text>
      </View>
    </ScrollView>
  );
};

export default AnimeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  animeImage: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'FiraSans-Thin',
    color: '#555',
  },
  boldText: {
    fontWeight: 'bold',
    fontFamily: 'FiraSans-Medium',
  },
  synopsisHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'FiraSans-Medium',
  },
  synopsis: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'FiraSans-Thin',
    color: '#555',
  },
});
