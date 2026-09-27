# Monta Horário — Elétrica/Eletrônica UTFPR Curitiba

Fork pessoal do [Monta Horário UTFPR](https://github.com/bolsgo/monta-horario-utfpr),
recortado para os cursos de Engenharia Elétrica e Engenharia Eletrônica do
câmpus Curitiba. Permite buscar turmas, montar a grade semanal, receber
alertas visuais sobre choques de horário e salvar até 6 combinações de
grade diferentes (abas 1 a 6), tudo salvo localmente no navegador.

Feito para uso pessoal, sem vínculo com a UTFPR.

## Licença (AGPL-3.0)

Este projeto é derivado de um repositório licenciado sob **AGPL-3.0**, e
continua sob a mesma licença. Isso significa, na prática:

- Você pode usar, estudar e modificar o código livremente.
- Se este site ficar acessível publicamente (ex: hospedado no GitHub
  Pages), o código-fonte — incluindo suas modificações — precisa
  continuar disponível publicamente sob a mesma licença (arquivo
  `LICENSE`).
- Não é permitido fechar/tornar proprietário o código de uma versão
  publicamente acessível.

## Estrutura dos dados

Os dados continuam organizados por sede e curso, do jeito que o projeto
original define, só que com quase tudo removido exceto o necessário:

- `data/sedes.json` — só lista `curitiba`.
- `data/curitiba/manifest.json` — só lista `eng-eletrica` e `eng-eletronica`.
- `data/curitiba/eng-eletrica.json` e `data/curitiba/eng-eletronica.json` —
  disciplinas de cada curso.

`config.js` guarda o que é igual pra todo curso (dias da semana, horários
das aulas M1–N5, paleta de cores).

### Adicionar outro curso ou sede de volta

1. Abra `gerador.html` no navegador.
2. Cole o HTML do relatório "Turmas Abertas" da UTFPR desse curso (Firefox:
   This Frame > View Frame Source).
3. Preencha a sede (ex: `curitiba`), o slug do curso (ex: `eng-mecanica`) e
   o nome exibido (ex: `Engenharia Mecânica`).
4. Clique em "Gerar JSON do curso" e depois em "Baixar arquivo".
5. Salve o arquivo baixado como `data/<sede>/<slug>.json`.
6. Adicione `{ "slug": "<slug>", "label": "<nome>" }` em
   `data/<sede>/manifest.json` (crie o arquivo se a sede for nova, e nesse
   caso adicione também `{ "slug": "<sede>", "label": "<nome da sede>" }`
   em `data/sedes.json`).
7. Se quiser o seletor de câmpus de volta (foi removido do `index.html`
   por só sobrar uma sede), reveja o histórico do repositório original.

## Publicando no seu GitHub

1. Crie um repositório novo no seu GitHub (público, por causa da AGPL).
2. Suba estes arquivos para ele.
3. Em Settings → Pages, ative o GitHub Pages a partir da branch `main`
   (pasta raiz).
4. Atualize o link do ícone do GitHub no `index.html` (`SEU-USUARIO/SEU-REPO`)
   para apontar pro seu repositório.

> **Nota:** como os dados são buscados via `fetch`, abrir `index.html`
> direto do disco (`file://`) não funciona em todos os navegadores — sirva
> a pasta com um servidor local (ex: `npx serve` ou a extensão "Live Server").

## Créditos

Baseado no projeto [bolsgo/monta-horario-utfpr](https://github.com/bolsgo/monta-horario-utfpr),
licenciado sob AGPL-3.0.
