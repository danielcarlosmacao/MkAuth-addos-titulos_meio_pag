/** 
* ABAIXO COMO INCLUIR ITEM NO MENU DO SISTEMA, DESCOMENTE AS LINHAS ABAIXO E LIMPE CACHE
* DO NAVEGADOR QUE NO MENU PROVEDOR SERA INCLUSO UM LINK PARA ADDON TESTE DE EXEMPLO:
*
*/

//const addon_url = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '') + "/admin/";
//add_menu.provedor('{"plink": "' + addon_url + 'addons/teste/", "ptext": "addon de teste"}');

//----------------- Relatorio de pagamento
const relatorio_pagamento = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '') + "/admin/";
add_menu.financeiro4('{"plink": "' + relatorio_pagamento+ 'addons/relatorio_pagamento/", "ptext": "Relatorio de baixas"}');
