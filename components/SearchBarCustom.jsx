import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const SearchBarCustom = () => {
    const [fontsLoaded] = useFonts({
        'FiraSans-Thin': require('../fonts/FiraSans-Thin.ttf'),
        'FiraSans-Medium': require('../fonts/FiraSans-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return <View style={{ flex: 1, backgroundColor: '#fff' }} />; // Basit bir boş ekran döndürülüyor
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {/* Arama İkonu */}
                <View style={styles.iconContainer}>
                    <FontAwesome5 name="search" size={20} color="#666" />
                </View>

                {/* Metin Giriş Alanı */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Anime Ara ... "
                    placeholderTextColor="#999"
                />
            </View>
        </View>
    );
};

export default SearchBarCustom;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation:5,
    },
    iconContainer: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'FiraSans-Medium', // Yüklediğimiz font burada kullanılıyor
        color: '#333',
    },
});
