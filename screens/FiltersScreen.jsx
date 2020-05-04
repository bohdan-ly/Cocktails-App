import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import FiltersList from '../components/FiltersList';

const DATA = [
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 },
	{ title: 'Ordinary Drink', id: 1 }
];

const FilterScreen = ({ navigation }) => {
	return (
		<Container>
			<FiltersList filters={DATA} />

			<ApplyButton>
				<Text
					style={{
						color: 'white',
						textTransform: 'uppercase',
						fontWeight: 'bold',
						fontSize: 16
					}}
				>
					apply
				</Text>
			</ApplyButton>
		</Container>
	);
};

const ApplyButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: 360px;
	height: 53px;
	background: #272727;
	position: absolute;
	bottom: 27px;
`;

const Container = styled.View`
	flex: 1;
	margin-top: 20px;
	margin-left: 21px;
`;

export default FilterScreen;
