# Happily :beer:

O Happily surgiu depois de muito tempo perdido ao final vários happy
hours, onde normalmente se divide a conta e o raciocínio já não é o
mesmo.

A ideia principal é manter um controle de quanto cada pessoa bebeu e
assim, quanto cada um deve pagar ao final.

Como durante o happy hour existe a tendência das pessoas não estarem no
seu melhor estado, a interface foi desenhada para ser simples, de forma
a exigir interações curtas e bem diretas por parte do usuário e que
possibilitasse fácil intepretação dos dados.

## Modo de Usar
O uso é bem simples. Ao se definir o preço da cerveja, dois botões são
ativados, um na barra superior e outro no canto inferior direito. Ambos
possuem um sinal de positivo como ícone e servem para que o usuário
possa adicionar pessoas que terão o consumo registrado.

Depois de adicionar uma pessoa, ela ganha um espaço dedicado onde são
exibidos a quantidade de bebidas consumidas e o valor referente ao seu
consumo.

Existem opções para adicionar o preço de possíveis couvert e taxa de
serviço (gorjeta). Definindo esses parâmetros, o preço é ajustado
automaticamente, já considerando o que foi definido pelo usuário.

## Instalação
Você pode servir essa aplicação em um simples servidor HTTP. Foram
usados CDNs para todas as bibliotecas, ou seja, NodeJS não foi utilizado
diretamente e não é requirido para servir a aplicação.

Como exemplo, existe uma instância que é servida pelo próprio GitHub,
através do [GitHub Pages](https://jpmoura.github.io/happily/).

## Dependências

Como o intuito é que essa aplicação seja capaz de executar em qualquer
dispositivo móvel, ela foi desenvolvida como uma 
*Single Page Application* (SPA) e para isso foi utilizada as seguintes
ferramentas:

* [VueJS](https://vuejs.org/) como *framework* para criação da SPA;
* [Vuex](https://vuex.vuejs.org/) para controle do estado da aplicação;
* [vuex-persist](https://www.npmjs.com/package/vuex-persist) para
persistência do estado da aplicação no *browser* do usuário;
* [Vuetify](https://vuetifyjs.com) para utilização de componentes
baseados no Material Design;
* [ApexCharts](https://apexcharts.com/) e
[Vuex-Apexcharts](https://apexcharts.com/docs/vue-charts/) para
visualização dos dados.

## TODO

* Melhorar modularização;
* Funcionalidade para decidir se o preço do cover artístico será pago
por todas as pessoas ou se será divido por todas ou um número
determinado do grupo;
* Funcionalidade para adicionar consumo de outras coisas além da cerveja,
tanto de forma individual quanto de grupo ou por uma parte dele;
* Melhor layout para telas maiores do que de tablets e celulares;
* Gráficos de consumo mais apelativo;
* Internacionalização, ao menos para o inglês.

## Nota
Favicon utilizado no projeto pertence a
[Arthur Gareginyan](https://www.iconfinder.com/ArthurGareginyan) e foi
encontrado no [IconFinder](https://www.iconfinder.com/icons/3040769/beer_bottle_social_social_media_untappd_icon).
