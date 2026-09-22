# Roteiro do instrutor

## Duração sugerida

Entre 90 e 120 minutos, com o ambiente preparado antes do encontro.

## Estratégia

O laboratório funciona melhor como construção conduzida. Apresente um conceito, altere o projeto e faça uma verificação curta com a turma antes de avançar.

## Distribuição de tempo

| Bloco | Tempo | Foco |
| --- | ---: | --- |
| Problema e demonstração | 10 min | Agenda, filtros e detalhes |
| React, Next.js e App Router | 15 min | Modelo mental e rotas |
| Componentes e estilos | 15 min | Composição e CSS Modules |
| Dados e Server Components | 15 min | Serviço e renderização no servidor |
| Filtros e Client Components | 20 min | Interação e estado na URL |
| Rotas dinâmicas e estados | 15 min | Detalhes, loading, erro e 404 |
| Validação e debate | 10 min | Build, acessibilidade e próximos workshops |

## Perguntas para envolver a turma

- Quais informações são indispensáveis para decidir ir a uma monitoria?
- A consulta precisa de login? Que atrito isso criaria?
- O filtro deve viver apenas no navegador ou também na URL?
- O que muda quando os dados passam a vir de uma API?
- Qual parte realmente precisa ser um Client Component?
- O que o usuário deve ver quando não há resultados?

## Pontos de pausa

1. Depois da estrutura de rotas, peça que os alunos prevejam a URL gerada por `[id]`.
2. Antes de adicionar `"use client"`, pergunte por que o formulário não pode depender apenas do servidor.
3. Antes da página 404, peça exemplos de identificadores inválidos.
4. Antes do build, revise os critérios de aceite com a turma.

## Preparação recomendada

- execute `npm install` antes da aula;
- valide `npm run build`;
- deixe uma monitoria extra pronta para a prática de dados;
- tenha uma URL de API simulada caso queira demonstrar a troca da camada de serviço;
- mantenha o arquivo de design aberto apenas como referência de fluxo e hierarquia.

## Conexão com os demais workshops

| Workshop | Continuidade do Portal de Monitorias |
| --- | --- |
| Backend com Node.js | API e persistência das monitorias |
| Git, Docker e CI/CD | fluxo de contribuição, container e pipeline |
| Arquitetura e padrões | fronteiras, serviços, autenticação e auditoria |
| Frontend avançado | área autenticada, formulários e testes |
