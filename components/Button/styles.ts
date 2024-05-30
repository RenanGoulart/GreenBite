import styled from "styled-components/native";

export const Container = styled.Pressable`
  justify-content: center;
  align-items: center;

  padding: 6px 24px;

  border-radius: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  color: ${({ theme }) => theme.colors.white_ff};
`;
