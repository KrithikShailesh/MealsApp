import React from 'react';
import {View, Text, Button,StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
 

const CategoriesScreen = props => {
    const renderGridItems = (itemData) => {
    
        return(
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={
                () => {props.navigation.navigate({
                    name: 'categorymeals', 
                    params: {
                    'categoryName': itemData.item.title,
                    'categoryIds': itemData.item.id,
                    }
                
                });
            }
            }
            />
        );
    }; 
    
    return(
            <View>
                <FlatList 
                keyExtractor={(item, index) => item.id} 
                data={CATEGORIES} 
                renderItem={renderGridItems} 
                numColumns={2}/>
            </View>
        
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});

export default CategoriesScreen;