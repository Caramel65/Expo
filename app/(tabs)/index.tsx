import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput,Image, TouchableOpacity, Button, ScrollView, Alert, TouchableHighlight} from 'react-native';
import Login from "@/constants/Login ";
import { LinearGradient } from 'expo-linear-gradient';
import About from '@/components/About ';
import { Link, useRouter} from "expo-router";
//import Profile from "@/assets/images/profile2.jpg";



export default function index() {
  const router = useRouter();
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView style={{flex: 1 }}>
    <LinearGradient colors={['#b1a9ff','#a3fbff','#7bb1ff']} style={Login.container}>
    <View style={Login.spacing} />
    <Image source={{uri:'https://cdn.freelogovectors.net/wp-content/uploads/2022/11/hoyoverse-logo-freelogovectors.net_.png'}} style={Login.logo} />
    <Text style={Login.title} >Welcome </Text>
    <TextInput style={Login.input} placeholder="Username"/>
    <TextInput style={Login.input} placeholder="Password" secureTextEntry/>
    <TouchableOpacity style={Login.button}>
      <Text style={Login.buttonText}>Login</Text>
    </TouchableOpacity>
    <About /> 
    <Link href='/contact'>Click Here</Link>
    <Button title='Click Test' onPress={()=> router.push("/contact?name=PEE&major=IT")}/>
    <Button title='Params' onPress={()=> router.push({
      pathname : "/contact",
      params : {
        name : "PEE",
        major : "IT",
        email : "Bandid@gmail.com",
      }
    })}/>
      <Button title='Go to User ID' onPress={()=> router.push("/user/123")}/>
      <Button title='Go to Profile' onPress={()=> router.push("/profile")}/>

      <Text>&nbsp;</Text>
        <Text style={{alignItems: "center"}}>Use Image</Text> <Text>&nbsp;</Text>  
        <Image source={require("@/assets/images/profile1.jpg ")}
        style ={{
          width: 250,
          height: 250,
          borderRadius: 100,
          marginHorizontal: "auto",
        }}
          resizeMode="cover"
        />
        
      {/*<Image source={Profile}
        style ={{
          width: 250,
          height: 250,
          borderRadius: 100,
          marginHorizontal: "auto",
        }}
          resizeMode="cover"
        /> */}
        <Text>&nbsp;</Text> 
        
        <TouchableHighlight
          underlayColor="white"
          style={{
            backgroundColor: '#a3fbff',
            paddingVertical: 20,
            paddingHorizontal: 25,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            showAlert();
          }}
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>
      <StatusBar style="auto" />
    </LinearGradient>
    </ScrollView>
  );
}




