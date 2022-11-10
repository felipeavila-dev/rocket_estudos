import { Image, View } from "react-native";

import Logo from '../../../assets/logo.png';
import { styles } from "./styles";
// const teste = require('../../../assets/logo.png');

export const Header = () => {
  return(
    <View style={styles.container}>
      <Image source={Logo}/>
    </View>
  );
}