import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview, 
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';


type propsType = {
    message : string,
    sender : string,
};

export default function ContactFormEmail( props : propsType) {
    return (
        <Html>
            <Head />
            <Preview>
                New message from your portfolio site.
            </Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Section>
                            <Heading>
                                You recieved the following message from {props.sender}!
                            </Heading>
                            <Text>
                                {props.message}
                            </Text>
                            <Hr />
                            <Text>The sender's email is: {props.sender}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
