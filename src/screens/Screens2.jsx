import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageUploader from '../components/ImageUploader';

const Screens2 = ({ navigation, route }) => {
    const { formData } = route.params;
    const [ktpPhoto, setKtpPhoto] = useState(null);
    const [selfiePhoto, setSelfiePhoto] = useState(null);
    const [otherPhoto, setOtherPhoto] = useState(null);

    const handleNext = async () => {
        const updatedFormData = {
            ...formData,
            ktpPhoto,
            selfiePhoto,
            otherPhoto,
        };

        // Simpan data ke AsyncStorage
        await AsyncStorage.setItem('formData', JSON.stringify(updatedFormData));

        navigation.navigate('Screens3', { formData: updatedFormData });
    };

    return (
        <ScrollView style={styles.container}>
            <ImageUploader
                title="Foto KTP"
                onImageSelected={(image) => setKtpPhoto(image)}
            />
            <ImageUploader
                title="Foto Selfie"
                onImageSelected={(image) => setSelfiePhoto(image)}
            />
            <ImageUploader
                title="Foto Lainnya"
                onImageSelected={(image) => setOtherPhoto(image)}
            />

            <View style={styles.buttonContainer}>
                <Button title="Previous" onPress={() => navigation.goBack()} />
                <Button title="Next" onPress={handleNext} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default Screens2;
