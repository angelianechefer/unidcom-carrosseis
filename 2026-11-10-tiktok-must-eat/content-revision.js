(() => {
  const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  };
  const setHTML = (selector, html) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  };

  setText('#slide-1 .cover-copy p', 'O Must Eat, novo guia de restaurantes do app nos EUA, já permite reservar mesa sem sair do TikTok.');

  setHTML('#slide-2 .s2bottom p', 'O <b>Must Eat</b> permite navegar por cidade e filtrar por culinária, preço, avaliação e localização. Cada restaurante tem página própria, com bairro, faixa de preço e os vídeos da comunidade. Alguns já aceitam reservas pelo OpenTable.');

  setText('#slide-3 .num', '02 / A LÓGICA');
  setText('#slide-3 .split-copy p', 'O guia nasce de recomendações e engajamento dentro do próprio TikTok e vai do lanche do dia a dia à alta gastronomia. Conteúdo, reputação e intenção de visita ficam no mesmo lugar.');

  setText('#slide-4 .full-copy h1', '27 MILHÕES DE PRIMEIRAS VISITAS.');
  setHTML('#slide-4 .full-copy p', 'Foi o número de americanos que, no último ano, visitaram pela primeira vez um restaurante, café ou loja independente depois de descobri-lo no TikTok.<br><br>Pelas contas do próprio TikTok, isso gerou <b>US$ 4,7 bilhões</b> em gastos locais.');

  setHTML('#slide-5 .s5copy h1', 'DESCOBERTA LOCAL JÁ <em>GERA VISITA.</em>');
  setText('#slide-5 .s5copy p', 'Para negócios com presença física, o conteúdo deixa de ser só inspiração e vira caminho até a visita. No Brasil, o recurso ainda não chegou, mas a lógica já vale para o TikTok, o Instagram e o Google Maps.');

  setText('#slide-6 .item:nth-of-type(4) p', 'Monitore salvamentos, cliques e reservas para entender onde a intenção avança. No Must Eat, cada restaurante salvo vai para as coleções do usuário.');

  setText('#slide-7 .quote', 'Visibilidade local sem jornada de decisão é só alcance.');
  setText('#slide-7 .save', 'CURTA · SALVE · COMENTE · COMPARTILHE');

  setHTML('[data-pane="ig"]', `<h3>Legenda Instagram</h3>🍽️ O TikTok quer organizar a descoberta gastronômica dentro do app.

Nos EUA, o novo guia Must Eat reúne restaurantes recomendados pela comunidade e permite buscar por cidade, culinária, preço, avaliação e localização. Em alguns casos, a reserva acontece no próprio TikTok via OpenTable.

O recurso ainda é só dos EUA, mas a lógica já vale por aqui.

O sinal para empresas locais é direto: conteúdo, reputação e conversão estão ficando cada vez mais próximos. Segundo a plataforma, 27 milhões de americanos visitaram um restaurante, café ou loja independente pela primeira vez após descobrir o negócio no TikTok no último ano. A estimativa de gasto local associada: US$ 4,7 bilhões.

Para marcas com presença física, não basta aparecer. É preciso reduzir o atrito entre interesse, informação e visita. 📍

Sua empresa está pronta para transformar descoberta em decisão?

#TikTok #MarketingLocal #Varejo #ExperienciaDoCliente #Restaurantes #SocialCommerce #EstrategiaDigital #Unidcom`);

  setHTML('[data-pane="li"]', `<h3>Legenda LinkedIn</h3>TikTok Must Eat: quando descoberta local se aproxima de reserva e receita.

O TikTok lançou nos EUA o Must Eat, um guia de restaurantes dentro do próprio app recomendados pela comunidade. A experiência permite navegar por cidade e filtrar por culinária, preço, avaliação e localização. Alguns estabelecimentos selecionados podem receber reservas via OpenTable.

Não se trata apenas de uma nova área de conteúdo. Trata-se de uma jornada mais curta entre recomendação, contexto e ação.

O dado que explica a ambição: segundo o TikTok, 27 milhões de americanos visitaram pela primeira vez um restaurante, café ou loja independente após descobrir o negócio na plataforma durante o último ano. A companhia estima US$ 4,7 bilhões em gastos locais associados a esse comportamento.

Para negócios locais e empresas que atendem esse mercado, três frentes merecem atenção:
• conteúdo que demonstre experiência, não somente oferta;
• informação pronta para reduzir dúvida e deslocamento;
• mensuração do caminho entre descoberta, interesse e visita.

O Must Eat ainda opera nos EUA, mas o movimento é relevante: redes sociais passam a organizar a decisão local com mecanismos cada vez mais próximos de transação.

E pode ir além: o Douyin, versão chinesa do TikTok, começou com um guia de restaurantes em 2023 e depois passou a vender comida dentro do app.

Como sua empresa conecta conteúdo local à decisão de compra?

#MarketingLocal #TikTok #EstrategiaDigital #ExperienciaDoCliente #Varejo`);

  const styles = document.createElement('style');
  styles.textContent = `
    #slide-2 .s2img { top: 160px; height: 184px; }
    #slide-2 .s2bottom { top: 358px; left: 28px; right: 28px; }
    #slide-2 .s2bottom p { font-size: 10px; line-height: 1.35; }
    #slide-3 .split-copy { top: 80px; width: 49%; }
    #slide-3 .split-copy h1 { font-size: 21px; }
    #slide-3 .split-copy p { font-size: 10px; line-height: 1.32; max-width: 175px; }
    #slide-3 .split-photo { width: 46%; }
    #slide-4 .full-copy { bottom: 31px; }
    #slide-4 .full-copy h1 { font-size: 29px; }
    #slide-4 .full-copy p { font-size: 10.5px; line-height: 1.3; }
    #slide-5 .s5copy p { font-size: 10.5px; line-height: 1.36; }
    #slide-6 .list { top: 68px; }
    #slide-6 .list h1 { margin-bottom: 10px; font-size: 28px; }
    #slide-6 .item { padding: 9px 0; }
    #slide-6 .item p { font-size: 10px; line-height: 1.3; }
    #slide-7 .quote { font-style: normal; }
    #slide-7 .save { font-size: 7px; letter-spacing: 1.15px; }
  `;
  document.head.append(styles);
})();
