import React, { useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import { Meal } from '../Meal';
import { HeaderTitle, MealsHeader } from './styles';

type MealsProps = {
  title: string,
  data: string[]
}

export const MealsListArea = () => {
  const [meals, setMeals] = useState<MealsProps[]>([
    { title: '27/11/2022', data: ['Hamburguer', 'Whey Protein', 'Salada de frutas'] },
    { title: '27/11/2022', data: ['Hamburguer', 'Whey Protein', 'Salada de frutas'] },
    { title: '27/11/2022', data: ['Hamburguer', 'Whey Protein', 'Salada de frutas'] },
    { title: '27/11/2022', data: ['Hamburguer', 'Whey Protein', 'Salada de frutas'] },
    { title: '25/11/2022', data: ['Hamburguer', 'Whey Protein', 'Salada de frutas'] },
  ]);

  return (
    <SectionList
      sections={meals}
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