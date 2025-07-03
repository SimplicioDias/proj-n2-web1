import { View, ViewProps, Text, TextProps, TouchableOpacity, TouchableOpacityProps, Image, ImageProps } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { styles } from "./styles";
import { Button } from "../button";

type Props = TouchableOpacityProps & ViewProps & TextProps & {
    onAddFavorito?: () => void,
    showAddButtons?: boolean,
    player : any,
    

}
export default function Card ({ player, showAddButtons, ...rest }: Props) {
    
    const birth = player.birth;
    let datePlace;

    if (birth?.date && birth?.place) {
        const date = new Date(birth.date).toLocaleDateString("pt-BR");
        const place = birth.place;
        datePlace = `${date}, ${place}`;
    } else if (birth?.date) {
        const date = new Date(birth.date).toLocaleDateString("pt-BR");
        datePlace = `${date}`;
    } else if (birth?.place) {
        const place = birth.place;
        datePlace = `${place}`;
      } else {
        datePlace = "Desconhecido";
      }

    function onAddFavorito() {
        const id = player.id
        
    }


    return (
        <View style={styles.card}> 
            <Image source={{uri: player.photo}} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 8 }}/>
            <Text style={styles.title}> Nome: { player.name }</Text>
            <Text style={styles.title}> Idade: { player.age }</Text>
            <Text style={styles.title}> Data de Nascimento: { datePlace }</Text>
            <Text style={styles.title}> Nacionalidade: { player.nationality ?? "desconhecido" }</Text>
            <Text style={styles.title}> Camisa: { player.number }</Text>
            <Text style={styles.title}> Altura: { player.height }</Text>
            <Text style={styles.title}> Peso: { player.weight }</Text>
            <Text style={styles.title}> Posição: { player.position }</Text>
            <Button title="favoritos" variant="card" onPress={onAddFavorito}/>
        </View>   
    )
}
