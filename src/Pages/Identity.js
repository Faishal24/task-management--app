import React, { useState } from "react";
import { Button, Icon, Div, Header, Input, Text } from "react-native-magnus";
import { useRoute } from "@react-navigation/native";

const Identity = () => {
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
  return (
    <Div bg="#F2F5FF" h="100%">
      <Header
        p="lg"
        alignment="center"
        shadow={0}
        bg="#F2F5FF"
        prefix={
          <Button bg="transparent">
            <Icon
              name="arrow-back"
              fontFamily="Ionicons"
              fontSize={25}
              color="#2E3A59"
            />
          </Button>
        }
      >
        Identitas
      </Header>

      <Div mx={20}>
        {Object.entries(form).map(([key, value]) => (
          <Input
            placeholder={value === 'undefined' ? key : value}
            p={10}
            focusBorderColor="#008CFF"
            prefix={
              <Icon
                name="user"
                color="gray900"
                fontFamily="Feather"
                fontSize={17}
              />
            }
            borderColor="#F2F5FF"
            rounded={10}
            mb={20}
            onChangeText={(text) => handleChange(key, text)}
            value={value === 'undefined' ? '' : value}
          />
        ))}
        <Button onPress={() => console.log(form)}>Tes</Button>
      </Div>
    </Div>
  );
};

export default Identity;
