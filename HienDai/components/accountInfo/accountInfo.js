import styles from "./styles";
import myStyles from "../../Styles/myStyles";
import { View, Text } from "react-native";
import * as React from "react";
import {} from "../../assets/loginHome.png";
import { Avatar } from "react-native-paper";

const AccountInfo = () => {
    return (
        <View>
            <View>
                <Avatar.Image
                    size={40}
                    source={require("../../assets/loginHome.png")}
                />
            </View>
        </View>
    );
};

export default AccountInfo;
