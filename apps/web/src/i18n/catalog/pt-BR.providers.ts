// FILE: pt-BR.providers.ts
// Purpose: Brazilian Portuguese catalog for provider, model, skills, MCP, profile, and advanced
//          settings panels. Keys are the English source strings used in the UI.
// Layer: Web i18n

const ptBRProviders: Readonly<Record<string, string>> = {
  // ── Model settings ────────────────────────────────────────────────────────
  "Generation defaults": "Padrões de geração",
  "git writing model": "modelo de escrita do Git",
  "Used for generated commit messages, PR titles, and branch names.":
    "Usado para gerar mensagens de commit, títulos de PR e nomes de branches.",
  "Git text generation model": "Modelo de geração de texto para Git",
  "Saved model slugs": "Slugs de modelos salvos",
  "Add custom model slugs for supported providers.":
    "Adicione slugs de modelos personalizados para provedores compatíveis.",
  "custom models": "modelos personalizados",
  "Custom model provider": "Provedor do modelo personalizado",
  "Show more ({count})": "Mostrar mais ({count})",
  "Enter a model slug.": "Informe o slug de um modelo.",
  "That model is already built in.": "Esse modelo já vem incluído.",
  "Model slugs must be {max} characters or less.":
    "Os slugs de modelos devem ter no máximo {max} caracteres.",
  "That custom model is already saved.": "Esse modelo personalizado já está salvo.",
  "Remove {name}": "Remover {name}",

  // ── Provider settings ─────────────────────────────────────────────────────
  "Provider picker": "Seletor de provedores",
  "Enabled providers": "Provedores habilitados",
  "Allow background checks and new turns. Enabling a provider does not install it or sign it in. Disabling keeps existing threads and does not interrupt a running turn.":
    "Permite verificações em segundo plano e novas execuções. Habilitar um provedor não o instala nem inicia uma sessão. Desabilitá-lo mantém as conversas existentes e não interrompe uma execução em andamento.",
  "Checking setup": "Verificando configuração",
  "Refresh status": "Atualizar status",
  "Saving provider activity": "Salvando atividade dos provedores",
  "{enabled} of {total} enabled": "{enabled} de {total} habilitados",
  "enabled providers": "provedores habilitados",
  "Setup guide": "Guia de configuração",
  "{provider} setup guide": "Guia de configuração de {provider}",
  "Disable {provider}": "Desabilitar {provider}",
  "Enable {provider}": "Habilitar {provider}",
  Unavailable: "Indisponível",
  "Needs attention": "Requer atenção",
  "Installed · sign-in not verified": "Instalado · autenticação não verificada",
  "Disabled · enable to check setup": "Desabilitado · habilite para verificar a configuração",
  "Checking {provider} CLI availability": "Verificando disponibilidade da CLI de {provider}",
  "Show {provider} in the provider picker": "Mostrar {provider} no seletor de provedores",
  "{provider} is unavailable in the provider picker":
    "{provider} não está disponível no seletor de provedores",
  "Reorder {provider}": "Reordenar {provider}",
  "Available CLIs": "CLIs disponíveis",
  "Show or hide installed providers in the picker and drag them into your preferred order. Hiding a provider here does not disable its server activity.":
    "Mostre ou oculte provedores instalados no seletor e arraste-os para colocá-los na ordem desejada. Ocultar um provedor aqui não desativa a atividade dele no servidor.",
  "Checking installed CLIs": "Verificando CLIs instaladas",
  "No CLIs detected": "Nenhuma CLI detectada",
  "{visible} of {available} installed shown": "{visible} de {available} instaladas visíveis",
  "{count} installed · custom order": "{count} instaladas · ordem personalizada",
  "{count} installed": "{count} instaladas",
  "provider picker": "seletor de provedores",
  Updates: "Atualizações",
  "Automatic CLI update checks": "Verificação automática de atualizações das CLIs",
  "Check Codex, Claude, and other provider CLIs for newer versions in the background.":
    "Verifica em segundo plano se há versões mais recentes das CLIs do Codex, Claude e outros provedores.",
  "CLI update checks": "verificação de atualizações das CLIs",
  "Provider updates": "Atualizações dos provedores",
  "Review installed provider tools that Synara can safely update.":
    "Confira as ferramentas instaladas dos provedores que o Synara pode atualizar com segurança.",
  "Automatic checks off": "Verificações automáticas desativadas",
  "{count} update available": "{count} atualização disponível",
  "{count} updates available": "{count} atualizações disponíveis",
  "No provider updates detected": "Nenhuma atualização de provedor encontrada",
  "Manual update": "Atualização manual",
  "Provider tools": "Ferramentas dos provedores",
  "Installed CLIs": "CLIs instaladas",
  "Review provider versions and update tools. Open a row only when you need binary overrides.":
    "Confira as versões dos provedores e atualize as ferramentas. Abra uma linha somente se precisar substituir o caminho do executável.",
  "provider tools": "ferramentas dos provedores",
  "CLI docs": "Documentação da CLI",
  Install: "Instalar",
  Update: "Atualizar",
  Config: "Configuração",
  Reference: "Referência",
  Hooks: "Hooks",
  Quickstart: "Início rápido",
  Headless: "Sem interface",
  Commands: "Comandos",
  Custom: "Personalizado",
  "Update queued": "Atualização na fila",
  Updating: "Atualizando",
  Updated: "Atualizado",
  "Update failed": "Falha na atualização",
  "Still outdated": "Ainda desatualizado",
  "Current {version}": "Atual {version}",
  "Latest {version}": "Mais recente {version}",
  "{current} → {latest}": "{current} → {latest}",
  "Run {command}": "Executar {command}",
  "Could not update {provider}": "Não foi possível atualizar {provider}",
  "Copy the command below to update manually in a terminal.":
    "Copie o comando abaixo para atualizar manualmente pelo terminal.",
  "{provider} update finished": "Atualização de {provider} concluída",
  "New sessions will use the refreshed provider.":
    "Novas sessões usarão a versão atualizada do provedor.",
  "Updating providers...": "Atualizando provedores...",
  "Updating {provider}.": "Atualizando {provider}.",
  "Updating {count} providers.": "Atualizando {count} provedores.",
  "Provider updates failed": "Falha ao atualizar os provedores",
  "Some provider updates failed": "Falha ao atualizar alguns provedores",
  "The update command did not complete successfully.":
    "O comando de atualização não foi concluído com sucesso.",
  "The provider still appears outdated after updating.":
    "O provedor ainda parece desatualizado após a atualização.",
  "The update request failed.": "A solicitação de atualização falhou.",
  "The provider update request could not start.":
    "Não foi possível iniciar a solicitação de atualização do provedor.",
  "Copy the commands below to update manually in a terminal.":
    "Copie os comandos abaixo para atualizar manualmente pelo terminal.",
  "{provider} updated": "{provider} atualizado",
  "{count} providers updated": "{count} provedores atualizados",
  "New sessions will use the refreshed provider tools.":
    "Novas sessões usarão as ferramentas atualizadas dos provedores.",
  "{provider} update available": "Atualização de {provider} disponível",
  "{count} provider updates available": "{count} atualizações de provedores disponíveis",
  "{provider} has a newer version available.":
    "Há uma versão mais recente de {provider} disponível.",
  "{provider} and 1 more provider have newer versions available.":
    "Há versões mais recentes de {provider} e de mais um provedor.",
  "{provider} and {count} more providers have newer versions available.":
    "Há versões mais recentes de {provider} e de mais {count} provedores.",
  "Review updates": "Revisar atualizações",
  "Update all": "Atualizar tudo",
  "Invalid keybindings configuration": "Configuração de atalhos inválida",
  "Open keybindings.json": "Abrir keybindings.json",
  "Unable to open keybindings file": "Não foi possível abrir o arquivo de atalhos",
  "Unknown error opening file.": "Erro desconhecido ao abrir o arquivo.",
  "The provider update did not complete.": "A atualização do provedor não foi concluída.",
  "The provider update failed.": "Falha ao atualizar o provedor.",
  "A newer version is available, but Synara could not identify a safe one-click update command for this installation.":
    "Há uma versão mais recente, mas o Synara não conseguiu identificar um comando seguro para atualizar esta instalação com um clique.",
  "{provider} manages its own releases, so Synara cannot tell whether a newer version exists. Run the update to be sure.":
    "O próprio {provider} gerencia os lançamentos, então o Synara não consegue verificar se há uma versão mais recente. Execute a atualização para garantir.",
  "Configured — enter a replacement or leave blank":
    "Configurado — informe um substituto ou deixe em branco",
  "Command:": "Comando:",
  "Leave blank to use": "Deixe em branco para usar",
  "from your PATH.": "do seu PATH.",
  "from your PATH. Cursor editor CLI paths are accepted too.":
    "do seu PATH. Caminhos da CLI do editor Cursor também são aceitos.",
  "from your PATH. Authenticate with": "do seu PATH. Autentique-se com",
  "or set WINDSURF_API_KEY.": "ou defina WINDSURF_API_KEY.",
  "Claude Code keeps Artifacts off in embedded sessions. Turn this on so":
    "O Claude Code mantém os Artifacts desativados em sessões incorporadas. Ative esta opção para que",
  and: "e",
  "publish to claude.ai. Needs a claude.ai login on a Pro, Max, Team or Enterprise plan, and applies to new sessions.":
    "sejam publicados no claude.ai. É necessário entrar em uma conta claude.ai com plano Pro, Max, Team ou Enterprise. A opção se aplica a novas sessões.",
  "Codex binary path": "Caminho do executável do Codex",
  "CODEX_HOME path": "Caminho de CODEX_HOME",
  "Claude binary path": "Caminho do executável do Claude",
  "Artifacts, /design and /slides": "Artifacts, /design e /slides",
  "Cursor binary path": "Caminho do executável do Cursor",
  "Cursor Agent or Cursor CLI path": "Caminho do Cursor Agent ou da CLI do Cursor",
  "Cursor API endpoint": "Endpoint da API do Cursor",
  "Optional Cursor API endpoint override passed to `cursor-agent -e`.":
    "Substituição opcional do endpoint da API do Cursor, passada para `cursor-agent -e`.",
  "Antigravity binary path": "Caminho do executável do Antigravity",
  "Antigravity CLI binary path": "Caminho do executável da CLI do Antigravity",
  "Grok binary path": "Caminho do executável do Grok",
  "Droid binary path": "Caminho do executável do Droid",
  "Devin binary path": "Caminho do executável do Devin",
  "OpenCode binary path": "Caminho do executável do OpenCode",
  "OpenCode server URL": "URL do servidor OpenCode",
  "Optional existing OpenCode server URL. Leave blank to spawn a local server.":
    "URL opcional de um servidor OpenCode existente. Deixe em branco para iniciar um servidor local.",
  "OpenCode server password": "Senha do servidor OpenCode",
  "Optional password for an externally managed OpenCode server.":
    "Senha opcional para um servidor OpenCode gerenciado externamente.",
  "OpenAI response WebSockets": "WebSockets de resposta da OpenAI",
  "Use Opencode's experimental OpenAI response WebSocket transport for managed local servers.":
    "Use o transporte experimental de WebSocket de resposta da OpenAI do OpenCode em servidores locais gerenciados.",
  "Pi binary path": "Caminho do executável do Pi",
  "Pi agent directory": "Diretório do agente Pi",
  "Optional custom Pi agent directory for auth, models, skills, and commands.":
    "Diretório personalizado opcional do agente Pi para autenticação, modelos, skills e comandos.",
  "Optional custom Codex home and config directory.":
    "Diretório personalizado opcional do Codex para dados e configurações.",

  // ── Skills settings ───────────────────────────────────────────────────────
  "Portable skills": "Skills portáteis",
  "Synara skills folder": "Pasta de skills do Synara",
  "Skills placed here are available on every provider. When a provider already ships its own copy of a skill, that copy is used; otherwise Synara's copy is the fallback.":
    "As skills colocadas aqui ficam disponíveis em todos os provedores. Se um provedor já incluir sua própria cópia de uma skill, ela será usada; caso contrário, será usada a cópia do Synara.",
  "Scanning…": "Buscando…",
  "{count} of {total} skill enabled": "{count} de {total} skill habilitada",
  "{count} of {total} skills enabled": "{count} de {total} skills habilitadas",
  "Skill discovery failed": "Falha ao procurar skills",
  "Synara could not scan the skill folders. Retry after checking that the server is running.":
    "O Synara não conseguiu procurar nas pastas de skills. Verifique se o servidor está em execução e tente novamente.",
  "No skills found": "Nenhuma skill encontrada",
  "Add a skill folder containing a SKILL.md to the Synara skills folder above, or install skills for any supported provider.":
    "Adicione à pasta de skills do Synara uma pasta que contenha um SKILL.md ou instale skills para qualquer provedor compatível.",
  Skills: "Skills",
  "Shared skills": "Skills compartilhadas",
  "From {origin}": "De {origin}",
  "Enable the {skill} skill": "Ativar a skill {skill}",
  "Provider {count} copy": "{count} cópia do provedor",
  "Provider {count} copies": "{count} cópias dos provedores",
  Project: "Projeto",
  "Shared (.agents)": "Compartilhada (.agents)",

  // ── Provider usage ────────────────────────────────────────────────────────
  "Provider usage": "Uso dos provedores",
  "Not signed in": "Não conectado",
  Unsupported: "Não compatível",
  "No usage data reported yet.": "Nenhum dado de uso foi informado ainda.",
  "Sign in with `{command}` to see usage.": "Entre com `{command}` para ver o uso.",
  "Sign in with the provider CLI to see usage.": "Entre pela CLI do provedor para ver o uso.",
  "Loading provider usage…": "Carregando uso dos provedores…",
  Refresh: "Atualizar",
  "Usage is read locally from each provider CLI's stored credentials and fetched directly from the provider. The list follows whatever you are signed into; unsigned providers stay visible until any account is connected, then drop away. Short-lived tokens are refreshed through the provider's own CLI or official token endpoint.":
    "O uso é lido localmente das credenciais salvas em cada CLI e consultado diretamente ao provedor. A lista acompanha as contas conectadas: provedores sem autenticação permanecem visíveis até que uma conta seja conectada e depois desaparecem. Tokens de curta duração são renovados pela própria CLI do provedor ou pelo endpoint oficial de tokens.",

  // ── Profile ────────────────────────────────────────────────────────────────
  "Couldn’t load your local stats.": "Não foi possível carregar suas estatísticas locais.",
  Share: "Compartilhar",
  Edit: "Editar",
  "Lifetime tokens": "Tokens acumulados",
  "Peak day": "Dia de pico",
  "Total prompts": "Total de prompts",
  "Current streak": "Sequência atual",
  "Longest streak": "Maior sequência",
  "Claude token totals use verifiable records. Older history and unfinished turns may be incomplete.":
    "Os totais de tokens do Claude usam registros verificáveis. O histórico mais antigo e as execuções não concluídas podem estar incompletos.",
  Activity: "Atividade",
  "Activity insights": "Resumo da atividade",
  "Most used provider": "Provedor mais usado",
  "Most used reasoning": "Nível de raciocínio mais usado",
  "Most active hour": "Horário mais ativo",
  "Most worked project": "Projeto mais trabalhado",
  "Skills explored": "Skills exploradas",
  "Total skills used": "Total de usos de skills",
  "Total threads": "Total de conversas",
  "Most used plugins": "Plugins mais usados",
  "{count} run": "{count} execução",
  "{count} runs": "{count} execuções",
  "No skills or agents used yet.": "Nenhuma skill ou agente foi usado ainda.",
  "Model usage": "Uso de modelos",
  "Share of {basis}.": "Proporção de {basis}.",
  "No model activity yet.": "Nenhuma atividade de modelo ainda.",
  "{percent}% of {basis}": "{percent}% de {basis}",
  "{project} · {count} prompt": "{project} · {count} prompt",
  "{project} · {count} prompts": "{project} · {count} prompts",
  "{count} day": "{count} dia",
  "{count} days": "{count} dias",
  "tracked tokens": "tokens contabilizados",
  turns: "execuções",
  "Token usage is unavailable or zero for {providers}. Percentages reflect tracked tokens only. Their turns still count toward activity totals.":
    "O uso de tokens está indisponível ou zerado para {providers}. As porcentagens consideram apenas os tokens contabilizados. As execuções desses provedores ainda entram no total de atividade.",
  Low: "Baixo",
  Medium: "Médio",
  High: "Alto",
  "Extra High": "Extra alto",
  Max: "Máximo",
  None: "Nenhum",
  Ultra: "Ultra",

  // ── Profile share and avatar ───────────────────────────────────────────────
  "Share your activity": "Compartilhe sua atividade",
  "Copy stat card": "Copiar cartão de estatísticas",
  "Save stat card": "Salvar cartão de estatísticas",
  "Copied image to clipboard.": "Imagem copiada para a área de transferência.",
  "Could not render the image.": "Não foi possível gerar a imagem.",
  "Image copy unavailable. Use Save instead.": "Não foi possível copiar a imagem. Use Salvar.",
  "Image copied to clipboard — paste it into your post.":
    "Imagem copiada para a área de transferência — cole-a na sua publicação.",
  "Composer opened. Use Save to attach the image.":
    "O compositor foi aberto. Use Salvar para anexar a imagem.",
  "Composer opened. Image copy unavailable; use Save to attach.":
    "O compositor foi aberto. Não foi possível copiar a imagem; use Salvar para anexá-la.",
  "Saved PNG to your downloads.": "PNG salvo na pasta de downloads.",
  "Share to {target}": "Compartilhar em {target}",
  Copy: "Copiar",
  "lifetime tokens": "tokens acumulados",
  "peak day": "dia de pico",
  "current streak": "sequência atual",
  "longest streak": "maior sequência",
  "top provider": "provedor principal",
  prompt: "prompt",
  prompts: "prompts",
  token: "token",
  tokens: "tokens",
  "No activity on {date}": "Nenhuma atividade em {date}",
  "{value} {unit} on {date}": "{value} {unit} em {date}",
  "Edit profile": "Editar perfil",
  "Edit avatar": "Editar avatar",
  "Processing…": "Processando…",
  "Replace photo": "Substituir foto",
  "Upload photo": "Enviar foto",
  Remove: "Remover",
  "Use {color}": "Usar {color}",
  "Colors apply when no photo is set.": "As cores são aplicadas quando não há uma foto.",
  "Display name": "Nome de exibição",
  "Your name": "Seu nome",
  Username: "Nome de usuário",
  username: "nome de usuário",
  "Could not process that image.": "Não foi possível processar essa imagem.",
  "Could not read the selected file.": "Não foi possível ler o arquivo selecionado.",
  "That file isn't a readable image.": "Esse arquivo não contém uma imagem legível.",
  "Please choose an image file.": "Escolha um arquivo de imagem.",
  "That image has no pixels.": "Essa imagem não contém pixels.",
  "Image compression isn't supported in this browser.":
    "Este navegador não oferece suporte à compactação de imagens.",
  "That image is too large even after compression.":
    "Essa imagem continua grande demais mesmo após a compactação.",

  // ── External MCP connections ──────────────────────────────────────────────
  "Coding agent": "Agente de programação",
  "Connect a coding agent": "Conectar um agente de programação",
  Name: "Nome",
  "How this connection appears in Synara. Works with Codex, Claude, and any other MCP-capable agent.":
    "Como esta conexão aparece no Synara. Funciona com Codex, Claude e qualquer outro agente compatível com MCP.",
  "Access all of Synara": "Acesso a todo o Synara",
  "The agent can discover and work in every project, including ones you add later. Turn off to pick specific projects.":
    "O agente pode encontrar e trabalhar em todos os projetos, inclusive os que você adicionar depois. Desative para escolher projetos específicos.",
  "No projects are available.": "Nenhum projeto está disponível.",
  "Advanced permissions": "Permissões avançadas",
  "Optional access for existing tasks, shared checkouts, or execution without approvals. The safe defaults are recommended.":
    "Acesso opcional a tarefas existentes, checkouts compartilhados ou execução sem aprovações. Recomendamos manter os padrões seguros.",
  "Read other project tasks": "Ler tarefas de outros projetos",
  "Without this permission, the agent can read only tasks it creates.":
    "Sem esta permissão, o agente só poderá ler as tarefas que criar.",
  "Use the shared local checkout": "Usar o checkout local compartilhado",
  "High impact. Tasks may modify the checkout you are actively using instead of an isolated worktree.":
    "Alto impacto. As tarefas podem alterar o checkout em uso no lugar de uma worktree isolada.",
  "Run without approval prompts": "Executar sem pedir aprovação",
  "High impact. The external agent may start full-access execution without asking you to approve tool actions.":
    "Alto impacto. O agente externo pode iniciar uma execução com acesso total sem pedir sua aprovação para ações de ferramentas.",
  "High impact. Tasks may drive this Mac's screen — observe, click, type, menus, clipboard. Every computer action still asks for your approval.":
    "Alto impacto. As tarefas podem controlar a tela deste Mac — observar, clicar, digitar, abrir menus e usar a área de transferência. Cada ação no computador ainda exige sua aprovação.",
  "Create connection": "Criar conexão",
  "The connection lasts 30 days and can be revoked at any time. The next screen gives you one prompt to paste into your agent.":
    "A conexão dura 30 dias e pode ser revogada a qualquer momento. Na próxima tela, você receberá um prompt para colar no agente.",
  "Creating...": "Criando...",
  "Connect {name}": "Conectar {name}",
  Revoked: "Revogada",
  Expired: "Expirada",
  "Paired — waiting for first use": "Pareado — aguardando o primeiro uso",
  "Pairing code expired": "Código de pareamento expirado",
  "Waiting for pairing": "Aguardando pareamento",
  "This connection has been revoked and can no longer access Synara.":
    "Esta conexão foi revogada e não pode mais acessar o Synara.",
  "This connection has expired and can no longer access Synara.":
    "Esta conexão expirou e não pode mais acessar o Synara.",
  "Synara received a request from this agent. Setup is complete.":
    "O Synara recebeu uma solicitação deste agente. A configuração foi concluída.",
  "The private credential is stored locally. If the agent has not registered Synara yet, give it the setup prompt below.":
    "A credencial privada está salva localmente. Se o agente ainda não registrou o Synara, envie o prompt de configuração abaixo.",
  "The one-time pairing code was not used in time. Resume pairing to issue a fresh code without replacing this connection.":
    "O código de pareamento não foi usado a tempo. Retome o pareamento para gerar um novo código sem substituir esta conexão.",
  "Paste the setup prompt into your agent. This page updates automatically when pairing succeeds.":
    "Cole o prompt de configuração no agente. Esta página será atualizada automaticamente quando o pareamento for concluído.",
  "Last connected {date}.": "Última conexão: {date}.",
  "Connection expires {date}.": "A conexão expira em {date}.",
  "Revoke and start over": "Revogar e começar de novo",
  "Resuming...": "Retomando...",
  "Resume pairing": "Retomar pareamento",
  "1. Give your agent this prompt": "1. Envie este prompt ao seu agente",
  "Copy the prompt and paste it into the agent you want to connect (Codex, Claude Code, or any MCP-capable app). The agent pairs this computer, registers Synara in its own configuration, and verifies the connection by itself.":
    "Copie o prompt e cole no agente que deseja conectar (Codex, Claude Code ou qualquer app compatível com MCP). O agente pareia este computador, registra o Synara na própria configuração e verifica a conexão automaticamente.",
  "Paired. The prompt now covers only registration and verification.":
    "Pareamento concluído. O prompt agora cobre apenas o registro e a verificação.",
  "Pairing code expires {date}.": "O código de pareamento expira em {date}.",
  "Setup prompt copied": "Prompt de configuração copiado",
  "Copy setup prompt": "Copiar prompt de configuração",
  "Set up by hand instead": "Configurar manualmente",
  "For apps without a terminal or chat, like Claude Desktop: run the pairing command in Terminal, then add the JSON below to the app's MCP configuration.":
    "Para apps sem terminal ou chat, como o Claude Desktop: execute o comando de pareamento no Terminal e adicione o JSON abaixo à configuração MCP do app.",
  Show: "Mostrar",
  "Pairing command (run in Terminal)": "Comando de pareamento (execute no Terminal)",
  "Pairing command copied": "Comando de pareamento copiado",
  "MCP configuration (JSON)": "Configuração MCP (JSON)",
  "Configuration copied": "Configuração copiada",
  "2. Try it": "2. Teste",
  "Open a new chat in the agent you just connected and send this editable example. You never need to copy project IDs, model IDs, or request IDs yourself.":
    "Abra uma nova conversa no agente que acabou de conectar e envie este exemplo editável. Você não precisa copiar IDs de projeto, modelo ou solicitação.",
  "Connection verified by Synara.": "Conexão verificada pelo Synara.",
  "Synara will show Connected after the agent makes its first request.":
    "O Synara mostrará Conectado depois que o agente fizer a primeira solicitação.",
  "Example prompt copied": "Exemplo de prompt copiado",
  "Copy example prompt": "Copiar exemplo de prompt",
  "Connected agents": "Agentes conectados",
  "Loading connections...": "Carregando conexões...",
  "Paired — not used yet": "Pareado — ainda não usado",
  "Projects:": "Projetos:",
  "Permissions:": "Permissões:",
  "All projects, including future ones": "Todos os projetos, inclusive os futuros",
  "No projects": "Nenhum projeto",
  "Create and follow its own tasks": "Criar e acompanhar as próprias tarefas",
  "Use Synara to create a new task: call synara_overview first, pick the most relevant project, and tell me which one you chose.":
    "Use o Synara para criar uma tarefa: primeiro chame synara_overview, escolha o projeto mais relevante e me diga qual escolheu.",
  "Use Synara to create a new task in the project named {project}.":
    "Use o Synara para criar uma tarefa no projeto chamado {project}.",
  "First inspect Synara's capabilities and choose an exact available provider and model; do not guess model names.":
    "Primeiro, confira os recursos do Synara e escolha um provedor e modelo disponíveis; não tente adivinhar nomes de modelos.",
  "Use an isolated managed worktree and approval-required execution.":
    "Use uma árvore de trabalho gerenciada e isolada, com execução que exige aprovação.",
  "Goal: [DESCRIBE THE WORK].": "Objetivo: [DESCREVA O TRABALHO].",
  "Wait for the task to finish, then read the result and summarize it for me.":
    "Aguarde a tarefa terminar, leia o resultado e faça um resumo para mim.",
  "Connect this coding agent to Synara via MCP. Complete every step yourself, in order, and report what happened.":
    "Conecte este agente de programação ao Synara por MCP. Siga todas as etapas na ordem e informe o resultado.",
  "Step 1 — Pair this computer. Run this exact command in a shell. It exchanges a one-time code (valid for about 10 minutes) for a private credential stored on this computer; no secret ever goes into your MCP configuration:":
    "Etapa 1 — Vincule este computador. Execute este comando exato no terminal. Ele troca um código de uso único (válido por cerca de 10 minutos) por uma credencial privada armazenada neste computador. Nenhum segredo será incluído na configuração MCP:",
  "Step 1 — Pairing is already completed on this computer. Skip it.":
    "Etapa 1 — Este computador já está vinculado. Pule esta etapa.",
  'Step 2 — Register Synara as a stdio MCP server named "synara" in your own configuration, using whichever mechanism your app supports:':
    'Etapa 2 — Registre o Synara como servidor MCP stdio chamado "synara" na configuração do próprio aplicativo, usando o método compatível:',
  "If you are Codex, run: {command}": "Se você estiver usando o Codex, execute: {command}",
  "If you are Claude Code, run: {command}":
    "Se você estiver usando o Claude Code, execute: {command}",
  "For any other MCP app, merge this into its MCP configuration:":
    "Para outro aplicativo compatível com MCP, incorpore isto à configuração MCP:",
  'Step 3 — Verify. Reload your MCP servers if needed, then call the "synara_overview" tool and summarize the projects, providers, and permissions it returns.':
    'Etapa 3 — Verifique. Se necessário, recarregue os servidores MCP, chame a ferramenta "synara_overview" e resuma os projetos, provedores e permissões retornados.',
  "Read other tasks in selected projects": "Ler outras tarefas nos projetos selecionados",
  "Control this Mac (per-action approval still applies)":
    "Controlar este Mac (cada ação ainda exige aprovação)",
  "Created {created} · Last used {lastUsed} · Expires {expires}":
    "Criada em {created} · Último uso: {lastUsed} · Expira em {expires}",
  "Continue setup": "Continuar configuração",
  Revoke: "Revogar",
  "No connected agents": "Nenhum agente conectado",
  "Connect Codex, Claude, or another local MCP agent to create and follow Synara tasks.":
    "Conecte o Codex, o Claude ou outro agente MCP local para criar e acompanhar tarefas do Synara.",
  "Connection ready": "Conexão pronta",
  "Give your agent the setup prompt before the one-time code expires.":
    "Envie o prompt de configuração ao agente antes que o código de uso único expire.",
  "Could not create connection": "Não foi possível criar a conexão",
  "External MCP setup failed.": "Falha ao configurar o MCP externo.",
  "Connection revoked": "Conexão revogada",
  "Its credential stops working immediately.": "A credencial deixa de funcionar imediatamente.",
  "Could not revoke connection": "Não foi possível revogar a conexão",
  "Revocation failed.": "Falha ao revogar.",
  "New pairing code ready": "Novo código de pareamento pronto",
  "Copy the refreshed setup prompt. The new one-time code lasts 10 minutes.":
    "Copie o prompt de configuração atualizado. O novo código de uso único vale por 10 minutos.",
  "Could not resume pairing": "Não foi possível retomar o pareamento",
  "Pairing refresh failed.": "Falha ao atualizar o pareamento.",
  "Could not copy": "Não foi possível copiar",
  "Clipboard access failed.": "Falha ao acessar a área de transferência.",
  "No data": "Sem dados",
  "{label} {remaining} remaining": "Na janela {label}, restam {remaining}",
  "{provider} usage: {summary}": "Uso de {provider}: {summary}",
  Never: "Nunca",
};

export default ptBRProviders;
