import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import CocktailsList from '../components/CocktailsList';

const DATA = [
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	},
	{
		cocktail: {
			image:
				'https://i2.wp.com/www.cakesandpumps.com/wp-content/uploads/2016/12/Cocktail-Friday-Cosmopolitan-cocktail-1.jpg',
			title: '410 Gone'
		}
	},
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	},
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	},
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	},
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	},
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	},
	{
		cocktail: {
			image:
				'https://www.liquor.com/thmb/zJ7_To3UNS5DNJ0aeyc4dVHUAac=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__10144903__Manhattan-720x720-recipe-9497922907c14d91898f557cb51f2ea3.jpg',
			title: '3-Mile Long Island Iced Tea'
		}
	}
];

const HomeScreen = ({ navigation }) => {
	return (
		<Container>
			<ScrollView>
				<CocktailsList groupTitle={[ 'Ordinary Drink', 'Alcohol' ]} items={DATA} />
			</ScrollView>
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

export default HomeScreen;
