import React from "react";
import { Div, Text } from "react-native-magnus";
import { getHours } from "date-fns";

const Greeting = ({ worker }) => {
  const currentDate = new Date();
  const currentHour = getHours(currentDate);
  
  let greetingMessage = 'Selamat Pagi';
  if (currentHour >= 12 && currentHour < 15) {
    greetingMessage = 'Selamat Siang';
  } else if (currentHour >= 15 && currentHour < 18) {
    greetingMessage = 'Selamat Sore';
  } else if (currentHour >= 18 || currentHour < 6) {
    greetingMessage = 'Selamat Malam';
  }

  return (
    <Div>
      <Text
        fontSize="5xl"
        fontWeight="900"
        textTransform="uppercase"
        letterSpacing={2}
        mt="sm"
        mb={5}
      >
        Hi, {(worker.name || "Guest").split(' ')[0]}!
      </Text>
        <Text mb={30} fontSize="xl">
          {greetingMessage}
        </Text>
    </Div>
  );
};

export default Greeting;
