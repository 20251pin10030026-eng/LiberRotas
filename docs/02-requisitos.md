# Levantamento inicial de requisitos — LiberRotas

Rascunho de organização acadêmica: **não é uma declaração de implementação ou aprovação**.

## Perfis envolvidos

- Visitante/consumidor: consulta empreendedores e ofertas e explora rotas.
- Empreendedor: apresenta seu empreendimento e produtos e participa dos fluxos de benefícios definidos pelo sistema.
- Instituição de apoio: coordena ações de incentivo e acompanha campanhas, conforme permissões.
- Administrador e equipe de suporte: mantêm governança operacional e atendem incidentes, conforme os perfis autorizados.

## Requisitos funcionais propostos

| ID | Requisito | Estado a validar |
| --- | --- | --- |
| RF-01 | Permitir cadastro e autenticação de usuários autorizados | Verificar |
| RF-02 | Exibir perfis e informações de empreendimentos | Verificar |
| RF-03 | Permitir registro e consulta de produtos | Verificar |
| RF-04 | Consultar feiras, locais e rotas | Verificar |
| RF-05 | Permitir salvar rotas, quando aplicável | Verificar |
| RF-06 | Operacionalizar regras de campanha e cupons, conforme permissões | Verificar |
| RF-07 | Registrar resgates e prevenir duplicidade de operações | Verificar |
| RF-08 | Viabilizar comunicação com empreendedor, se incluída na versão | Verificar |

## Requisitos não funcionais propostos

- **RNF-01 — Segurança:** controle de autenticação e autorização por perfil.
- **RNF-02 — Privacidade:** minimizar exposição de dados pessoais e sensíveis.
- **RNF-03 — Responsividade:** interfaces adaptáveis a diferentes tamanhos de tela.
- **RNF-04 — Integridade:** transações e eventos registrados de forma consistente.
- **RNF-05 — Operabilidade:** mensagens claras para indisponibilidade temporária do servidor local.
- **RNF-06 — Manutenibilidade:** código e documentação organizados e versionados.

## Casos de uso de referência

Registrar produtos, salvar rotas, trocar cupons e enviar mensagens ao empreendedor. Publicar os diagramas reais em `diagramas/casos-de-uso/` após revisão.
