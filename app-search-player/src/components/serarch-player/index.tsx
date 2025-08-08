import React, {useState} from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

import { styles } from "./styles";
import { Input } from "../input";
import { Button } from "../button"

type Props = {
    onSearch: (playerName: string) => any; // router-navigate
}

export default function SearchPlayer({onSearch}: Props) {
    const [namePlayer, setNamePlayer] = useState("");

    const handleSubmit = () => {
        if (namePlayer.trim()) {
            onSearch(namePlayer);
        }
    }

    return (
        <View style={styles.searchForm}>
            <Input 
                style={styles.searchInput} 
                value={namePlayer}
                onChangeText={(text) => setNamePlayer(text)}
                placeholder="Digite o nome do jogador"
            />
            <Button 
                title="Buscar" 
                onPress={handleSubmit}
            />
        </View>
    )
    
        

    
}