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
import { set } from "date-fns";

const ChangInfo = () => {
    const user = React.useContext(MyUserContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible); // Đảo ngược trạng thái của mật khẩu (hiển thị hoặc ẩn đi)
    };
    const [isPressed, setIsPressed] = useState(false);
    const [loading, setLoading] = useState(false);
    const nav = useNavigation();
    const [password, setPassword] = useState("");
    const [userchag, setuserchag] = useState({});
    const picker = async () => {
        let { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            alert("Permissions denied!");
        } else {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled)
                setuserchag((current) => {
                    return { ...current, avatar: result.assets[0] };
                });
        }
    };

    const changInf = async () => {
        setLoading(true);
        let formData = new FormData();
        for (let key in userchag)
            if (key === "avatar")
                formData.append(key, {
                    uri: userchag.avatar.uri,
                    name: userchag.fileName,
                    type: userchag.type,
                });
            else formData.append(key, userchag[key]);

        console.log("formData sau khi được append: ", formData);
        try {
            let res = await APIs({
                method: "patch",
                url: endpoints.home(user.id),
                withCredentials: true,
                crossdomain: true,
                formData,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            if (res.status === 200) nav.navigate("HomeScreen");
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
    const fields = [
        {
            lable: "Mật khẩu",
            icon: "eye-off",
            secureTextEntry: true,
            name: "password",
        },
    ];
    const updateState = (field, value) => {
        console.log("value tại updateState", value);
        setuserchag((current) => {
            return {
                ...current,
                [field]: value,
            };
        });
        console.log("userchag sau khi setuserchag truyền value ", userchag);
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
                    {fields.map((f) => (
                        <TextInput
                            value={userchag[f.name]}
                            key={f.lable}
                            style={styles.input}
                            label={f.lable}
                            right={<TextInput.Icon icon={f.icon} />}
                            secureTextEntry={f.secureTextEntry}
                            onChangeText={(t) => updateState(f.name, t)}
                        />
                    ))}
                    {/* <TextInput
                        style={styles.input}
                        label="Nhập mật khẩu mới"
                        secureTextEntry={!isPasswordVisible} // Đảo ngược secureTextEntry dựa trên trạng thái của mật khẩu
                        value={password}
                        onChangeText={(text) => setPassword(text), setuserchag(...current => {
                                password: password,
                        })}
                        right={
                            <TextInput.Icon
                                icon={isPasswordVisible ? "eye-off" : "eye"}
                                onPress={handleTogglePasswordVisibility}
                            />
                        }
                    /> */}
                    <TouchableOpacity onPress={picker}>
                        <Text style={styles.chooseImg}>
                            Chọn hình đại diện...
                        </Text>
                    </TouchableOpacity>
                    {userchag?.avatar && (
                        <Image
                            style={styles.avatar}
                            source={{ uri: userchag.avatar.uri }}
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
