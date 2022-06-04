import React from "react"
import { View, Text, StatusBar, Platform } from "react-native"
import styled from 'styled-components/native'

const FeedScreen = styled.SafeAreaView`
    flex: 1px;
    background-color: ${(props) => props.theme.colors.bg.tertiary};
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const HeadSection = styled.View`
    background-color: ${(props) => props.theme.colors.ui.secondary};
    padding: ${(props) => props.theme.sizes[1]};
`;

console.log(StatusBar.currentHeight, Platform.OS)

export const HomeFeed = () => {
    return (
        <FeedScreen>
            <HeadSection>
                <Text>SECTION 1</Text>
            </HeadSection>
            <View>
                <Text>Second part!</Text>
            </View>
            <View>
                <Text>Third part!</Text>
            </View>
        </FeedScreen>
    );
};