import { View, Text, Image, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { styles } from "./styles";
import { Button } from "../button";
import { useFavoritos } from "@/contexts/FavoritosContext";

type Props = {
    player: any,
    showAddButtons?: boolean,
}
export default function Card ({ player, showAddButtons }: Props) {
    const { addFavorito, removeFavorito, isFavorito } = useFavoritos();
    
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

    async function onAddFavorito() {
        try {
            if (isFavorito(player.id)) {
                await removeFavorito(player.id);
                Alert.alert("Sucesso", "Jogador removido dos favoritos!");
            } else {
                await addFavorito(player);
                Alert.alert("Sucesso", "Jogador adicionado aos favoritos!");
            }
        } catch (error) {
            Alert.alert("Erro", "Erro ao gerenciar favoritos");
        }
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
            <Button 
                title={isFavorito(player.id) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"} 
                variant="card" 
                onPress={onAddFavorito}
            />
        </View>   
    )
}
