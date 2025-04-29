import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as S from './ServicesSection.styles';
import { CirclePlus, CircleMinus } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
}

// Dados dos serviços
const services: ServiceItem[] = [
  { title: "Conexão o Mercado de Trabalho", description: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais." },
  { title: "Aprendizado Imersivo", description: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira." },
  { title: "Ensino Personalizado", description: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor." },
  { title: "Inovação e Transformação", description: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia." }
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Índice do acordeão ativo
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]); // Referências para os conteúdos do acordeão

  // Alterna o estado do accordion
  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  // Animação do accordion com GSAP
  useEffect(() => {
    services.forEach((_, index) => {
      const content = contentRefs.current[index];
      if (!content) return;

      if (activeIndex === index) {
        // Expande o conteúdo do acordeão ativo
        gsap.to(content, { height: content.scrollHeight, opacity: 1, duration: 0.5, ease: 'power2.out' });
      } else {
        // Recolhe o conteúdo dos outros acordeões
        gsap.to(content, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut' });
      }
    });
  }, [activeIndex]);

  return (
    <S.Container>
      <S.BackgroundEffect />
      <S.ParallaxBanner />

      <S.Content>
        <S.Title>Nossa Estrutura</S.Title>

        <S.Accordion>
          {services.map((service, index) => (
            <S.AccordionItem key={index} isActive={activeIndex === index}>
              <S.AccordionHeader onClick={() => toggleAccordion(index)}>
                <S.AccordionTitle>{service.title}</S.AccordionTitle>
                {activeIndex === index ? (
                  <CircleMinus size={32} color="var(--cor-vermelho)" />
                ) : (
                  <CirclePlus size={32} color="var(--cor-vermelho)" />
                )}
              </S.AccordionHeader>

              <S.AccordionContent ref={(el: HTMLDivElement | null) => { contentRefs.current[index] = el; }}>
                <p>{service.description}</p>
              </S.AccordionContent>
            </S.AccordionItem>
          ))}
        </S.Accordion>
      </S.Content>
    </S.Container>
  );
}
