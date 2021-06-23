import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryGridTile = props => {
    let Touchablecmp=TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version > 21){
        Touchablecmp=TouchableNativeFeedback;
    }
    return(
        <View style={styles.list}>
            <Touchablecmp 
            style={styles.comp} 
            onPress={props.onSelect}
            >
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </Touchablecmp>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        height: 150,
        margin: 15
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {height: 2, width: 0},
        elevation: 3,
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20
    },
    comp:{
        flex: 1
    }
});
export default CategoryGridTile;