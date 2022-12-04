import React, { useState, useEffect } from 'react';
import { SectionList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meal } from '../Meal';
import { HeaderTitle, MealsHeader } from './styles';

type MealsProps = {
  title: string,
  data: {
    meal: string,
    diet: boolean
  }[]
}

type AverageProps = {
  totalMeals: number,
  totalInDiet: number,
  totalOutOfDiet: number,
  percentOutOfDiet: number,
  percentInDiet: number
}

export const MealsListArea = () => {
  const [meals, setMeals] = useState<MealsProps[]>([
    { 
      title: '27/11/2022',
      data: [
        {meal: 'Hamburguer', diet: false},
        {meal: 'Whey Protein', diet: true},
        {meal: 'Salada de frutas', diet: true},
      ]
   },
  { 
    title: '29/11/2022',
    data: [
      {meal: 'Hamburguer', diet: false},
      {meal: 'Whey Protein', diet: true},
      {meal: 'Salada de frutas', diet: true},
      {meal: 'Batata doce', diet: true},
      {meal: 'Carne branca', diet: true},
    ]
  },
 { 
  title: '30/11/2022',
  data: [
    {meal: 'Lanche', diet: false},
    {meal: 'Whey Protein', diet: true},
    {meal: 'Salada de frutas', diet: true},
    {meal: 'Churrasco', diet: false},
    {meal: 'Pizza', diet: false},
  ]
},]);
  const [average, setAverage] = useState<AverageProps>({
    totalMeals: 0,
    totalInDiet: 0,
    totalOutOfDiet: 0,
    percentOutOfDiet: 0,
    percentInDiet: 0
  });


  let totalMeals = 0
  let inDiet = 0;
  let outOfDiet = 0;

  meals.map((meal) => {
    totalMeals += meal.data.length;
  }, 0)

  meals.map((meal) => {
    meal.data.map((item) => {
      if(item.diet === true) {
        inDiet += 1;
      } else {
        outOfDiet += 1;
      }
    })
  })

  const storeData = async() => {
    setAverage({
      totalMeals: totalMeals,
      totalInDiet: inDiet,
      totalOutOfDiet: outOfDiet,
      percentInDiet: Number(((inDiet / totalMeals) * 100).toFixed(2)),
      percentOutOfDiet: Number(((outOfDiet / totalMeals) * 100).toFixed(2))
  });

    await AsyncStorage.setItem('average', JSON.stringify(average));
  }

  useEffect(() => {
    storeData();
  }, [totalMeals, inDiet, outOfDiet, meals]);

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