import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { provinces, cities, districts, subdistricts } from '../data/locationData';

const Screens1 = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [biodata, setBiodata] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [subdistrict, setSubdistrict] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async () => {
        const formData = {
            firstName,
            lastName,
            biodata,
            province,
            city,
            district,
            subdistrict,
            address
        };

        // Simpan data ke AsyncStorage
        await AsyncStorage.setItem('formData', JSON.stringify(formData));

        navigation.navigate('Screens2', { formData });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Nama Depan</Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Masukkan Nama Depan"
            />

            <Text style={styles.label}>Nama Belakang</Text>
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Masukkan Nama Belakang"
            />

            <Text style={styles.label}>Biodata</Text>
            <TextInput
                style={styles.textArea}
                value={biodata}
                onChangeText={setBiodata}
                placeholder="Masukkan Biodata"
                multiline={true}
                numberOfLines={4}
            />

            <Text style={styles.label}>Provinsi</Text>
            <Picker
                selectedValue={province}
                onValueChange={(itemValue) => {
                    setProvince(itemValue);
                    setCity('');
                    setDistrict('');
                    setSubdistrict('');
                }}
            >
                <Picker.Item label="Pilih Provinsi" value="" />
                {provinces.map((prov) => (
                    <Picker.Item key={prov.value} label={prov.label} value={prov.value} />
                ))}
            </Picker>

            <Text style={styles.label}>Kota</Text>
            <Picker
                selectedValue={city}
                enabled={province !== ''}
                onValueChange={(itemValue) => {
                    setCity(itemValue);
                    setDistrict('');
                    setSubdistrict('');
                }}
            >
                <Picker.Item label="Pilih Kota" value="" />
                {(province && cities[province] ? cities[province] : []).map((city) => (
                    <Picker.Item key={city.value} label={city.label} value={city.value} />
                ))}
            </Picker>

            <Text style={styles.label}>Kecamatan</Text>
            <Picker
                selectedValue={district}
                enabled={city !== ''}
                onValueChange={(itemValue) => {
                    setDistrict(itemValue);
                    setSubdistrict('');
                }}
            >
                <Picker.Item label="Pilih Kecamatan" value="" />
                {(city && districts[city] ? districts[city] : []).map((district) => (
                    <Picker.Item key={district.value} label={district.label} value={district.value} />
                ))}
            </Picker>

            <Text style={styles.label}>Kelurahan</Text>
            <Picker
                selectedValue={subdistrict}
                enabled={district !== ''}
                onValueChange={(itemValue) => setSubdistrict(itemValue)}
            >
                <Picker.Item label="Pilih Kelurahan" value="" />
                {(district && subdistricts[district] ? subdistricts[district] : []).map((subdistrict) => (
                    <Picker.Item key={subdistrict.value} label={subdistrict.label} value={subdistrict.value} />
                ))}
            </Picker>

            <Text style={styles.label}>Alamat</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Masukkan Alamat"
            />

            <Button title="Next" onPress={handleSubmit} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        height: 100,
    },
});

export default Screens1;
