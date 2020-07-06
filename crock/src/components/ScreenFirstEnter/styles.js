import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
width: 90%;
height: 50px;

background-color: #FFF;

border-radius: 8px;

align-items: center;
justify-content: center;
margin: 8px;
`;

export const ContainerTitle = styled.View`
align-items: center;
margin-top: 50px;
`;

export const TextButton = styled.Text`
color: #FFB333;
font-weight: bold;
font-size: 17px;
`;

export const Title = styled.Text`
font-size: 25px;
font-weight: bold;
margin: 5px;
color: #FFF;
`;