import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => <View style={styles.separator} />;
function AccountScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>En esta pantalla van los forms </Text>
        <Button
            title="Modificar datos"
        />
        
        <Separator/>

         <Button
            title="Crear plan "
            onPress={() => navigation.navigate('Planning')}
        />
      </View>
    );
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    marginVertical: 0,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,

  },
});