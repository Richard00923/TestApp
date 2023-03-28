import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Button} from "react-native-web";

const ACCESS_KEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

const GalleryScreen = ({navigation, route}) => {
    const [users, setUser] = useState([]);
    let {numOfPage} = route.params;
    numOfPage <= 0 ? numOfPage = 1 : numOfPage;
    console.log(numOfPage)
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${numOfPage}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [numOfPage]);

    const renderPhoto = ({item}) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('FullImage', {item: item})
        }}>
            <Image style={styles.photo} source={{uri: item.urls.small}}/>
            <Text style={styles.title}>{item.user.username}</Text>
            <Text style={styles.title}>{`${item.description ? item.description : item.alt_description}`}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderPhoto}
                numColumns={3}
            />
            <View style={styles.buttonContainer}>
                {numOfPage > 1 && (
                    <Button
                        title='Назад'
                        onPress={() => {
                            numOfPage > 1 ? --numOfPage : numOfPage;
                            navigation.navigate('Gallery', {numOfPage});
                        }}
                        style={styles.buttonBack}
                    />
                )}
                <Button
                    title='Вперед'
                    onPress={() => {
                        ++numOfPage;
                        navigation.navigate('Gallery', {numOfPage});
                    }}
                    style={numOfPage > 1 ? styles.buttonNextHalf : styles.buttonNextFull}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    photo: {
        width: 150,
        height: 150,
        margin: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        width: 150
    },
    image: {
        height: 500,
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonBack: {
        flex: 1,
    },
    buttonNextFull: {
        flex: 1,
    },
    buttonNextHalf: {
        flex: 1,
    },
});

export default GalleryScreen;
