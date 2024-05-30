import { TextStyle, ViewStyle } from "react-native";
import { ButtonText, Container } from "./styles";

interface Props {
  children: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
}

export const Button = ({ children, style, textStyle, onPress }: Props) => {
  return (
    <Container onPress={onPress} style={style}>
      <ButtonText style={textStyle}>{children}</ButtonText>
    </Container>
  );
};
