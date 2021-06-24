import React from 'react';
import {Text, Platform} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from '../constants/colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';
import ButtonHeader from '../components/ButtonHeader';


const Stack =createStackNavigator();

const MealsNavigator = () => {

    return(
        
            <Stack.Navigator 
                    screenOptions={{
                    headerStyle: {backgroundColor: colors.primaryColor},
                    headerTintColor: 'white'
                    }}>
                <Stack.Screen name="categories" 
                    component={CategoriesScreen} 
                    options={({navigation}) => {
                        
                    return {
                        title: 'Meal Categories', 
                        headerLeft: () => (<HeaderButtons HeaderButtonComponent={ButtonHeader}>
                            <Item 
                            title='Filter' 
                            iconName='ios-menu'
                            onPress={() => {navigation.toggleDrawer();}}
                            />
                        </HeaderButtons>)
                    };
                }}
                     
                />
                <Stack.Screen 
                    name="categorymeals" 
                    component={CategoryMealsScreen} 
                    options={({route}) => {
                        return{
                            headerTitle: route.params.categoryName,
                        };    
                        }}
                />
                <Stack.Screen 
                name="mealdetail" 
                component={MealDetailScreen} 
                options={({route}) => {
                    
                    const selectedId = route.params.mealId;
                    const selectedDish= MEALS.find(meal => meal.id === selectedId);
                      
                    return{
                        headerTitle: <Text>{selectedDish.title}</Text>,
                        headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
                            <Item 
                            title='FAV' 
                            iconName='ios-star'
                            onPress={() => {
                                console.log('Mark as Favourite');
                            }}
                            />
                        </HeaderButtons>
                        )
                    };
                }}
                />
            </Stack.Navigator>
        
    );
}
const FavStack= createStackNavigator();

const FavNavigator = () =>{
    return(
        
        <FavStack.Navigator 
                screenOptions={{
                headerStyle: {backgroundColor: colors.primaryColor},
                headerTintColor: 'white'
                }}>
            <FavStack.Screen name="favourites" 
                component={FavouritesScreen} 
                options={({navigation}) => {
                        
                    return {
                        title: 'Your Favourites', 
                        headerLeft: () => (<HeaderButtons HeaderButtonComponent={ButtonHeader}>
                            <Item 
                            title='Fav' 
                            iconName='ios-menu'
                            onPress={() => {navigation.toggleDrawer();}}
                            />
                        </HeaderButtons>)
                    };
                }}
            />
            <FavStack.Screen name='meals'
                component={MealDetailScreen}
                />

            </FavStack.Navigator>
    );
}
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const MealsFavTabNavigator = () => {
    return (
    
      <Tab.Navigator activeColor={colors.accentColor} barStyle={{backgroundColor: colors.primaryColor}}>
        <Tab.Screen 
        name="Meals" 
        component={MealsNavigator} 
        options={{tabBarIcon: (tabInfo) => {return <Ionicons name='ios-restaurant' size={25} color={tabInfo.color} />}}}/>
        <Tab.Screen 
        name="Favourites" 
        component={FavNavigator} 
        options={{tabBarIcon: (tabInfo) => {return <Ionicons name='ios-star' size={25} color={tabInfo.color}/>} }}
        />
      </Tab.Navigator>
    
    );
};

const FiltersNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: colors.primaryColor},
            headerTintColor: 'white'
            }}>
            <Stack.Screen name='Filter' component={FiltersScreen} options={({navigation}) => {
                        
                        return {
                            title: 'Filter', 
                            headerLeft: () => (<HeaderButtons HeaderButtonComponent={ButtonHeader}>
                                <Item 
                                title='Filter' 
                                iconName='ios-menu'
                                onPress={() => {navigation.toggleDrawer();}}
                                />
                            </HeaderButtons>),
                            headerRight: () => (<HeaderButtons HeaderButtonComponent={ButtonHeader}>
                                <Item 
                                title='Filter' 
                                iconName='ios-save'
                                onPress={console.log('save')}
                                />
                            </HeaderButtons>)
                        };
                    }}/>
        </Stack.Navigator>
    );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
        <Drawer.Navigator drawerContentOptions={{activeTintColor:colors.accentColor}}>
            <Drawer.Screen name='Fav' component={MealsFavTabNavigator} options={{title:'Meals'}}/>
            <Drawer.Screen name='Filter' component={FiltersNavigator} options={{tite:'Filters'}}/>
        </Drawer.Navigator>
        </NavigationContainer>
    );

}

export default MainNavigator;
