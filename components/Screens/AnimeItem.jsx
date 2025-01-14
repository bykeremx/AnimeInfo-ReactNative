import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Icon kütüphanesini dahil ediyoruz
import { useFonts } from 'expo-font';

const AnimeItem = ({ anime }) => {
    const [loadedFont] = useFonts({
        'FiraSans-Thin': require('../../fonts/FiraSans-Thin.ttf'),
        'FiraSans-Medium': require('../../fonts/FiraSans-Medium.ttf'),
    })
    return (
        <View style={styles.container}>
            {/* Resim Gösterimi */}
            <View style={styles.imgContainer}>
                <Image source={{ uri: anime.images.jpg.image_url }} style={styles.img} />
            </View>

            {/* Bilgi Alanı */}
            <View style={styles.infoContainer}>
                {/* Durum */}
                <View style={styles.statusContainer}>
                    <FontAwesome name="check-circle" size={20} color="#2874a6" />
                    <Text style={styles.status}>{anime.status || 'Unknown'}</Text>
                </View>

                {/* Başlık ve Bilgiler */}
                <View style={styles.headerContainer}>
                    <FontAwesome name="film" size={20} color="gray" />
                    <Text style={styles.headerText}>{anime.episodes || 'N/A'}</Text>
                    <FontAwesome name="tv" size={20} color="gray" />
                    <Text style={styles.headerText}>{anime.type || 'N/A'}</Text>
                </View>

                {/* Başlık */}
                <Text style={styles.title}>{anime.title}</Text>

                {/* Özet */}
                {/* <Text style={styles.synopsis}>
                    {anime.synopsis?.slice(0, 100)}...
                </Text> */}

                {/* Türler */}
                <View style={styles.genreContainer}>
                    {anime.genres?.map((genre, index) => (
                        <Text key={index} style={styles.genre}>
                            #{genre.name}
                        </Text>
                    ))}
                </View>

                {/* Puan ve Diğer Bilgiler */}
                <View style={styles.ratingContainer}>
                    <View style={styles.ratingItem}>
                        <FontAwesome name="arrow-up" size={18} color="#27ae60" />
                        <Text style={styles.ratingText}>{anime.rank || 'N/A'}</Text>
                    </View>
                    <View style={styles.ratingItem}>
                        <FontAwesome name="users" size={18} color="#8e44ad" />
                        <Text style={styles.ratingText}>{anime.popularity || 'N/A'}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AnimeItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 15,
        marginBottom: 15,
        borderColor: 'lightgray',
        padding: 15,
        backgroundColor: '#f7f9f9',
        shadowColor: "#2c3e50",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 20,


    },
    imgContainer: {
        width: 130,
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        marginRight: 15,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 8,
        color: '#333',
        
    },
    synopsis: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
        lineHeight: 20,
    },
    status: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2874a6',
        marginLeft: 8,
    },
    genreContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    genre: {
        fontSize: 10,
        marginBottom: 6,
        marginRight: 8,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius:5,
        backgroundColor: '#34495e',
        color: '#fff',
        textAlign: 'center',
        fontFamily:'FiraSans-Medium',
        opacity:0.9,
        
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 12,
        gap: 5,
    },
    headerText: {
        fontSize: 13,
        color: 'gray',
        fontWeight: '600',
        marginLeft: 2,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
        gap: 10,
    },
    ratingItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 14,
        marginLeft: 6,
        color: '#555',
        fontWeight: '600',
    },
});
