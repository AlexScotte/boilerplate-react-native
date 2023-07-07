import { Button, View } from 'react-native';

const InformationsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Summary')} title="Go back home" />
      </View>
    );
  }

export default InformationsScreen;
