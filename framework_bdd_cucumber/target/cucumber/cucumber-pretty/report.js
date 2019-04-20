$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cadastrogoogle.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# encoding UTF-8"
    }
  ],
  "line": 4,
  "name": "Cadastro no Google",
  "description": "A fim de utilizar os serviços do Google, eu realizo o cadastro de um novo usuário",
  "id": "cadastro-no-google",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 1728149,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Realizar início de cadastro com sucesso",
  "description": "",
  "id": "cadastro-no-google;realizar-início-de-cadastro-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "que eu acesse a página de cadastro do Google",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "preencho os dados para criar um usuário novo",
  "rows": [
    {
      "cells": [
        "Nome",
        "Willian"
      ],
      "line": 10
    },
    {
      "cells": [
        "Sobrenome",
        "Passos"
      ],
      "line": 11
    },
    {
      "cells": [
        "Email",
        "willianpassos123456789"
      ],
      "line": 12
    },
    {
      "cells": [
        "Senha",
        "Teste@123"
      ],
      "line": 13
    },
    {
      "cells": [
        "Confirmar",
        "Teste@123"
      ],
      "line": 14
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "prossigo para tela seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "é apresentada tela para informar o número de celular",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroGoogle.que_eu_acesse_a_página_de_cadastro_do_Google()"
});
formatter.result({
  "duration": 8078324828,
  "status": "passed"
});
formatter.match({
  "location": "CadastroGoogle.preencho_os_dados_para_criar_um_usuário_novo(DataTable)"
});
formatter.result({
  "duration": 3156075317,
  "status": "passed"
});
formatter.match({
  "location": "CadastroGoogle.prossigo_para_tela_seguinte()"
});
formatter.result({
  "duration": 811758689,
  "status": "passed"
});
formatter.match({
  "location": "CadastroGoogle.é_apresentada_tela_para_informar_o_número_de_celular()"
});
formatter.result({
  "duration": 1362985008,
  "status": "passed"
});
});