import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MarketScreen from '../screens/MarketScreen';
import CreateMarketScreen from '../screens/CreateMarketScreen';

//Market Screen
const MarketStack = createStackNavigator(
    {
        Market: MarketScreen,
    },
    {headerMode: 'none'}
);

MarketStack.navigationOptions = {
    tabBarLabel: 'Market',
    headerShown: false,
};

//Market Open Screen
const CreateMarketStack = createStackNavigator(
    {
        CreateMarket: CreateMarketScreen,
    },
    {
        headerMode: 'float',
    }
);

CreateMarketStack.navigationOptions = {
    tabBarLabel: 'Create',
    headerShown: false,
};

//tab list
const tabNavigator = createBottomTabNavigator({
    MarketStack,
    CreateMarketStack,
});

export default tabNavigator;
