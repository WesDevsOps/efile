import { SafeAreaView,StyleSheet, View, Text, ScrollView,Image,TouchableOpacity,Alert,TextInput } from "react-native";
import {useState , useEffect} from "react";
import { addDoc, collection, getDocs,serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase.js';
import React from "react";



const docPaitentFilee = ({navigation}) =>{

    const[data, setData] = React.useState([]);
    console.log(data);
    const patientRef = collection(db, "doctorsnote");
    
    
    const date ={
        createdAt: serverTimestamp()
    }
    addDoc(patientRef,date).then(()=>{
        console.log('note available');
    }).catch((error)=>{
        console.log(error);
    })
    const getPatientRef = async () => {
        const data = await getDocs(patientRef)

        console.log(data.docs.map((results) => (results.data())))
        setData(data.docs.map((results) => ({ ...results.data(), id: results.id })));


    }
    useEffect(() => {
        getPatientRef()

    }, []);







    const clooBtn = () =>{
        navigation.navigate("dcHome")
    };
    const history = [
        {
            fileno: '000-000-001AQ',
            Id: "00000-0000-004",
            date: '10-jan-2020',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            fileno: '000-000-001AQ',
            Id: "00000-0000-003",
            date: '11-jan-2020',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },{
            fileno: '000-000-001AQ',
            Id: "00000-0000-002",
            date: '12-jan-2020',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },{
            fileno: '000-000-001AQ',
            Id: "00000-0000-001",
            date: '14-jan-2020',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },{
            fileno: '000-000-001AQ',
            Id: "00000-0000-000",
            date: '01-Dec-2020',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },{
            fileno: '000-000-001AQ',
            date: 'AA-AAA-AAAA',
            Id: "AAAAA-AAAA-AAA",
            note: "",
        }
    ];
    const paitent = [
        {
            idex: "1",
            idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
        }
    ];
    const DocPaitentFile1 = () => { 
        navigation.navigate("dcHome");
        Alert.alert("Updated")
    }    
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={clooBtn}>
            <View style={styles.containerin1}>
                
                   <View>
                    <Text style={{color: 'white'}}>
                        Close
                    </Text>
                </View> 
                
                
            </View>
            </TouchableOpacity>
            {paitent.map((res,index)=>{
                return(
                  <View style={styles.containerin2}>
                
                <View style={styles.cont1}>
                    <View style={styles.cont11}>
                        <Text style={{color:'white',}}>{res.idex}</Text>
                    </View>
                </View>
                <View style={styles.cont2}>
                    <Text style={{color:'white',}}>{res.fullName} |ID: {res.idno}</Text>
                </View>
                <View style={styles.cont3}>
                    <View style={styles.cont33}>
                        <Text style={{color:'white',}}>{res.condition}</Text>
                    </View>
                </View>
            </View>  
                )
            })}
            


            {/* paitent history goes here */}
            <ScrollView style={styles.containerin3}>
                <View style={styles.containerin3in0main}>
                    {history.map((res,index)=>{
                        return(
                            <View style={styles.containerin3in0}>
                                <View style={styles.containerin3in1}>
                                    <Text style={{color:'white', fontSize: 20, marginBottom:4, marginLeft:4,}}>{res.fileno}</Text>
                                </View>
                                <View style={styles.containerin3in2}>
                                    <Text style={{color:'white',marginLeft:4, height: '75%',}}>{res.note}</Text>
                                    <View style={styles.containerin3in2in1}>
                                        {/* <View style={styles.containerin3in2in12}> */}
                                            <View>
                                                <Text>Seen by Dr no: {res.Id}</Text>
                                            </View>
                                            <View>
                                                <Text>{res.date}</Text>
                                            </View>
                                        {/* </View> */}
                                        
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                    
            </ScrollView>

            {/* update tick */}
            <View style={styles.containerin4}>
                <View style={styles.input}>
                    <TextInput style={{color: 'white', textAlign: 'center'}}  onChangeText={(text) => setData(text)}>Add Note</TextInput>

                </View>
                {/* <TextInput>Add Note</TextInput> */}
                <TouchableOpacity onPress={DocPaitentFile1}>
                    <View style={styles.containerin41}>
                        <Text style={{color: 'white'}}>Update</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#150CC6",
        overflowX:"hidden",
    },


    // button box for close on top
    containerin1: {
        marginTop: 30,
        backgroundColor: '#2827D3',
        width: 100,
        height: 30,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        borderWidth: 1,
        
    },

    // paitent detiles 
    containerin2: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#2827D3',
        width: '100%',
        height: 40,
        // borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection:'row',
        
    },
    cont1:{
        width: '20%',
        // backgroundColor: 'red',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cont11:{
        width: 30,
        height:30,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    cont2:{
        // backgroundColor: 'black',
        width: '60%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',

    },
    cont3:{
        // backgroundColor: 'white',
        width: '20%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cont33:{
        width: '80%',
        height:30,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },





    containerin3: {
        // marginTop: 20,
        marginBottom: 10,
        // marginLeft: 1,
        // backgroundColor: '#2827D3',
        width: '100%',
        height: '100%',
        overflow:"hidden",
        maxHeight: '65%',
        // borderRadius: 5,
        display: 'flex',
        // justifyContent: 'center',
        // alignItems:'center',
        // borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderRadius: 10,
        
    },
    containerin3in1: {
        marginTop: 8,
        
        // marginLeft: 8,
        // backgroundColor: '#2827D3',
        width: '100%',
        // height: '65%',
        // maxHeight: '65%',
        // borderRadius: 5,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems:'center',
        borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        // borderRadius: 10,
        
    },
    containerin3in0: {
        // marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#2827D3',
        width: '95%',
        height: '5.3%',
        // maxHeight: '65%',
        // borderRadius: 5,
        display: 'flex',
        // justifyContent: 'center',
        alignItems:'center',
        // borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderRadius: 10,
        
    },
    containerin3in2:{
        // width: '100%',
        // backgroundColor: 'white',
        height: '85%',


        // flexDirection: 'row',
        // backgroundColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // justifyContent: 'space-evenly',
        justifyContent: 'center',
        alignItems: 'center',

    },

    containerin3in2in1:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 20,
        width: '90%',
        borderRadius: 3,
        marginTop: 5,
        // backgroundColor: '#2827D3',
        backgroundColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        alignItems: 'center',
    },
    containerin3in0main: {
        // marginTop: 20,
        marginBottom: 10,
        // backgroundColor: '#2827D3',
        width: '100%',
        height: '300%',
        // maxHeight: '65%',
        // borderRadius: 5,
        display: 'flex',
        // justifyContent: 'center',
        alignItems:'center',
        // borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderRadius: 10,
        
    },











    input:{
        width: '70%',
        // backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // marginBottom: 5,
        marginLeft: 12,
        marginRight: 12,
        height: '100%',
        backgroundColor: '#2827D3',
        borderRadius: 10,
        justifyContent: 'center',
    },


    containerin4: {
        marginTop: 5,
        marginBottom: 10,
        // backgroundColor: '#2827D3',
        width: '100%',
        height: '12%',
        // borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems:'flex-end',
        // borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        // borderTopWidth: 1,
        // borderBottomWidth: 1,
        
    },
    containerin41: {
        marginRight: 10,
        borderRadius: 10,
        // marginBottom: 10,
        backgroundColor: '#2827D3',
        width: 65,
        height: '100%',
        // borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderColor: '#CFCFCF rgba(207, 207, 207, 0.47)',
        borderWidth: 1,
        // borderBottomWidth: 1,
        
    },

})

export default docPaitentFilee;