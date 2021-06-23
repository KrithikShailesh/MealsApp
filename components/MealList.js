import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

const MealList = props => {
    const renderMealItem = itemData => {
        return(
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                props.navigation.navigate({
                    name: 'mealdetail',
                    params: {
                    mealId: itemData.item.id
                    }
                });
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList 
            data={props.listData} 
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;