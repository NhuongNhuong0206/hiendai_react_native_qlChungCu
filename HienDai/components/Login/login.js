import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    StatusBar,
} from "react-native";
// import { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } from "@env";
import myStyles from "../../Styles/myStyles";
import styles from "./styles";
import { Button, Chip, TextInput } from "react-native-paper";
import React, { useContext, useState } from "react";
import APIs, { authAPI, endpoints } from "../../configs/APIs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import backgroundLogin from "../../assets/backgrondLogin.png";
import { MyDispatcherContext } from "../../configs/Contexts";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible); // Đảo ngược trạng thái của mật khẩu (hiển thị hoặc ẩn đi)
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClearUsername = () => {
        setUsername(""); // Xóa toàn bộ giá trị trong TextInput
    };

    const updateState = (value) => {
        setUsername(value);
    };
    const dispatcher = useContext(MyDispatcherContext);

    const nav = useNavigation();
    const [loading, setLoading] = React.useState(false);
    const login = async () => {
        setLoading(true);

        const payload = {
            username,
            password,
            client_id: "3DAkTbILVMzUtCHF344jXYOF6NpwbXGX262OG3qM",
            client_secret:
                "Kd8coCWcmdmxkuqYcUnGFoF6oxAMPgca88lpkRQeZ4M1FpEaZoG2X8DikCFV9vmtBwIZsNKmQesyJCo2EA7NuVyoSxEa6gyr09llYhx1nOBZmC14UAUQJ61GCKPNOu02",
            grant_type: "password",
        };

        let esc = encodeURIComponent;
        let query = Object.keys(payload)
            .map((k) => esc(k) + "=" + esc(payload[k]))
            .join("&");

        console.log(query);

        try {
            let res = await APIs({
                method: "post",
                url: endpoints.login,
                withCredentials: true,
                crossdomain: true,
                data: query,
            });
            AsyncStorage.setItem("access_token", res.data.access_token);

            setTimeout(async () => {
                let token = await AsyncStorage.getItem("access_token");
                let user = await authAPI(token).get(endpoints["getUser"]);
                await AsyncStorage.setItem("user", JSON.stringify(user.data));
                dispatcher({
                    type: "login",
                    payload: { ...user.data, token },
                });
                if (user.data.change_password_required === true) {
                    nav.navigate("HomeScreen");
                } else {
                    // console.log(user.data);
                    nav.navigate("ChangInfo", {
                        user: user,
                        token: token,
                    });
                }
            }, 100);
        } catch (ex) {
            console.error(ex);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground
            style={myStyles.container}
            source={require("../../assets/backgrondLogin.png")}
        >
            <StatusBar barStyle={"light-content"} />
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <View style={styles.top}>
                        <Text style={styles.TextTop}>Đăng nhập</Text>
                    </View>
                    <View style={styles.top2}>
                        <Text style={styles.TextTop2}>
                            Chào bạn đến với chung cư
                        </Text>
                        <Text style={styles.TextTop2}>Hiền Vy</Text>
                        <TextInput.Icon
                            icon="hand-wave"
                            color="gold"
                            marginTop={16}
                            size={26}
                        />
                    </View>
                    <View style={styles.inputfather}>
                        {errorMessage && (
                            <Text style={[styles.TextTop3, { color: "red" }]}>
                                Bạn nhập sai tên đăng nhập hoặc mật khẩu, hãy
                                thử lại!!!!
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            label="Tên đăng nhập"
                            value={username}
                            onChangeText={(t) => updateState(t)}
                            right={
                                <TextInput.Icon
                                    icon="alpha-x"
                                    onPress={handleClearUsername}
                                />
                            }
                        />
                        <TextInput
                            style={styles.input}
                            label="Password"
                            secureTextEntry={!isPasswordVisible} // Đảo ngược secureTextEntry dựa trên trạng thái của mật khẩu
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            right={
                                <TextInput.Icon
                                    icon={isPasswordVisible ? "eye-off" : "eye"}
                                    onPress={handleTogglePasswordVisibility}
                                />
                            }
                        />
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("ForgotAccount");
                            }}
                        >
                            <Text style={[styles.ForgotPass]}>
                                Quên mật khẩu?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.btnLoginfather,
                            isPressed && styles.btnLoginfatherPressed,
                        ]}
                    ></View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={[styles.btnLoginChildP]}>
                <Button
                    style={[
                        styles.btnLoginChild,
                        isPressed && styles.btnLoginfatherPressed,
                    ]}
                    loading={loading}
                    icon={"account"}
                    onPress={login}
                >
                    Đăng nhập
                </Button>
            </View>
        </ImageBackground>
    );
};
export default LoginScreen;
