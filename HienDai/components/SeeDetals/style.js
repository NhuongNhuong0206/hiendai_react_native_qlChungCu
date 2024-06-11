import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#f5f5f5',
    },
    card: {
        margin:10,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 4, // Adds shadow for Android
        shadowColor: '#000', // Adds shadow for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        position: 'relative', // Allows positioning of child elements
        opacity: 0.85,
        backgroundColor: "#0000",
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#ffffff",
        marginRight: 2,
        textAlign: 'left',
        flex: 1,
    },
   
    
    

    
    textBoard: { fontSize: 20,
         marginBottom: 30 
    },

    
    
    textBoard: {
        fontSize: 20,
        marginBottom: 10,
    },
    
    totalText_bank: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    headers: {
        backgroundColor: 'transparent',
        elevation: 0, // Remove shadow on Android
    },

    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        width: '100%',
    },

    value: {
        textAlign:'left',
        marginLeft:3,
        color: '#ff61bb',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        flex: 1,
    }
});
