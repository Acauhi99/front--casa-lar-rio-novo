import {
  Typography,
  Card,
  CardContent,
  Container,
  styled,
  Box,
} from "@mui/material";

const StyledCard = styled(Card)(() => ({
  textAlign: "left",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
  },
}));

export const About = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        marginTop: "40px",
        marginBottom: "80px", 
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "2.5rem",
          marginTop: "100px", 
          marginBottom: "40px",
        }}
      >
        Nossa Casa
      </Typography>

      <Box sx={{ marginBottom: "24px" }}>
        <img
          src="/public/frente-asilo.png"
          alt="Instituição"
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>

      <StyledCard>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: "2rem",
              marginBottom: "16px",
            }}
          >
            Histórico Centenário da Casa Lar Cônego Agostinho Augusto França
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#616161",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            <strong>Homenagem ao Patrono</strong>
            <br />
            Em 1918, ano da fundação da Casa Lar Cônego Augusto França, então
            chamada de <b>Albergue dos Pobres</b>, o jornal "109" publicou um artigo
            especial em homenagem ao patrono da instituição:
            <blockquote>
              "Ocorreu neste mês de novembro a data natalícia do venerando
              Cônego Agostinho Augusto França, vulto acatado do eminente Clero
              Brasileiro. Aqui residindo há muitos anos, levando uma vida
              dedicada ao bem da população, o querido 'padrinho vigário' tem um
              amigo em cada rionovense, que vê nele a encarnação perfeita da
              bondade, da honra e da honestidade."
            </blockquote>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#616161",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            <strong>Cônego Agostinho Augusto França</strong> nasceu em 1º de
            novembro de 1834, em Santa Rita Durão (Mariana/MG). Ordenou-se à
            "Freguesia do Rio Novo" como Vigário Colado e assumiu a paróquia em
            6 de fevereiro de 1866. Sua dedicação à comunidade foi marcada por
            importantes realizações, como:
            <ul style={{ textAlign: "left", marginLeft: "24px" }}>
              <li>
                Conclusão da construção da antiga Igreja Matriz de Nossa Senhora
                da Conceição, padroeira do município.
              </li>
              <li>Construção da Capela Senhor dos Passos e da Igreja São Sebastião.</li>
              <li>
                Fundação e manutenção da Santa Casa de Misericórdia e do Asilo
                Casa Lar.
              </li>
            </ul>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#616161",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            Após 22 anos como Vigário da Paróquia de Nossa Senhora da Conceição
            e 36 anos como Pároco da Igreja São Sebastião, Cônego Agostinho
            Augusto França faleceu em 11 de outubro de 1921, aos 87 anos. Hoje,
            o bairro Vila França é uma homenagem ao seu legado, reconhecendo sua
            importância como grande benfeitor e símbolo de dedicação ao povo de
            Rio Novo.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: "2rem",
              marginBottom: "16px",
            }}
          >
            Estrutura e Funcionamento Atual
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#616161",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Após a morte do fundador, a administração da instituição passou a
            ser conduzida por uma diretoria eleita a cada três anos. Essa
            diretoria é composta por seis membros administrativos: Presidente,
            Vice-Presidente, Primeiro e Segundo Tesoureiro, além de dois
            Secretários. Há também um Conselho Fiscal, com três integrantes, e
            um Conselho Deliberativo, que organiza reuniões para discutir e
            aprovar decisões importantes.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#616161",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            As reuniões são realizadas na capela lateral da instituição, onde
            são debatidos os problemas e definidas as estratégias para garantir
            o funcionamento e a continuidade do trabalho iniciado pelo Cônego
            Agostinho. Esse modelo administrativo reflete o compromisso da
            instituição em honrar o legado de seu fundador, mantendo-se como um
            espaço de acolhimento, solidariedade e dedicação à comunidade.
          </Typography>
        </CardContent>
      </StyledCard>
    </Container>
  );
};
