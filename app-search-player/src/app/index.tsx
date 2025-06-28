import { View, Text, StyleSheet, Alert} from 'react-native';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {

    let name = ''

    function onChangeText(text: string) {
        console.log(text)
        name = text
    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}> Hello, {name}</Text>

            <Text>Digite o Nome do Jogador: </Text>
            <Input onChangeText={(text) => onChangeText(text)}/>
            <Button  title="Pesquisar"/>
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",

    },

    container: {
        flex: 1,
        padding: 32,
       // backgroundColor: "blue",
        justifyContent: "center",
        gap:16,
    }
})