import React from 'react';
import { Text, Button, Avatar } from '@mantine/core';
import {
  IconBooks, IconArrowRight, IconBook, IconSettings,
} from '@tabler/icons-react';
import useStore from '../store';

function Profile() {
  return (
    <div className="profile">
      <div className="left-dash">
        <Avatar color="yellow" size="lg" radius="xl" mb="lg">JP</Avatar>
        <Button
          fullWidth
          variant="light"
          leftSection={<IconBooks size={18} />}
          rightSection={<IconArrowRight size={18} />}
          color="yellow"
          mb="lg"
        >My Library
        </Button>
        <Button
          fullWidth
          variant="light"
          leftSection={<IconBook size={18} />}
          rightSection={<IconArrowRight size={18} />}
          color="yellow"
          mb="lg"
        >Add Book
        </Button>
        <Button
          fullWidth
          variant="light"
          leftSection={<IconSettings size={18} />}
          rightSection={<IconArrowRight size={18} />}
          color="yellow"
        >Settings
        </Button>
      </div>
      <div className="center-dash">
        <div className="center-top-dash">
          <Text
            size="xl"
            fw={700}
            color="yellow"
          >
            My Library
          </Text>

        </div>
        <div className="center-botton-dash">
          <Text
            size="xl"
            fw={700}
            color="yellow"
          >
            Recommended Trades
          </Text>
        </div>
      </div>
      <div className="right-dash">
        <Text
          size="xl"
          fw={700}
          color="yellow"
        >
          Active Offers
        </Text>
      </div>

    </div>
  );
}

export default Profile;
