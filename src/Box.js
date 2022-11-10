import react from "react";
import { View, StyleSheet } from "react-native";


const Box = ({ color="green" }) => {
    return <View style={[styles.box, { backgroundColor: color }]} />
}

const styles = StyleSheet.create({

    box: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderRadius: 100
    }


});


export default Box