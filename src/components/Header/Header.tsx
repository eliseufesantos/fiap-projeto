import * as S from './Header.styles';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from '../../assets/svg/logo.svg';
import ScrollDownArrow from '../../assets/svg/scroll-down-arrow.svg';

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs para animação
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollRef = useRef(null);

  // Animação de entrada
  useEffect(() => {
    gsap.from([titleRef.current, subtitleRef.current, descriptionRef.current], {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
    gsap.from(scrollRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      delay: 1.3,
      ease: 'power2.out',
    });
  }, []);

  // Atualização da barra de progresso
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar até a seção
  const scrollToSection = () => {
    const element = document.getElementById('hero-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.Container>
      <S.NavBar>
        <S.Logo src={Logo} alt="Logo da FIAP" />
        <S.ProgressBar style={{ width: `${scrollProgress}%` }} />
      </S.NavBar>

      <S.Content>
        <S.Title ref={titleRef}>A MAIOR FACULDADE</S.Title>
        <S.Subtitle ref={subtitleRef}>DE TECNOLOGIA</S.Subtitle>
        <S.Description ref={descriptionRef}>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
        </S.Description>
      </S.Content>

      <S.ScrollContainer ref={scrollRef} onClick={scrollToSection}>
        <S.ScrollText>SCROLL DOWN</S.ScrollText>
        <S.ScrollIcon src={ScrollDownArrow} alt="Scroll Down Icon" />
      </S.ScrollContainer>
    </S.Container>
  );
}
