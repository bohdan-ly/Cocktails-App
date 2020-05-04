import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CocktailsList = ({ groupTitle, items }) => {
	return (
		<GroupBlock>
			<GroupTitle>{groupTitle}</GroupTitle>
			{items.map((item, index) => (
				<GroupItem key={index}>
					<DrinkImage
						source={{
							uri: item.cocktail.image
						}}
					/>
					<CocktailTitle>{item.cocktail.title}</CocktailTitle>
				</GroupItem>
			))}
		</GroupBlock>
	);
};

CocktailsList.defaultProp = {
	groupTitle: [ 'Untitled' ],
	items: []
};

const CocktailTitle = styled.Text`
	font-size: 16px;
	color: #7e7e7e;
`;

const DrinkImage = styled.Image`
	width: 100px;
	height: 100px;
	margin-right: 20px;
`;

const GroupItem = styled.View`
	align-items: center;
	flex-direction: row;
	padding: 20px 0;
`;

const GroupTitle = styled.Text`
	display: flex;
	font-size: 14px;
	color: #7e7e7e;
`;

const GroupBlock = styled.View``;

export default CocktailsList;
