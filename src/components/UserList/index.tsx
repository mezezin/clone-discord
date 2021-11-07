import React from 'react';
import { Container, User, Avatar, Role } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ' '} />

            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>)
};
const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="zezinnnnn" />

            <Role>Offline - 18</Role>
            <UserRow nickname="thur" isBot />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
        </Container>
    );
};

export default UserList;