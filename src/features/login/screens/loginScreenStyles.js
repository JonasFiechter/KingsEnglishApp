import styled from "styled-components/native";
import { Button } from "react-native";

function myButtonFuntion(props) {
    return (
        <Button
        title="Press me"
        onPress={() => console.log('Simple Button pressed')}
    />)
}

export const MyButton = styled(myButtonFuntion)`
    flex: 1;
`;