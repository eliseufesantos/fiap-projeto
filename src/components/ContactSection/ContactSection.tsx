import * as S from './ContactSection.styles';

export function ContactSection() {

  // Botão de contato estético com função simples
  const handleButtonClick = () => {
    alert('Entraremos em contato em breve!');
  };

  return (
    <S.Container>
      <S.Title>QUER SABER MAIS?</S.Title>
      { <S.Button onClick={handleButtonClick}>ENTRE EM CONTATO</S.Button>}
    </S.Container>
  );
}
