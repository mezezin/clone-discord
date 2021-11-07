import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        author='fulano'
                        date='01/01/2021'
                        content='Feliz Ano Novo!'
                    />
                ))}
                <ChannelMessage
                    author='zezinnnnn'
                    date='20/05/2021'
                    content='Hoje é o meu aniversário!'
                />
                <ChannelMessage
                    author='thur'
                    date='07/11/2021'
                    content={
                        <>
                            <Mention>@zezinnnnn</Mention>, me carrega no Left 4 Dead, pelo amor de Deus?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>

        </Container>
    );
};

export default ChannelData;