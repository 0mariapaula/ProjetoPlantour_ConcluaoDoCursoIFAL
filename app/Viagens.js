import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import BottomNavBar from './BottomNavBar'; // Ajuste o caminho conforme necessário
import { useRouter } from 'expo-router';
import { db } from './../firebaseConfig'; // Ajuste o caminho conforme necessário
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const Viagens = ({ openSearchModal }) => {
  const router = useRouter();
  const [roteiros, setRoteiros] = useState([]);
  
  useEffect(() => {
    const fetchRoteiros = async () => {
      try {
        const usuarioId = 'ID_DO_USUARIO_AUTENTICADO'; // Substitua com o ID do usuário autenticado
        const roteirosRef = collection(db, 'roteiros');
        const q = query(roteirosRef, where('usuarioId', '==', usuarioId));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const roteirosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setRoteiros(roteirosList);
        });

        return () => unsubscribe(); // Limpeza do listener
      } catch (error) {
        console.error('Erro ao buscar roteiros: ', error);
      }
    };

    fetchRoteiros();
  }, []);
  const handleRoteiroPress = (item) => {
    router.push({
      pathname: '/DetalhesRoteiro',
      params: { roteiro: item },
    });
  };
  

  const renderRoteiroItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRoteiroPress(item)} style={styles.roteiroItem}>
      <Text style={styles.roteiroTitle}>{item.nome}</Text>
      <Text style={styles.roteiroDetails}>Início: {new Date(item.dataInicio).toLocaleDateString()}</Text>
      <Text style={styles.roteiroDetails}>Final: {new Date(item.dataFinal).toLocaleDateString()}</Text>
      <Text style={styles.roteiroDetails}>Visibilidade: {item.visibilidade}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>Plantour</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.roteiros}>Meus Roteiros</Text>
        <FlatList
          data={roteiros}
          renderItem={renderRoteiroItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
        <Botao 
          texto="Criar roteiro" 
          icone={{ uri: 'https://img.icons8.com/ios/452/clipboard.png' }} 
          onPress={() => router.push('/CriarRoteiro')} 
        />
      </View>
      <BottomNavBar openSearchModal={openSearchModal} />
    </View>
  );
};

const Botao = ({ texto, icone, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Image source={icone} style={styles.iconeBotao} />
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    height: 80,
    width: '100%',
    backgroundColor: '#2D9AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  roteiros: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#2D9AFF',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    justifyContent: 'center',
  },
  iconeBotao: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textoBotao: {
    color: '#2D9AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    width: '100%',
  },
  roteiroItem: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  roteiroTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  roteiroDetails: {
    fontSize: 14,
    color: '#666666',
  },
});

export default Viagens;
