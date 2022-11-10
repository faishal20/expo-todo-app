import react from "react";
import { View, StyleSheet } from "react-native";
import Box from "./Box";

const BoxContainer = ({direction='row'}) => {
    return (<View style={{

        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 65,
        alignItems: 'center',
        justifyContent: 'space-evently',
        padding: 30,
        flexDirecton:direction,
        margin:12

    }}>

        <Box color={'red'} />
        <Box color={'yellow'} />
        <Box />

    </View>)
}




export default BoxContainer