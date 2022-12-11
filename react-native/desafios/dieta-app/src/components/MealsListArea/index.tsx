import React, { useState, useEffect, useCallback } from 'react';
import { SectionList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meal } from '../Meal';
import { HeaderTitle, MealsHeader } from './styles';
import { useFocusEffect } from '@react-navigation/native';

// type MealsProps = {
//   title: string,
//   data: {
//     meal: string,
//     diet: boolean
//   }[]
// }

// type AverageProps = {
//   totalMeals: number,
//   totalInDiet: number,
//   totalOutOfDiet: number,
//   percentOutOfDiet: number,
//   percentInDiet: number
// }

type MealListProps = {
  data: {
    title: string,
    data: {
      meal: string,
      diet: boolean
    }[]
  }[]
}

export const MealsListArea = ({data}: MealListProps) => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <Meal item={item} />
      )}
      renderSectionHeader={({ section }) => (
        <MealsHeader>
          <HeaderTitle>{section.title}</HeaderTitle>
        </MealsHeader>
      )}
    />
  );
} 