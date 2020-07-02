import styled from 'styled-components';
import LienarGradient from 'react-native-linear-gradient';

export const Container = styled(LienarGradient).attrs({
    colors: ['#FFB333','#FEA13A'],
    start:{x: 0.2, y: 0.5}, end:{x: 0.5, y: 1.0},
    locations:[0,1.5,0.6],
})`
flex: 1;
`;
 
export const Input = styled.TextInput`
border-bottom-color: #FFF;
border-bottom-width: 1px;
width: 80%;
`;

export const TextButton = styled.Text`
font-size: 18px;
margin-right: 8px;
color: #FFF;
`;

export const Button = styled.TouchableOpacity`

width: 80%;
`;

export const ContainerTextButton = styled(LienarGradient).attrs({
    colors: ['#FFB000','#FEA13A'],
    start:{x: 0.2, y: 0.5}, end:{x: 0.5, y: 1.0},
    locations:[0,1.5,0.6],
})`
margin-top: 15px;
padding: 10px;
border-radius: 10px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const CantainerForm = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Form = styled.View`
width: 80%;
height: 50%;

align-items: flex-end;
justify-content: center;
`;

export const Title = styled.Text`
color: #FFF;
font-size: 30px;
font-weight: bold;
`;

export const TextSignUp = styled.Text`
color: #FFB333;
font-weight: bold;
`;

export const Header = styled.View`
padding-top: 10px;
`;