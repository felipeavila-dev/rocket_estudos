import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { getDataFromStorage } from '../../storage';

import { BackArrow, ButtonText, Container, DateArea, DatePickerArea, DatePickerButton, GreenCircleIcon, Header, Input, InputArea, Label, MainArea, MealsStatusButtons, MealStatusArea, MealStatusText, MealStatusTitle, RedCircleIcon, SaveButton, StatusButton, Title } from './styles';
import { useTheme } from 'styled-components';

type MealsProps = {
  title: string,
  data: {
    meal: string,
    diet: boolean
  }[]
}

export const RegisterMeal = () => {
  const [currentMeals, setCurrentMeals] = useState<MealsProps[]>([]);
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [openHour, setOpenHour] = useState(false);
  const [inDiet, setInDiet] = useState(true);

  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const handleSelectDate = (date: any) => {
    const parseDay = new Date(date).getDate();
    const parseMonth = new Date(date).getMonth() + 1;
    const parseYear = new Date(date).getFullYear();
    setDate(parseDay + '/' + parseMonth + '/' + parseYear);
    setOpenDate(false);
  }

  const handleSelectHour = (hour: any) => {
    const parseHour = new Date(hour).getHours();
    const parseMinutes = new Date(hour).getMinutes();
    setHour(parseHour + ':' + parseMinutes);
    setOpenHour(false);
  }

  const handleCreateNewMeal = async() => {
    const actualMeals = [...currentMeals];
    const mealObj = {
      title: date,
      data: [{
        meal: mealName,
        diet: inDiet
      }]
    };

    if(actualMeals.length > 0) {
      actualMeals.map((meal) => {
        if(meal.title === date) {
          meal.data.push({
            meal: mealName,
            diet: inDiet
          });
        } else {
          actualMeals.push(mealObj);
        }
      });
      setCurrentMeals(actualMeals);
    } else {
      setCurrentMeals([mealObj]);
    }

    // Reset dos campos
    setMealName('');
    setDate('');
    setMealDescription('');
    setInDiet(true);
    setHour('');

    Alert.alert('Refeição cadastrada!');
  }

  const getLocalStorageData = async() => {
    const storedData = await getDataFromStorage();
    setCurrentMeals(storedData);
  }

  const saveCurrentDataToStorage = async() => {
    await AsyncStorage.setItem('meals', JSON.stringify(currentMeals));
  }

  useFocusEffect(useCallback(() => {
    getLocalStorageData();
  }, []));

  useFocusEffect(useCallback(() => {
    saveCurrentDataToStorage();
  }, [currentMeals]));

  return(
    <Container>
      <Header>
        <BackArrow onPress={() => navigation.navigate('Dashboard')}>
          <ArrowLeft />
        </BackArrow>
        <Title>Nova refeição</Title>
      </Header>

      <MainArea>
        <InputArea>
          <Label>Nome</Label>
          <Input onChangeText={setMealName} value={mealName}/>
        </InputArea>

        <InputArea>
          <Label>Descrição</Label>
          <Input multiline={true} numberOfLines={8} onChangeText={setMealDescription} value={mealDescription} />
        </InputArea>

        <DateArea>
          <DatePickerArea>
            <DatePickerButton onPress={() => setOpenDate(true)}>
              <ButtonText>
                {date !== '' ? date : 'Data'}
              </ButtonText>
            </DatePickerButton>
            <DateTimePickerModal
              isVisible={openDate}
              mode="date"
              onConfirm={handleSelectDate}
              onCancel={() => setOpenDate(false)}
            />
          </DatePickerArea>

          <DatePickerArea>
            <DatePickerButton onPress={() => setOpenHour(true)}>
              <ButtonText>
                {hour !== '' ? hour : 'Hora'}
              </ButtonText>
            </DatePickerButton>
            <DateTimePickerModal
              isVisible={openHour}
              mode="time"
              onConfirm={handleSelectHour}
              onCancel={() => setOpenHour(false)}
            />
          </DatePickerArea>
        </DateArea>

        <MealStatusArea>
          <MealStatusTitle>Esta dentro da dieta?</MealStatusTitle>

          <MealsStatusButtons>
            <StatusButton 
              onPress={() => setInDiet(true)}
              color={COLORS.GREEN_200}
              inDiet={inDiet ? 'selected' : ''}
            >
              <MealStatusText>
                <GreenCircleIcon />
              </MealStatusText>
              <MealStatusText>Sim</MealStatusText>
            </StatusButton>
            <StatusButton
              onPress={() => setInDiet(false)}
              color={COLORS.RED_200}
              inDiet={!inDiet ? 'selected' : ''}
            >
              <MealStatusText>
                <RedCircleIcon />
              </MealStatusText>
              <MealStatusText>Nao</MealStatusText>
            </StatusButton>
          </MealsStatusButtons>
        </MealStatusArea>

        <SaveButton>
          <ButtonText onPress={handleCreateNewMeal}>Cadastrar refeição</ButtonText>
        </SaveButton>
      </MainArea>
    </Container>
  );
}