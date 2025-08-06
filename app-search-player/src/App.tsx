import { Stack } from 'expo-router';
import { FavoritosProvider } from '@/contexts/FavoritosContext';

export default function App() {
  return (
    <FavoritosProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "Pesquisa de Atletas",
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="dashboard" 
          options={{ 
            title: "Resultados",
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="favoritos" 
          options={{ 
            title: "Meus Favoritos",
            headerShown: false 
          }} 
        />
      </Stack>
    </FavoritosProvider>
  );
} 