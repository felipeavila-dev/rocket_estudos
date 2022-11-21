import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from '@storage/group/groupCreate';
import AppError from '../../utils/AppError';

export const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();
  
  const handleNewGroup = async() => {
    try {
      if(group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome de um grupo!');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possivel criar um novo grupo');
      }
    }
  }

  return(
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Hightlight 
          title='Novo grupo'
          subtitle='Crie seu novo grupo de jogatina'
        />

        <Input
          placeholder='Nome do grupo'
          onChangeText={(text) => setGroup(text)}
        />

        <Button
          title='Criar'
          style={{marginTop: 20}}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}