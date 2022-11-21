import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import ListEmpty from '@components/ListEmpty';
import { useState, useEffect, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new');
  }

  const fetchGroups = async() => {
    try {
      setIsLoading(true);
      const storedGroups = await groupsGetAll();
      setGroups(storedGroups);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar os grupos');
    }
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />  
      
      <Hightlight title='Turmas' subtitle='Jogue com a sua turma'/>
      
      {isLoading ? <Loading /> : (
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={(group) => (
            <GroupCard title={group.item}
              onPress={() => handleOpenGroup(group.item)}
            />
          )}
          ListEmptyComponent={() => <ListEmpty message='Não existem grupos cadastrados'/>}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
        />
      )}

      <Button title='Criar novo grupo' onPress={handleNewGroup} />
    </Container>
  );
}
