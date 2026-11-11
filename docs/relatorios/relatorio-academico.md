# LiberRotas — relatório técnico-acadêmico

Versão de trabalho (11/11/2026). Documento sujeito à revisão acadêmica.

## Contexto e problema
Pequenos empreendimentos da economia solidária enfrentam desafios de visibilidade, divulgação e gerenciamento de incentivos. O LiberRotas propõe uma plataforma que conecta visitantes, empreendedores e instituições de apoio.

## Objetivo geral
Desenvolver, documentar e avaliar progressivamente uma plataforma digital para visibilidade e interação com empreendimentos locais e iniciativas solidárias.

## Objetivos específicos
- Identificar perfis e suas necessidades.
- Modelar consulta de empreendimentos, produtos e rotas.
- Estruturar campanhas e cupons autorizados.
- Registrar arquitetura, modelos e evidências de testes.

## Perfis
- Visitante: busca produtos, feiras e benefícios.
- Empreendedor: mantém catálogo e valida operações.
- Instituição: coordena grupos e ações de incentivo.
- Suporte: atende chamados.
- Administrador: governa permissões.

## Escopo e arquitetura
App React/Expo; Firebase para identidade; API FastAPI; PostgreSQL como fonte de verdade comercial; Redis para anti-replay e idempotência. O GitHub Pages hospeda apenas a documentação estática. O ambiente do backend permanece dependente de infraestrutura de desenvolvimento local conforme o whitepaper.

## Diagramas
A publicação inclui casos de uso, DER, instâncias, atividades, sequência, classes, BPMN simplificado e arquitetura. DER é um recorte da migração SQL e diagramas conceituais não substituem validação do sistema real.

## Incentivos
O backend de referência documenta oferta por QR, limite, estoque, validade e resgate transacional. Cupons por compra multi-itens, recompra em 45 dias e exclusividade entre tipos de cupom são requisitos propostos, dependentes de implementação e testes.

## Metodologia
Projeto tecnológico aplicado, levantamento de requisitos, modelagem, implementação incremental e verificação. Evidências de teste ainda precisam ser anexadas.

## Segurança
Uso de autenticação, controle de perfil, validação de dispositivos, anti-replay e auditoria. O backend descreve criptografia experimental, não certificação ou pós-quântica pronta.

## Limitações e próximos passos
- Validar diagramas e requisitos com orientador.
- Anexar testes reais, capturas anonimizadas e métricas.
- Detalhar infraestrutura de produção, backup e recuperação.
- Revisar obrigações legais e proteção de dados.

## Fontes internas
Arquivos do whitepaper `docs/*.md` e backend fornecido `backend_trq_bec/README.md`, migrações 001–021. Não foram inventados resultados empíricos.
