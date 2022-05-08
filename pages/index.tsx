import type { NextPage } from 'next';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, RepeatIcon } from '@chakra-ui/icons';

const Home: NextPage = () => {
    const addEvent = async () => {
        await axios.post('/api/event');
    };

    const getEvent = async () => {
        await axios.get('/api/event');
    };

    const deleteEvent = async () => {
        await axios.delete('/api/event');
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

            <Button
                leftIcon={<RepeatIcon />}
                colorScheme="orange"
                variant="solid"
                onClick={() => {
                    getEvent();
                }}
            >
                Display Registered Events
            </Button>

            <Button
                leftIcon={<DeleteIcon />}
                colorScheme="red"
                variant="solid"
                onClick={() => {
                    deleteEvent();
                }}
            >
                Delete an Event
            </Button>
        </div>
    );
};

export default Home;
