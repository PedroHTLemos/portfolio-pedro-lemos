import type { Messages } from './types'
import { site } from './site'

const ORKEST = 'https://github.com/PedroHTLemos/task-manager-api'
const PEDIDOS = 'https://github.com/PedroHTLemos/api-pedidos-estoque-spring'
const ASYNC = 'https://github.com/PedroHTLemos/async-task-hub'
const GATEWAY = 'https://github.com/PedroHTLemos/api-gateway-rate-limit-cache'

export const pt: Messages = {
  lang: 'pt',
  meta: {
    title: 'Pedro Torisu · Desenvolvedor Full Stack com foco em back-end',
    description:
      'Pedro Torisu, desenvolvedor Full Stack com foco em back-end. Projetos com Node.js, TypeScript, Java, Python e React: Amillan, Orkest, API de Pedidos e Estoque, AsyncTask Hub e API Gateway.',
    ogLocale: 'pt_BR',
  },
  nav: {
    home: 'Início',
    projects: 'Projetos',
    experience: 'Experiência',
    stack: 'Stack',
    about: 'Sobre',
    contact: 'Contato',
    languageSwitch: 'Ver em inglês',
    themeToLight: 'Ativar tema claro',
    themeToDark: 'Ativar tema escuro',
    skipToContent: 'Pular para o conteúdo',
    location: 'Ouro Branco, MG',
    mainLabel: 'Principal',
    newTab: '(abre em nova aba)',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    backToTop: 'Voltar ao topo',
  },
  hero: {
    name: site.name,
    role: 'Desenvolvedor Full Stack com foco em back-end',
    positioning:
      'Projeto e mantenho APIs e sistemas web com Node.js, TypeScript, Java e Python. Meu foco está em testes de integração contra banco real, concorrência e tratamento de falhas.',
    seeking:
      'Busco oportunidades como Desenvolvedor Full Stack, Desenvolvedor Back-end ou Engenheiro de Software (Júnior ou Pleno).',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Contato',
    ctaCv: 'Baixar CV',
    ctaGithub: 'GitHub',
    ctaLinkedin: 'LinkedIn',
    available: 'Disponível para novas oportunidades',
    highlightsTitle: 'Destaques verificados',
  },
  about: {
    eyebrow: '01 · Sobre',
    title: 'Sobre',
    paragraphs: [
      'Sou desenvolvedor Full Stack com foco em back-end. Trabalho principalmente com Node.js, TypeScript e React, e uso Python (FastAPI) e Java (Spring Boot) em projetos de back-end.',
      'Desde 2023 atuo como freelancer, desenvolvendo sistemas web para clientes. Também mantenho o Amillan, um SaaS de planejamento de viagens com IA, que está em produção com usuários e apps publicados.',
      'Antes, trabalhei na dti digital com Power Platform e APIs REST, e coordenei 32 projetos web na Linked, empresa júnior da UFSJ.',
    ],
    education:
      'Bacharelado em Ciência da Computação, UFSJ (2018 a dez/2026, colação prevista).',
    english: 'Inglês C1: leio documentação, escrevo PRs e trabalho com times multiculturais.',
  },
  projects: {
    eyebrow: '02 · Projetos',
    title: 'Projetos',
    intro:
      'Primeiro os produtos reais, depois os projetos de portfólio com código público. Cada número tem um link para a seção que o comprova.',
    statusLabels: {
      product: 'Produto em produção',
      portfolio: 'Projeto de portfólio',
      freelance: 'Freelance',
    },
    labels: {
      problem: 'Problema',
      built: 'O que construí',
      decision: 'Decisão técnica',
      metric: 'Número verificado',
      stack: 'Stack',
      period: 'Período',
      caseStudy: 'Estudo de caso',
      repo: 'Repositório',
      readme: 'README',
      live: 'Ver no ar',
    },
    items: [
      {
        slug: 'amillan',
        cover: { src: '/projetos/amillan/cover.png', alt: 'Fundo na cor da marca Amillan, com o nome do produto em minúsculas' },
        status: 'product',
        title: 'Amillan',
        period: 'Em produção',
        problem:
          'Planejar uma viagem exige juntar rotas, pedágios, hospedagem e reservas em várias fontes diferentes.',
        built:
          'SaaS que gera o roteiro dia a dia a partir de uma descrição em linguagem natural. Três fluxos: chat com IA, Road Trip (rota via OSRM, pedágios calculados sobre 966 pontos indexados em PostGIS, alerta de autonomia do veículo) e descoberta de destino. Assinaturas e créditos via Stripe, em produção, com planos Família, Business e Concierge, e apps Android e iOS publicados na App Store e na Play Store via Capacitor. Recursos de privacidade alinhados à LGPD.',
        decision:
          'As respostas da IA passam por validação de qualidade antes de chegar ao usuário, com nova tentativa automática quando falham. O modelo é o Gemini 3.8 Flash no Vertex AI.',
        metric: {
          value: '~5.900',
          label: 'testes automatizados',
          sourceLabel: 'Perfil do GitHub',
          sourceHref: 'https://github.com/PedroHTLemos/PedroHTLemos',
        },
        stack: [
          'React 19',
          'Vite',
          'TypeScript',
          'Tailwind CSS',
          'Node.js',
          'Express',
          'PostgreSQL',
          'PostGIS',
          'Prisma',
          'Supabase',
          'Gemini (Vertex AI)',
          'OSRM',
          'Leaflet',
          'Stripe',
          'Capacitor',
          'Vitest',
        ],
        liveUrl: 'https://amillan.com.br',
      },
      {
        slug: 'orkest',
        cover: { src: '/projetos/orkest/cover.png', alt: 'Quadro Kanban do Orkest com tarefas em três colunas' },
        status: 'portfolio',
        title: 'Orkest',
        period: 'Abr/2026',
        problem:
          'Times pequenos precisam controlar quem pode criar, editar e excluir tarefas dentro de cada workspace.',
        built:
          'Gerenciador de tarefas com Kanban, workspaces e permissões por papel (ADMIN e MEMBER). API em Express, TypeScript e Prisma com PostgreSQL. Front-end em React com TanStack Query e drag and drop.',
        decision:
          'Rotação de refresh token: cada renovação grava um token novo e apaga o usado. Requisições concorrentes compartilham uma única renovação no interceptor do Axios.',
        metric: {
          value: '65',
          label: 'testes de integração contra PostgreSQL 16 real',
          sourceLabel: 'README do Orkest, seção Testes',
          sourceHref: `${ORKEST}#testes`,
        },
        stack: [
          'Node.js',
          'Express',
          'TypeScript',
          'Prisma',
          'PostgreSQL',
          'React',
          'TanStack Query',
          'JWT',
          'Jest',
          'Supertest',
          'GitHub Actions',
        ],
        note: 'Executado localmente, sem deploy público.',
        repoUrl: ORKEST,
        readmeUrl: `${ORKEST}#orkest`,
        caseStudy: {
          problem:
            'Times pequenos precisam controlar quem pode criar, editar e excluir tarefas dentro de cada workspace. O projeto roda localmente, sem deploy público, e foi escrito para exercitar permissões, autenticação e testes de integração.',
          decisions: [
            {
              title: 'Rotação de refresh token',
              text: 'Cada refresh grava um token novo e apaga o usado. Cada token recebe um jwtid com UUID, então dois tokens emitidos em sequência nunca são iguais.',
            },
            {
              title: 'Pertencimento ao workspace no middleware',
              text: 'requireRole consulta a tabela members em todas as rotas do workspace. Quem não é membro recebe 403, mesmo autenticado. Os controllers não repetem essa checagem.',
            },
            {
              title: 'Remoção de membro e desatribuição na mesma transação',
              text: 'Remover um membro zera o assigneeId das tarefas dele, dentro do workspace, em uma única $transaction. Se uma operação falha, nenhuma é gravada.',
            },
            {
              title: 'Testes de integração com PostgreSQL real',
              text: 'O Prisma não é mockado. A suíte se recusa a rodar se o banco não terminar em _test, porque faz TRUNCATE nas tabelas.',
            },
            {
              title: 'Fila de refresh no interceptor do Axios',
              text: 'Dashboard e AuthProvider disparavam dois refresh com o mesmo token, e o segundo derrubava a sessão. A renovação em andamento agora é compartilhada.',
            },
          ],
          numbers: [
            {
              value: '65',
              label: 'testes de integração, sem mock do Prisma, rodando no CI com Node 20 e 22',
              sourceLabel: 'README do Orkest, seção Testes',
              sourceHref: `${ORKEST}#testes`,
            },
            {
              value: '4',
              label: 'bugs encontrados pelos testes e corrigidos (validação, integridade e 500 em status inválido)',
              sourceLabel: 'README do Orkest, seção Bugs encontrados pelos testes',
              sourceHref: `${ORKEST}#bugs-encontrados-pelos-testes`,
            },
          ],
          evidence: [
            {
              type: 'image',
              src: '/projetos/orkest/02-kanban.png',
              alt: 'Quadro Kanban do Orkest com tarefas nas colunas A fazer, Em andamento e Concluído',
              caption: 'Visão de ADMIN em um workspace de demonstração.',
            },
            {
              type: 'image',
              src: '/projetos/orkest/04-member-kanban.png',
              alt: 'Quadro Kanban visto por um usuário MEMBER, sem botões de exclusão',
              caption: 'Mesmo quadro como MEMBER: o botão de exclusão só aparece para ADMIN.',
            },
            {
              type: 'flow',
              title: 'Renovação de sessão',
              steps: [
                'Access token expirado: a API responde 401',
                'O interceptor guarda a Promise da renovação; as respostas 401 seguintes esperam por ela',
                'POST /auth/refresh: o token é buscado no banco, verificado e apagado',
                'O novo par de tokens é gravado e a requisição original é repetida',
              ],
            },
          ],
          limitations: [
            'Access e refresh tokens ficam no localStorage, então qualquer script da página pode lê-los.',
            'Sem limite de tentativas de login.',
            'O logout não revoga o access token, que vale até 15 minutos.',
            'Validação com zod só nas tarefas. Registro, criação de workspace e convite de membros respondem 500 com tipo errado.',
            'Listagem de tarefas sem paginação.',
            'O front não tem seletor de responsável nem tela de membros: esses fluxos existem só na API. O front também não tem testes automatizados.',
          ],
        },
      },
      {
        slug: 'api-pedidos-estoque',
        cover: { src: '/projetos/api-pedidos-estoque/cover.png', alt: 'Painel da API de Pedidos e Estoque com indicadores e pedidos recentes' },
        status: 'portfolio',
        title: 'API de Pedidos e Estoque',
        period: 'Início em fev/2026',
        problem:
          'Pedidos que dão baixa em estoque precisam continuar consistentes quando vários pedidos disputam o mesmo produto.',
        built:
          'Cadastros de empresas, fornecedores e produtos, pedidos com baixa atômica, estorno no cancelamento e painel. Back-end em Java 17 e Spring Boot, front-end em Angular.',
        decision:
          'A baixa de estoque é um UPDATE condicional, e o banco tem CHECK (estoque >= 0). Também reordenei a transação de criação de pedido para eliminar um deadlock no InnoDB.',
        metric: {
          value: '20 de 20',
          label: 'execuções de concorrência sem deadlock (antes, 15 de 20 falhavam)',
          sourceLabel: 'README da API de Pedidos, decisão 2',
          sourceHref: `${PEDIDOS}#2-deadlock-na-criação-de-pedido`,
        },
        stack: [
          'Java 17',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'MySQL 8.4',
          'Flyway',
          'Angular',
          'Testcontainers',
        ],
        note: 'A interface usa a marca fictícia "Nexus Gestão".',
        repoUrl: PEDIDOS,
        readmeUrl: `${PEDIDOS}#testes`,
        caseStudy: {
          problem:
            'Pedidos que dão baixa em estoque precisam ser consistentes quando vários pedidos disputam o mesmo produto, e o histórico de estoque precisa explicar qualquer saldo.',
          decisions: [
            {
              title: 'Baixa atômica no banco',
              text: 'A baixa é um UPDATE com WHERE estoque >= :quantidade, e a migration tem CHECK (estoque >= 0). O campo estoque é updatable = false na entidade, então o JPA nunca regrava o saldo por merge.',
            },
            {
              title: 'Deadlock no InnoDB corrigido pela ordem da transação',
              text: 'O INSERT em item_pedido pegava um lock compartilhado na linha do produto (chave estrangeira), e a baixa precisava do lock exclusivo. Agora a baixa vem antes da gravação do pedido, e os produtos são baixados em ordem crescente de id. Não há retry.',
            },
            {
              title: 'Cancelamento com transição condicional',
              text: 'O cancelamento faz UPDATE ... WHERE status = CONFIRMADO. Só uma transação afeta a linha e estorna o estoque. A segunda recebe 409.',
            },
            {
              title: 'Preço copiado e movimentações com saldo',
              text: 'O item guarda o preço do momento do pedido. Cada movimentação grava o saldo após a operação, então o histórico reconstitui qualquer saldo passado.',
            },
            {
              title: 'Painel sem consulta por item',
              text: 'O número de statements do painel é o mesmo com 1 e com 9 pedidos, medido com Hibernate Statistics.',
            },
          ],
          numbers: [
            {
              value: '20 de 20',
              label: 'execuções sem deadlock no teste de concorrência (antes, 15 de 20 falhavam)',
              sourceLabel: 'README da API de Pedidos, decisão 2',
              sourceHref: `${PEDIDOS}#2-deadlock-na-criação-de-pedido`,
            },
            {
              value: '10 de 20',
              label: 'pedidos aceitos quando 20 disputam 10 unidades, em 5 de 5 repetições',
              sourceLabel: 'README da API de Pedidos, Destaques',
              sourceHref: `${PEDIDOS}#destaques`,
            },
            {
              value: '160',
              label: 'testes: 120 no back-end (MySQL 8.4 real via Testcontainers) e 40 no front-end',
              sourceLabel: 'README da API de Pedidos, seção Testes',
              sourceHref: `${PEDIDOS}#testes`,
            },
          ],
          evidence: [
            {
              type: 'flow',
              title: 'Criação de pedido, em ordem',
              steps: [
                'Valida empresa, produtos, vínculos com o fornecedor e repetições',
                'Dá baixa no estoque de cada produto, em ordem crescente de id, com UPDATE condicional',
                'Grava o pedido e os itens, com o preço copiado do produto',
                'Registra as movimentações de saída. Se qualquer item não tem estoque, nada é gravado',
              ],
            },
            {
              type: 'image',
              src: '/projetos/api-pedidos-estoque/02-painel.png',
              alt: 'Painel com indicadores, estoque crítico e pedidos recentes',
              caption: 'Painel com dados fictícios do profile demo.',
            },
            {
              type: 'image',
              src: '/projetos/api-pedidos-estoque/05-pedidos.png',
              alt: 'Listagem de pedidos com status confirmado ou cancelado',
              caption: 'Pedidos confirmados ou cancelados. O cancelamento estorna o estoque.',
            },
            {
              type: 'image',
              src: '/projetos/api-pedidos-estoque/08-regra-parana.png',
              alt: 'Mensagem de erro ao vincular fornecedor menor de idade a empresa do Paraná',
              caption: 'Regra do Paraná aplicada pelo servidor. Quando a regra é violada, nada é salvo.',
            },
          ],
          limitations: [
            'A mensagem "disponível N" pode sair defasada sob concorrência. A recusa vem do UPDATE e continua correta.',
            'Seletores de empresa, fornecedor e pedido são limitados a 100 registros.',
            'O cadastro é aberto: qualquer pessoa cria um usuário e obtém um token.',
            'Token no localStorage, sem logout nem revogação. A validade padrão é de 24 horas.',
            'Sem deploy público. Roda localmente com Docker Compose.',
          ],
        },
      },
      {
        slug: 'async-task-hub',
        cover: { src: '/projetos/async-task-hub/cover.png', alt: 'Diagrama em passos do fluxo de upload: POST, PostgreSQL, Redis, worker Celery e DLQ' },
        status: 'portfolio',
        title: 'AsyncTask Hub',
        period: 'Jun/2026',
        problem:
          'Uma requisição de upload não pode esperar o processamento, e cada falha precisa ter um destino rastreável.',
        built:
          'API FastAPI que responde na hora e envia o trabalho para um worker Celery. Falhas vão para retry ou para a Dead Letter Queue, com reprocessamento administrativo. O redimensionamento com Pillow é só a carga de trabalho usada para exercitar o fluxo.',
        decision:
          'Idempotência com índice único parcial no PostgreSQL. Dez uploads simultâneos do mesmo arquivo geram uma única tarefa, sem lock no Redis.',
        metric: {
          value: '5,7 s',
          label: 'resposta 503 com o Redis fora do ar (antes, 97 s)',
          sourceLabel: 'README do AsyncTask Hub, decisão 9',
          sourceHref: `${ASYNC}#9-redis-fora-do-ar-falhar-rápido-e-degradar-por-papel`,
        },
        stack: [
          'Python 3.12',
          'FastAPI',
          'Celery',
          'Redis',
          'PostgreSQL 16',
          'SQLAlchemy',
          'Alembic',
          'Pillow',
          'Flower',
          'Pytest',
          'Testcontainers',
        ],
        repoUrl: ASYNC,
        readmeUrl: `${ASYNC}#testes`,
        caseStudy: {
          problem:
            'O processamento de imagens é lento, e a API não pode segurar a requisição enquanto ele roda. Cada falha precisa terminar em um destino conhecido: retry, Dead Letter Queue ou reprocessamento manual.',
          decisions: [
            {
              title: 'Falha classificada pela fase e pelo errno',
              text: 'O Pillow levanta OSError sem errno para imagem corrompida, mas falhas de I/O trazem errno. Só erros da fase de decodificação passam pela classificação. Gravação, banco e Redis são sempre transitórios.',
            },
            {
              title: 'Índice único parcial no PostgreSQL em vez de lock no Redis',
              text: 'O índice é único em file_hash e vale só para tarefas em andamento. Um lock no Redis precisaria de TTL e ficaria fora da transação que cria a tarefa.',
            },
            {
              title: 'Redis fora do ar: falhar rápido',
              text: 'O result backend do Celery era a causa dos 97 s. Com ignore_result, timeouts de 2 s e um retry na publicação, o 503 caiu para 5,7 s. Cada papel do Redis degrada de um jeito: o broker responde 503, o rate limit passa a contar em memória e o aviso da DLQ vira log.',
            },
            {
              title: 'Reprocessamento com SELECT ... FOR UPDATE',
              text: 'Duas chamadas simultâneas na mesma entrada da DLQ não criam duas tarefas. A segunda espera e recebe 409 "Dead letter already reprocessed".',
            },
          ],
          numbers: [
            {
              value: '5,7 s',
              label: 'resposta 503 com o Redis fora do ar (antes, 97 s)',
              sourceLabel: 'README do AsyncTask Hub, decisão 9',
              sourceHref: `${ASYNC}#9-redis-fora-do-ar-falhar-rápido-e-degradar-por-papel`,
            },
            {
              value: '1',
              label: 'tarefa criada por 10 uploads simultâneos do mesmo arquivo',
              sourceLabel: 'README do AsyncTask Hub, decisão 2',
              sourceHref: `${ASYNC}#2-índice-único-parcial-no-postgres-em-vez-de-lock-no-redis`,
            },
            {
              value: '94',
              label: 'testes: 87 rápidos (SQLite e mocks) e 7 de integração com Postgres e Redis reais',
              sourceLabel: 'README do AsyncTask Hub, seção Testes',
              sourceHref: `${ASYNC}#testes`,
            },
          ],
          evidence: [
            {
              type: 'flow',
              title: 'Caminho de um upload',
              steps: [
                'POST /process/image: confere tamanho e tipo real pelos magic bytes, calcula o SHA-256',
                'Grava o arquivo como .part e cria a tarefa no PostgreSQL',
                'Após o commit, o arquivo vai para o caminho final e a tarefa é publicada no Redis',
                'O worker Celery decodifica a imagem com Pillow e grava o JPEG',
                'Sucesso: status completed. Falha transitória: retry com backoff. Falha permanente ou retries esgotados: DLQ no PostgreSQL',
              ],
            },
          ],
          limitations: [
            'Com o Redis fora, o rate limit passa a contar por processo, e o limite de 10 por minuto deixa de ser global.',
            'Uma tarefa que termina depois de ser varrida como travada grava completed por cima.',
            'Upload sem autenticação: só os endpoints administrativos exigem X-Admin-Key.',
            'Arquivos ficam em disco local, sem armazenamento de objetos.',
            'Em uma corrida na criação de tarefa, o upload pode responder 500 em vez do id da tarefa vencedora. A janela é pequena.',
          ],
        },
      },
      {
        slug: 'api-gateway',
        cover: { src: '/projetos/api-gateway/cover.png', alt: 'Diagrama em passos do gateway: rate limit, cache Redis, lock, API do GitHub e resposta' },
        status: 'portfolio',
        title: 'API Gateway com Rate Limiting e Cache',
        period: 'Jun/2026',
        problem:
          'Uma API externa com limite de uso precisa ser protegida de rajadas, e consultas repetidas não podem disparar várias chamadas simultâneas à origem.',
        built:
          'Gateway em FastAPI e Redis na frente da API REST do GitHub. Rate limiting com Fixed Window e Sliding Window Log, limites por tier de API key e cache-aside com lock contra cache stampede.',
        decision:
          'Operações atômicas com scripts Lua. Com ZCARD e ZADD em comandos separados, 20 requisições simultâneas passavam do limite.',
        metric: {
          value: '5 de 20',
          label: 'requisições simultâneas aceitas com limite 5',
          sourceLabel: 'README do API Gateway, decisão 2',
          sourceHref: `${GATEWAY}#2-atomicidade-com-scripts-lua`,
        },
        stack: ['Python 3.12', 'FastAPI', 'Redis 7', 'Lua', 'httpx', 'pytest', 'fakeredis', 'k6', 'Docker', 'GitHub Actions'],
        note: 'Projeto de portfólio, com foco na corretude dos algoritmos. Não é um sistema em produção.',
        repoUrl: GATEWAY,
        readmeUrl: `${GATEWAY}#testes`,
        caseStudy: {
          problem:
            'Uma API externa com limite de uso precisa ser protegida, e consultas repetidas não podem disparar várias chamadas simultâneas à origem. O projeto prioriza a corretude dos algoritmos de infraestrutura, não a regra de negócio.',
          decisions: [
            {
              title: 'Dois algoritmos de rate limit, troca por configuração',
              text: 'Fixed Window é barato, mas permite rajadas na virada da janela. Sliding Window Log guarda um timestamp por requisição em um ZSET e elimina a rajada, ao custo de mais memória por cliente. A escolha é feita por RATE_LIMIT_ALGORITHM.',
            },
            {
              title: 'Operações atômicas com Lua',
              text: 'Remoção de entradas antigas, contagem e inserção rodam em um único script. A requisição só entra no log se estiver abaixo do limite.',
            },
            {
              title: 'Cache stampede com lock e liberação por token',
              text: 'Só a requisição que obtém o lock (SET NX EX) busca na origem. As demais esperam pelo cache por até 3 s. A liberação compara o token em script Lua, para não apagar o lock de outra requisição.',
            },
            {
              title: 'Falhas da origem mapeadas para HTTP',
              text: 'Timeout vira 504. Erro HTTP, falha de conexão ou JSON inválido vira 502. Nada é cacheado nesses casos, e o lock é liberado.',
            },
          ],
          numbers: [
            {
              value: '5 de 20',
              label: 'requisições simultâneas aceitas com limite 5, em 5 repetições do teste de concorrência',
              sourceLabel: 'README do API Gateway, decisão 2',
              sourceHref: `${GATEWAY}#2-atomicidade-com-scripts-lua`,
            },
            {
              value: '1',
              label: 'chamada à origem para 10 requisições concorrentes ao mesmo usuário',
              sourceLabel: 'README do API Gateway, decisão 5',
              sourceHref: `${GATEWAY}#5-cache-aside-com-proteção-contra-stampede`,
            },
            {
              value: '38',
              label: 'testes automatizados, com fakeredis (sem Redis real)',
              sourceLabel: 'README do API Gateway, seção Testes',
              sourceHref: `${GATEWAY}#testes`,
            },
          ],
          evidence: [
            {
              type: 'flow',
              title: 'Caminho de uma requisição',
              steps: [
                'Middleware de rate limit: Fixed Window ou Sliding Window Log, por IP ou API key',
                'Acima do limite: 429 com Retry-After',
                'Cache HIT: resposta com X-Cache: HIT',
                'Cache MISS: uma requisição obtém o lock e busca na API do GitHub',
                'As demais esperam até 3 s pelo cache. Se o lock não for liberado, vão direto à origem',
                'A resposta é gravada no Redis com TTL de 300 s (configurável)',
              ],
            },
          ],
          limitations: [
            'Os tiers só se aplicam ao Sliding Window. O Fixed Window ignora o header X-API-Key.',
            'Sem Redis, as rotas que passam pelos limitadores respondem 500. Não há fallback.',
            'O rate limit usa o IP da conexão. Atrás de um proxy, todos os clientes compartilham o mesmo IP.',
            'As chaves de demonstração ficam no código, sem variável de ambiente.',
            'Os testes rodam com fakeredis, não com Redis real. Os números do k6 são de uma medição anterior e não são apresentados aqui.',
          ],
        },
      },
      {
        slug: 'site-institucional-b2b',
        cover: { src: '/projetos/site-institucional-b2b/cover.png', alt: 'Captura da página inicial do site institucional da indústria B2B' },
        status: 'freelance',
        title: 'Site institucional para indústria B2B',
        period: 'Desde jan/2025, com manutenção contínua',
        problem:
          'Site institucional de uma indústria B2B, com versão anterior em React e SQL Server, que precisava de nova base técnica e de conteúdo em vários idiomas.',
        built:
          'Refatoração full stack com Next.js, Node.js e Supabase. Conteúdo em três idiomas (português, inglês e espanhol), painel administrativo e catálogo de 82 produtos.',
        decision:
          'Migração de React e SQL Server para Next.js, Node.js e Supabase, com i18n próprio e painel para o cliente editar o conteúdo.',
        metric: {
          value: '82',
          label: 'produtos no catálogo, com conteúdo em três idiomas',
          sourceLabel: 'Confirmado pelo autor',
          sourceHref: site.url,
        },
        stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Chakra UI', 'Framer Motion', 'next-i18next'],
        liveUrl: 'https://www.jwell.com.br',
      },
    ],
  },
  experience: {
    eyebrow: '03 · Experiência',
    title: 'Experiência',
    intro: 'Métricas confirmadas pelo autor, de cada período.',
    current: 'Atual',
    items: [
      {
        id: 'freelancer',
        period: 'abr/2023 a presente',
        role: 'Desenvolvedor Full Stack Freelancer',
        company: 'Autônomo',
        current: true,
        points: [
          'Sistemas web sob demanda para clientes de diferentes segmentos, do levantamento de requisitos à entrega em produção.',
          'Refatoração full stack de um site institucional B2B, de React e SQL Server para Next.js, Node.js e Supabase, com i18n em três idiomas e painel administrativo. Manutenção contínua desde jan/2025.',
          'APIs REST em Node.js e TypeScript, com foco em arquitetura limpa.',
          'Gestão de prazos e comunicação direta com clientes, o que complementa a visão técnica com visão de produto.',
        ],
      },
      {
        id: 'dti',
        period: 'abr/2022 a abr/2023',
        role: 'Estagiário de Desenvolvimento de Software',
        company: 'dti digital',
        location: 'Belo Horizonte, MG',
        points: [
          'Desenvolvimento na Microsoft Power Platform: um software interno de controle do fluxo de projetos, com Power Apps, Power Automate e Power BI.',
          'APIs REST em Node.js e TypeScript para sistemas corporativos de médio porte.',
          'Otimização de queries em SQL Server, com profiling e índices compostos: redução de cerca de 40% no tempo de resposta de relatórios financeiros críticos.',
          'Pipeline de CI/CD com Docker: deploy manual de 45 min para menos de 8 min.',
          'Mais de 50 code reviews em Scrum, e aumento da cobertura de testes do time de 62% para 81%.',
        ],
      },
      {
        id: 'linked',
        period: 'ago/2019 a jan/2022',
        role: 'Diretor de Projetos',
        company: 'Linked, Empresa Júnior da UFSJ',
        points: [
          'Coordenação da entrega de 32 projetos web (React, JavaScript, HTML, CSS e APIs REST), com equipes de até 6 desenvolvedores.',
          'Padrão de componentização em React e Clean Code: o onboarding de novos membros caiu de 3 semanas para 5 dias.',
          'Interface técnica com clientes, traduzindo requisitos de negócio em soluções viáveis e priorizando entregas por impacto.',
        ],
      },
    ],
  },
  stack: {
    eyebrow: '04 · Stack',
    title: 'Stack',
    intro: 'Agrupada por nível de uso. Tecnologias em estudo não aparecem como experiência consolidada.',
    labels: {
      used: 'Utilizadas em projetos',
      known: 'Também conheço',
      academic: 'Uso acadêmico',
      studying: 'Em estudo',
    },
    groups: {
      used: [
        { label: 'Back-end', items: ['Node.js', 'TypeScript', 'Express', 'Zod', 'Python', 'FastAPI', 'Celery', 'Java', 'Spring Boot'] },
        { label: 'Front-end', items: ['React', 'Next.js', 'Vite', 'Angular', 'JavaScript', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Capacitor'] },
        { label: 'Bancos de dados', items: ['PostgreSQL', 'PostGIS', 'Prisma', 'Supabase', 'SQL Server', 'MySQL', 'Redis'] },
        { label: 'Migrações', items: ['Flyway', 'Alembic'] },
        { label: 'Testes', items: ['Vitest', 'Jest', 'Supertest', 'Pytest', 'JUnit e MockMvc', 'Testcontainers', 'k6'] },
        { label: 'DevOps e hospedagem', items: ['Docker', 'GitHub Actions', 'Render', 'Vercel', 'Cloudflare Pages'] },
        { label: 'IA e mapas', items: ['Gemini (Vertex AI)', 'OpenAI API', 'DeepSeek API', 'OSRM', 'Leaflet', 'Nominatim'] },
        { label: 'Integrações', items: ['Stripe', 'Resend', 'Sentry'] },
        { label: 'Power Platform', items: ['Power Apps', 'Power Automate', 'Power BI', 'Power Fx'] },
      ],
      known: { label: 'Também conheço', items: ['NestJS', 'MongoDB'] },
      academic: { label: 'Uso acadêmico', items: ['Django'] },
      studying: { label: 'Em estudo', items: ['AWS Lambda'] },
    },
  },
  others: {
    eyebrow: '05 · Outros projetos',
    title: 'Outros projetos',
    intro: 'Projetos com repositório privado ou fora do escopo das seções anteriores.',
    items: [
      {
        title: 'App Mobile + Alexa Skill (TCC)',
        description:
          'App Android em Java integrado a uma Alexa Skill em Node.js, com arquitetura orientada a eventos e interação por voz. Repositório privado por restrição acadêmica.',
        tags: ['Android', 'Java', 'Node.js', 'Alexa SDK'],
      },
    ],
  },
  contact: {
    eyebrow: '06 · Contato',
    title: 'Vamos conversar',
    intro: 'Se quiser conversar sobre uma vaga ou um projeto, escreva por e-mail ou pelo LinkedIn.',
    labels: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', location: 'Localização' },
    location: 'Ouro Branco, MG · Brasil',
    copy: 'Copiar e-mail',
    copied: 'Copiado',
  },
  caseStudy: {
    back: 'Voltar para os projetos',
    problemTitle: 'Problema',
    decisionsTitle: 'Decisões',
    numbersTitle: 'Números e fontes',
    evidenceTitle: 'Evidências',
    limitationsTitle: 'Limitações conhecidas',
    flowLabel: 'Fluxo',
    readmeCta: 'Ler o README completo',
    repoCta: 'Ver repositório',
    notFound: 'Projeto não encontrado.',
    notFoundLink: 'Voltar para o início',
  },
  footer: {
    role: 'Desenvolvedor Full Stack',
    rights: 'Todos os direitos reservados.',
  },
}
