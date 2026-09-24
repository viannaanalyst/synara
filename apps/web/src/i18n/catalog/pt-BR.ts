// FILE: pt-BR.ts
// Purpose: Brazilian Portuguese catalog. Keys are the English source strings used in the UI, so a
//          missing entry simply falls back to English. Add one line per new user-visible string.
// Layer: Web i18n
// Exports: default translation catalog

const ptBR = {
  // ── Settings navigation ────────────────────────────────────────────────────
  Personal: "Pessoal",
  Integrations: "Integrações",
  Coding: "Programação",
  System: "Sistema",
  Archived: "Arquivados",
  General: "Geral",
  Profile: "Perfil",
  Appearance: "Aparência",
  Notifications: "Notificações",
  "Chat behavior": "Comportamento do chat",
  Keybindings: "Atalhos de teclado",
  "Usage & limits": "Uso e limites",
  "Computer use": "Uso do computador",
  "MCP connections": "Conexões MCP",
  "Agent providers": "Provedores de agente",
  "Models & writing": "Modelos e escrita",
  "Agent skills": "Habilidades dos agentes",
  "Managed worktrees": "Worktrees gerenciadas",
  "System tools": "Ferramentas do sistema",
  "Archived threads": "Conversas arquivadas",
  Beta: "Beta",
  now: "agora",

  "Choose defaults for new chats, navigation, and the Environment panel.":
    "Escolha padrões para novas conversas, navegação e o painel Ambiente.",
  "Your local activity, streaks, and a shareable stats card.":
    "Sua atividade local, sequências e um cartão de estatísticas compartilhável.",
  "Customize the theme, typography, density, and time format.":
    "Personalize o tema, a tipografia, a densidade, o formato de hora e o idioma.",
  "Choose how Synara tells you when work finishes or needs attention.":
    "Escolha como o Synara avisa quando o trabalho termina ou precisa de atenção.",
  "Control live responses, follow-ups, review defaults, and safety confirmations.":
    "Controle respostas ao vivo, acompanhamentos, padrões de revisão e confirmações de segurança.",
  "Capture, customize, and add shortcuts for every Synara command.":
    "Capture, personalize e adicione atalhos para cada comando do Synara.",
  "See remaining quota and credits for every signed-in provider.":
    "Veja a cota e os créditos restantes de cada provedor conectado.",
  "Capture another app's frontmost window directly into a task.":
    "Capture a janela em primeiro plano de outro app direto em uma tarefa.",
  "Let agents see and control this computer's desktop, and check backend status.":
    "Permita que agentes vejam e controlem a área de trabalho deste computador e verifiquem o status do backend.",
  "Give Codex, Claude, and other local agents scoped access to Synara tasks.":
    "Dê ao Codex, Claude e outros agentes locais acesso delimitado às tarefas do Synara.",
  "Choose visible coding agents and manage their installed CLI tools.":
    "Escolha os agentes de programação visíveis e gerencie suas CLIs instaladas.",
  "Choose the model used for Git writing and add custom model slugs.":
    "Escolha o modelo usado para textos de Git e adicione slugs de modelos personalizados.",
  "Review reusable workflows discovered across all configured providers.":
    "Revise fluxos de trabalho reutilizáveis descobertos em todos os provedores configurados.",
  "Review and clean up isolated workspaces created by Synara.":
    "Revise e limpe espaços de trabalho isolados criados pelo Synara.",
  "Manage sessions, recovery tools, low-level keybindings, and version details.":
    "Gerencie sessões, ferramentas de recuperação, atalhos avançados e detalhes da versão.",
  "Find and restore threads you previously archived.":
    "Encontre e restaure conversas que você arquivou anteriormente.",
  "Signed out": "Sessão encerrada",
  "Session closed": "Sessão encerrada",
  "This browser no longer controls Synara.": "Este navegador não controla mais o Synara.",
  "The session and its live connections were revoked. To reconnect, generate a fresh pairing link from an active owner session and open it in this browser.":
    "A sessão e suas conexões ativas foram revogadas. Para se conectar novamente, gere um novo link de pareamento em uma sessão ativa de proprietário e abra-o neste navegador.",
  "Pairing failed": "Falha no pareamento",
  "Secure pairing interrupted": "Pareamento seguro interrompido",
  "This pairing link could not be used.": "Não foi possível usar este link de pareamento.",
  "The link may be incomplete, expired, or already used. Generate a new pairing link from the Synara server and try again.":
    "O link pode estar incompleto, expirado ou já ter sido usado. Gere um novo link de pareamento no servidor Synara e tente novamente.",

  "Workflow defaults": "Padrões de fluxo",
  "Your stats": "Suas estatísticas",
  "Visual language": "Linguagem visual",
  Alerts: "Alertas",
  "Interaction rules": "Regras de interação",
  "Key bindings": "Atalhos",
  "Provider limits": "Limites dos provedores",
  "Screen capture": "Captura de tela",
  "Desktop control": "Controle da área de trabalho",
  "External agents": "Agentes externos",
  "Coding agents": "Agentes de programação",
  "Model configuration": "Configuração de modelos",
  "Reusable workflows": "Fluxos reutilizáveis",
  "Workspace management": "Gestão de espaços",
  "Thread management": "Gestão de conversas",

  // ── Settings screen chrome ─────────────────────────────────────────────────
  "Restore defaults": "Restaurar padrões",
  "Restore default settings?": "Restaurar configurações padrão?",
  "This will reset: {labels}.": "Isto redefinirá: {labels}.",
  "Reset to default": "Redefinir para o padrão",
  "Reset {label} to default": "Redefinir {label} para o padrão",
  Dark: "Escuro",
  Light: "Claro",
  "{variant} theme pack": "Pacote de tema {variant}",

  // Settings names used by the restore-defaults summary
  "Automation runs": "Execuções de automação",
  "Default provider": "Provedor padrão",
  "New thread mode": "Modo de nova conversa",
  "Project sort order": "Ordem dos projetos",
  "Thread sort order": "Ordem das conversas",
  "Chats section": "Seção Conversas",
  "Studio section": "Seção Studio",
  "Custom title bar": "Barra de título personalizada",
  "Activity toasts": "Toasts de atividade",
  "Desktop notifications": "Notificações do desktop",
  "Assistant output": "Saída do assistente",
  "Effort slider": "Controle de esforço",
  "Follow-up behavior": "Comportamento de acompanhamento",
  "Automatically open simulator": "Abrir simulador automaticamente",
  "AppSnap shortcut": "Atalho do AppSnap",
  "AppSnap capture sound": "Som de captura do AppSnap",
  "Computer control": "Controle do computador",
  "Computer preview auto-open": "Abertura automática da prévia do computador",
  "Agent cursor colors": "Cores do cursor do agente",
  "Provider update checks": "Verificação de atualizações dos provedores",
  "Diff line wrapping": "Quebra de linha em diffs",
  "Pull request diff colors": "Cores de diff de pull request",
  "Delete confirmation": "Confirmação de exclusão",
  "Archive confirmation": "Confirmação de arquivamento",
  "Terminal close confirmation": "Confirmação ao fechar terminal",
  "Git writing model": "Modelo de escrita do Git",
  "Custom models": "Modelos personalizados",
  "Provider installs": "Instalações dos provedores",
  "Provider activity": "Atividade dos provedores",
  "Provider visibility": "Visibilidade dos provedores",
  "Provider order": "Ordem dos provedores",

  // ── Settings sidebar (search + nav) ────────────────────────────────────────
  "Back to app": "Voltar ao app",
  "Search settings...": "Buscar configurações...",
  "Search settings": "Buscar configurações",
  "No matching settings.": "Nenhuma configuração encontrada.",
  "Settings search results": "Resultados da busca de configurações",
  "Settings sections": "Seções de configurações",

  // ── Appearance ─────────────────────────────────────────────────────────────
  Theme: "Tema",
  App: "Aplicativo",
  Language: "Idioma",
  "Typography and spacing": "Tipografia e espaçamento",
  "Time and reading": "Hora e leitura",
  "Choose the language used across the app.": "Escolha o idioma usado em todo o aplicativo.",
  "App icon": "Ícone do aplicativo",
  "Choose the icon Synara uses in the dock or taskbar.":
    "Escolha o ícone que o Synara usa no dock ou na barra de tarefas.",
  "Use custom title bar": "Usar barra de título personalizada",
  "Restart Synara to apply. Some Linux window managers work better with the system title bar.":
    "Reinicie o Synara para aplicar. Alguns gerenciadores de janelas do Linux funcionam melhor com a barra de título do sistema.",
  "Replace the system title bar with Synara's frameless chrome and window controls. Restart required to apply.":
    "Substitui a barra de título do sistema pela moldura sem bordas e pelos controles de janela do Synara. Reinício necessário para aplicar.",
  "Restart required": "Reinício necessário",
  Restart: "Reiniciar",
  "Restart Synara": "Reiniciar o Synara",
  "Restart to apply title bar": "Reinicie para aplicar a barra de título",
  "The window frame updates the next time Synara launches.":
    "A moldura da janela será atualizada na próxima inicialização do Synara.",
  "Could not update title bar": "Não foi possível atualizar a barra de título",
  "Desktop title bar bridge is unavailable.":
    "A ponte da barra de título do desktop não está disponível.",
  "Desktop title bar preference was not persisted.":
    "A preferência da barra de título do desktop não foi salva.",
  "Use system UI font": "Usar fonte do sistema",
  "Ignore the theme's custom UI font and render the interface with the native system font (SF Pro on macOS).":
    "Ignora a fonte personalizada do tema e renderiza a interface com a fonte nativa do sistema (SF Pro no macOS).",
  "UI density": "Densidade da interface",
  "Control spacing in the sidebar, composer, chat gutters, and settings rows without changing font size.":
    "Controla o espaçamento na barra lateral, no compositor, nas margens do chat e nas linhas de configurações sem alterar o tamanho da fonte.",
  "Chat width": "Largura do chat",
  "Control how wide the chat column grows. Wide and Full give tables and wide content more room.":
    "Controla a largura da coluna do chat. Amplo e Total dão mais espaço a tabelas e conteúdo largo.",
  "Base font size": "Tamanho base da fonte",
  "Adjust the app text base in pixels. Chat and UI typography scale proportionally from this value.":
    "Ajusta a base do texto do app em pixels. A tipografia do chat e da interface escala proporcionalmente a partir deste valor.",
  "Terminal font size": "Tamanho da fonte do terminal",
  "Adjust terminal text independently from the app and chat font size.":
    "Ajusta o texto do terminal independentemente do tamanho da fonte do app e do chat.",
  "Terminal font": "Fonte do terminal",
  "Type any monospace font installed on this device (e.g. Fira Code). Leave empty for the default. Fonts that aren't installed fall back to the system monospace.":
    "Digite qualquer fonte monoespaçada instalada neste dispositivo (ex.: Fira Code). Deixe vazio para o padrão. Fontes não instaladas usam a monoespaçada do sistema.",
  "Default (JetBrains Mono)": "Padrão (JetBrains Mono)",
  "No matching suggested fonts.": "Nenhuma fonte sugerida corresponde.",
  "Font smoothing": "Suavização de fontes",
  "Use macOS-style antialiasing for lighter, crisper text rendering.":
    "Usa antialiasing no estilo macOS para um texto mais leve e nítido.",
  "Time format": "Formato de hora",
  "Timestamp format": "Formato de data e hora",
  "System default follows your browser or OS clock preference.":
    "O padrão do sistema segue a preferência de relógio do navegador ou do sistema operacional.",
  "System default": "Padrão do sistema",
  "12-hour": "12 horas",
  "24-hour": "24 horas",
  "Theme preference": "Preferência de tema",
  "Base font size in pixels": "Tamanho base da fonte em pixels",
  "Terminal font size in pixels": "Tamanho da fonte do terminal em pixels",
  "Terminal font family": "Família de fontes do terminal",
  "Enable font smoothing": "Ativar suavização de fontes",

  // Lowercase setting names used by the reset-button labels
  theme: "tema",
  "app icon": "ícone do aplicativo",
  "custom title bar": "barra de título personalizada",
  "system UI font": "fonte do sistema",
  "ui density": "densidade da interface",
  "chat width": "largura do chat",
  "base font size": "tamanho base da fonte",
  "terminal font size": "tamanho da fonte do terminal",
  "terminal font": "fonte do terminal",
  "font smoothing": "suavização de fontes",
  "time format": "formato de hora",
  language: "idioma",

  Compact: "Compacta",
  Comfortable: "Confortável",
  Spacious: "Espaçosa",
  "Tighter spacing in the sidebar, composer, and settings rows.":
    "Espaçamento mais justo na barra lateral, no compositor e nas linhas de configurações.",
  "Balanced spacing for everyday use.": "Espaçamento equilibrado para o uso diário.",
  "More breathing room across the main workspace surfaces.":
    "Mais respiro nas principais superfícies do espaço de trabalho.",
  Standard: "Padrão",
  Wide: "Amplo",
  Full: "Total",
  "Keeps the chat column at the default reading width (46rem).":
    "Mantém a coluna do chat na largura de leitura padrão (46rem).",
  "Gives tables and wide content more room (72rem).":
    "Dá mais espaço a tabelas e conteúdo largo (72rem).",
  "Lets the chat column use the full window width.":
    "Deixa a coluna do chat usar toda a largura da janela.",

  // ── Sidebar ────────────────────────────────────────────────────────────────
  Help: "Ajuda",
  "New thread": "Nova conversa",
  Kanban: "Kanban",
  "Pull requests": "Pull requests",
  Automations: "Automações",
  "What’s new": "Novidades",
  "Full changelog": "Changelog completo",
  "Customize sidebar": "Personalizar barra lateral",
  "Send feedback": "Enviar feedback",
  Docs: "Documentação",
  Settings: "Configurações",
  "No chats yet": "Nenhuma conversa ainda",
  "Show more": "Mostrar mais",
  "Show less": "Mostrar menos",

  // ── Error boundary ─────────────────────────────────────────────────────────
  "Something went wrong.": "Algo deu errado.",
  "Try again": "Tentar novamente",
  "Reload app": "Recarregar app",
  "Show error details": "Mostrar detalhes do erro",
  "Hide error details": "Ocultar detalhes do erro",
  "An unexpected router error occurred.": "Ocorreu um erro inesperado no roteador.",
  "All conversations are archived. Enable archived conversations to select them.":
    "Todas as conversas estão arquivadas. Ative a exibição de conversas arquivadas para selecioná-las.",
  "Already present": "Já importada",
  "Bring your chats and continue them in Synara":
    "Traga suas conversas e continue de onde parou no Synara",
  Browse: "Procurar",
  "Continue your Codex and Claude Code projects in Synara.":
    "Continue seus projetos do Codex e Claude Code no Synara.",
  "Conversations in {name}": "Conversas em {name}",
  "Could not find local projects.": "Não foi possível encontrar projetos locais.",
  "Could not start the import.": "Não foi possível iniciar a importação.",
  "Dismiss project import banner": "Dispensar aviso de importação de projetos",
  "Find projects": "Encontrar projetos",
  "Finding projects…": "Procurando projetos…",
  "Folder unavailable": "Pasta indisponível",
  "History shows text messages; tool details and attachments may be missing.":
    "O histórico mostra mensagens de texto; detalhes das ferramentas e anexos podem estar ausentes.",
  "Import failed. Try again.": "Falha na importação. Tente novamente.",
  "Import failures": "Falhas na importação",
  "Import stopped; remaining selections are ready to continue.":
    "Importação interrompida; os itens restantes estão prontos para continuar.",
  "Import your Claude Code and Codex projects": "Importe seus projetos do Claude Code e Codex",
  "Import {title}": "Importar {title}",
  "Importing {current} of {total}": "Importando {current} de {total}",
  "Include archived": "Incluir arquivadas",
  "Links the existing folder without adding conversations.":
    "Vincula a pasta existente sem adicionar conversas.",
  "New folder for {name}": "Nova pasta para {name}",
  "No local projects found for these providers.":
    "Nenhum projeto local encontrado para estes provedores.",
  "No projects match your search.": "Nenhum projeto corresponde à sua busca.",
  "Optional: existing folder path": "Opcional: caminho da pasta existente",
  "Projects available to import": "Projetos disponíveis para importação",
  "Projects keep their existing folders, and conversations are copied into Synara. Nothing in your current projects changes.":
    "Os projetos mantêm suas pastas atuais, e as conversas são copiadas para o Synara. Nada muda nos seus projetos atuais.",
  "Retry failed ({count})": "Tentar novamente ({count})",
  "Scan again": "Procurar novamente",
  "Search imported projects": "Pesquisar projetos importados",
  "Search projects or folders…": "Pesquisar projetos ou pastas…",
  "Select {name}": "Selecionar {name}",
  "Stop after current": "Parar após a atual",
  "Stopping after this conversation…": "Parando após esta conversa…",
  "The folder moved or is missing. Link its new location to continue these conversations, or import the history alone.":
    "A pasta foi movida ou não foi encontrada. Vincule o novo local para continuar estas conversas ou importe apenas o histórico.",
  "Untitled conversation": "Conversa sem título",
  "{conversations} conversations across {projects} project selected.":
    "{conversations} conversas selecionadas em {projects} projeto.",
  "{conversations} conversations across {projects} projects selected.":
    "{conversations} conversas selecionadas em {projects} projetos.",
  "{count} conversation": "{count} conversa",
  "{count} conversation_zero": "{count} conversas",
  "{count} conversation_one": "{count} conversa",
  "{count} conversation_other": "{count} conversas",
  "{count} imported or already present": "{count} importado ou já existente",
  "{count} imported or already present_one": "{count} importado ou já existente",
  "{count} imported or already present_other": "{count} importados ou já existentes",
  "Dismiss toast": "Dispensar notificação",
  "Displays the mobile sidebar.": "Exibe a barra lateral em dispositivos móveis.",
  Loading: "Carregando",
  "No additional error details are available.": "Não há mais detalhes sobre o erro.",
  Sidebar: "Barra lateral",
  "Toggle Sidebar": "Alternar barra lateral",
  "Could not load the editor.": "Não foi possível carregar o editor.",
  "Couldn’t open this image": "Não foi possível abrir esta imagem.",
  "Download image": "Baixar imagem",
  "File actions": "Ações do arquivo",
  "Jump to file": "Ir para arquivo",
  "Loading PDF...": "Carregando PDF...",
  "Loading editor...": "Carregando editor...",
  "The file may have moved or be unavailable.":
    "O arquivo pode ter sido movido ou estar indisponível.",
  "An unexpected delivery error occurred.": "Ocorreu um erro inesperado ao enviar o feedback.",
  "Back to What's new": "Voltar para as novidades",
  "Bring your Claude Code and Codex projects into Synara and continue their chats right where you left off.":
    "Traga seus projetos do Claude Code e Codex para o Synara e continue as conversas de onde parou.",
  Bug: "Erro",
  "Complete changelog": "Changelog completo",
  "Could not send feedback": "Não foi possível enviar o feedback",
  "Diagnostics include app version, OS, provider/model, modes, and session state — never prompts, messages, paths, or logs.":
    "Os diagnósticos incluem a versão do app, o sistema operacional, o provedor/modelo, os modos e o estado da sessão — nunca prompts, mensagens, caminhos ou registros.",
  "Every curated release, newest first.":
    "Todas as versões selecionadas, da mais recente à mais antiga.",
  "Feedback category": "Categoria do feedback",
  "Feedback details": "Detalhes do feedback",
  "Feedback sent": "Feedback enviado",
  Idea: "Ideia",
  "Not now": "Agora não",
  Other: "Outro",
  Performance: "Desempenho",
  "Press both Option keys (⌥ ⌥) to snap any app's window into the task you're working in.":
    "Pressione as duas teclas Option (⌥ ⌥) para capturar a janela de qualquer app e adicioná-la à tarefa atual.",
  "Sending…": "Enviando…",
  "Set up AppSnap": "Configurar o AppSnap",
  "Share details (required)": "Conte o que aconteceu (obrigatório)",
  "Share feedback": "Enviar feedback",
  Submit: "Enviar",
  "Synara AppSnaps are live!": "O Synara AppSnap chegou!",
  "Thanks for helping make Synara better.": "Obrigado por ajudar a melhorar o Synara.",
  UI: "Interface",
  "View changelog": "Ver changelog",
  "What’s new?": "O que há de novo?",

  // ── Browser password vault and cookie import ───────────────────────────────
  "Agent password filling and generation are unavailable.":
    "O preenchimento e a geração de senhas por agentes não estão disponíveis.",
  "All sites in this profile": "Todos os sites deste perfil",
  "Allow agents to find saved accounts": "Permitir que agentes encontrem contas salvas",
  "Autosave accepted logins": "Salvar automaticamente logins aceitos",
  "Back to browser": "Voltar ao navegador",
  "Confirm master password": "Confirmar senha mestra",
  "Cookie import is unavailable on this platform.":
    "A importação de cookies não está disponível nesta plataforma.",
  "Cookie import is unavailable. Sign in directly in the browser instead.":
    "A importação de cookies não está disponível. Entre diretamente no navegador.",
  "Cookie import scope": "Escopo da importação de cookies",
  "Cookie source browser": "Navegador de origem dos cookies",
  "Cookie source profile": "Perfil de origem dos cookies",
  "Cookies were imported, but secure storage could not save their session state for future launches. Existing sessions may have changed.":
    "Os cookies foram importados, mas o armazenamento seguro não conseguiu salvar o estado das sessões para as próximas inicializações. As sessões existentes podem ter mudado.",
  "Delete login": "Excluir login",
  "Delete login for {login}": "Excluir o login de {login}",
  "Full Disk Access": "Acesso Total ao Disco",
  "Full Disk Access is a broad macOS permission that reaches beyond Safari. If you'd rather not, that's fine. You can find this again under Settings › General.":
    "O Acesso Total ao Disco é uma permissão ampla do macOS, que vai além do Safari. Se preferir não concedê-la, tudo bem. Você pode encontrar esta opção novamente em Configurações › Geral.",
  "Hide password": "Ocultar senha",
  "I allow Synara and its agents to use all imported signed-in sessions from this profile.":
    "Autorizo o Synara e seus agentes a usar todas as sessões autenticadas importadas deste perfil.",
  "Import all sites": "Importar todos os sites",
  "Import browser cookies": "Importar cookies do navegador",
  "Import for this site": "Importar para este site",
  "Import scope": "Escopo da importação",
  "Import stopped because the browser destination changed or the operation became unavailable. Select the destination and retry.":
    "A importação foi interrompida porque o destino do navegador mudou ou a operação ficou indisponível. Selecione o destino e tente novamente.",
  "Imported cookies: {imported}; skipped: {skipped}.":
    "Cookies importados: {imported}; ignorados: {skipped}.",
  "Imports all compatible cookies from the selected profile. Every imported signed-in session becomes available across Synara browser tabs and agent workflows.":
    "Importa todos os cookies compatíveis do perfil selecionado. Cada sessão autenticada importada fica disponível nas abas do navegador Synara e nos fluxos de trabalho dos agentes.",
  "Imports this site, its subdomains, and matching parent domains. Imported sessions are shared across Synara browser tabs and agent workflows.":
    "Importa este site, seus subdomínios e os domínios principais correspondentes. As sessões importadas são compartilhadas entre as abas do navegador Synara e os fluxos de trabalho dos agentes.",
  "Keep this password somewhere safe. A forgotten master password cannot be reset here.":
    "Guarde esta senha em um local seguro. Não é possível redefinir aqui uma senha mestra esquecida.",
  "Loading saved logins...": "Carregando logins salvos...",
  "Lock saved logins": "Bloquear logins salvos",
  Logins: "Logins",
  "Master password": "Senha mestra",
  "New master password": "Nova senha mestra",
  "No available profiles found.": "Nenhum perfil disponível foi encontrado.",
  "No saved logins.": "Nenhum login salvo.",
  "No username": "Sem nome de usuário",
  "Offer to save passwords": "Oferecer para salvar senhas",
  Password: "Senha",
  "Profiles could not be read. Check browser installation and system permissions.":
    "Não foi possível ler os perfis. Verifique a instalação do navegador e as permissões do sistema.",
  "Reveal password": "Revelar senha",
  "Reveal password for {login}": "Revelar a senha de {login}",
  "Revealed password": "Senha revelada",
  "Saved accounts": "Contas salvas",
  "Saved by an agent": "Salvo por um agente",
  "Saved by you": "Salvo por você",
  "Saved login": "Login salvo",
  "Saved logins": "Logins salvos",
  "Saved logins are locked.": "Os logins salvos estão bloqueados.",
  "Saved logins could not be loaded.": "Não foi possível carregar os logins salvos.",
  "Saving & access": "Salvamento e acesso",
  "Saving and access": "Salvamento e acesso",
  "Safari import setup": "Configurar importação do Safari",
  "Set master password": "Definir senha mestra",
  "Some cookies could not be transferred; you may need to sign in again.":
    "Não foi possível transferir alguns cookies; talvez você precise entrar novamente.",
  "Synara's browser can pick up sites you're already signed into in Safari, so you don't have to log in twice. It's optional, and nothing is copied until you ask.":
    "O navegador do Synara pode importar os sites em que você já entrou no Safari, assim não é preciso fazer login duas vezes. Isso é opcional, e nada é copiado sem sua solicitação.",
  "The browser reader timed out. Close the source browser and retry.":
    "A leitura do navegador excedeu o tempo limite. Feche o navegador de origem e tente novamente.",
  "The change could not be saved. Please try again.":
    "Não foi possível salvar a alteração. Tente novamente.",
  "Could not verify the master password. Try again shortly.":
    "Não foi possível verificar a senha mestra. Tente novamente em instantes.",
  "The cookie transfer could not be verified. Existing sessions may have changed; retry or sign in directly.":
    "Não foi possível verificar a transferência dos cookies. As sessões existentes podem ter mudado; tente novamente ou entre diretamente.",
  "The native cookie reader is unavailable. Reinstall Synara with its optional native dependencies, or sign in directly.":
    "O leitor nativo de cookies está indisponível. Reinstale o Synara com suas dependências nativas opcionais ou entre diretamente.",
  "The native reader could not decode this profile's cookie data. This is a cookie-format failure, not a confirmed permission denial.":
    "O leitor nativo não conseguiu decodificar os dados de cookies deste perfil. Trata-se de uma falha no formato dos cookies, não de uma negação de permissão confirmada.",
  "The native reader could not decrypt this profile's cookies. Review any OS key-store prompt, or sign in directly.":
    "O leitor nativo não conseguiu descriptografar os cookies deste perfil. Verifique se há uma solicitação do armazenamento de chaves do sistema ou entre diretamente.",
  "The native reader could not open or acquire the source cookie store. A permission denial was not confirmed. Check that the source profile is available and Synara has access to it.":
    "O leitor nativo não conseguiu abrir nem acessar o armazenamento de cookies de origem. Não foi confirmada uma negação de permissão. Confira se o perfil de origem está disponível e se o Synara tem acesso a ele.",
  "The native reader could not read this profile. A permission denial was not identified. Close the source browser and retry, or sign in directly.":
    "O leitor nativo não conseguiu ler este perfil. Não foi identificada uma negação de permissão. Feche o navegador de origem e tente novamente ou entre diretamente.",
  "The operating system denied access to this browser's cookie data. Review its access permissions or sign in directly.":
    "O sistema operacional negou acesso aos dados de cookies deste navegador. Verifique as permissões de acesso ou entre diretamente.",
  "The selected profile is no longer available. Choose another profile or open the source browser first.":
    "O perfil selecionado não está mais disponível. Escolha outro perfil ou abra primeiro o navegador de origem.",
  "This site: {origin}": "Este site: {origin}",
  "Unfinished signup": "Cadastro não concluído",
  "Unfinished signup (expired)": "Cadastro não concluído (expirado)",
  "Delete this saved login?": "Excluir este login salvo?",
  "Save password?": "Salvar senha?",
  Unlock: "Desbloquear",
  "Update password?": "Atualizar senha?",
  "Use at least 12 characters and enter the same password twice.":
    "Use pelo menos 12 caracteres e digite a mesma senha duas vezes.",
  "Verifying...": "Verificando...",
  "Working...": "Processando...",
  "macOS denied access to Safari's cookie files. Allow Synara in System Settings > Privacy & Security > Full Disk Access, then quit and reopen Synara before retrying. Revisit Safari import setup in Synara Settings > General for the correct app. You can sign in directly instead.":
    "O macOS negou acesso aos arquivos de cookies do Safari. Permita o acesso do Synara em Ajustes do Sistema > Privacidade e Segurança > Acesso Total ao Disco, encerre e abra o Synara antes de tentar novamente. Para escolher o app correto, acesse Configurações > Geral > Configurar importação do Safari. Você também pode entrar diretamente.",
  "macOS denied access to this browser's cookie data. Review Synara's file access in Privacy & Security and any Keychain prompt, then retry.":
    "O macOS negou acesso aos dados de cookies deste navegador. Verifique o acesso a arquivos do Synara e qualquer solicitação das Chaves e tente novamente.",

  // ── Safari access setup ────────────────────────────────────────────────────
  "Bring your Safari logins along?": "Quer trazer seus logins do Safari?",
  "Couldn't open it automatically. It lives in System Settings › Privacy & Security.":
    "Não foi possível abrir automaticamente. A opção fica em Ajustes do Sistema › Privacidade e Segurança.",
  "Not listed?": "Não aparece na lista?",
  "Open System Settings": "Abrir Ajustes do Sistema",
  "Privacy & Security": "Privacidade e Segurança",
  "Quit and reopen Synara.": "Encerre e abra o Synara novamente.",
  "Show app in Finder": "Mostrar app no Finder",
  "Switch on": "Ative",
  "System Settings": "Ajustes do Sistema",
  "System Settings is open. Once Synara is switched on, quit and reopen it.":
    "Os Ajustes do Sistema estão abertos. Depois de ativar o Synara, encerre e abra o app novamente.",
  "Synara is selected in Finder. Drag it into the Full Disk Access list.":
    "O Synara está selecionado no Finder. Arraste-o para a lista de Acesso Total ao Disco.",
  "and drag it in.": "e arraste-o para a lista.",

  // ── Workspace and file controls ────────────────────────────────────────────
  "Actions are project-scoped commands you can run from the top bar or keybindings.":
    "Ações são comandos específicos do projeto, executados pela barra superior ou por atalhos.",
  "Add Action": "Adicionar ação",
  "Add action": "Adicionar ação",
  Build: "Compilar",
  "Choose icon": "Escolher ícone",
  "Command is required.": "O comando é obrigatório.",
  "Create a detached worktree from the current branch to continue working in parallel.":
    "Cria uma worktree independente a partir da branch atual para continuar trabalhando em paralelo.",
  "Current page": "Página atual",
  "Delete action": "Excluir ação",
  "Delete action: {name}?": "Excluir a ação: {name}?",
  "Drafted prompts, running turns, and completed chats will show up here automatically.":
    "Rascunhos de prompts, execuções em andamento e conversas concluídas aparecerão aqui automaticamente.",
  "Edit Action": "Editar ação",
  "Edit {name}": "Editar {name}",
  "Failed to prepare pull request thread.": "Não foi possível preparar a conversa da pull request.",
  "Failed to resolve pull request.": "Não foi possível localizar a pull request.",
  "Failed to save action.": "Não foi possível salvar a ação.",
  "Fit page": "Ajustar à página",
  "Fit width": "Ajustar à largura",
  "Hand off to worktree": "Transferir para uma worktree",
  "Handing off...": "Transferindo...",
  Lint: "Analisar código",
  "Move projects here": "Mover projetos para cá",
  "Move projects here, or right-click a project to file it.":
    "Mova projetos para cá ou clique com o botão direito em um projeto para organizá-lo.",
  "Name is required.": "O nome é obrigatório.",
  "New and unassigned projects appear here.": "Projetos novos e não atribuídos aparecem aqui.",
  "Next page": "Próxima página",
  "No projects yet": "Nenhum projeto ainda",
  "No simulators found": "Nenhum simulador encontrado",
  "Nothing on the board yet": "Ainda não há nada no quadro",
  "Paste a GitHub pull request URL or enter 123 / #123.":
    "Cole a URL de uma pull request do GitHub ou digite 123 / #123.",
  Play: "Executar",
  "Preparing local...": "Preparando ambiente local...",
  "Preparing worktree...": "Preparando worktree...",
  "Press a shortcut. Use Backspace to clear.": "Pressione um atalho. Use Backspace para limpar.",
  "Press shortcut": "Pressione um atalho",
  "Previous page": "Página anterior",
  "Recent views": "Visualizações recentes",
  "Resolve a GitHub pull request, then create the draft thread in the main repo or in a dedicated worktree.":
    "Localize uma pull request do GitHub e crie uma conversa em rascunho no repositório principal ou em uma worktree dedicada.",
  "Resolving pull request...": "Localizando pull request...",
  "Run automatically on worktree creation": "Executar automaticamente ao criar uma worktree",
  "Run {name}": "Executar {name}",
  "Save action": "Salvar ação",
  "Save changes": "Salvar alterações",
  "Split view": "Tela dividida",
  "Task options": "Opções da tarefa",
  "This action cannot be undone.": "Esta ação não pode ser desfeita.",
  "Use a GitHub pull request URL, 123, or #123.":
    "Use a URL de pull request do GitHub, 123 ou #123.",
  "Void is empty": "O Void está vazio",
  "Worktree name": "Nome da worktree",
  "Zoom in": "Aumentar zoom",
  "Zoom out": "Diminuir zoom",
  "{count} recent view": "{count} visualização recente",
  "{count} recent view_one": "{count} visualização recente",
  "{count} recent view_other": "{count} visualizações recentes",
  "{name} (setup)": "{name} (configuração)",
  "{space} is empty": "{space} está vazio",
  "Close tab": "Fechar aba",
  "Could not create local file preview grant.":
    "Não foi possível autorizar a pré-visualização do arquivo local.",
  Error: "Erro",
  "Make this a temporary chat (deleted when you leave)":
    "Tornar esta conversa temporária (será excluída quando você sair)",
  "No active thread": "Nenhuma conversa ativa",
  "No workspace is attached to this chat.":
    "Nenhum espaço de trabalho está vinculado a esta conversa.",
  "Select a file from the explorer.": "Selecione um arquivo no explorador.",
  "Select a thread or create a new one to get started.":
    "Selecione uma conversa ou crie uma nova para começar.",
  Temporary: "Temporária",
  "Temporary chat": "Conversa temporária",
  "Temporary chat — deleted when you leave. Click to keep it.":
    "Conversa temporária — será excluída quando você sair. Clique para mantê-la.",
  Untitled: "Sem título",
  "Choose the parent folder where Synara should create the checkout.":
    "Escolha a pasta principal onde o Synara deve criar a cópia de trabalho.",
  "Clone into": "Clonar em",
  "Final location: {path}": "Local final: {path}",
  "Folder name": "Nome da pasta",
  "or configure Git credentials.": "ou configure suas credenciais do Git.",
  "or its GitHub URL.": "ou sua URL do GitHub.",
  "Repository slug:": "Identificador do repositório:",
  "Public repositories work immediately. For private repositories, run":
    "Repositórios públicos funcionam imediatamente. Para acessar repositórios privados, execute",
  "Private access": "Acesso a repositórios privados",
  "What you need": "O que você precisa",
  "owner/repository or GitHub URL": "organização/repositório ou URL do GitHub",
  repository: "repositório",
  "Change project path": "Alterar caminho do projeto",
  "Choose existing projects. Their chats and pinned state move with them.":
    "Escolha os projetos existentes. As conversas e os itens fixados serão movidos com eles.",
  "Continue in your existing threads. A blocked thread may still require its explicit Unblock action.":
    "Continue nas conversas existentes. Talvez ainda seja necessário desbloquear explicitamente uma conversa bloqueada.",
  "Could not change project path": "Não foi possível alterar o caminho do projeto",
  Deleted: "Excluído",
  "Dismiss What's new": "Dispensar novidades",
  "Enter the restored folder's path on the Synara server. Your existing project and conversations stay in place. This does not recover lost files or move/repair linked Git worktrees. Finish active turns first.":
    "Informe o caminho da pasta restaurada no servidor Synara. O projeto e as conversas atuais serão mantidos. Isso não recupera arquivos perdidos nem move ou repara worktrees Git vinculadas. Conclua primeiro as execuções ativas.",
  "Every project is already in {space}.": "Todos os projetos já estão em {space}.",
  "Find out what’s new": "Confira as novidades",
  Modified: "Modificado",
  "Move projects": "Mover projetos",
  "Move projects to {space}": "Mover projetos para {space}",
  "Move {count} project": "Mover {count} projeto",
  "Move {count} project_one": "Mover {count} projeto",
  "Move {count} project_other": "Mover {count} projetos",
  "Moving…": "Movendo…",
  "New · v{version}": "Novidades · v{version}",
  "No projects yet.": "Ainda não há projetos.",
  "No matching projects.": "Nenhum projeto correspondente.",
  "Open What's new in v{version}": "Abrir as novidades da versão {version}",
  Pending: "Pendente",
  "Pending approval": "Aguardando aprovação",
  "Project path updated": "Caminho do projeto atualizado",
  "Save or discard unsaved file edits before changing a project path.":
    "Salve ou descarte as alterações de arquivo não salvas antes de mudar o caminho do projeto.",
  "What's new in v{version}": "Novidades da versão {version}",
  "Toggle thread sidebar": "Alternar barra lateral de conversas",
  "Search projects": "Pesquisar projetos",
  space: "espaço",
  "this space": "este espaço",
  "{change}: {path}": "{change}: {path}",
  "Accept the Xcode license": "Aceitar a licença do Xcode",
  "Activity options": "Opções de atividade",
  "Activity scope": "Escopo da atividade",
  "All activity": "Toda a atividade",
  "Anything running on the simulator closes. Booting it again takes about a minute.":
    "Tudo o que estiver em execução no simulador será fechado. A inicialização leva cerca de um minuto.",
  "Archive thread": "Arquivar conversa",
  "Back ({shortcut})": "Voltar ({shortcut})",
  "Back to all projects": "Voltar a todos os projetos",
  "Build the Synara device helper": "Compilar o auxiliar de dispositivos do Synara",
  "Built automatically the first time you attach a device.":
    "Compilado automaticamente na primeira vez que você conectar um dispositivo.",
  "Checking for Xcode…": "Verificando o Xcode…",
  "Checking your setup…": "Verificando a configuração…",
  "Choose a simulator": "Escolher um simulador",
  "Choose a simulator to start streaming it here.":
    "Escolha um simulador para transmitir sua tela aqui.",
  "Choose the project for this task": "Escolher o projeto desta tarefa",
  "Close search (Esc)": "Fechar busca (Esc)",
  "Close simulator panel": "Fechar painel do simulador",
  "Connecting…": "Conectando…",
  "Could not detach the simulator": "Não foi possível desconectar o simulador",
  "Could not free a simulator slot": "Não foi possível liberar um espaço de simulador",
  "Could not open that simulator": "Não foi possível abrir esse simulador",
  "Could not press that button": "Não foi possível pressionar esse botão",
  "Could not save the screenshot": "Não foi possível salvar a captura de tela",
  "Could not shut down the simulator": "Não foi possível desligar o simulador",
  "Could not start recording": "Não foi possível iniciar a gravação",
  "Could not stop recording": "Não foi possível parar a gravação",
  "Filter activity by project": "Filtrar atividade por projeto",
  Find: "Localizar",
  Folder: "Pasta",
  Forward: "Avançar",
  "Forward ({shortcut})": "Avançar ({shortcut})",
  GitHub: "GitHub",
  "Group by": "Agrupar por",
  "Install Xcode": "Instalar o Xcode",
  "Install Xcode from the App Store, then open it once.":
    "Instale o Xcode pela App Store e abra-o uma vez.",
  "Install an iOS simulator runtime": "Instalar um runtime do simulador iOS",
  "Keep them all running": "Manter todos em execução",
  "Mark all as read": "Marcar tudo como lido",
  "Match case": "Diferenciar maiúsculas e minúsculas",
  Maximize: "Maximizar",
  Minimize: "Minimizar",
  "No cards": "Nenhum cartão",
  "No project": "Nenhum projeto",
  "Point the command line tools at Xcode":
    "Apontar as ferramentas de linha de comando para o Xcode",
  "Progress updates automatically as each step finishes.":
    "O progresso é atualizado automaticamente conforme cada etapa termina.",
  "Project source": "Origem do projeto",
  "Recording saved": "Gravação salva",
  "Screenshot saved": "Captura de tela salva",
  "Set up the iOS Simulator": "Configurar o Simulador do iOS",
  "Setup steps": "Etapas de configuração",
  "Show the live simulator": "Mostrar simulador ao vivo",
  "Shut down": "Desligar",
  "Shut down a simulator to start {device}": "Desligue um simulador para iniciar {device}",
  "Shut down {device}": "Desligar {device}",
  "Shut down {device}?": "Desligar {device}?",
  "Starting up…": "Iniciando…",
  "Synara keeps at most {limit} simulators running at once, because each one holds a few gigabytes of memory. Pick one to shut down — anything running on it closes — and {device} starts in its place.":
    "O Synara mantém até {limit} simuladores em execução ao mesmo tempo, pois cada um usa alguns gigabytes de memória. Escolha um para desligar — tudo o que estiver em execução nele será fechado — e {device} será iniciado no lugar.",
  "The input could not be delivered.": "Não foi possível enviar a entrada.",
  "The recording may be incomplete.": "A gravação pode estar incompleta.",
  "The simulator did not accept that input": "O simulador não aceitou essa entrada",
  "The simulator did not respond.": "O simulador não respondeu.",
  "The simulator did not start recording.": "O simulador não iniciou a gravação.",
  "This Synara server runs on {platform}. Simulators are only available when the server runs on a Mac with Xcode installed.":
    "Este servidor Synara está em {platform}. Os simuladores só ficam disponíveis quando o servidor é executado em um Mac com o Xcode instalado.",
  "This browser cannot decode the simulator stream. Chrome, Edge, or Safari 17+ support the WebCodecs video decoder Synara uses.":
    "Este navegador não consegue decodificar a transmissão do simulador. Chrome, Edge ou Safari 17 ou posterior oferecem suporte ao decodificador de vídeo WebCodecs usado pelo Synara.",
  "Unread completion": "Conclusão não lida",
  "Update the Synara server to add GitHub projects.":
    "Atualize o servidor Synara para adicionar projetos do GitHub.",
  "Waiting for the screen…": "Aguardando a tela…",
  "Xcode is a free download from Apple and needs about 10 GB of disk space.":
    "O Xcode pode ser baixado gratuitamente da Apple e precisa de cerca de 10 GB de espaço em disco.",
  "iOS Simulator needs macOS": "O Simulador do iOS requer o macOS",
  "that simulator": "esse simulador",
  "this simulator": "este simulador",
  "{count} tasks": "{count} tarefas",
  "Attach images": "Anexar imagens",
  "Branch, tag, or commit": "Branch, tag ou commit",
  "Comment on line {lineNumber}": "Comentar na linha {lineNumber}",
  "Create task": "Criar tarefa",
  "Draft a prompt and place it in the board's Draft column. Drag it to In Progress to send it.":
    "Escreva uma instrução e coloque-a na coluna Rascunho do quadro. Arraste-a para Em andamento para enviá-la.",
  "Describe the task, @tag files/folders, paste images, or use / for skills":
    "Descreva a tarefa, use @ para mencionar arquivos ou pastas, cole imagens ou digite / para ver as habilidades",
  "Local folders unavailable": "Pastas locais indisponíveis",
  "Only images can be attached to new tasks.": "Só é possível anexar imagens a tarefas novas.",
  "Optimizing {count} image…_one": "Otimizando {count} imagem…",
  "Optimizing {count} image…_other": "Otimizando {count} imagens…",
  "Optimizing...": "Otimizando...",
  "Send as draft": "Enviar como rascunho",
  "That file was not added.": "O arquivo não foi adicionado.",
  "{count} files were not added._one": "{count} arquivo não foi adicionado.",
  "{count} files were not added._other": "{count} arquivos não foram adicionados.",
  "Make {provider} work your way": "Faça o {provider} funcionar do seu jeito",
  "No description available.": "Nenhuma descrição disponível.",
  "No installed plugins found": "Nenhum plugin instalado encontrado",
  "No skills match this search.": "Nenhuma habilidade corresponde a esta busca.",
  Plugins: "Plugins",
  "Plugins unavailable for {provider}": "Plugins indisponíveis para {provider}",
  "Search plugins": "Buscar plugins",
  "Search skills": "Buscar habilidades",
  "Skills need a workspace path. Open a project or thread first.":
    "As habilidades precisam do caminho de um espaço de trabalho. Abra um projeto ou uma conversa primeiro.",
  "Skills unavailable for {provider}": "Habilidades indisponíveis para {provider}",
  "This provider does not expose plugin discovery.":
    "Este provedor não oferece descoberta de plugins.",
  "This provider does not expose skill discovery.":
    "Este provedor não oferece descoberta de habilidades.",
  "This view only shows plugins already available in your Codex setup.":
    "Esta visualização mostra apenas os plugins já disponíveis na configuração do Codex.",
  "Disable auto-dismiss for locally triggered error toasts.":
    "Desativa o fechamento automático dos avisos de erro disparados localmente.",
  "Feature flags": "Flags de funcionalidades",
  "Keep a looping git progress toast visible for styling.":
    "Mantém um aviso de progresso do Git com animação em loop para ajustar o estilo.",
  "Keep debug error toasts open": "Manter avisos de erro de depuração abertos",
  "Local feature flags": "Flags locais de funcionalidades",
  "Pin git progress toast": "Fixar aviso de progresso do Git",
  "Render a local sample active task banner for UI testing.":
    "Exibe uma faixa de exemplo de tarefa ativa para testes locais da interface.",
  "Show debug task banner": "Exibir faixa de tarefa para depuração",
  "Show stacked Git action failure toasts for local UI testing.":
    "Exibe avisos empilhados de falha em ações do Git para testes locais da interface.",
  "Stored only in this browser profile.": "Armazenado apenas neste perfil do navegador.",
  "Trigger action failed toasts": "Exibir avisos de falha em ações",
  "e.g. npm run dev": "Ex.: npm run dev",
  Earlier: "Mais antigas",
  "Loading activity...": "Carregando atividade...",
  "No activity for this project": "Nenhuma atividade neste projeto",
  "No activity in Synara chats": "Nenhuma atividade nas conversas do Synara",
  "No activity yet": "Ainda não há atividade",
  "Project actions": "Ações do projeto",
  "Script actions": "Ações de scripts",
  "Start new chat in last used project": "Iniciar conversa no último projeto usado",
  Today: "Hoje",
  Yesterday: "Ontem",
  "Edit {path}": "Editar {path}",
  "New task in {project}": "Nova tarefa em {project}",
  "Preview {name}": "Pré-visualizar {name}",
  "Pull request #{number}, {status}: {title}": "Pull request #{number}, {status}: {title}",
  "Archived chats: {archived} of {total}.": "Conversas arquivadas: {archived} de {total}.",
  "Archived chats: {count}.": "Conversas arquivadas: {count}.",
  "Archiving old chats...": "Arquivando conversas antigas...",
  "Chat maintenance paused": "Manutenção de conversas pausada",
  "No old chats needed archiving.": "Nenhuma conversa antiga precisava ser arquivada.",
  "Old chats archived": "Conversas antigas arquivadas",
  "Old chats archived: {count}. Restore them from Settings → Archived.":
    "Conversas antigas arquivadas: {count}. Você pode restaurá-las em Configurações → Arquivadas.",
  "Old chats will be retried later.":
    "As conversas antigas serão processadas novamente mais tarde.",
  "Preparing background maintenance.": "Preparando a manutenção em segundo plano.",
  "Search code": "Buscar código",
  "Code search failed. Try again.": "Falha ao buscar no código. Tente novamente.",
  "File search failed. Try again.": "Falha ao buscar arquivos. Tente novamente.",
  Matches: "Resultados",
  "No matching files": "Nenhum arquivo correspondente",
  "Type at least {count} characters to search code":
    "Digite pelo menos {count} caracteres para buscar no código",
  "Type to search for files": "Digite para buscar arquivos",
} as const;

export default ptBR;
