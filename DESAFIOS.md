# Desafios de evolução

Os desafios abaixo conectam o laboratório aos demais workshops. Eles não fazem parte da primeira release pública.

## 1. Integração com backend

Substitua os dados locais por uma API Node.js.

### Entrega esperada

- criar uma variável `NEXT_PUBLIC_API_URL`;
- implementar `fetch` dentro de `monitoring-service.ts`;
- manter a assinatura usada pelas páginas;
- tratar indisponibilidade da API;
- preservar o estado vazio quando a resposta for válida e sem itens.

## 2. CRUD da coordenação

Crie uma área autenticada para cadastrar, editar e excluir monitorias.

### Campos mínimos

- disciplina;
- monitor responsável;
- campus;
- dia da semana;
- horário inicial e final;
- sala;
- observações.

### Critérios de aceite

- apenas a coordenação pode alterar qualquer monitoria;
- a listagem pública continua sem login;
- alterações devem aparecer na agenda;
- o sistema deve confirmar ações destrutivas.

## 3. Acesso do monitor

Permita que a coordenação crie e gerencie o acesso dos monitores.

### Critérios de aceite

- o monitor usa e-mail institucional;
- o monitor visualiza apenas suas monitorias;
- o monitor não pode cadastrar novos usuários;
- a coordenação pode executar as mesmas ações do monitor.

## 4. Registro de presença

O monitor registra a própria presença na monitoria, como um ponto por local. Não se trata da presença dos estudantes.

### Critérios de aceite

- o registro exige login;
- a presença está vinculada à monitoria e ao horário;
- a coordenação consulta a lista de presenças;
- registros duplicados devem ser impedidos;
- data, hora e usuário ficam registrados.

## 5. Histórico de alterações

Registre operações de criação, edição e exclusão realizadas pela coordenação ou pelo monitor.

### Dados mínimos

- usuário responsável;
- ação realizada;
- monitoria afetada;
- data e hora;
- valores anteriores e novos quando aplicável.

## 6. Testes

Adicione testes para os fluxos centrais.

### Casos sugeridos

- serviço filtra por campus;
- busca ignora acentos e diferença entre maiúsculas e minúsculas;
- combinação de filtros retorna somente itens compatíveis;
- página de detalhes retorna 404 para um identificador inválido;
- estado vazio oferece retorno para a agenda completa.
