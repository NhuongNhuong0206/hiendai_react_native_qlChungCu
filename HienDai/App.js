import { View } from "react-native";
import LoginScreen from "./components/Login/login";
import HomeScreen from "./components/Main/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyDispatcherContext, MyUserContext } from "./configs/Contexts";
import { useReducer } from "react";
import { MyUserReducer } from "./configs/Reducers";
import ForgotAccountScreen from "./components/Login/forgotAccount";
import ChangInfo from "./components/Main/changInfo";
import EditPass from "./components/Main/editPass";
import Service from "./components/utilitys/Service";
import Input from "./components/share/Input";
import Hearder from "./components/share/Header";
import Card from "./components/utilitys/Card";
import DeleteCarCard from "./components/utilitys/deleteCarCard";
import Footer from "./components/share/footer";
import InfoUser from "./components/share/InfoUser";
import DetailsScreen from "./components/utilitys/DetailsScreen";
import Uses from "./components/utilitys/Uses";
import ViewGoodss from "./components/Box.js/view";
import PaymentScreen from "./components/Payment/pay";
import BankPayScreen from "./components/BankPay/bankpay";
import BillPaidScreen from "./components/Payment/billpaid";
import SeeDetail from "./components/SeeDetals/seedetal";

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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ViewGoodss" component={ViewGoodss} />
            <Stack.Screen name="InfoUser" component={InfoUser} />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="Card" component={Card} />
            <Stack.Screen name="DeleteCarCard" component={DeleteCarCard} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="Uses" component={Uses} />
            <Stack.Screen name="Input" component={Input} />
            <Stack.Screen name="Hearder" component={Hearder} />
            <Stack.Screen name="Footer" component={Footer} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="BankPayScreen" component={BankPayScreen} />
            <Stack.Screen name="BillPaidScreen" component={BillPaidScreen} />
            <Stack.Screen name="SeeDetail" component={SeeDetail} />

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
        //     <Card />
        // </View>
    );
};

export default App;
