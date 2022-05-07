import type { NextPage } from 'next';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

const Home: NextPage = () => {
    const addEvent = async () => {
        await axios.post('/api/event');
    };

    return (
        <div>
            <Button colorScheme="blue" onClick={() => addEvent()}>
                Insert User
            </Button>
        </div>
    );
};

export default Home;
