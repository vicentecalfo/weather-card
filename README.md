# weather-card
Componente de cartão para previsão do tempo para Angular 2+.

## Demo
[Página de demonstração dos cards.](https://vicentecalfo.github.io/weather-card/dist/weather-card/)

## Recursos

* [API para os dados de tempo (Meta Weather)](https://www.metaweather.com/api/);
* [Ilustração dos monumentos (FlatIcon)](https://www.flaticon.com/packs/monuments-10);
* [Ícones do tempo (Font Awesome)](https://fontawesome.com/);
* [Fonte Noto Sans (Google Fonts)](https://fonts.google.com/specimen/Noto+Sans+JP);
* [Fundo dos cartões (SVG Backgrounds)](https://www.svgbackgrounds.com/);

## Utilização
1. Copiar a pasta **weather-card** para sua aplicação e importar o módulo **WeatherCardModule**. 
2. Copiar os arquivos **.svg** na pasta **assets/images** com as ilustrações dos monumentos das cidades, para  a pasta **assets/images** do seu projeto.

```html
 <ez-weather-card 
   temp="{{ city.the_temp }}"
   minTemp="{{city.min_temp}}"
   maxTemp="{{city.max_temp}}"
   locationId = "{{ city.woeid }}"
   stateAbbr = "{{ city.weather_state_abbr }}"
   state="{{ city.weather_state_name }}"
   location = "{{ city.title }}"
   date="{{ city.created }}">
 </ez-weather-card>
```

### Notas de customização
1. O nome dos arquivos das ilustrações dos monumentos da cidade, são os IDs da localidade (atributo **locationId**);
2. Os ícones de tempo são da **Font Awesome** e no arquivo **weather-card.component.ts** tem o atributo **translateStateToIcon**, onde você pode mapear o atributo **stateAbbr** para seus ícones correspondentes;
3. As cores de fundo dos cartões são variáveis de acordo com a previsão, as classes de html que controlam isso são formadas da seguinte forma: **bg-{stateAbbr}**. Exemplo: Um dia com neve tem o valor do **stateAbbr** de **sn**, logo a classe de html que controla o fundo de neve será **bg-sn**. Você pode alterar as classes de fundo no arquivo **weather-card.component.scss**.; 
