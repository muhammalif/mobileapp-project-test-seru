import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageUploader = ({ title, onImageSelected }) => {
    const [imageUri, setImageUri] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChoosePhoto = () => {
        const options = { noData: true };
        launchImageLibrary(options, (response) => {
            if (response.assets && response.assets.length > 0) {
                const source = { uri: response.assets[0].uri };
                setImageUri(source);
                onImageSelected(source);
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChoosePhoto}>
                {imageUri ? (
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <Image source={imageUri} style={styles.image} />
                    </TouchableOpacity>
                ) : (
                    <Text style={styles.placeholder}>Ketuk Untuk Unggah {title}</Text>
                )}
            </TouchableOpacity>

            <Modal visible={isModalVisible} transparent={true}>
                <ImageViewer
                    imageUrls={[imageUri]}
                    onCancel={() => setIsModalVisible(false)}
                    enableSwipeDown={true}
                    onSwipeDown={() => setIsModalVisible(false)}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'center'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    placeholder: {
        color: '#888',
        textAlign: 'center'
    }
});

export default ImageUploader;
