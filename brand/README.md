# Marca Vecta — assets

Ícone: traço monoline em vetor (seta ascendente), sem fundo — remete a "vetor" (direção + força), o significado do nome. Escolhido entre 6 conceitos apresentados (ver `docs/Conversas/2026-07-04.md` no repositório `kashilav-ops` para o histórico da decisão).

## Arquivos

| Arquivo | Uso |
|---|---|
| `logo-mark.svg` | Ícone colorido (gradiente teal), sem fundo — uso padrão em fundos escuros/neutros |
| `logo-mark-mono-light.svg` | Versão branca sólida — fundos escuros/coloridos, baixo contraste do gradiente |
| `logo-mark-mono-dark.svg` | Versão preta sólida — fundos claros/brancos (papelaria, docs impressos) |
| `logo-lockup-horizontal.svg` | Ícone + nome "VECTA" lado a lado — usar quando o contexto não deixa claro que é a marca (ex: primeira menção em documento externo) |
| `favicon.svg` | Versão com fundo (rounded square escuro) — só para favicon/ícone de app, onde o tamanho é pequeno e o traço sem fundo perde legibilidade |

## Cores da marca

| Nome | Hex | Uso |
|---|---|---|
| Teal (primária) | `#2FD4C4` | Início do gradiente, destaques |
| Teal escuro | `#14B8A6` | Fim do gradiente |
| Champagne (acento) | `#D9B871` | Uso pontual, nunca no ícone principal |
| Fundo escuro | `#0B0D11` / `#080A0E` | Fundo padrão do site/materiais |
| Texto claro | `#F2F4F7` | Texto sobre fundo escuro |

## Regras de uso
- Nunca distorcer a proporção do ícone (sempre escalar largura/altura juntas).
- Área de respiro mínima ao redor do ícone: a própria largura do traço (evita "sufocar" a marca colada em outros elementos).
- Em fundo claro (branco, papel), usar `logo-mark-mono-dark.svg` — o gradiente teal não tem contraste suficiente em fundo claro sem fundo escuro por trás.
- Tamanho mínimo recomendado: 20px de altura (abaixo disso, usar `favicon.svg` com o fundo, que dá mais legibilidade).

## Limitação atual
Só existem versões em **SVG** (vetor, escala perfeita). Não gerei PNG/JPG rasterizados — se precisarem para alguma ferramenta que não aceite SVG (ex: alguns painéis de anúncio, Canva, WhatsApp Business profile), exportem localmente abrindo o SVG num editor (Figma, Illustrator, ou até o navegador + print) ou peçam para eu orientar quando chegar a hora.
