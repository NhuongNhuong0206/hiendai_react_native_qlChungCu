import { View } from "react-native";
import LoginScreen from "./components/Login/login";
import HomeScreen from "./components/Main/home";
import AccountInfo from "./components/accountInfo/accountInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyDispatcherContext, MyUserContext } from "./configs/Contexts";
import { useReducer } from "react";
import { MyUserReducer } from "./configs/Reducers";
import ForgotAccountScreen from "./components/Login/forgotAccount";
import ChangInfo from "./components/Main/changInfo";
import EditPass from "./components/Main/editPass";

const MyStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ChangInfo" component={ChangInfo} />
            <Stack.Screen
                name="ForgotAccount"
                component={ForgotAccountScreen}
            />

            <Stack.Screen name="EditPass" component={EditPass} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const Stack = createNativeStackNavigator();

const App = () => {
    const [user, dispatcher] = useReducer(MyUserReducer, null);
    return (
        <NavigationContainer>
            <MyUserContext.Provider value={user}>
                <MyDispatcherContext.Provider value={dispatcher}>
                    <MyStack />
                </MyDispatcherContext.Provider>
            </MyUserContext.Provider>
        </NavigationContainer>
        // <View>
        //     <EditPass />
        // </View>
    );
};

export default App;
