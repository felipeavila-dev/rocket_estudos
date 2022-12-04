import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
`;

export const Avatar = styled.View`
  background-color: lightgray;
  border: 2px solid gray;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
`