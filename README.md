# LiberRotas — Whitepaper acadêmico

Site de documentação em capítulos, inspirado no **formato de navegação** de whitepapers como o Genopets, com identidade visual e conteúdo próprios do LiberRotas. HTML/CSS/JavaScript puro, sem npm, sem CDN, sem build e compatível com **GitHub Pages**.

- **Site:** https://20251pin10030026-eng.github.io/LiberRotas/
- **Repositório:** https://github.com/20251pin10030026-eng/LiberRotas
- **Aplicativo:** https://app.liberrotas.com.br (ambiente doméstico, pode estar desligado)

## Estrutura

```text
LiberRotas/
├── index.html                         # Abertura do whitepaper
├── pages/                             # 18 capítulos em HTML, links diretos
├── assets/
│   ├── css/style.css                  # Estilos + layout responsivo + temas
│   ├── js/main.js                     # Busca, menu, temas, índice e anexos
│   ├── js/search-index.js             # Índice da busca por capítulos
│   ├── js/content.js                  # AQUI você cadastra imagens e PDFs
│   └── img/
│       ├── identidade/                # Ilustrações e símbolos originais
│       └── telas/                     # INSIRA OS PRINTS REAIS
├── docs/
│   ├── diagramas/
│   │   ├── casos-de-uso/
│   │   ├── entidade-relacionamento/
│   │   ├── instancias/
│   │   ├── atividades/
│   │   ├── sequencia/
│   │   ├── classes/
│   │   └── bpmn/
│   ├── relatorios/
│   ├── 01-visao-geral.md ... 06-referencias.md
│   └── README.md
├── README.md
├── .nojekyll
├── 404.html
├── sitemap.xml
├── robots.txt
└── LICENSE
```

## Como colocar capturas de tela

1. Salve `assets/img/telas/inicio.png` no repositório (o nome pode ser outro, mas sem espaços é mais fácil).
2. Abra **`assets/js/content.js`**.
3. Preencha `arquivo` no campo correspondente. Exemplo:

```js
telas: {
  inicio: { arquivo: 'assets/img/telas/inicio.png', alt: 'Tela inicial do aplicativo LiberRotas' },
  // ...
}
```

O espaço reservado aparecerá como imagem na página **Telas e demonstrações**. São previstos seis espaços: início, empreendedores, rotas, cupons, perfil e mensagens.

## Como adicionar diagramas e documentos

1. Coloque o arquivo na pasta indicada, por exemplo `docs/diagramas/casos-de-uso/diagrama-casos-de-uso.pdf`.
2. Abra **`assets/js/content.js`**.
3. No campo `documentos`, insira `arquivo` e, caso possua versão editável, `fonte`:

```js
'casos-de-uso': {
  arquivo: 'docs/diagramas/casos-de-uso/diagrama-casos-de-uso.pdf',
  fonte: 'docs/diagramas/casos-de-uso/diagrama-casos-de-uso.drawio'
}
```

A página exibirá **Abrir documento** e **Arquivo editável**. Enquanto o caminho estiver vazio, o cartão exibe **Espaço reservado** sem link quebrado. Você deve conferir se o arquivo está realmente enviado ao repositório.

Os grupos previstos incluem casos de uso, DER, instâncias, atividades, sequência, classes, BPMN, arquitetura, relatório, requisitos, protótipos e apresentação.

## Alterar o texto de uma seção

Abra o HTML correspondente em `pages/` (ou `index.html` para a abertura), edite o trecho dentro de `<article class="doc-body"> ... </article>` e publique. CSS e JavaScript são compartilhados. Para acrescentar um capítulo novo ao menu e à busca, edite os links do menu nos arquivos HTML e o índice `assets/js/search-index.js`.

## Publicar no GitHub Pages

**Não envie a pasta externa do ZIP para dentro da raiz:** envie os arquivos e pastas contidos nela. A raiz da branch `main` precisa conter diretamente `index.html`, `pages/`, `assets/` e `docs/`.

Opção recomendada pelo terminal no diretório do repositório clonado:

```bash
# Depois de extrair o ZIP e copiar os arquivos para a raiz do repositório:
git add -A
git commit -m "Adiciona whitepaper navegavel do LiberRotas"
git push origin main
```

Em **Settings > Pages**, selecione **Deploy from a branch**, `main` e `/(root)`.

## Testar localmente

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080`, `http://localhost:8080/pages/instancias.html` e experimente a busca (`Ctrl+K`), o menu no celular e o tema escuro. As páginas também podem ser abertas diretamente como arquivos locais.

## Segurança e precisão acadêmica

- Não publicar credenciais, segredos, dados pessoais ou prints de usuários reais.
- Não apresentar recursos planejados como comprovadamente implementados.
- As capturas, diagramas e relatórios são **espaços reservados**, não arquivos fictícios.
- O aplicativo e o site de documentação são serviços diferentes: apenas este site pode ficar disponível quando o servidor local estiver desligado.

## Licença

MIT — consulte o arquivo `LICENSE` e preserve direitos dos materiais acadêmicos e de terceiros que forem anexados futuramente.


## Documentação anexada em 11/11/2026

- Onze PDFs associados em `assets/js/content.js`, com fonte editável.
- Protótipo via https://app.liberrotas.com.br (sem PDF).
- Diagramas conceituais são modelos em revisão; DER é um recorte verificável de migrações SQL fornecidas.
- Verifique disponibilidade da API separadamente do whitepaper estático.
