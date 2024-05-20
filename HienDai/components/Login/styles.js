import { StyleSheet } from "react-native";

export default StyleSheet.create({
    statusbar: {
        backgroundColor: "red",
        barStyle: "dark-content",
    },
    top: {
        marginTop: 70,
        flexDirection: "row",
        height: 60,
        marginLeft: 5,
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    TextTop: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        color: "rgb(44, 0, 81)",
    },
    icon: {
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },
    inputfather: {
        paddingTop: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "80%",
        marginTop: 30,
    },
    ForgotPass: {
        marginTop: 10,
        color: "#f18b28",
        fontSize: 18,
    },
    btnLoginfather: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 380,
    },
    btnLoginfatherPressed: {
        opacity: 0.5,
    },
    btnLogin: {
        backgroundColor: "#7d61a1",
        color: "#fbfafc",
        width: "80%",
        height: 50,
        borderRadius: 60,
        textAlign: "center",
        lineHeight: 50,
        fontSize: 16,
    },
});
