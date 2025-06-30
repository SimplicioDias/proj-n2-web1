import { View, ViewProps, Text, TextProps, TouchableOpacity, TouchableOpacityProps} from "react-native";

import { styles } from "./styles";
import { Button } from "../button";

type Props = TouchableOpacityProps & ViewProps & TextProps & {
    player: JSON,
    onAddFavorito: () => void,
    showAddButtons: boolean
    

}
export default function Card({ player, onAddFavorito, showAddButtons, ...rest }: Props) {
    
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



    return (
        <View style={styles.card} id={`card${player.id}`}>
            <img src={player.photo} alt={player.name} />

            <View style={styles.col}>
                <p>Nome: {player.name}</p>
                <p>Idade: {player.age}</p>
                <p>Data de Nascimento: {datePlace}</p>
                <p>Nacionalidade: {player.nationality ?? "desconhecido"}</p>
                {player.number && <p>Camisa: {player.number}</p>}
                {player.height && <p>Altura: {player.height}</p>}
                {player.weight && <p>Peso: {player.weight}</p>}
                {player.position && <p>Posição: {player.position}</p>}
            </View>
           
        </View>   
    )
}

