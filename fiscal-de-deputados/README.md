Skip to the content.
Desafio front-end - Fiscal de deputados
Desafio front-end - Fiscal de deputados
PRAZO FINAL PARA ENVIO: 24/11
Você, como programador e cidadão, decidiu colocar em prática as suas habilidades de programador front-end para criar uma plataforma que permita fiscalizar os nossos deputados federais. Para isso, você irá utilizar a API da câmara dos deputados (disponível aqui).

Índice
Instruções gerais
O que será avaliado?
Necessário
Desejável
Extra
Casos de uso
Casos de uso obrigatórios
Buscar deputados (CUO1)
Exibir perfil detalhado do deputado (CUO1)
Casos de uso extra
Buscar despesas no ano atual de um deputado (CUE1)
Exibir a última despesa do deputado no seu perfil (CUE2)
Exibir a maior despesa do deputado no seu perfil (CUE3)
Buscar projetos de lei de um deputado (CUE4)
Exibir detalhes de um projeto de lei (CUE5)
Entrega
Link para o repositório do seu projeto no GitHub
Tabela de esforço (esforço por caso de uso)
Instruções gerais
Você deverá implementar os casos de uso descritos na seção Casos de Uso e enviar o seu projeto para um repositório púbico do GitHub. A organização das páginas, a interface e as ferramentas a serem utilizadas ficam a seu critério. A única restrição é que deve-se utilizar o Angular numa versão recente. Pode-se utilizar qualquer framework CSS, ou até mesmo nenhum. Pode-se também utilizar qualquer linguagem de extensão de CSS, como Sass e Less.

O que será avaliado?
Você será avaliado em 3 categorias, por ordem decrescente de relevância:

Necessário
Desejável
Extra
Necessário
Esses conhecimentos são obrigatórios. Você precisa ter esses conhecimentos para preencher a vaga.

Conhecimento em HTML;
Conhecimento em CSS;
Conhecimento em Javascript/Typescript;
Conhecimento em Angular;
Desejável
Esses pontos são importantes, mas não são obrigatórios.

Responsividade das páginas;
As páginas devem se adaptar para o uso em desktops, tablets e celulares.
Capacidade de ler a documentação e consumir APIs REST externas;
Tratamento de erros de API recebidos;
Tratamento de respostas vazias recebidas da API.
Qualidade e criatividade na organização das páginas;
Conhecimento em versionamento de código utilizando Git e GitHub.
Extra
Realizar essas tarefas lhe garantirá “pontos extra” e será um diferencial em relação aos demais candidatos.

Adotar estratégias para otimizar o consumo da API externa, de modo a:
Evitar o bloqueio de novas requisições por exceder limites de requisição.
Evitar requisições duplicadas ou desnecessárias.
Implementar o seu projeto também como um App para Android, utilizando o Ionic Framework com Capacitor e Angular.
Muitos pontos extra
Não é necessário publicar o App nas lojas de App.
Com Ionic + Capacitor é possível utilizar a mesma base de código para a versão app e a versão site.
Disponibilizar o seu projeto numa imagem do Docker e fornecer instruções para utilizá-la.
Incluir o Dockerfile
Como adicional você pode utilizar também o Docker Compose e fornecer o arquivo docker-compose.yml
Casos de uso
Os casos de uso estão separados em duas categorias: obrigatórios e extra. Se você não implementar os casos de uso obrigatórios, estará automaticamente desclassificado. Se você implementar os casos de uso extra irá ganhar “pontos extra”.

Casos de uso obrigatórios
Buscar deputados (CUO1)
Deve-se permitir pesquisar deputados por nome, partido e estado.
Deve-se exibir no máximo 10 deputados por página.
Deve-se permitir filtrar os resultados por sexo.
Para cada deputado, deve-se exibir a sua foto, nome, partido e estado.
Os resultados devem vir ordenados por ordem alfabética do nome do deputado.
Exibir perfil detalhado do deputado (CUO2)
Deve-se exibir o nome, foto, partido, estado, data de nascimento, sexo, email, link para o site (quando existir).
Você também pode incluir outras informações que achar interessante.
Deve-se exibir o último evento que o deputado participou
Incluir Data/hora de início, data/hora de fim e tipo do evento.
Deve-se exibir o próximo evento da agenda do deputado (se houver)
Incluir Data/hora de início, tipo e situação do evento.
Casos de uso extra
Buscar despesas no ano atual de um deputado (CUE1)
Deve-se exibir no máximo 10 despesas por página.
Para cada despesa, deve-se exibir o tipo, nome do fornecedor, valor da despesa, data da despesa e um link para o documento (quando existir).
Deve-se permitir ordenar os resultados por data e por valor da despesa, tanto em ordem crescente quanto decrescente.
Por padrão, os resultados devem vir ordenados por ordem decrescente de data.
Exibir a última despesa do deputado no seu perfil (CUE2)
Deve-se exibir o tipo, valor e data.
Exibir a maior despesa do deputado no seu perfil (CUE3)
Deve-se exibir o tipo, valor e data.
Buscar projetos de lei de um deputado (CUE4)
Deve-se exibir no máximo 5 projetos de lei por página.
Para cada projeto de lei, deve-se exibir o número, ano e a ementa.
Os resultados devem ser ordenados pelo número do projeto de lei, de maneira crescente.
Exibir detalhes de um projeto de lei (CUE5)
Deve-se exibir o número, data de apresentação, ementa, ementa detalhada (quando houver), situação e, quando houver, o link externo para a proposição (parâmetro url do campo statusProposicao).
Entrega
Até o dia 24/11 você deve enviar os itens abaixo para rh@kuau.com.br com o título: ETAPA 2 - Programador Front End.

Link para o repositório do seu projeto no GitHub.
Um link para um local onde seu site esteja hospedado para podermos testá-lo.
Você pode hospedar seu site gratuitamente no GitHub Pages, Heroku, dentre outros.
Tabela de esforço por caso de uso (EXEMPLO ABAIXO).
Tabela de esforço
Identifique o total de horas utilizado para o desenvolvimento de cada caso de uso.

Cód. caso de uso	Esforço (horas)
CUO1	01:00
CUO2	02:30
CUE1	01:15
CUE2	00:30
CUE3	00:15
CUE4	01:45
CUE5	02:10
This page was generated by GitHub Pages.