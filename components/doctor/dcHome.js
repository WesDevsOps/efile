// import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView,StyleSheet, View, Text, ScrollView,Image,TouchableOpacity } from "react-native";
 import doc from '../images/doctor.png';



const DcHome = ({ navigation }) => {




     
const fileNurse = [
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
    },{
        idex: "2",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "3",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "4",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "5",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "6",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "7",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "8",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "9",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "10",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "11",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },{
        idex: "12",
        idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe",
    },
];

    const doctor = [
        {
            Id: "00000-0000-000",
            name: "Dr Warren",
            pacno: "00000-0000-000-000"
        }

    ]
    const DocPaitentFile = () => { 
        navigation.navigate("docpPaitenFile");
    }
    return ( 
        <SafeAreaView  style={styles.container}>

            <View style={styles.circle1}> 
                {/* doc information and pic */}
                <View style={styles.circle12}>
                    {/* pic goes here */}
                    <Image source={doc} style={{width:60, height:60 }}/>
                </View>
                <View style={styles.circle13}>
                    {/* doc info here */}
                    <Text style={{ color: "#ECECEC"}}>ID:{doctor.map((res)=>{return(res.Id)})}</Text>
                    <Text style={{ color: "#ECECEC"}}>Name:{doctor.map((res)=>{return(res.name)})}</Text>
                    <Text style={{ color: "#ECECEC"}}>Practice No:{doctor.map((res)=>{return(res.pacno)})}</Text>
                </View>
            
            </View>
           
            <View style={styles.circle2}>
                 {/* shared files from nurse goes here */}
                 <View style={styles.circle21}>
                    <View style={styles.circle22}>

                        <View style={styles.circle221}></View>
                        <View style={styles.circle222}></View>
                        <View style={styles.circle223}></View>
                    </View>
                    
                 </View>
                 <ScrollView style={styles.circle24} showVerticalScrollIndicator={false}>
                 
                 {fileNurse.map((paitent,index)=>{
                    return(
                        <>
                     <TouchableOpacity onPress={DocPaitentFile}>
                        <View style={styles.circle23} key={index} >
                      
                        
                            <View style={styles.circle234}><Text style={{ color: "#ECECEC"}}>{paitent.idex} </Text></View>
                            <View style={styles.circle235}><Text style={{ color: "#ECECEC"}}>{paitent.fullName}</Text></View>
                            <View style={styles.circle236}><Text style={{ color: "#ECECEC"}}>{paitent.condition}</Text></View>
                        

                 
                    </View>
                     </TouchableOpacity>
                      
                    </>
                    )
                    
                     
                    })}
                 
                    
                 </ScrollView>
                
            </View>
            

            
        <View style={styles.main}>
            <View style={styles.main1}>
                 <View style={styles.main2}>
                    <View style={styles.main3}>
                        <Text Text style={{ color: "#ECECEC"}}>
                          {/* box 1 */}
                        </Text>
                    </View>
                    <View style={styles.main3}>
                        <View style={styles.main4}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                        <View style={styles.main41}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                    </View>
                    

                </View>
                <View style={styles.main2}>
                <View style={styles.main3}>
                        <Text Text style={{ color: "#ECECEC"}}>
                          {/* box 1 */}
                        </Text>
                    </View>
                    <View style={styles.main3}>
                    <View style={styles.main42}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                        <View style={styles.main4}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
           
            <View style={styles.main1}>
            <View style={styles.main2}>
            <View style={styles.main3}>
                        <View style={styles.main4}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                        <View style={styles.main43}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.main3}>
                        <Text Text style={{ color: "#ECECEC"}}>
                          {/* box 2 */}
                        </Text>
                    </View>
                </View>
                <View style={styles.main2}>
                <View style={styles.main3}>
                <View style={styles.main44}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                        <View style={styles.main4}>
                            <Text Text style={{ color: "#ECECEC"}}>
                                {/* box 2 */}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.main3}>
                        <Text Text style={{ color: "#ECECEC"}}>
                          {/* box 2 */}
                        </Text>
                    </View>
                </View>
            </View>
        </View>

        </SafeAreaView>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#150CC6",
      overflowX:"hidden",
    },
    circle1: {
        marginTop: 35,
        flexDirection: "row",
        // backgroundColor: "white",
        width: '100%',
        height: 70,
        display: 'flex',
        // justifyContent: "center",
        marginBottom: 15,
        // alignItems: "center",

    },


    circle221 : {

    },
    circle12: {
        backgroundColor: "#3539DC",
        marginLeft: 10,
        height: 70,
        justifyContent:'center',
        alignItems: 'center',
        width: 70,
        marginRight: 4,
        borderRadius: 5,
        borderColor: '#ECECEC',
        borderWidth: 1,
        

    },
    circle2: {
        // backgroundColor: "white",
        width: '95%',
        height: "55%",
        maxHeight: "60%",
        borderColor: "#ECECEC",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 15,
        overflowY:"hidden",
    },
    // text:{
    //     backgroundColor: 'white',
    // },
    circle21:{
        display: 'flex',
        backgroundColor: "#3539DC",
        flexDirection: "row",
        height: 35,
        marginTop: 10,
        width: '95%',
        alignItems: "center",
        justifyContent: "flex-end",
        borderRadius: 5,
        marginBottom: 15,
        // marginRight: 4,


    },

    circle221 : {
        backgroundColor: 'red',
        height: 15,
        width: 15,
        borderRadius: 100,
    },
    circle222 : {
        backgroundColor: 'white',
        height: 15,
        width: 15,
        borderRadius: 100,

    },
    circle223 : {
        backgroundColor: 'blue',
        height: 15,
        width: 15,
        borderRadius: 100,

    },

    circle22:{
        display: 'flex',
        flexDirection: "row",
        marginRight: 10,
        // backgroundColor: "white",
        width: '25%',
        height: '80%',
        alignItems: "center",
        justifyContent: 'space-evenly',
    },
    circle24: {
        overflow:"hidden",
        maxHeight: '80%',
        height: 600,
        // backgroundColor: "black",
        width: '100%',
        // alignItems: "center",
    },
    scrollView : {
        backgroundColor: 'white',
        width: 0,
    },
    circle23:{
    //    display: 'flex', 
    //    flex: 1,
    alignItems: "center",
       flexDirection: 'row',
       height: 40,
       backgroundColor: "#3539DC",
       width: '96%',
       marginLeft: 7,
       borderRadius: 5,
       marginBottom: 5,
    },
    circle234:{
        height: '80%',
        backgroundColor: 'black',
        marginLeft: 5,
        width: "10%",
        marginRight:5,
        alignItems: "center",
        borderRadius: 5,

        justifyContent: "center",
        // alingContent: "center",

    },
    circle235:{
        width: "65%", 
        justifyContent: "center",

        height: '80%',
        // backgroundColor: 'red',
    },
    circle236:{
        width: "20%",
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        height: '80%',
        // marginRight: 15,
        // marginLeft: 5,

        borderRadius: 5,
    },


    // navigation bar goes here
    main: {
        display: 'flex',
        // backgroundColor: 'white',
        width: '60%',
        height: '25%',
    },
    main1 : {
        height: '50%',
        width: '100%',
        display: 'flex',
        // backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    main2 : {
        // backgroundColor: 'black',
       backgroundColor: "#3539DC",

        width: '45%',
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 8,
        borderRadius: 10,
    },
    main3 : {
        height: '50%',
        flexDirection: 'row',

    },
    main4 : {
        width: '50%',
    },
    main41 : {
        width: '50%',
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 25,
    },
    main42 : {
        width: '50%',
        backgroundColor: 'white',
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 25,
    },
    main43 : {
        width: '50%',
        backgroundColor: 'white',
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 25,
    },
    main44 : {
        width: '50%',
        backgroundColor: 'white',
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 25,
    },
})
export default DcHome;