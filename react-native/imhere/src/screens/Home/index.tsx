import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';
 
export default function Home() {
  const [participants, setParticipants] = useState(['Felipe']);
  const [participantName, setParticipantName] = useState('');

  const handleParticipantAdd = () => {
    if(participants.includes(participantName)) {
      return Alert.alert('Opa!', 'Participante já existe!');
    }

    setParticipants((prev) => [...prev, participantName]);
    setParticipantName('');
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Deseja remover ${name}?`, [{
      text:"Não",
      style: 'cancel'
    }, {
      text: "Sim",
      onPress: () => setParticipants(participants.filter((participant) => participant !== name))
    }])
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do eveno</Text>
      <Text style={styles.eventDate}>30 de outubro de 2022</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map((participant, index) => (
          <Participant key={index} name={participant} onRemove={() => handleParticipantRemove(participant)} />
        ))
      }
    </ScrollView>

    </View>
  );
}