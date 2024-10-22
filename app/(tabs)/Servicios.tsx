import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { Asset } from 'expo-asset';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import Header from "@/components/Header";
import { useRouter } from 'expo-router';

const Servicios: React.FC = () => {
    const router = useRouter();
    const [ready, setReady] = useState(false);
    const [images, setImages] = useState<any[]>([]);
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  
    useEffect(() => {
      (async () => {
        const image1 = Asset.fromModule(require('../../assets/images/Monterrey.jpeg'));
        const image2 = Asset.fromModule(require('../../assets/images/boletos.png'));
        const image3 = Asset.fromModule(require('../../assets/images/boletos.png'));
  
        await Promise.all([image1.downloadAsync(), image2.downloadAsync(), image3.downloadAsync()]);
        setImages([image1, image2, image3]);
        setReady(true);
      })();
    }, []);
  
    const toggleDescription = (id: string) => {
      setExpanded(prevState => ({ ...prevState, [id]: !prevState[id] }));
    };
     const _renderImage = () => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image.localUri || image.uri }} style={styles.image} />
    </View>
  );
  
    const formatDate = (dateString: string) => {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options);
    };
    return (
        <SafeAreaView style={Styles.container1}>
          <Header imageUrl="https://viajesramos.s3.us-east-2.amazonaws.com/logo.png" />
          <ScrollView contentContainerStyle={Styles.scrollContainer}>
            {ready && images.length > 0 && images.map((image, index) => (
              <View key={index} style={Styles.card}>
                <Text style={Styles.date}>{formatDate("2023-10-17")}</Text>
                <Image
                  source={{ uri: image.localUri || image.uri }}
                  style={Styles.cardImage}
                />
                <Text style={Styles.title}>{`Servicio ${index + 1}`}</Text>
                <Text style={Styles.description}>
                  {expanded[index.toString()] ? `Descripción del Servicio ${index + 1} completa` : `Descripción del Servicio ${index + 1}...`}
                  <TouchableOpacity onPress={() => toggleDescription(index.toString())}>
                    <Text style={Styles.toggleText}>{expanded[index.toString()] ? 'Ver menos' : 'Ver más'}</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    };
    
    const Styles = StyleSheet.create({
      container1: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#ddd',
        width: '90%',
      },
      date: {
        fontSize: 12,
        color: '#555',
        marginBottom: 5,
      },
      cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      description: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
      },
      toggleText: {
        color: '#1E90FF',
        marginLeft: 5,
      },
    });
    
    export default Servicios;
    