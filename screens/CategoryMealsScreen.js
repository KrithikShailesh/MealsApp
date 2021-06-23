import React from 'react';

import { CATEGORIES , MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
    

    const selectedId=props.route.params.categoryIds;

    const displayedMeals =MEALS.filter(
      meal => meal.categoryIds.indexOf(selectedId) >= 0  
    );
    
    return <MealList listData={displayedMeals} navigation={props.navigation}/>;
};



export default CategoryMealsScreen;