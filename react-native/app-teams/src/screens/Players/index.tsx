import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import ListEmpty from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "../../storage/player/playerGetByGroupAndTeam";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { PlayerStorageDTO } from "@storage/player/PlayerstorageDTO";
import AppError from "@utils/AppError";
import { useState, useEffect, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
}

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;
  const navigation = useNavigation();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async() => {
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Insira um nome para adicionar');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur(); // Remove o foco do input
      setNewPlayerName('');
      fetchPlayersByTeam();
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Nçao foi possivel adicionar');
      }
    }
  }

  const fetchPlayersByTeam = async() => {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoa', 'Não foi possivel carregar as pessoas do time selecionado');
    }
  }

  const handleRemovePlayer = async(playerName: string) => {
    try {
      await  playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possivel remover a pessoa selecionada');
    }
  }

  const groupRemove = async() => {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert('Remover grupo', 'Não foi possivel remover o grupo');
    }
  }

  const handleRemoveGroup = async() => {
    Alert.alert(
      'Remover',
      'Deseja remover o grupo?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove()}
    ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);


  return(
    <Container>
      <Header showBackButton />

      <Hightlight 
        title={group} 
        subtitle='Adicione as pessoas e separe os grupos'  
      />

      <Form>
        <Input 
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />

        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        { isLoading ? <Loading /> : (
          <FlatList 
            data={['Time A', 'Time B']}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Filter
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
              />    
            )}
            horizontal={true}
          />
        )}

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1}
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas nesse time' />
        )}
      />

      <Button 
        title='Remover grupo'
        type='SECONDARY'
        onPress={handleRemoveGroup}
      />

    </Container>
  );
}