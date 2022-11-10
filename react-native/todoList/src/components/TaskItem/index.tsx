import { Text, View } from "react-native";

import { Checkbox } from 'react-native-paper';

import { styles } from "./styles";

type TaskItemProps = {
  text: string;
}

export const TaskItem = ({text}: TaskItemProps) => {
  return(
    <View style={styles.container}>
      <Checkbox.Item label="" status="checked" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}