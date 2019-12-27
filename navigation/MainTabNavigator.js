import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MarketScreen from '../screens/MarketScreen';
import CreateMarketScreen from '../screens/CreateMarketScreen';

//common config
const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

//Market Screen
const MarketStack = createStackNavigator(
    {
        Market: MarketScreen,
    },
    config
);

MarketStack.navigationOptions = {
    tabBarLabel: 'Market',
};

//Market Open Screen
const CreateMarketStack = createStackNavigator(
    {
        CreateMarket: CreateMarketScreen,
    }
);

CreateMarketStack.navigationOptions = {
    tabBarLabel: 'Create',
};

//tab list
const tabNavigator = createBottomTabNavigator({
    MarketStack,
    CreateMarketStack,
});

export default tabNavigator;
