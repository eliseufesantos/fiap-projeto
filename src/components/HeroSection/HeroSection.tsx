import { useState, useEffect } from 'react';
import * as S from './HeroSection.styles';
import { Modal } from '../Modal/Modal';
import Next from '../../assets/imgs/fiap-next.jpg';
import ScrollUp from '../../assets/svg/scroll-up-arrow.svg';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Container id='hero-section'>
    <S.Title>EDUCAÇÃO E TECH</S.Title>

    <S.TextWrapper>
        <S.LeftColumn>

            <S.Paragraph>
            A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
            </S.Paragraph>

            <S.ImageWrapper onClick={() => setIsModalOpen(true)}>
            <img src={Next} alt="FIAP NEXT" />
            <S.ImageLabel>Figura 1 – Logotipo da FIAP NEXT</S.ImageLabel>
            
            </S.ImageWrapper>
        </S.LeftColumn>

        <S.RightColumn>
            <S.Paragraph>
                Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:
            </S.Paragraph>

            <S.List>
                <S.ListItemSubject>
                    Tecnologia e Desenvolvimento
                </S.ListItemSubject>

                    <S.ListItem><S.HighlightedText>Desenvolvimento de Software</S.HighlightedText></S.ListItem>
                    <S.ListItem><S.HighlightedText>Inteligência Artificial</S.HighlightedText></S.ListItem>
                    <S.ListItem><S.HighlightedText>Data Science</S.HighlightedText></S.ListItem>
                    <S.ListItem><S.HighlightedText>Cibersegurança</S.HighlightedText></S.ListItem>

                <S.ListItemSubject>
                    UX/UI, Marketing Digital
                </S.ListItemSubject>

                <S.ListItemSubject>
                    Metodologias e Gestão
                </S.ListItemSubject>

            </S.List>


            <S.Paragraph>
                Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
            </S.Paragraph>
        </S.RightColumn>
    </S.TextWrapper>


      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img src={Next} alt="FIAP NEXT Ampliada" />
        </Modal>
      )}

      {showScrollTop && (
        <S.ScrollTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={ScrollUp} alt="Voltar ao topo" />
        </S.ScrollTopButton>
      )}

    </S.Container>
  );
}
