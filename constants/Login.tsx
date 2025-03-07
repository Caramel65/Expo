import { StyleSheet } from 'react-native';

const MyStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    spacing: { 
        height: 50,
    },
    logo: {
        width: 200,
        height: 160,
        marginBottom: 10,
    },
    title: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#4169e1',
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default MyStyle;

