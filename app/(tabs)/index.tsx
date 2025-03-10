import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput,Image, TouchableOpacity, Button, ScrollView, Alert, TouchableHighlight, Modal,SafeAreaView} from 'react-native';
import Login from "@/constants/Login ";
import { LinearGradient } from 'expo-linear-gradient';
import About from '@/components/About ';
import { Link, useRouter} from "expo-router";
//import Profile from "@/assets/images/profile2.jpg";
import { useState } from 'react';



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

const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1 }}>
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
    <Text>&nbsp;</Text>
    <About /> 
    <Link href='/contact'>Click Here</Link>
    <Text>&nbsp;</Text>
    <Button title='Click Test' onPress={()=> router.push("/contact?name=PEE&major=IT")}/>
    <Text>&nbsp;</Text>
    <Button title='Params' onPress={()=> router.push({
      pathname : "/profile",
      params : {
        name : "PEE",
        major : "IT",
        email : "Bandid@gmail.com",
      }
    })}/>
    <Text>&nbsp;</Text>
      <Button title='Go to User ID' onPress={()=> router.push("/user/123")}/>
      <Text>&nbsp;</Text>
      <Button title='Go to Profile' onPress={()=> router.push("/profile")}/>

      <Text>&nbsp;</Text>
        <Text style={{alignItems: "center"}}>Use Image</Text> <Text>&nbsp;</Text>  
        <Image source={require("@/assets/images/profile2.jpg ")}
        style ={{
          width: 320,
          height: 350,
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
          underlayColor="#a3fbff"
          style={{
            backgroundColor: '#0d51d8',
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
          <Text style={{color: 'white'}}>Show Alert</Text>
        </TouchableHighlight> 
        
        <Text>&nbsp;</Text>
          
        <TouchableHighlight
         underlayColor='#a3fbff' style={{
         backgroundColor: '#0d51d8', 
         paddingVertical: 20,
         paddingHorizontal: 20,
         justifyContent: 'center', 
         alignItems: 'center',
         borderRadius: 10
         }}onPress={(
         ) => { setModalVisible(true)
          }}
       >
       <Text style={{color: 'white'}}>Show Modal</Text>
      </TouchableHighlight>
      <Text>&nbsp;</Text>
         {/*-------Modal----------*/}
      <Text style={{textAlign: 'center'}}>การใช้ Modal</Text>
        <Modal
    animationType='slide' // fade, slide, none
    transparent={true}
    visible={modalVisible}
    onShow={() => { console.log('Modal Show') }}
    onRequestClose={() => { console.log('Modal Close') }}
    >
    <View 
      style={{
       flex: 1, 
       backgroundColor: 'rgba(0, 0, 0, 0.9)', // ทำให้พื้นหลังเป็นกึ่งโปร่งใส
       justifyContent: 'center', // จัดกลางในแนวตั้ง
       alignItems: 'center', // จัดกลางในแนวนอน
      }}>

      <View  
      style={{
        width: 300, // กำหนดความกว้างของ Modal
        backgroundColor: '#fff', // สีพื้นหลังของ Modal
        borderRadius: 10, // มุมโค้งมนของ Modal
        padding: 20, // ระยะห่างภายใน
        alignItems: 'center', // จัดกลางในแนวนอนภายใน Modal
        }}>

      <Text style={{ marginBottom: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, consectetur est possimus incidunt eum? Saepe dolores sequi nam amet tempore laboriosam quasi, quam sint unde maiores modi delectus dolor?</Text>
      <View style={{ 
                     flexDirection: 'row',
                     justifyContent: 'space-evenly',
                     width: '100%', 
           }} 
        >
      <Button
      title='Submit'
      onPress={() => {
      console.log('Submit Modal')
      }}
      />
      <Button
      title='X Close'
      onPress={() => {
      setModalVisible(false)
      }}
      />
        </View>
          </View>
          </View>
       </Modal>

       <Text>&nbsp;</Text>

        <Button title='Go to Form' onPress={()=> router.push("/textinputdemo")}/>
        <Text>&nbsp;</Text>
        <Button title='Go to Switch' onPress={()=> router.push("/switchdemo")}/>
        <Text>&nbsp;</Text>
        <Button title='Go to Flat' onPress={()=> router.push("/flatlistdemo")}/>
        <Text>&nbsp;</Text>
        <StatusBar style="auto"/>
      </LinearGradient>
     </ScrollView>
    </SafeAreaView>
  );
}




