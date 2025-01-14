import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useAnime } from '../../hooks/useAnime';
import AnimeItem from './AnimeItem'; // Bileşen adını tutarlı hale getirdim
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from 'expo-font';
import { SearchBar } from 'react-native-screens';
import SearchBarCustom from '../SearchBarCustom';


const Home = ({navigation}) => {
    const [loadedFont] = useFonts({
        'FiraSans-Thin': require('../../fonts/FiraSans-Thin.ttf'),
        'FiraSans-Medium': require('../../fonts/FiraSans-Medium.ttf'),
    })
    const { animes, loading, error } = useAnime(); // useAnime hook'unu çağırma
    if (loading) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={styles.centered}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }

    if (error) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={styles.centered}>
                    <Text style={styles.errorText}>Error: {error}</Text>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }

    return (
        <SafeAreaProvider>

            <SafeAreaView style={styles.container}>

                <ScrollView contentContainerStyle={styles.scrollContent}>

                    <View style={styles.iconContainerHeader}>
                        <FontAwesome6 name="list-alt" size={35} color="black" />
                        <Text style={styles.headerText}>Animeler</Text>
                    </View>
                    <SearchBarCustom></SearchBarCustom>
                    {animes.data?.map((anime, index) => (
                        <Pressable key={index} onPress={()=>navigation.navigate('AnimeDetail',{AnimeDetail : anime})}>
                            <AnimeItem key={index} anime={anime} />
                        </Pressable> // AnimeItem'e veri geçirildi
                    ))}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f7'
    },
    iconContainerHeader: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,

    },
    scrollContent: {
        padding: 20,
    },
    headerText: {
        fontSize: 35,
        marginBottom: 15,
        marginTop: 10,
        color: '#333',
        fontFamily: 'FiraSans-Medium',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        fontSize: 18,
        color: 'gray',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
