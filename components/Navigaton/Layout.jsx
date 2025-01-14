import { View, Text } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
const Layout = ({children}) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}

export default Layout