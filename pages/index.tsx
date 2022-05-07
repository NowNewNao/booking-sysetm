import type { NextPage } from 'next';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Home: NextPage = () => {
    const addEvent = async () => {
        await axios.post('/api/event');
    };

    return (
        <div>
            <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                onClick={() => {
                    addEvent();
                }}
            >
                New Event
            </Button>
        </div>
    );
};

export default Home;
