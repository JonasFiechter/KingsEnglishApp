import React from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import styled from 'styled-components/native';
import { Post } from "../components/post/components/post.js";

const FeedScreen = styled.SafeAreaView`
    flex: 1px;
    background-color: ${(props) => props.theme.colors.bg.tertiary};
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const HeadSection = styled.View`
    background-color: ${(props) => props.theme.colors.bg.tertiary};
    padding: ${(props) => props.theme.sizes[1]};
`;

const Body = styled.View`
    flex: 1px;
    background-color: ${(props) => props.theme.colors.ui.secondary};
`;

const TailSection = styled.View`
    flex: 1px;
    flex-grow: 0.1;
`;

export const HomeFeed = () => {
    return (
        <FeedScreen>
            <HeadSection>
                <Text>SECTION 1</Text>
            </HeadSection>
            <Body>
                <Post/>
            </Body>
            <TailSection>
                <Text>Third part!</Text>
            </TailSection>
        </FeedScreen>
    );
};