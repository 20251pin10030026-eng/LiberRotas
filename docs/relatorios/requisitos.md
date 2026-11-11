# LiberRotas — requisitos funcionais e não funcionais

Versão de trabalho (11/11/2026). Estados documentais não equivalem a teste de aceitação.

## Requisitos funcionais

| ID | Requisito | Situação |
|---|---|---|
| RF-01 | Cadastrar e autenticar usuários com papéis definidos. | Documentado na arquitetura |
| RF-02 | Consultar perfis públicos de empreendedores e instituições. | Backend de referência |
| RF-03 | Cadastrar e manter catálogo de produtos com estoque e preço. | Backend de referência |
| RF-04 | Explorar feiras, locais e rotas regionais. | Escopo do aplicativo |
| RF-05 | Salvar rotas ou locais de interesse. | A validar no aplicativo |
| RF-06 | Criar e consultar ofertas e cupons conforme limites definidos. | Backend de referência |
| RF-07 | Validar QR, impedir replay e registrar resgates transacionais. | Backend de referência |
| RF-08 | Enviar mensagens privadas ao empreendedor. | Backend de referência |
| RF-09 | Criar chamados e permitir suporte com controle de acesso. | Backend de referência |
| RF-10 | Gerenciar grupos e vínculos institucionais. | Backend de referência |
| RF-11 | Administrar eventos institucionais com orçamento e relatórios. | Backend de referência |
| RF-12 | Aplicar permissões administrativas e registrar auditoria. | Backend de referência |
| RF-13 | Aplicar cupom a uma compra com vários itens. | Requisito proposto |
| RF-14 | Emitir cupom de recompra com validade de 45 dias. | Requisito proposto |
| RF-15 | Impedir acumular o cupom de compra e o de recompra. | Requisito proposto |
| RF-16 | Permitir empreendedor consultar e validar QR, incluindo compras como visitante. | Requisito proposto |

## Requisitos não funcionais

| ID | Tipo | Critério |
|---|---|---|
| RNF-01 | Segurança | Autenticação, autorização por papel e política de negação padrão. |
| RNF-02 | Privacidade | Minimizar dados pessoais; proteção em trânsito e acesso restrito. |
| RNF-03 | Integridade | Resgates atômicos, consistência de estoque e idempotência. |
| RNF-04 | Usabilidade | Interface responsiva, mensagens claras e fluxo acessível. |
| RNF-05 | Disponibilidade | Avisar quando API de desenvolvimento local estiver indisponível. |
| RNF-06 | Auditoria | Registrar eventos relevantes sem expor segredos no whitepaper. |
| RNF-07 | Manutenibilidade | Código modular, migrations e documentação versionada. |
| RNF-08 | Portabilidade | Aplicação web/móvel e documentação estática independente. |
| RNF-09 | Segurança criptográfica | Não habilitar modo pós-quântico experimental sem provedor auditado. |

## Regras e critérios
- Validação comercial ocorre no backend.
- Resgates não devem duplicar operações.
- RF-13 a RF-16 são requisitos **propostos**, dependentes de implementação e teste.
- A verificação deve incluir cenários negativos, sessão inválida e indisponibilidade.

## Fontes internas
`docs/02-requisitos.md`, `backend_trq_bec/README.md`, migrações SQL do backend.
