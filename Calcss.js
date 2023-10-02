import { StyleSheet,StatusBar } from 'react-native';

export const styles = StyleSheet.create({

    container:{
       marginTop:41,
       backgroundColor:"black",
       height:"100%",

    },
    resultado:{
        color:"white",
        marginTop: "50%",
        fontSize: 80,
        textAlign: "right",
        right: 25,
        maxWidth:500,
        maxHeight:160
    },

    fundoFunc1:{
        backgroundColor: "#ccc",
        width: 80,
        height:80,
        borderRadius:"100%"

    },

    fundoFunc2:{
        backgroundColor: "#f59402",
        width: 80,
        height:80,
        borderRadius:"100%"

    },

    func:{
        color:"black",
        fontSize: 35,
        textAlign:"center",
        paddingTop:18

    },

    fundoNum:{
        backgroundColor:"#454545",
        width: 80,
        height:80,
        borderRadius:"100%"
    },
    
    numeros:{
        color:"white",
        textAlign: "center",
        fontSize: 35,
        paddingTop:18,
       
    }
    
});