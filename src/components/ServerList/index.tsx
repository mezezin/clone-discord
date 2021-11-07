import React from 'react';
import ServerButton from '../ServerButton'
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton hasNotifications mentions={1} />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton hasNotifications mentions={3} />
            <ServerButton />
            <ServerButton />
        </Container>
    )
};

export default ServerList;