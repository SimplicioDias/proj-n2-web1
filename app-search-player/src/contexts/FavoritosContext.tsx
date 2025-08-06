import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Player {
  id: number;
  name: string;
  age: number;
  birth: {
    date: string;
    place: string;
  };
  nationality: string;
  number: number;
  height: string;
  weight: string;
  position: string;
  photo: string;
}

interface FavoritosContextType {
  favoritos: Player[];
  addFavorito: (player: Player) => Promise<void>;
  removeFavorito: (playerId: number) => Promise<void>;
  isFavorito: (playerId: number) => boolean;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos deve ser usado dentro de um FavoritosProvider');
  }
  return context;
};

interface FavoritosProviderProps {
  children: ReactNode;
}

export const FavoritosProvider: React.FC<FavoritosProviderProps> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<Player[]>([]);

  // Carregar favoritos do AsyncStorage quando o componente montar
  useEffect(() => {
    loadFavoritos();
  }, []);

  const loadFavoritos = async () => {
    try {
      const storedFavoritos = await AsyncStorage.getItem('@favoritos');
      if (storedFavoritos) {
        setFavoritos(JSON.parse(storedFavoritos));
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  const saveFavoritos = async (newFavoritos: Player[]) => {
    try {
      await AsyncStorage.setItem('@favoritos', JSON.stringify(newFavoritos));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  const addFavorito = async (player: Player) => {
    const newFavoritos = [...favoritos, player];
    setFavoritos(newFavoritos);
    await saveFavoritos(newFavoritos);
  };

  const removeFavorito = async (playerId: number) => {
    const newFavoritos = favoritos.filter(player => player.id !== playerId);
    setFavoritos(newFavoritos);
    await saveFavoritos(newFavoritos);
  };

  const isFavorito = (playerId: number) => {
    return favoritos.some(player => player.id === playerId);
  };

  return (
    <FavoritosContext.Provider value={{
      favoritos,
      addFavorito,
      removeFavorito,
      isFavorito,
    }}>
      {children}
    </FavoritosContext.Provider>
  );
}; 