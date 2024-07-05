import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screens3 = ({ route, navigation }) => {
    const { formData } = route.params;

    const handleSubmit = async () => {
        // Simpan data ke AsyncStorage
        await AsyncStorage.setItem('formData', JSON.stringify(formData));
        console.log('Submitting Data', formData);
        // Panggil API
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Hasil Data</Text>

            <Text style={styles.text}>Nama Depan: {formData.firstName}</Text>
            <Text style={styles.text}>Nama Belakang: {formData.lastName}</Text>
            <Text style={styles.text}>Biodata: {formData.biodata}</Text>
            <Text style={styles.text}>Provinsi: {formData.province}</Text>
            <Text style={styles.text}>Kota: {formData.city}</Text>
            <Text style={styles.text}>Kecamatan: {formData.district}</Text>
            <Text style={styles.text}>Kelurahan: {formData.subdistrict}</Text>
            <Text style={styles.text}>Alamat: {formData.address}</Text>

            <Text style={styles.text}>Foto KTP:</Text>
            {formData.ktpPhoto && (
                <Image source={{ uri: formData.ktpPhoto.uri }} style={styles.image} />
            )}

            <Text style={styles.text}>Foto Selfie:</Text>
            {formData.selfiePhoto && (
                <Image source={{ uri: formData.selfiePhoto.uri }} style={styles.image} />
            )}

            <Text style={styles.text}>Foto Lainnya:</Text>
            {formData.otherPhoto && (
                <Image source={{ uri: formData.otherPhoto.uri }} style={styles.image} />
            )}

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default Screens3;
