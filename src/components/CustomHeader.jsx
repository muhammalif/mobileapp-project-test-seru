import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const CustomHeader = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome name='user-circle' size={24} color='black' style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    icon: {
        marginLeft: 10,
    },
})

export default CustomHeader