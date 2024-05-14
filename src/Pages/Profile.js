import React from "react";
import { Div, Header, Button, Icon, Image } from "react-native-magnus";

const Profile = () => {
  return (
    <Div>
      <Header
        p="lg"
        alignment="center"
        shadow={0}
        bg="white"
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
        Profile
      </Header>

      <Div>
        
      </Div>
    </Div>
  );
};

export default Profile;
