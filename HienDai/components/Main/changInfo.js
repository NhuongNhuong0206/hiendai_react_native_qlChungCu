import { Button, Avatar, Text, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
} from "react-native";
import myStyles from "../../Styles/myStyles";
import styles from "./style";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import APIs, { endpoints } from "../../configs/APIs";
import { MyUserContext } from "../../configs/Contexts";

const ChangInfo = () => {
    const user = React.useContext(MyUserContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible); // Đảo ngược trạng thái của mật khẩu (hiển thị hoặc ẩn đi)
    };
    const [avatar_acount, setAvatar_acount] = React.useState({});
    const [isPressed, setIsPressed] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const nav = useNavigation();
    const [password, setPassword] = useState("");
    const picker = async () => {
        let { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Permissions denied!");
        } else {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled)
                setAvatar_acount((current) => {
                    console.log(" result.assets[0].uri ", result.assets[0].uri);
                    return { ...current, avatar_acount: result.assets[0].uri };
                });
        }
    };
    const changInf = async () => {
        setLoading(true);

        const payload = {
            password,
            avatar_acount,
        };

        let esc = encodeURIComponent;
        let query = Object.keys(payload)
            .map((k) => esc(k) + "=" + esc(payload[k]))
            .join("&");

        console.log(query);

        try {
            console.log("Vô được tới đây");
            let res = await APIs({
                method: "patch",
                url: endpoints.home(user.id),
                withCredentials: true,
                crossdomain: true,
                data: query,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            console.log("Không Vô được tới đây");
            nav.navigate("HomeScreen");
        } catch (error) {
            if (error.response) {
                // Kiểm tra status code trả về
                if (error.response.status === 404) {
                    setErrorMessage(true); // Hiển thị thông báo lỗi
                    setTimeout(() => {
                        setErrorMessage(false); // Ẩn thông báo lỗi sau 30 giây
                    }, 30000); // 30 giây
                } else {
                    console.log("Error:", error.response.status);
                }
            } else {
                // Xử lý các lỗi không có response, ví dụ như lỗi mạng
                console.log("Error:", error.message);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <ImageBackground
            style={[styles.container]}
            source={require("../../assets/backgrondLogin.png")}
        >
            <StatusBar barStyle={"light-content"} />
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <Text style={[styles.nameHome]}>Hiền Vy</Text>
                    <View style={styles.top}>
                        <Text style={styles.TextTop}>
                            Cập nhập thông tin trước khi sử dụng dịch vụ
                        </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        label="Nhập mật khẩu mới"
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
                    <TouchableOpacity onPress={picker}>
                        <Text style={styles.chooseImg}>
                            Chọn hình đại diện...
                        </Text>
                    </TouchableOpacity>
                    {avatar_acount?.avatar_acount && (
                        <Image
                            source={{ uri: avatar_acount.avatar_acount }}
                            style={styles.avatar}
                        />
                    )}
                </KeyboardAvoidingView>
            </ScrollView>
            <Button
                style={[
                    styles.btnDone,
                    isPressed && styles.btnLoginfatherPressed,
                ]}
                loading={loading}
                icon={"check"}
                onPress={changInf}
            >
                Xong
            </Button>
        </ImageBackground>
    );
};

export default ChangInfo;
