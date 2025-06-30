import React, {useState} from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";

import { styles } from "./styles";
import { Input } from "../input";
import { Button } from "../button"

type Props = {
    onSearch: () => void;
}

export default function SearchPlayer({onSearch}: Props) {
    const [namePlayer, setNamePlayer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (namePlayer.trim()) {
            onSearch(namePlayer);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={styles.searchForm}>
            <Input style={styles.searchInput} onChangeText={(text) => setNamePlayer(text)}></Input>
            <Button title="Buscar"></Button>
        </form>
    )
    
        

    
}