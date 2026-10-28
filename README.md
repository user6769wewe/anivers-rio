# Homenagem de aniversário

Site estático, em português, feito com HTML, CSS e JavaScript puro. Não precisa de instalação, compilação, conta ou serviço externo. As fontes online têm alternativas locais e o site segue utilizável sem elas.

## Personalizar textos, fotos e cartas

Edite [`data/content.js`](./data/content.js). Nesse arquivo ficam o nome, as mensagens, os caminhos das fotos, a galeria e as três cartas enviadas pela família.

As fotos fornecidas na pasta **fotos da mamis** já foram incluídas e otimizadas para JPEG: uma imagem de abertura, uma de encerramento e seis imagens na galeria. Para substituir ou acrescentar fotos, use `assets/images/`:

- A foto principal: salve como `hero.jpg` (ou altere `heroImage` em `data/content.js`).
- A foto final: salve como `closing.jpg` (ou altere `closingImage`).
- As demais: coloque em `assets/images/gallery/` e adicione cada imagem à lista `gallery` em `data/content.js`, com `src`, `alt` e, opcionalmente, `caption` e `date`.

Exemplo de item da galeria:

```js
{ src: './assets/images/gallery/foto-01.jpg', alt: 'Mamãe sorrindo no jardim', caption: 'Um domingo em família', date: '2019' }
```

Use nomes de arquivo simples, sem espaços ou acentos. Formatos JPG, PNG e WebP funcionam nos navegadores modernos. Recomenda-se reduzir fotos muito grandes antes de publicar.

As três cartas ficam em `content.letters`, nesta ordem: filho, irmã e avó. Para cada uma, edite `author`, `relationship`, `title`, `message`, `signature` e, se desejar, `image`. Separe parágrafos com uma linha em branco. Há exatamente três cartas.

## Visualizar localmente

Como o projeto usa módulos JavaScript, abra-o por um servidor estático local. Com Python instalado, no terminal:

```sh
cd aniversario-mae
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`. Python é usado apenas para a visualização local; o site publicado não depende dele. Também é possível usar qualquer servidor estático simples.

## Conferências rápidas

No navegador, percorra os quatro itens da navegação, abra uma foto, teste as setas e Escape e confira que o foco volta ao botão da foto. Reduza a janela até a largura de um celular e confirme que as cartas ficam em uma coluna.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `aniversario-mae`.
2. Envie o conteúdo desta pasta para a raiz do repositório (incluindo `index.html`, `assets/`, `css/`, `data/` e `js/`).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, e salve.
5. Aguarde o GitHub indicar a publicação. A URL terá formato semelhante a `https://usuario.github.io/aniversario-mae/`. A URL exata depende da conta e do nome escolhido; ela não foi presumida neste projeto.
6. Abra a URL pública e confira fotos, navegação, cartas e botão de compartilhamento.
7. Para atualizar depois, edite os arquivos, substitua as fotos ou as cartas e envie as alterações para o mesmo repositório.

Os caminhos começam com `./`, portanto funcionam na raiz do domínio e no subdiretório do GitHub Pages.

## Recursos

- Quatro seções: abertura, fotografias, cartas e encerramento.
- Galeria em grade, visualização ampliada, setas, Escape, clique no fundo e restauração do foco.
- Navegação responsiva, foco visível e preferência por movimento reduzido.
- As oito fotos fornecidas já estão no projeto. Se uma foto configurada não for encontrada, os quadros da abertura e do encerramento mostram uma indicação discreta; não são usadas imagens fictícias.
