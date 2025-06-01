import { Picker } from "@react-native-picker/picker";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { View } from "react-native";
import { Button, Div, Header, Icon, Input } from "react-native-magnus";

const Identity = ({ navigation }) => {
  const ip = process.env.EXPO_PUBLIC_SERVER_ADDR;
  const route = useRoute();
  const { worker } = route.params;

  const [form, setForm] = useState({
    name: `${worker.name}`,
    age: `${worker.age}`,
    address: `${worker.address}`,
    gender: `${worker.gender}`,
    phone: `${worker.phone}`,
    email: `${worker.email}`,
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const defaultPlaceholder = {
    name: "Nama",
    age: "Umur",
    address: "Alamat",
    phone: "No. Telepon",
    gender: "Jenis Kelamin",
    email: "Email",
  };

  const defaultValue = {
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "",
    email: "",
  };

  const iconConfig = {
    name: { name: "user", fontFamily: "Feather" },
    age: { name: "calendar", fontFamily: "Feather" },
    address: { name: "home", fontFamily: "Feather" },
    phone: { name: "phone", fontFamily: "Feather" },
    gender: { name: "users", fontFamily: "Feather" },
    email: { name: "mail", fontFamily: "Feather" },
  };

  const handleSave = async () => {
    const filteredForm = Object.fromEntries(
      Object.entries(form).filter(
        ([key, value]) => value && value !== "undefined"
      )
    );

    axios
      .put(`${ip}/tasks/worker/${worker._id}`, filteredForm)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Div bg="#F2F5FF" h="100%">
      <Header
        p="lg"
        alignment="center"
        shadow={0}
        bg="#F2F5FF"
        prefix={
          <Button bg="transparent" onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              fontFamily="Ionicons"
              fontSize={25}
              color="#2E3A59"
            />
          </Button>
        }
      >
        Ubah Identitas
      </Header>

      <Div mx={20}>
        {Object.entries(form).map(([key, value]) =>
          key !== "gender" ? (
            <View key={key}>
              <Input
                placeholder={
                  value === "undefined" ? defaultPlaceholder[key] : value
                }
                p={10}
                focusBorderColor="#008CFF"
                prefix={
                  <Icon
                    name={iconConfig[key].name}
                    color="gray900"
                    fontFamily={iconConfig[key].fontFamily}
                    fontSize={17}
                  />
                }
                borderColor="#D8DEF3"
                rounded={10}
                mb={20}
                onChangeText={(text) => handleChange(key, text)}
                value={value === "undefined" ? defaultValue[key] : value}
              />
            </View>
          ) : (
            <Div
              bg="white"
              rounded={10}
              mb={20}
              borderColor="#D8DEF3"
              borderWidth={1}
            >
              <View key={key}>
                <Picker
                  itemStyle={{ backgroundColor: "grey", color: "blue" }}
                  onValueChange={(item) => handleChange(key, item)}
                  selectedValue={value === "undefined" ? "" : value}
                >
                  <Picker.Item label="Laki-laki" value="male" />
                  <Picker.Item label="Perempuan" value="female" />
                </Picker>
              </View>
            </Div>
          )
        )}
        <Button
          onPress={() => handleSave()}
          w="100%"
          h={50}
          rounded={10}
          bg="#008CFF"
          fontWeight="900"
        >
          Simpan
        </Button>
      </Div>
    </Div>
  );
};

export default Identity;
