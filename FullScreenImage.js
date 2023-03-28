import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FullScreenImage = ({ route,navigation }) => {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.urls.full}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        flex: 1,
    },
});

export default FullScreenImage;