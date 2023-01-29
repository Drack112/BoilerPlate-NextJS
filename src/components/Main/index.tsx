import React from "react"
import * as S from "./styles"

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="logo" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="illustration" />
  </S.Wrapper>
)

export default Main
