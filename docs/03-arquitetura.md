# Arquitetura — visão simplificada

O LiberRotas possui uma aplicação baseada em React/Expo e uma camada de serviços para implementar regras de negócio. A solução utiliza, conforme as integrações presentes em cada versão:

| Componente | Papel |
| --- | --- |
| React / Expo | Experiência web e móvel |
| API de serviços | Processamento das operações e regras de negócio |
| Firebase | Serviços de autenticação e recursos de dados integrados |
| PostgreSQL | Persistência relacional de informações estruturadas |
| Redis | Armazenamento em memória e suporte a operações de desempenho |
| GitHub Pages | **Somente** site estático de apresentação acadêmica |

## Situação da infraestrutura

O aplicativo opera em um ambiente de desenvolvimento que depende do computador doméstico responsável pelos serviços. Quando o computador está desligado ou sem conectividade adequada, o aplicativo remoto pode não responder. Isso **não indica**, isoladamente, erro no funcionamento do software.

A migração para infraestrutura dedicada integra o planejamento futuro. Ainda não deve ser apresentada como concluída.

## Segurança da publicação

O GitHub Pages publica somente HTML, CSS, JavaScript e arquivos anexados voluntariamente. Não publicar `.env`, credenciais, tokens, chaves privadas, dados reais de usuários ou informações que permitam identificar pessoas sem autorização.

## Pendências de documentação

- [ ] Confirmar o desenho físico e lógico atual.
- [ ] Especificar dependências entre API, Firestore, PostgreSQL e Redis.
- [ ] Registrar política de backups e recuperação quando houver infraestrutura dedicada.
- [ ] Incluir diagrama de implantação, se requerido pelo orientador.
