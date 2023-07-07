import { Button, View } from 'react-native';

const GroupsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Summary')} title="Go back home" />
      </View>
    );
  }

export default GroupsScreen;
