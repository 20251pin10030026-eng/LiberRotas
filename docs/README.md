# Documentação acadêmica LiberRotas

Versão de trabalho: 11/11/2026. Os documentos em PDF e arquivos-fonte estão associados em `assets/js/content.js`.

## Diagramas publicados

| Artefato | PDF | Fonte de edição |
|---|---|---|
| casos-de-uso | [`docs/diagramas/casos-de-uso/casos-de-uso.pdf`](../docs/diagramas/casos-de-uso/casos-de-uso.pdf) | [Fonte editável](../docs/diagramas/casos-de-uso/casos-de-uso.svg) |
| entidade-relacionamento | [`docs/diagramas/entidade-relacionamento/entidade-relacionamento.pdf`](../docs/diagramas/entidade-relacionamento/entidade-relacionamento.pdf) | [Fonte editável](../docs/diagramas/entidade-relacionamento/entidade-relacionamento.svg) |
| instancias | [`docs/diagramas/instancias/instancias.pdf`](../docs/diagramas/instancias/instancias.pdf) | [Fonte editável](../docs/diagramas/instancias/instancias.svg) |
| atividades | [`docs/diagramas/atividades/atividades.pdf`](../docs/diagramas/atividades/atividades.pdf) | [Fonte editável](../docs/diagramas/atividades/atividades.svg) |
| sequencia | [`docs/diagramas/sequencia/sequencia.pdf`](../docs/diagramas/sequencia/sequencia.pdf) | [Fonte editável](../docs/diagramas/sequencia/sequencia.svg) |
| classes | [`docs/diagramas/classes/classes.pdf`](../docs/diagramas/classes/classes.pdf) | [Fonte editável](../docs/diagramas/classes/classes.svg) |
| bpmn | [`docs/diagramas/bpmn/bpmn.pdf`](../docs/diagramas/bpmn/bpmn.pdf) | [Fonte editável](../docs/diagramas/bpmn/bpmn.svg) |
| arquitetura | [`docs/relatorios/arquitetura.pdf`](../docs/relatorios/arquitetura.pdf) | [Fonte editável](../docs/relatorios/arquitetura.svg) |

## Relatórios e apresentação

- [Relatório acadêmico](relatorios/relatorio-academico.pdf) e [texto editável](relatorios/relatorio-academico.md).
- [Requisitos](relatorios/requisitos.pdf) e [texto editável](relatorios/requisitos.md).
- [Apresentação em PDF](relatorios/apresentacao-liberrotas.pdf) e [PowerPoint editável](relatorios/apresentacao-liberrotas.pptx).
- [Protótipo on-line](https://app.liberrotas.com.br): link direto, sem PDF.

## Guias complementares

- [Visão geral](01-visao-geral.md)
- [Requisitos iniciais](02-requisitos.md)
- [Arquitetura](03-arquitetura.md)
- [Metodologia](04-metodologia.md)
- [Testes](05-testes.md)
- [Referências](06-referencias.md)

## Rastreabilidade e interpretação

O DER é um **recorte** de entidades e relacionamentos do PostgreSQL a partir das migrações entregues (002, 003, 005, 008, 010, 014). Não substitui o esquema integral nem cobre coleções Firebase/Firestore. Os demais diagramas são modelos de análise do sistema, com instâncias de exemplo e fluxos a validar. O diagrama BPMN é uma representação simplificada em raias, não uma exportação BPMN 2.0 XML. Em SVG é possível editar a arte no Inkscape; em DOT, alterar a estrutura usando Graphviz.

Não publique credenciais, identificadores pessoais, segredos ou evidências de testes sem anonimização.
