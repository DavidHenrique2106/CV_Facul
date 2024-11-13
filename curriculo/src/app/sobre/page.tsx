import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Sobre() {
  return (
    <>
      <div style={{ textAlign: "center" }} className="sobre">
        <h1>Sobre mim</h1>
        <h2>
          Me chamo <i>David Henrique - Desenvolvedor Júnior</i> <br />
          <br />
        </h2>
        <h4>
          Como desenvolvedor Web Junior, possuo habilidades sólidas em
          linguagens como TypeScript, <br />
          assim como conhecimentos em frameworks front-end, como React e
          Angular. <br />
          Minha expertise inclui lógica de programação avançada e competências
          em tecnologias back-end, <br />
          como Node.js & Django. Além disso, tenho experiência em Quality
          Assurance (QA), <br />
          utilizando ferramentas como Selenium para automação de testes. <br />
          Demonstro eficiência no controle de versão, especialmente com Git, e
          mantenho uma abordagem focada <br />
          na segurança web. Com minha rápida capacidade de aprendizado, trabalho
          em equipe e compromisso com a <br />
          garantia de qualidade, contribuo positivamente para projetos web.
        </h4>{" "}
        <br />
        <div className="CV">
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center" 
            alignItems="center"    
          >
            <Button variant="contained">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="MyCV.pdf"
                download="MeuCurriculo"
              >
                Baixar Currículo
              </a>
            </Button>
            <br /> <br /> <br />
          </Stack>
        </div>
      </div>
    </>
  );
}
