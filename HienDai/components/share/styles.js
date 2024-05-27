import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "relative",
    },
    header: {
        marginTop: 20,
        height: 40,
        width: "100%",
        //backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    nameHome: {
        height: "100%",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: "#dcd3d1",
        marginLeft: 20,
        marginTop: 20,
    },
    ringNumber: {
        position: "absolute",
        right: 24,
        top: 14,
        zIndex: 1,
    },
    ringNum: {
        color: "#ab9570",
    },
    headerIconLeft: {
        marginTop: -20,
    },
    headerIconRight: {
        marginTop: -20,
        marginRight: 20,
    },
    line: {
        paddingTop: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: 400,
    },
    inline: {
        color: "#dcd3d1",
    },
    hello: {
        display: "flex",
        flexDirection: "row",
        paddingTop: 14,
        paddingLeft: 20,
    },
    helloText: {
        fontSize: 18,
        color: "#dcd3d1",
        marginLeft: 26,
    },
    helloHeart: {},
    introduceHome: {
        width: "100% - 40px",
        height: 86,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderColor: "#dbbf98",
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    introduceHomeimg: {
        width: 60,
        height: 60,
        borderColor: "#dbbf98",
        borderWidth: 2,
        backgroundColor: "transparent",
        borderStyle: "dashed",
        padding: 10,
        borderRadius: 30,
    },
    introduceHomeText: {
        paddingRight: 120,
    },
    introduceHomeTextMain: {
        marginLeft: 10,
        color: "#dcd3d1",
    },
    introduceHomeTextNote: {
        marginLeft: 10,
        color: "#dcd3d1",
    },
    introduceHomeIcon: {
        marginRight: 35,
        marginBottom: 24,
    },
    introduceHomeInIcon: {},
    utilities: {
        // width: "100% - 60px",
        // backgroundColor: "red",
        height: 400,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    utilitiesTow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        width: "100%",
    },
    utilitiesChild: {
        backgroundColor: "#201e20",
        width: "48%",
        height: 80,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#705235",
        borderWidth: 1,
    },
    utilitiesIcon: {
        width: 38,
        height: 38,
        marginLeft: 40,
        padding: 2,
        backgroundColor: "#403b3e",
    },
    utilitiesText: {
        marginLeft: 54,
        fontSize: 16,
        color: "#dedbde",
    },
    bottom: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: "red",
    },
    bottomIcon: {
        width: "30%",
        height: "100%",
        backgroundColor: "red",
        backgroundColor: "#dcd3d1",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        borderColor: "#33333",
        borderWidth: 2,
    },
    bottomIconChild: {
        marginTop: 30,
    },

    btnPressedOpacity: {
        opacity: 0.5,
    },
    TextTop: {
        marginTop: 60,
        color: "#dedbde",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        marginTop: 20,
        width: "70%",
        alignSelf: "center",
    },
    chooseImg: {
        backgroundColor: "#e6e0ec",
        color: "#494350",
        marginTop: 20,
        fontSize: 10,
        alignSelf: "center",
        padding: 10,
        borderRadius: 30,
        width: 60,
        height: 60,
        textAlign: "center",
    },
    avatar: {
        width: 220,
        height: 220,
        backgroundColor: "red",
        borderRadius: 110,
        alignSelf: "center",
        marginTop: 50,
    },
    btnDone: {
        position: "relative",
        bottom: 10,
        left: "25%",
        backgroundColor: "#d6dce9",
        width: "50%",
        height: 46,
        borderRadius: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btnLoginfatherPressed: {
        opacity: 0.5,
    },
    bottomF: {
        // alignSelf: "center",
        paddingTop: 8,
    },
    inputcode: {
        width: "70%",
        alignSelf: "center",
        marginTop: 20,
    },
    TextTop3: {
        alignSelf: "center",
        marginTop: 20,
    },
    text: {
        color: "#dcd3d1",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        alignSelf: "center",
        marginTop: 10,
    },
    contentContainer: {
        padding: 10,
        backgroundColor: "#f4f4f4",
        margin: 20,
        marginTop:10,
        borderRadius: 20,
    },
    avatar: {
        alignSelf: "center",
        marginBottom: 10,
    },
    infoContainer: {
        flexDirection: "row",
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
        padding:6,
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    value: {
        fontSize: 16,
        textAlign: "center",
    },
    logoutButton: {
        marginBottom:40,
        width: "50%",
        alignSelf: "center",
        backgroundColor: "#ed7a7a",
    },
});
