import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import RcHome from "./components/receptionist/rcHome";
import LoginAs from "./components/loginAs";
import Register from "./components/receptionist/register";
// import RcPatientFile from "./components/receptionist/rcPatientFile";
import NurseHome from "./components/nurse/nurseHome";
// import RcLogin from "./components/receptionist/rcLogin";
import NursePatientFile from "./components/nurse/nursePatientFile";
import NurseLogin from "./components/nurse/nurseLogIn";
import DoctorLogin from "./components/doctor/doctorLogin";
import ForgotPassword from "./components/forgotPassword";
import DcHome from "./components/doctor/dcHome";
import docPaitentFilee from "./components/doctor/docPaitentFile";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="loginAs" component={LoginAs} />
        {/* <Stack.Screen name="rcLogin" component={RcLogin} /> */}
        <Stack.Screen name="register" component={Register} />
        {/* <Stack.Screen name="rcHome" component={RcHome} /> */}
        {/* <Stack.Screen name="rcPatientFile" component={RcPatientFile} /> */}
        <Stack.Screen name="nursePatientFile" component={NursePatientFile} />
        <Stack.Screen name="nurseHome" component={NurseHome} />
        <Stack.Screen name="nurseLogIn" component={NurseLogin} />
        <Stack.Screen name="doctorLogin" component={DoctorLogin} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="dcHome" component={DcHome} />
        <Stack.Screen name="docpPaitenFile" component={docPaitentFilee} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
