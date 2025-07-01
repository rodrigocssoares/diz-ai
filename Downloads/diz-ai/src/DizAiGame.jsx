import { useState } from "react";

const lightQuestions = [
  "Qual é seu lanche favorito de infância?",
  "Se pudesse viver um dia como um personagem de filme, qual escolheria?",
  "Qual música você canta no chuveiro sem vergonha?",
  "Praia ou montanha?",
  "Qual foi o último presente que te deixou feliz?",
  "Qual mania estranha você tem e ninguém sabe?",
  "Um talento inútil que você tem?",
  "Se ganhasse uma passagem para qualquer lugar agora, iria pra onde?",
  "Qual emoji te representa hoje?",
  "Já acreditou em alguma teoria da conspiração? Qual?",
];

const deepQuestions = [
  "Qual foi a maior reviravolta da sua vida até hoje?",
  "O que você mais aprendeu com seus relacionamentos anteriores?",
  "O que te faz sentir mais você mesmo?",
  "Existe algo que você não superou totalmente?",
  "Que parte sua você esconde até confiar?",
  "Você tem medo de se apaixonar?",
  "Qual é o seu maior desafio pessoal atualmente?",
  "O que te faz se sentir seguro(a) em um relacionamento?",
  "Você acredita em destino ou escolhas?",
  "Quando foi a última vez que você se sentiu verdadeiramente visto(a)?",
];

export default function DizAiGame() {
  const [question, setQuestion] = useState("");
  const [usedLight, setUsedLight] = useState([]);
  const [usedDeep, setUsedDeep] = useState([]);

  function getRandomQuestion(type) {
    const questions = type === "light" ? lightQuestions : deepQuestions;
    const used = type === "light" ? usedLight : usedDeep;
    const available = questions.filter((q) => !used.includes(q));

    if (available.length === 0) {
      setQuestion("Já usamos todas as perguntas desse tipo! 🙈");
      return;
    }

    const next = available[Math.floor(Math.random() * available.length)];
    setQuestion(next);
    type === "light"
      ? setUsedLight([...usedLight, next])
      : setUsedDeep([...usedDeep, next]);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      padding: "30px",
      fontFamily: "sans-serif"
    }}>
      <h1>🎲 Jogo: Diz Aí</h1>
      <p style={{ textAlign: "center", maxWidth: "400px" }}>
        Clique para sortear uma pergunta leve ou profunda. Responda com sinceridade (ou pule uma vez 😉).
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => getRandomQuestion("light")}>🎈 Pergunta Leve</button>
        <button onClick={() => getRandomQuestion("deep")}>🌊 Pergunta Profunda</button>
      </div>
      {question && (
        <div style={{
          maxWidth: "600px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center"
        }}>
          <strong>{question}</strong>
        </div>
      )}
    </div>
  );
}