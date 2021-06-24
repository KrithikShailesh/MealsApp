import React from 'react';
import {ScrollView, Image, View, Text, StyleSheet} from 'react-native';

import DefaultText from '../components/DefaultText';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {
    const mealId = props.route.params.mealId;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText >{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText >{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
            </View>
           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    details:{
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
      image:{
          width: "100%",
          height: 200
      },
      title: {
          flex: 1,
          fontFamily: 'open-sans-bold',
          textAlign: 'center',
          fontSize: 25
      },
      listItem: {
          marginVertical: 10,
          padding: 10,
          borderColor: '#ccc',
          borderRadius: 6,
          borderWidth: 1,
          marginHorizontal: 10
      }
});

export default MealDetailScreen;