import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

import { HomeScreen, FiltersScreen } from './screens';
import { Fontisto } from '@expo/vector-icons';

const Stack = createStackNavigator();
function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Drinks"
					component={HomeScreen}
					options={({ navigation }) => ({
						headerRight: () => (
							<FiltersButton onPress={() => navigation.navigate('Filters')}>
								<Fontisto name="filter" size={28} />
							</FiltersButton>
						),
						headerTitleStyle: {
							fontSize: 24,
							fontWeight: '500'
						}
					})}
				/>
				<Stack.Screen name="Filters" component={FiltersScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const FiltersButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	height: 29px;
	margin-right: 20px;
`;

export default App;
