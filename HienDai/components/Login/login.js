import { View, Text, TouchableOpacity } from "react-native";
import myStyles from "../../Styles/myStyles";
import styles from "./styles";
import { Chip, TextInput } from "react-native-paper";
import { useState } from "react";

const LoginScreen = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible); // Đảo ngược trạng thái của mật khẩu (hiển thị hoặc ẩn đi)
    };

    const [username, setUsername] = useState("Nguyen Van A");
    const [password, setPassword] = useState("");
    const handleClearUsername = () => {
        setUsername(""); // Xóa toàn bộ giá trị trong TextInput
    };
    return (
        <View style={myStyles.container}>
            <View style={styles.top}>
                <Text style={styles.TextTop}>Chào bạn đến với chung cư</Text>
                <Text style={styles.TextTop}>Hiền Vy</Text>
                <Chip style={[styles.icon]} icon="hand-wave"></Chip>
            </View>
            <View style={styles.inputfather}>
                <TextInput
                    style={styles.input}
                    label="Tên đăng nhập"
                    value={username}
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

                <Text style={[styles.ForgotPass]}>Quên mật khẩu?</Text>
            </View>
            <TouchableOpacity
                style={[
                    styles.btnLoginfather,
                    isPressed && styles.btnLoginfatherPressed,
                ]}
            >
                <Text style={styles.btnLogin}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
