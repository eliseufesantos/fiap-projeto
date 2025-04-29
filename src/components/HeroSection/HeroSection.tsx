import { useState, useEffect } from 'react';
import * as S from './HeroSection.styles';
import { Modal } from '../Modal/Modal';
import Next from '../../assets/imgs/fiap-next.jpg';
import ScrollUp from '../../assets/svg/scroll-up-arrow.svg';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla a exibição do modal
  const [showScrollTop, setShowScrollTop] = useState(false); // Controla a visibilidade do botão "Voltar ao topo"

  useEffect(() => {
    // Mostra o botão "Voltar ao topo" quando o usuário rolar além da altura da janela
    const handleScroll = () => setShowScrollTop(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Remove o listener ao desmontar o componente
  }, []);

  // Função para rolar suavemente até o topo da página
  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <S.Container id="hero-section">
      <S.Title>EDUCAÇÃO E TECH</S.Title>

      <S.TextWrapper>
        <S.LeftColumn>
          <S.Paragraph>
            A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
          </S.Paragraph>

          {/* Imagem clicável que abre o modal */}
          <S.ImageWrapper onClick={() => setIsModalOpen(true)}>
            <img src={Next} alt="FIAP NEXT" />
            <S.ImageLabel>Figura 1 – Logotipo da FIAP NEXT</S.ImageLabel>
          </S.ImageWrapper>
        </S.LeftColumn>

        <S.RightColumn>
          <S.Paragraph>
            Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem diversas áreas, incluindo:
          </S.Paragraph>

          {/* Lista de cursos */}
          <S.List>
            <S.ListItemSubject>Tecnologia e Desenvolvimento</S.ListItemSubject>
            {['Desenvolvimento de Software', 'Inteligência Artificial', 'Data Science', 'Cibersegurança'].map((item, index) => (
              <S.ListItem key={index}>
                <S.HighlightedText>{item}</S.HighlightedText>
              </S.ListItem>
            ))}

            <S.ListItemSubject>UX/UI, Marketing Digital</S.ListItemSubject>
            <S.ListItemSubject>Metodologias e Gestão</S.ListItemSubject>
          </S.List>

          <S.Paragraph>
            Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
          </S.Paragraph>
        </S.RightColumn>
      </S.TextWrapper>

      {/* Modal exibido ao clicar na imagem */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img src={Next} alt="FIAP NEXT Ampliada" />
        </Modal>
      )}

      {/* Botão "Voltar ao topo" exibido ao rolar a página */}
      {showScrollTop && (
        <S.ScrollTopButton onClick={handleScrollToTop}>
          <img src={ScrollUp} alt="Voltar ao topo" />
        </S.ScrollTopButton>
      )}
    </S.Container>
  );
}
