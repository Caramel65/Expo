import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet,Button } from 'react-native';


export default function ProfileDemo() {
  const { Username, Email, Tel, Password,FullName } = useLocalSearchParams();
  const router = useRouter()

  return (
    <View style={styles.container}>
        
      <Text>Name: {Username}</Text>
      <Text>Pass: {Password}</Text>
      <Text>Full Name: {FullName}</Text>
      <Text>Email: {Email}</Text>
      <Text>Tel: {Tel}</Text>
      <Button title='Back' onPress={()=> router.back()}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
