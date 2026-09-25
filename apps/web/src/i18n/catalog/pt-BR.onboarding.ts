// FILE: pt-BR.onboarding.ts
// Purpose: Brazilian Portuguese catalog for the first-run onboarding flow.
//          Keys are the English source strings used in the UI.
// Layer: Web i18n

const ptBROnboarding: Readonly<Record<string, string>> = {
  // ── Welcome step ───────────────────────────────────────────────────────────
  "Local-first": "Local em primeiro lugar",
  "No account. Workspace data stays on this machine.":
    "Sem conta. Os dados do espaço de trabalho ficam nesta máquina.",
  "Your own agents": "Seus próprios agentes",
  "Drives the CLIs, accounts and keys already set up here.":
    "Usa as CLIs, contas e chaves que você já configurou aqui.",
  "Verify before done": "Verifique antes de concluir",
  "Diff, terminal, browser and PR stay in one loop.":
    "Diff, terminal, navegador e PR no mesmo fluxo.",

  // ── Feature tour ───────────────────────────────────────────────────────────
  "Synara capabilities": "Recursos do Synara",
  "Read the guide": "Ler o guia",
  "Any agent": "Qualquer agente",
  "Run every coding agent in one workspace":
    "Rode todos os agentes de programação em um só espaço de trabalho",
  "Synara sits around the agent runtimes you already trust: Claude Code, Codex, Cursor, Devin, Antigravity, Grok, Factory Droid, OpenCode, and Pi. The provider keeps its account, models, and limits. Synara owns the durable task, environment, transcript, and delivery workflow around it.":
    "O Synara envolve os runtimes de agente em que você já confia: Claude Code, Codex, Cursor, Devin, Antigravity, Grok, Factory Droid, OpenCode e Pi. O provedor mantém sua conta, modelos e limites. O Synara cuida da tarefa durável, do ambiente, do histórico e do fluxo de entrega ao redor.",
  "Switch models mid-thread": "Troque de modelo no meio da conversa",
  "Hand a thread to another provider": "Passe uma conversa para outro provedor",
  "Usage for every provider": "Uso de cada provedor",
  "Tasks & worktrees": "Tarefas e worktrees",
  "One task, one isolated environment": "Uma tarefa, um ambiente isolado",
  "Each task owns one body of work: its conversation, provider session, working environment, tool activity, and Git changes. Run tasks in parallel on managed Git worktrees so two agents never edit the same checkout.":
    "Cada tarefa reúne um trabalho completo: sua conversa, sessão do provedor, ambiente de trabalho, atividade de ferramentas e alterações no Git. Rode tarefas em paralelo em worktrees gerenciadas pelo Git para que dois agentes nunca editem o mesmo checkout.",
  "Forks from any message": "Forks a partir de qualquer mensagem",
  "Subagents and side chats": "Subagentes e conversas paralelas",
  "Review & PRs": "Revisão e PRs",
  "From objective to evidence": "Do objetivo à evidência",
  "A task is complete only after you understand and verify its result, not when the provider reports it is finished. Inspect diffs, run terminals, then commit, push, and open a pull request without leaving the workspace.":
    "Uma tarefa só termina quando você entende e verifica o resultado, não quando o provedor diz que acabou. Inspecione diffs, rode terminais e então faça commit, push e abra um pull request sem sair do espaço de trabalho.",
  "Diff review with file tree": "Revisão de diff com árvore de arquivos",
  "Commit → push → PR": "Commit → push → PR",
  "Native pull-request workspace": "Espaço de trabalho nativo de pull request",
  "Browser & devices": "Navegador e dispositivos",
  "Verify in a real browser or simulator": "Verifique em um navegador real ou simulador",
  "Agents drive a visible, task-owned browser you can watch and annotate. On macOS, an iOS Simulator pane streams the device so agents can build, launch, and tap through an app while you follow along.":
    "Os agentes usam um navegador visível e pertencente à tarefa, que você pode acompanhar e anotar. No macOS, um painel do Simulador iOS transmite o dispositivo para que os agentes compilam, iniciem e naveguem em um app enquanto você acompanha.",
  "Shared Chromium surface": "Superfície Chromium compartilhada",
  "Element annotations": "Anotações de elementos",
  "iOS Simulator pane": "Painel do Simulador iOS",
  "Automations & goals": "Automações e metas",
  "Hand off work that should keep moving": "Delegue trabalho que deve continuar andando",
  "Schedule recurring runs, attach a persistent goal to a thread so it keeps going after each clean turn, and let Synara bring you back when something needs attention. Scheduled does not mean autonomous approval.":
    "Agende execuções recorrentes, vincule uma meta persistente a uma conversa para que ela continue após cada turno limpo e deixe o Synara chamar você quando algo precisar de atenção. Agendado não significa aprovação autônoma.",
  "Interval, daily, cron schedules": "Intervalos, diariamente, cron",
  "Natural-language stop conditions": "Condições de parada em linguagem natural",
  "Thread goals": "Metas de conversa",
  "Agent Gateway": "Agent Gateway",
  "Let agents operate Synara itself": "Deixe os agentes operarem o próprio Synara",
  "A built-in MCP surface lets a supported provider session create tasks, wait on them, read transcripts, and steer other threads. Pair Codex, Claude Code, or Claude Desktop from outside with scoped, revocable credentials.":
    "Uma superfície MCP integrada permite que uma sessão de provedor compatível crie tarefas, aguarde por elas, leia históricos e direcione outras conversas. Conecte Codex, Claude Code ou Claude Desktop de fora com credenciais delimitadas e revogáveis.",
  "Parallel task batches": "Lotes de tarefas em paralelo",
  "External MCP pairing": "Pareamento MCP externo",
  "Approval boundaries": "Limites de aprovação",
  Shortcuts: "Atalhos",
  "Keep your hands on the keyboard": "Mantenha as mãos no teclado",
  "Everything in the workspace has a shortcut, and the keymap is editable from Settings. A few worth learning on day one:":
    "Tudo no espaço de trabalho tem um atalho, e o mapa de teclas é editável nas Configurações. Alguns que valem aprender no primeiro dia:",
  "New task": "Nova tarefa",
  "Add project": "Adicionar projeto",
  "Search sidebar": "Buscar na barra lateral",
  "Toggle terminal": "Alternar terminal",
  "Toggle diff": "Alternar diff",

  // ── Dialog chrome ──────────────────────────────────────────────────────────
  "Welcome to {name}": "Bem-vindo ao {name}",
  "What {name} can do": "O que o {name} pode fazer",
  "Choose your agents": "Escolha seus agentes",
  "Pick an appearance": "Escolha uma aparência",
  "Add your first project": "Adicione seu primeiro projeto",
  "You're all set": "Tudo pronto",
  "A local-first workspace for coding agents. Setup takes about a minute.":
    "Um espaço de trabalho local para agentes de programação. A configuração leva cerca de um minuto.",
  "Detected on this machine. Uncheck any you don't want {name} to use.":
    "Detectados nesta máquina. Desmarque os que você não quer que o {name} use.",
  "Applies live behind this window. Change it anytime in Settings → Appearance.":
    "Aplica-se ao vivo atrás desta janela. Mude quando quiser em Configurações → Aparência.",
  "A project is a folder {name} works in. Git repositories unlock branches, worktrees, diffs and pull requests.":
    "Um projeto é uma pasta onde o {name} trabalha. Repositórios Git liberam branches, worktrees, diffs e pull requests.",
  "Step {current} of {total}": "Etapa {current} de {total}",
  "Get started": "Começar",
  "Set up": "Configurar",
  Continue: "Continuar",
  "Skip for now": "Pular por agora",
  "Start using {name}": "Começar a usar o {name}",
  "{count} agents connected_one": "{count} agente conectado",
  "{count} agents connected_other": "{count} agentes conectados",
  "{theme} theme": "Tema {theme}",
  "{count} projects added_one": "{count} projeto adicionado",
  "{count} projects added_other": "{count} projetos adicionados",
  "No project yet": "Nenhum projeto ainda",

  // ── Providers step ─────────────────────────────────────────────────────────
  Connected: "Conectado",
  "Needs sign-in": "Precisa entrar",
  "Not installed": "Não instalado",
  Disabled: "Desativado",
  Disable: "Desativar",
  Enable: "Ativar",
  "{action} {name}": "{action} {name}",
  Done: "Concluir",
  "Sign in": "Entrar",
  Guide: "Guia",
  "Re-detect": "Detectar novamente",
  Detecting: "Detectando",
  "Could not check": "Não foi possível verificar",
  "Checking agents…": "Verificando agentes…",
  "Could not check all agents": "Não foi possível verificar todos os agentes",
  "Detecting agents on this machine…": "Detectando agentes nesta máquina…",
  "Couldn't check all agents. Try Re-detect.":
    "Não foi possível verificar todos os agentes. Tente detectar novamente.",
  "Signing in to {name}": "Entrando em {name}",
  "{connected} connected · {needsSignIn} need sign-in · {notInstalled} not installed":
    "{connected} conectados · {needsSignIn} precisam entrar · {notInstalled} não instalados",

  // ── Project step ───────────────────────────────────────────────────────────
  "Add projects from": "Adicionar projetos de",
  "Existing folder": "Pasta existente",
  "Import from Codex or Claude": "Importar do Codex ou Claude",
  "Opening the folder picker…": "Abrindo o seletor de pastas…",
  "Drop a folder here, or": "Solte uma pasta aqui ou",
  browse: "navegue",
  "/path/to/repository": "/caminho/para/repositório",
  "Project folder path": "Caminho da pasta do projeto",
  Add: "Adicionar",
  "Added projects": "Projetos adicionados",
  Added: "Adicionado",
  "Already linked": "Já vinculado",
  "Could not add the project.": "Não foi possível adicionar o projeto.",
  "Could not open the folder picker.": "Não foi possível abrir o seletor de pastas.",

  // ── Footer / steps ─────────────────────────────────────────────────────────
  "Setup progress": "Progresso da configuração",
  "Skip setup": "Pular configuração",
  Back: "Voltar",
  "Working…": "Processando…",
  "Applies to both light and dark": "Aplica-se aos modos claro e escuro",
  "Shortcuts worth learning today": "Atalhos que valem aprender hoje",
};

export default ptBROnboarding;
