import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const FiltersList = ({ filters }) => {
	return (
		<GroupBlock>
			{filters.map((filter, index) => (
				<GroupItem key={index}>
					<FilterTitle>{filter.title}</FilterTitle>
				</GroupItem>
			))}
		</GroupBlock>
	);
};

FiltersList.defaultProp = {
	filters: []
};

const FilterTitle = styled.Text`
	font-size: 16px;
	color: #7e7e7e;
`;

const GroupItem = styled.View`
	align-items: center;
	flex-direction: row;
	padding: 20px 0;
`;

const GroupBlock = styled.View``;

export default FiltersList;
