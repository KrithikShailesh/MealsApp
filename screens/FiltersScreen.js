import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import colors from '../constants/colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
                trackColor={{true: colors.primaryColor}} 
                thumbColor={colors.primaryColor}
                value={props.state} 
                onValueChange={props.onChange}/>
        </View>
    );  
};

const FiltersScreen = props => {
    const [isglutenfree, setisGlutenFree] = useState(false);
    const [isLactoseFree, setisLactoseFree] = useState(false);
    const [isVegan, setisVegan] = useState(false);
    const [isVegetarian, setisVegetarian] = useState(false);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label='Gluten-free' state={isglutenfree} onChange={(newValue) => setisGlutenFree(newValue)}/> 
            <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={(newValue) => setisLactoseFree(newValue)}/> 
            <FilterSwitch label='Vegan' state={isVegan} onChange={(newValue) => setisVegan(newValue)}/> 
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={(newValue) => setisVegetarian(newValue)}/> 
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
       flex: 1,
       alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "80%",
        marginVertical: 15
    }
    
});

export default FiltersScreen;