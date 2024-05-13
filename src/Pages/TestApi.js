import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Div, Text, Button } from "react-native-magnus";
import axios from "axios";

const TestApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fungsi untuk melakukan permintaan GET ke API
    const fetchData = async () => {
      try {
        // Melakukan permintaan GET ke URL tertentu
        const response = await axios.get(
          "http://192.168.1.7:5000/get"
        );
        // Mengatur data yang diterima ke state
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Panggil fungsi fetchData saat komponen di-mount
    fetchData();

    // Bersihkan efek saat komponen di-unmount
    return () => {
      setData(null);
    };
  }, []); // Dependensi kosong, artinya efek hanya dijalankan sekali saat komponen di-mount

  return (
    <Div>
      <Text>Data dari API:</Text>
      <ScrollView>
      {data && data.map((item) => (
        <Div key={item._id} my={20}>
          <Text>Nama: {item.name}</Text>
          <Text>Alamat: {item.address}</Text>
          <Text>Umur: {item.age}</Text>
          <Text>Jenis Kelamin: {item.gender}</Text>
          <Text>Devisi: {item.devision}</Text>
        </Div>
      ))}
      </ScrollView>
    </Div>
  );
};

export default TestApi;
