# Happily :beer:

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jpmoura_happily&metric=alert_status)](https://sonarcloud.io/dashboard?id=jpmoura_happily)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jpmoura_happily&metric=bugs)](https://sonarcloud.io/dashboard?id=jpmoura_happily)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jpmoura_happily&metric=code_smells)](https://sonarcloud.io/dashboard?id=jpmoura_happily)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jpmoura_happily&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=jpmoura_happily)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jpmoura_happily&metric=sqale_index)](https://sonarcloud.io/dashboard?id=jpmoura_happily)

O Happily surgiu depois de muito tempo perdido ao final vários happy
hours, onde normalmente se divide a conta e o raciocínio já não é o
mesmo.

A ideia principal é manter um controle de quanto cada pessoa bebeu e
assim, quanto cada um deve pagar ao final.

Como durante o happy hour existe a tendência das pessoas não estarem no
seu melhor estado, a interface foi desenhada para ser simples, de forma
a exigir interações curtas e bem diretas por parte do usuário e que
possibilitasse fácil interpretação dos dados.

## Modo de Usar
O uso é bem simples. Ao se definir o preço da cerveja, um botão
no canto inferior direito. Ambos possuem um sinal de positivo como
ícone e servem para que o usuário possa adicionar pessoas que terão o
consumo registrado.

Depois de adicionar uma pessoa, ela ganha um espaço dedicado onde são
exibidos a quantidade de bebidas consumidas e o valor referente ao seu
consumo.

Existem opções para adicionar o preço de possíveis covert e taxa de
serviço (gorjeta). Definindo esses parâmetros, o preço é ajustado
automaticamente, já considerando o que foi definido pelo usuário.

## Instalação
Você pode servir essa aplicação em um simples servidor HTTP. Para
gerar um _build_ otimizado para uso e colocar os arquivos gerados
em uma instância de servidor HTTP.

Como exemplo, existe uma instância que é servida pelo próprio GitHub,
através do [GitHub Pages](https://jpmoura.github.io/happily/).

## Changelog

* Versão 0.1.0: versão inicial utilizando Vue 2
* Versão 1.0.0: refatoração para uso do React 17

## TODO

* ~~Melhorar modularização;~~
* Funcionalidade para decidir se o preço do cover artístico será pago
por todas as pessoas ou se será divido por todas ou um número
determinado do grupo;
* Funcionalidade para adicionar consumo de outras coisas além da cerveja,
tanto de forma individual quanto de grupo ou por uma parte dele;
* ~~Melhor layout para telas maiores do que de tablets e celulares;~~
* Gráficos de consumo mais apelativo;
* Internacionalização, ao menos para o inglês;
* Testes automatizados;

## Nota
Favicon utilizado no projeto pertence a
[Dooder](https://www.iconfinder.com/dooder) e foi
encontrado no [IconFinder](https://www.iconfinder.com/icons/6740150/alcohol_beer_celebration_cheers_drink_happy_party_icon).
