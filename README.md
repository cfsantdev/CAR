<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard CAR - Gestão Ambiental</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        :root {
            --primary: #2d6a4f;
            --primary-light: #40916c;
            --secondary: #1b4332;
            --accent: #d8f3dc;
            --bg: #f8fafc;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --white: #ffffff;
            --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg);
            color: var(--text-main);
            display: flex;
            min-height: 100vh;
        }

        /* Sidebar */
        aside {
            width: 260px;
            background-color: var(--secondary);
            color: var(--white);
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100vh;
        }

        .logo {
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: 3rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--accent);
            text-decoration: none;
            padding: 12px;
            border-radius: 8px;
            transition: all 0.3s;
            margin-bottom: 0.5rem;
        }

        .nav-link:hover {
            background: var(--primary);
            color: white;
        }

        /* Main Content */
        main {
            margin-left: 260px;
            flex: 1;
            padding: 2rem 3rem;
        }

        header {
            margin-bottom: 3rem;
        }

        header h1 { font-size: 1.8rem; color: var(--secondary); }
        header p { color: var(--text-muted); margin-top: 5px; }

        /* Grid de Cards */
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .card {
            background: var(--white);
            padding: 2rem;
            border-radius: 16px;
            box-shadow: var(--shadow);
            transition: transform 0.3s, box-shadow 0.3s;
            border: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        }

        .icon-box {
            width: 50px;
            height: 50px;
            background: var(--accent);
            color: var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .card h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--secondary);
        }

        .card p {
            font-size: 0.9rem;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 1.5rem;
        }

        .btn-access {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background-color: var(--primary);
            color: white;
            text-decoration: none;
            padding: 10px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.9rem;
            transition: background 0.2s;
        }

        .btn-access:hover {
            background-color: var(--primary-light);
        }

        .status-badge {
            font-size: 0.75rem;
            padding: 4px 8px;
            border-radius: 99px;
            background: #e2e8f0;
            color: #475569;
            width: fit-content;
            margin-bottom: 10px;
        }

        @media (max-width: 768px) {
            aside { display: none; }
            main { margin-left: 0; padding: 1.5rem; }
        }
    </style>
</head>
<body>

    <aside>
        <div class="logo">
            <i data-lucide="leaf"></i>
            <span>Portal CAR</span>
        </div>
        <nav>
            <a href="#" class="nav-link active" data-page="dashboard"><i data-lucide="layout-dashboard"></i> Dashboard</a>
            <a href="#" class="nav-link" data-page="relatorios"><i data-lucide="file-text"></i> Relatórios</a>
            <a href="#" class="nav-link" data-page="configuracoes"><i data-lucide="settings"></i> Configurações</a>
        </nav>
    </aside>

    <main id="app-container">
    </main>

    <script>
        // 1. Definição dos Conteúdos (Templates)
    const routes = {
        dashboard: `
            <div id="dashboard">
            <header>
                <h1 id="greeting">Bom dia, Gestor!</h1>
                <p>Bem-vindo ao painel de controle do Cadastro Ambiental Rural.</p>
            </header>

            <div class="dashboard-grid">
                <div class="card">
                    <div>
                        <span class="status-badge">Externo</span>
                        <div class="icon-box"><i data-lucide="globe"></i></div>
                        <h3>Módulo Público SIMLAM</h3>
                        <p>Acesse consultas públicas, legislações e informações gerais do IDAF/ES.</p>
                    </div>
                    <a href="http://simlam.idaf.es.gov.br/portal/" target="_blank" class="btn-access">
                        Acessar Portal <i data-lucide="external-link" size="16"></i>
                    </a>
                </div>

                <div class="card">
                    <div>
                        <span class="status-badge">Restrito</span>
                        <div class="icon-box" style="background: #cfe2ff; color: #084298;"><i data-lucide="lock"></i></div>
                        <h3>Módulo Credenciado</h3>
                        <p>Autenticação para profissionais credenciados e análise de processos internos.</p>
                    </div>
                    <a href="http://simlam.idaf.es.gov.br/Credenciado/Autenticacao/LogOn" target="_blank" class="btn-access" style="background: #084298;">
                        Fazer Login <i data-lucide="log-in" size="16"></i>
                    </a>
                </div>

                <div class="card">
                    <div>
                        <span class="status-badge">Acesso Rápido</span>
                        <div class="icon-box" style="background: #fff3cd; color: #856404;"><i data-lucide="user-plus"></i></div>
                        <h3>Novo Credenciado</h3>
                        <p>Formulário para registro de novos profissionais no sistema SIMLAM.</p>
                    </div>
                    <a href="http://simlam.idaf.es.gov.br/publico/Credenciado/Criar" target="_blank" class="btn-access" style="background: #856404;">
                        Cadastrar <i data-lucide="plus-circle" size="16"></i>
                    </a>
                </div>

                <div class="card">
                    <div>
                        <span class="status-badge" style="background: #d1e7dd; color: #0f5132;">Ferramenta CAR</span>
                        <div class="icon-box" style="background: #d1e7dd; color: #0f5132;"><i data-lucide="home"></i></div>
                        <h3>Pessoa e Imóvel</h3>
                        <p>Gerenciamento local de dados estruturados para importação/exportação JSON.</p>
                    </div>
                    <a href="https://cfsantdev.github.io/CAR/DOCUMENTOS/CADASTRO.html" target="_blank" class="btn-access" style="background: #0f5132;">
                        Abrir Formulário <i data-lucide="arrow-right-circle" size="16"></i>
                    </a>
                </div>
            </div>
        </div>
        `,
        relatorios: `
            <header>
                <h1>Relatórios</h1>
                <p>Visualize as métricas e estatísticas dos cadastros realizados.</p>
            </header>
            <div class="card">
                <p>Página de relatórios em construção.</p>
            </div>
        `,
        configuracoes: `
            <header>
                <h1>Configurações</h1>
                <p>Gerencie suas preferências e acessos do sistema.</p>
            </header>
            <div class="card">
                <p>Aqui você pode configurar as preferências do painel.</p>
            </div>
        `
    };

    // 2. Função de Troca de Conteúdo
    function loadPage(pageName) {
        const container = document.getElementById('app-container');
        container.innerHTML = routes[pageName] || routes['dashboard'];
        if(pageName === 'dashboard'){
            // Lógica de saudação dinâmica
            const hour = new Date().getHours();
            const greetingElement = document.getElementById('greeting');
        
            if (hour >= 5 && hour < 12) greetingElement.innerText = "Bom dia, Gestor!";
            else if (hour >= 12 && hour < 18) greetingElement.innerText = "Boa tarde, Gestor!";
            else greetingElement.innerText = "Boa noite, Gestor!";
        }
        
        // Atualiza estilo do menu ativo
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('data-page') === pageName) link.classList.add('active');
        });

        // Re-inicializa os ícones caso necessário
        lucide.createIcons();
    }

    // 3. Event Listeners
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Carrega a página inicial
    loadPage('dashboard');

    // Seleciona o primeiro h1 dentro do body
    const primeiroH1 = document.querySelector("body h1");

    // Verifica se o elemento existe antes de tentar remover
    if (primeiroH1) {
        primeiroH1.remove();
    }
    </script>
</body>
</html>
