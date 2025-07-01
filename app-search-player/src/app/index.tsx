
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from 'react-native';

import { router } from "expo-router";

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import  Card  from '@/components/card-atleta';
import  SearchPlayer  from '@/components/serarch-player';
import Favoritos from '@/components/card-favoritos';


  
export default function Index() {
    const [response, setResponse] = useState("")
    const [result, setResult] = useState("");


    const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "980805025emsh0b625f38045dff8p19cbacjsndd4c87d912e2",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
    };
    
    const handleSearch = async (namePlayer : any) => {
        try {
            const response = await fetch(
                `https://api-football-v1.p.rapidapi.com/v3/players/profiles?search=${namePlayer}`,
                options
            );
            
            if (!response.ok) {
                Alert.alert("Erro", "Nenhum jogador encontrado");
                return;
            }
            
            const result = await response.json();
            setResult(result);

            const arrayPlayer = result.response;
            console.log(arrayPlayer)

            if (arrayPlayer) {
                router.navigate({
                    pathname: "/dashboard",
                    params: {
                        arrayPlayer: JSON.stringify(arrayPlayer),
                        /* imagem: player.photo,
                        nome: player.name,
                        idade: player.age,
                        nascimento: player.birth?.date,
                        nacionalidade: player.nationality,
                        camisa: player.number,
                        altura: player.height,
                        peso: player.weight,
                        posicao: player.position, */
                    }
                });
            } else {
                Alert.alert("Erro", "Nenhum jogador encontrado");
            }
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao buscar o jogador");
        }

    }

    function handleNext() {
        console.log(response)
        router.navigate({
            pathname: "/dashboard",
            params: {
                nome: response, //response.name
                idade: 25, //response.age
                nascimento: "25/08/2000", //response.birth
                nacionalidade: "Brazil", // etc
                camisa: "10",
                altura: "167",
                peso: "70",
                posicao: "ATA",


            }
        })
    }

    return (

        // SearchPlayer da N1 
        <View style={styles.mainContainer}>
            <Text style={{fontSize: 35, color: "black", fontWeight:"bold"}}>Pesquisa de Atletas</Text>
            <Text style={styles.title}> Digite o nome: </Text>
            <Input onChangeText={(response) => setResponse(response)} id="name"></Input>
            <Button title="Pesquisar" onPress={() => handleSearch(response)}></Button>


        </View>
    );
    
}

const styles = StyleSheet.create({
    title: {
        color: "blue",
        fontSize: 24,
        fontWeight: "bold",

    },

    mainContainer: {
        flex: 1,
        padding: 32,
       // backgroundColor: "blue",
        justifyContent: "center",
        gap:16,
    },

    headerSection: {
        
    },

    seachSection: {
        height: 20,
        borderRadius: 2,
        width: 20,
    },

    contentSection: {

},
    

})