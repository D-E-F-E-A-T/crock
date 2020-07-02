import styled from 'styled-components';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
align-items: center;
`;

export const Title = styled.Text`
color: #000;
font-size: 25px;
font-weight: bold;
`;

export const InputForm = styled.TextInput`
width: 90%;
height: 50px;

border-width: 1px;
border-radius: 8px;

background-color: #FFF;
margin: 5px;

padding: 10px;
`;

export const InputFormLocal = styled.TextInput`
width: 43%;
height: 50px;

border-width: 1px;
border-radius: 8px;

background-color: #FFF;
margin: 5px;

text-align: center;
`;

export const ButtonReturn = styled.TouchableOpacity`
margin: 8px;
`;

export const Button = styled.TouchableOpacity`
width: 90%;
height: 50px;
border-radius: 8px;
background-color: #FFA500;

align-items: center;
justify-content: center;

flex-direction: row;
justify-content: space-between;
padding: 10px;
margin-top: 10px;
`;

export const TextButton = styled.Text`
color: #FFF;
font-size: 20px;
font-weight: bold;
`;

export const Header = styled.View`
width: 100%;
height: 20%;
margin-bottom: 8px;
`;

export const ContainerInputs = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const PickerSelect = styled.Picker`
width: 150px;
height: 50px;
`;

export const ContainerPicker = styled.View`
background-color: #F2EDED;
border-radius: 8px;

margin: 5px;
`;
export const ContainerEndereco = styled.View`
flex-direction: row;
`;

export const InputNumero = styled.TextInput`
width: 20%;
height: 50px;

border-width: 1px;
border-radius: 8px;

background-color: #FFF;
margin: 5px;

text-align: center;
`;

export const InputEndereco = styled.TextInput`
width: 67%;
height: 50px;

border-width: 1px;
border-radius: 8px;

background-color: #FFF;
margin: 5px;

padding: 10px;
`;