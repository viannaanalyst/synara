// FILE: pt-BR.settings.ts
// Purpose: Brazilian Portuguese catalog for settings panels and settings routes.
//          Keys are the English source strings used in the UI.
// Layer: Web i18n

const ptBRSettings: Readonly<Record<string, string>> = {
  // ── General ────────────────────────────────────────────────────────────────
  "Core defaults": "Padrões principais",
  "default provider": "provedor padrão",
  "Provider used for new chats until you pick a model. New chats then reuse your most recent model and options.":
    "Provedor usado em novas conversas até você escolher um modelo. Depois, as novas conversas reutilizam seu modelo e opções mais recentes.",
  "New threads": "Novas conversas",
  "new threads": "novas conversas",
  "Pick the default workspace mode for newly created draft threads.":
    "Escolha o modo de espaço de trabalho padrão para rascunhos de conversa recém-criados.",
  "Default thread mode": "Modo padrão de conversa",
  "New worktree": "Nova worktree",
  Local: "Local",
  "Welcome tour": "Tour de boas-vindas",
  "Replay the first-run setup: feature tour, provider selection, appearance, and first project.":
    "Reveja a configuração inicial: tour de recursos, escolha de provedor, aparência e primeiro projeto.",
  "Open welcome tour": "Abrir tour de boas-vindas",
  "Sidebar organization": "Organização da barra lateral",
  "Project order": "Ordem dos projetos",
  "project order": "ordem dos projetos",
  "Controls how projects are arranged in the main sidebar.":
    "Controla como os projetos são organizados na barra lateral principal.",
  "Recently active": "Ativos recentemente",
  "Recently added": "Adicionados recentemente",
  "Manual order": "Ordem manual",
  "Thread order": "Ordem das conversas",
  "thread order": "ordem das conversas",
  "Controls how threads are arranged inside each project in the main sidebar.":
    "Controla como as conversas são organizadas dentro de cada projeto na barra lateral principal.",
  "Newest first": "Mais recentes primeiro",
  "Sidebar sections": "Seções da barra lateral",
  Chats: "Conversas",
  "chats section": "seção de conversas",
  "Show the standalone Chats list in the sidebar footer (chats not tied to a project).":
    "Mostra a lista de Conversas independentes no rodapé da barra lateral (conversas sem projeto).",
  "Show the Chats section in the sidebar": "Mostrar a seção Conversas na barra lateral",
  Studio: "Studio",
  "studio section": "seção Studio",
  "Show the Studio tab in the sidebar switcher.":
    "Mostra a aba Studio no seletor da barra lateral.",
  "Show the Studio section in the sidebar": "Mostrar a seção Studio na barra lateral",
  "automation runs": "execuções de automação",
  "Show the thread each standalone automation run creates. Runs stay listed on the automation's page either way; threads owned by dedicated or heartbeat automations always stay visible.":
    "Mostra a conversa criada por cada execução de automação independente. As execuções continuam listadas na página da automação de qualquer forma; conversas de automações dedicadas ou de heartbeat permanecem sempre visíveis.",
  "Show automation run threads in the sidebar":
    "Mostrar conversas de execuções de automação na barra lateral",
  "Environment panel": "Painel Ambiente",
  "Open by default": "Aberto por padrão",
  "environment panel default open": "painel Ambiente aberto por padrão",
  "Open the chat Environment panel automatically on normal threads. When off, the panel stays closed until you open it. Your last open/close also updates this preference.":
    "Abre o painel Ambiente do chat automaticamente em conversas normais. Quando desligado, o painel fica fechado até você abri-lo. Seu último abrir/fechar também atualiza esta preferência.",
  "Open the Environment panel by default on normal threads":
    "Abrir o painel Ambiente por padrão em conversas normais",
  "Code and status": "Código e status",
  Usage: "Uso",
  "usage section": "seção de uso",
  "Show the provider usage row in the chat Environment panel.":
    "Mostra a linha de uso do provedor no painel Ambiente do chat.",
  "Show the Usage section in the Environment panel": "Mostrar a seção Uso no painel Ambiente",
  Repository: "Repositório",
  "repository section": "seção de repositório",
  "Show the GitHub repository link in the chat Environment panel. The git block (Changes, Worktree, branch, Commit and Push) always stays visible.":
    "Mostra o link do repositório no GitHub no painel Ambiente do chat. O bloco de git (Alterações, Worktree, branch, Commit e Push) permanece sempre visível.",
  "Show the Repository section in the Environment panel":
    "Mostrar a seção Repositório no painel Ambiente",
  "Pull request": "Pull request",
  "pull request section": "seção de pull request",
  "Show the open pull request (CI checks and review comments) for the current branch in the chat Environment panel.":
    "Mostra o pull request aberto (verificações de CI e comentários de revisão) do branch atual no painel Ambiente do chat.",
  "Show the Pull request section in the Environment panel":
    "Mostrar a seção Pull request no painel Ambiente",
  Editor: "Editor",
  "editor section": "seção do editor",
  "Show the Editor section (in-app editor view and Open in editor picker) in the chat Environment panel.":
    "Mostra a seção Editor (visualização no app e seletor Abrir no editor) no painel Ambiente do chat.",
  "Show the Editor section in the Environment panel": "Mostrar a seção Editor no painel Ambiente",
  "Context and notes": "Contexto e notas",
  Recap: "Resumo",
  "recap section": "seção de resumo",
  "Show the auto-generated chat recap in the Environment panel.":
    "Mostra o resumo gerado automaticamente da conversa no painel Ambiente.",
  "Show the Recap section in the Environment panel": "Mostrar a seção Resumo no painel Ambiente",
  "Pinned messages": "Mensagens fixadas",
  "pinned messages section": "seção de mensagens fixadas",
  "Show the pinned-messages checklist in the Environment panel.":
    "Mostra a lista de mensagens fixadas no painel Ambiente.",
  "Show the Pinned messages section in the Environment panel":
    "Mostrar a seção Mensagens fixadas no painel Ambiente",
  "Project instructions": "Instruções do projeto",
  "project instructions section": "seção de instruções do projeto",
  "Show project-level instructions in the Environment panel.":
    "Mostra as instruções do projeto no painel Ambiente.",
  "Show the Project instructions section in the Environment panel":
    "Mostrar a seção Instruções do projeto no painel Ambiente",
  Notepad: "Bloco de notas",
  "notepad section": "seção de bloco de notas",
  "Show the per-thread notepad in the Environment panel.":
    "Mostra o bloco de notas da conversa no painel Ambiente.",
  "Show the Notepad section in the Environment panel":
    "Mostrar a seção Bloco de notas no painel Ambiente",

  // ── Chat behavior ──────────────────────────────────────────────────────────
  Conversation: "Conversa",
  "follow-up behavior": "comportamento de acompanhamento",
  "Choose whether messages sent during an active turn wait in the queue or steer the current run. Ctrl/Cmd+Enter uses the opposite behavior for one message.":
    "Escolha se mensagens enviadas durante um turno ativo esperam na fila ou direcionam a execução atual. Ctrl/Cmd+Enter usa o comportamento oposto em uma mensagem.",
  Queue: "Fila",
  Steer: "Direcionar",
  "assistant output": "saída do assistente",
  "Show token-by-token output while a response is in progress.":
    "Mostra a saída token a token enquanto uma resposta está em andamento.",
  "Stream assistant messages": "Transmitir mensagens do assistente",
  "effort slider": "controle de esforço",
  "Show effort as a slider at the bottom of the composer's model picker, with fast mode and reset alongside it, instead of separate Effort and Speed rows.":
    "Mostra o esforço como um controle deslizante na parte inferior do seletor de modelos do compositor, com modo rápido e redefinição ao lado, em vez de linhas separadas de Esforço e Velocidade.",
  "Show effort slider in the composer": "Mostrar controle de esforço no compositor",
  "automatically open simulator": "abrir simulador automaticamente",
  "Open the iOS Simulator pane when an agent uses a device. Turn this off to use Simulator.app without the mirrored pane reopening. You can still open the pane manually.":
    "Abre o painel do Simulador iOS quando um agente usa um dispositivo. Desligue para usar o Simulator.app sem que o painel espelhado reabra. Você ainda pode abrir o painel manualmente.",
  Review: "Revisão",
  "pull request diff colors": "cores de diff de pull request",
  "Show additions in green and deletions in red in pull request summaries.":
    "Mostra adições em verde e remoções em vermelho nos resumos de pull request.",
  "Show pull request diff colors": "Mostrar cores de diff de pull request",
  "diff line wrapping": "quebra de linha em diffs",
  "Set the default wrap state when the diff panel opens. The in-panel wrap toggle only affects the current diff session.":
    "Define o estado padrão de quebra de linha ao abrir o painel de diff. O botão de quebra dentro do painel afeta apenas a sessão de diff atual.",
  "Wrap diff lines by default": "Quebrar linhas de diff por padrão",
  "Safety confirmations": "Confirmações de segurança",
  "delete confirmation": "confirmação de exclusão",
  "Ask before deleting a thread and its chat history.":
    "Pergunta antes de excluir uma conversa e seu histórico.",
  "Confirm thread deletion": "Confirmar exclusão de conversa",
  "archive confirmation": "confirmação de arquivamento",
  "Ask before archiving a thread.": "Pergunta antes de arquivar uma conversa.",
  "Confirm thread archive": "Confirmar arquivamento de conversa",
  "terminal close confirmation": "confirmação ao fechar terminal",
  "Ask before closing a terminal tab and clearing its history.":
    "Pergunta antes de fechar uma aba de terminal e limpar seu histórico.",
  "Confirm terminal tab close": "Confirmar fechamento de aba do terminal",

  // ── Notifications (desktop/web) ────────────────────────────────────────────
  "Activity alerts": "Alertas de atividade",
  "activity toasts": "toasts de atividade",
  "Activity toast notifications": "Notificações de toast de atividade",
  "Show an in-app toast when a chat or managed terminal agent finishes or needs input.":
    "Mostra um toast no app quando uma conversa ou um agente de terminal gerenciado termina ou precisa de entrada.",
  "desktop notifications": "notificações do desktop",
  "Show an OS notification when a chat or managed terminal agent finishes or needs input while the app is in the background.":
    "Mostra uma notificação do sistema quando uma conversa ou um agente de terminal gerenciado termina ou precisa de entrada enquanto o app está em segundo plano.",
  "Desktop activity notifications": "Notificações de atividade do desktop",
  Test: "Testar",
  "Desktop notifications unavailable": "Notificações do desktop indisponíveis",
  "Activity notification": "Notificação de atividade",
  "Desktop app notifications use your operating system notification center.":
    "As notificações do app para desktop aparecem na central de notificações do sistema operacional.",
  "Browser notifications are enabled for this app.":
    "As notificações do navegador estão ativadas para este app.",
  "Browser notifications are blocked. Re-enable them in your browser site settings.":
    "As notificações do navegador estão bloqueadas. Reative-as nas configurações do site no navegador.",
  "Browser notifications need a secure context. Localhost works; plain HTTP does not.":
    "As notificações do navegador exigem um contexto seguro. O localhost funciona; HTTP sem criptografia não.",
  "This browser does not support desktop notifications.":
    "Este navegador não oferece suporte a notificações do desktop.",
  "Allow browser notifications to get alerts when chats or terminal agents finish or need input in the background.":
    "Permita notificações do navegador para receber avisos quando conversas ou agentes de terminal terminarem ou precisarem de uma ação em segundo plano.",
  "Notification test for chats and terminal agents.":
    "Teste de notificação para conversas e agentes de terminal.",
  "Test notification sent": "Notificação de teste enviada",
  "Notifications unavailable": "Notificações indisponíveis",
  "Your operating system should show the notification.":
    "Seu sistema operacional deve mostrar a notificação.",
  "Desktop notifications are not supported on this device.":
    "Notificações do desktop não são compatíveis com este dispositivo.",
  "Your browser should show the notification.": "Seu navegador deve mostrar a notificação.",

  // ── AppSnap ────────────────────────────────────────────────────────────────
  "Available in the Synara desktop app": "Disponível no app de desktop do Synara",
  "Available on macOS only": "Disponível apenas no macOS",
  "the shortcut": "o atalho",
  "Listening — press {shortcut} to snap": "Ouvindo — pressione {shortcut} para capturar",
  Off: "Desligado",
  "Starting the capture listener…": "Iniciando o ouvinte de captura…",
  "Permission setup required": "Configuração de permissões necessária",
  "AppSnap unavailable": "AppSnap indisponível",
  "AppSnap requires the Synara desktop app on macOS.":
    "O AppSnap requer o app de desktop do Synara no macOS.",
  "Finish AppSnap setup": "Conclua a configuração do AppSnap",
  "Allow the required macOS permissions, then try again.":
    "Conceda as permissões necessárias do macOS e tente novamente.",
  "AppSnap setup failed": "Falha na configuração do AppSnap",
  "Could not configure AppSnap.": "Não foi possível configurar o AppSnap.",
  "Take an AppSnap to show your agent another app's window":
    "Faça um AppSnap para mostrar ao agente a janela de outro app",
  "Press your two-key shortcut while any app is frontmost. Synara captures that window as an image, brings itself forward, and attaches the snap to a task composer — the capture stays on this device until you send the message.":
    "Pressione seu atalho de duas teclas com qualquer app em primeiro plano. O Synara captura essa janela como imagem, traz a si mesmo para frente e anexa a captura ao compositor de uma tarefa — a captura fica neste dispositivo até você enviar a mensagem.",
  "AppSnap is available only in the macOS desktop app.":
    "O AppSnap está disponível apenas no app de desktop para macOS.",
  Capture: "Captura",
  "Enable AppSnap": "Ativar AppSnap",
  "Run the capture listener in the background while Synara is open.":
    "Executa o ouvinte de captura em segundo plano enquanto o Synara está aberto.",
  Shortcut: "Atalho",
  "Choose exactly two keys: one modifier and one other key. Synara checks its own bindings and asks macOS whether another app already owns the shortcut before saving it.":
    "Escolha exatamente duas teclas: um modificador e outra tecla. O Synara verifica seus próprios atalhos e pergunta ao macOS se outro app já usa o atalho antes de salvá-lo.",
  Destination: "Destino",
  "Snaps join the task you interacted with in the last minute, and consecutive snaps stay together. Otherwise Synara opens a fresh task with the capture attached.":
    "As capturas entram na tarefa com que você interagiu no último minuto, e capturas consecutivas ficam juntas. Caso contrário, o Synara abre uma nova tarefa com a captura anexada.",
  Automatic: "Automático",
  "Capture sound": "Som de captura",
  "Play a short shutter cue when a window is captured.":
    "Toca um clique curto de obturador quando uma janela é capturada.",
  "capture sound": "som de captura",
  Preview: "Pré-ouvir",
  "Play a sound when an AppSnap is captured": "Tocar um som quando um AppSnap for capturado",

  // ── Advanced settings ─────────────────────────────────────────────────────
  About: "Sobre",
  Session: "Sessão",
  "This browser": "Este navegador",
  "Revoke this browser session and close every live Synara connection it owns. A fresh pairing link is required to reconnect.":
    "Revogue esta sessão do navegador e encerre todas as conexões ativas do Synara que ela mantém. É necessário um novo link de pareamento para se reconectar.",
  "Authenticated as {role}.": "Autenticado como {role}.",
  "Sign out this browser?": "Sair deste navegador?",
  "Its session and every live connection opened with it will be revoked.":
    "A sessão e todas as conexões ativas abertas por ele serão revogadas.",
  "Signing out...": "Saindo...",
  "Sign out": "Sair",
  "Sign out failed": "Falha ao sair",
  "Unable to revoke this session.": "Não foi possível revogar esta sessão.",
  "Developer tools": "Ferramentas de desenvolvedor",
  "Open the persisted `keybindings.json` file to edit advanced bindings directly.":
    "Abra o arquivo `keybindings.json` salvo para editar diretamente os atalhos avançados.",
  "No available editors found.": "Nenhum editor disponível foi encontrado.",
  "Unable to open keybindings file.": "Não foi possível abrir o arquivo de atalhos.",
  "Resolving keybindings path...": "Localizando o caminho do arquivo de atalhos...",
  "Opens in your preferred editor.": "Abre no editor de sua preferência.",
  "Opening...": "Abrindo...",
  "Open file": "Abrir arquivo",
  "Recovery tools": "Ferramentas de recuperação",
  "Rebuild local project indexes without clearing existing chats when the local state gets out of sync.":
    "Reconstrua os índices locais dos projetos sem apagar conversas quando o estado local ficar dessincronizado.",
  "Visible because projects exist but no chat history is currently available.":
    "Visível porque há projetos, mas nenhum histórico de conversa está disponível no momento.",
  "Shown automatically only when recovery actions are relevant.":
    "Exibido automaticamente apenas quando as ações de recuperação são relevantes.",
  "Repairing...": "Reparando...",
  "Repair state": "Reparar estado",
  "What this does": "O que isso faz",
  "Rebuilds local project indexes and refreshes project snapshots. Existing chats stay in place.":
    "Reconstrói os índices locais dos projetos e atualiza seus snapshots. As conversas existentes são mantidas.",
  "Repair local state?": "Reparar o estado local?",
  "This rebuilds local project indexes and refreshes project snapshots.":
    "Isso reconstrói os índices locais dos projetos e atualiza seus snapshots.",
  "It keeps existing chats in place, but it may take a moment.":
    "As conversas existentes serão mantidas, mas o processo pode levar alguns instantes.",
  "Local state repaired": "Estado local reparado",
  "Project indexes were rebuilt without clearing existing chats.":
    "Os índices dos projetos foram reconstruídos sem apagar as conversas existentes.",
  "Repair failed": "Falha ao reparar",
  "Unable to repair local state.": "Não foi possível reparar o estado local.",
  Version: "Versão",
  "Current application version.": "Versão atual do aplicativo.",
  "Release history": "Histórico de atualizações",
  "A running log of every update, newest first. Same notes the post-update dialog shows, kept here so you can revisit them any time.":
    "Registro de todas as atualizações, da mais recente à mais antiga. As mesmas notas exibidas após uma atualização ficam aqui para você consultá-las quando quiser.",
  "View release history": "Ver histórico de atualizações",
  "Default icon": "Ícone padrão",
  Icon: "Ícone",
  "Dark icon": "Ícone escuro",
  "Updating app icon": "Atualizando o ícone do app",

  // ── Conversation storage ──────────────────────────────────────────────────
  "Could not verify linked conversations": "Não foi possível verificar as conversas vinculadas",
  "Retry once the app reconnects to the server.":
    "Tente novamente quando o app se reconectar ao servidor.",
  'Delete worktree "{name}"?': 'Excluir a worktree "{name}"?',
  "{count} conversation linked to this worktree ({active} active, {archived} archived).":
    "{count} conversa vinculada a esta worktree ({active} ativa, {archived} arquivada).",
  "{count} conversations linked to this worktree ({active} active, {archived} archived).":
    "{count} conversas vinculadas a esta worktree ({active} ativas, {archived} arquivadas).",
  "Archived conversations will be deleted first.":
    "As conversas arquivadas serão excluídas primeiro.",
  "Deleting it can break reopening those chats in the same workspace.":
    "Excluí-la pode impedir que essas conversas sejam reabertas no mesmo espaço de trabalho.",
  "Delete the worktree anyway?": "Excluir a worktree mesmo assim?",
  "This removes the Git worktree from disk.": "Isso remove a worktree do Git do disco.",
  "Worktree deleted": "Worktree excluída",
  "{name} was removed and {count} archived conversation was deleted.":
    "{name} foi removida e {count} conversa arquivada foi excluída.",
  "{name} was removed and {count} archived conversations were deleted.":
    "{name} foi removida e {count} conversas arquivadas foram excluídas.",
  "{name} was removed.": "{name} foi removida.",
  "Could not delete worktree": "Não foi possível excluir a worktree",
  "Unable to delete the worktree.": "Não foi possível excluir a worktree.",
  "Loading managed worktrees...": "Carregando worktrees gerenciadas pelo app...",
  "Unable to load worktrees.": "Não foi possível carregar as worktrees.",
  "No app-managed worktrees found yet.": "Nenhuma worktree gerenciada pelo app encontrada ainda.",
  Worktree: "Worktree",
  Conversations: "Conversas",
  "No conversations linked to this worktree.": "Nenhuma conversa vinculada a esta worktree.",
  Delete: "Excluir",
  "Linked conversations exist. Deleting will ask for confirmation.":
    "Há conversas vinculadas. A exclusão pedirá confirmação.",
  "Thread restored": "Conversa restaurada",
  "The thread has been moved back to the sidebar.": "A conversa voltou para a barra lateral.",
  "Could not restore thread": "Não foi possível restaurar a conversa",
  "Unable to restore the thread.": "Não foi possível restaurar a conversa.",
  'Permanently delete "{title}"?': 'Excluir "{title}" permanentemente?',
  "This will remove the thread and its conversation history forever.":
    "Isso removerá a conversa e todo o seu histórico permanentemente.",
  "Thread deleted": "Conversa excluída",
  "The archived thread has been permanently removed.":
    "A conversa arquivada foi removida permanentemente.",
  "Could not delete thread": "Não foi possível excluir a conversa",
  "Unable to delete the thread.": "Não foi possível excluir a conversa.",
  "Permanently delete all {count} archived thread?":
    "Excluir permanentemente a única conversa arquivada? ({count})",
  "Permanently delete all {count} archived threads?":
    "Excluir permanentemente as {count} conversas arquivadas?",
  "This will remove them and their conversation history forever.":
    "Isso removerá essas conversas e todo o seu histórico permanentemente.",
  "Archived threads deleted": "Conversas arquivadas excluídas",
  "{count} archived thread was permanently removed.":
    "{count} conversa arquivada foi removida permanentemente.",
  "{count} archived threads were permanently removed.":
    "{count} conversas arquivadas foram removidas permanentemente.",
  "Could not delete all archived threads": "Não foi possível excluir todas as conversas arquivadas",
  "Unable to delete the threads.": "Não foi possível excluir as conversas.",
  Restore: "Restaurar",
  "No archived threads": "Nenhuma conversa arquivada",
  "Archived threads will appear here and can be restored to the sidebar.":
    "As conversas arquivadas aparecerão aqui e poderão ser restauradas para a barra lateral.",
  "{count} archived thread": "{count} conversa arquivada",
  "{count} archived threads": "{count} conversas arquivadas",
  "Delete all": "Excluir tudo",
  "Unknown project": "Projeto desconhecido",
  "Archived {time}": "Arquivada {time}",
  "For example, !terminalFocus": "Por exemplo, !terminalFocus",
  Accent: "Cor de destaque",
  "Accent preview": "Prévia da cor de destaque",
  Background: "Plano de fundo",
  "Code font": "Fonte de código",
  "Code theme for the {variant} theme": "Tema de código para o tema {variant}",
  'Code theme "{codeTheme}" is not available for the {variant} theme.':
    'O tema de código "{codeTheme}" não está disponível para o tema {variant}.',
  "Contrast for the {variant} theme": "Contraste do tema {variant}",
  Contrast: "Contraste",
  "Copied the {variant} theme share string.":
    "String de compartilhamento do tema {variant} copiada.",
  "Copy failed": "Falha ao copiar",
  "Dark theme": "Tema escuro",
  Foreground: "Primeiro plano",
  "Import {theme}": "Importar {theme}",
  "Inactive while the app is locked to {mode}.":
    "Inativo enquanto o aplicativo estiver fixado no {mode}.",
  "Light theme": "Tema claro",
  "Paste this theme share string:": "Cole esta string de compartilhamento de tema:",
  "Reset {label}": "Redefinir {label}",
  "System is currently using this {variant} slot.":
    "O sistema está usando o tema {variant} no momento.",
  "The embedded variant must match {variant}, and the selected code theme must exist for that variant.":
    "A variante incorporada deve corresponder a {variant}, e o tema de código selecionado precisa existir para essa variante.",
  "The {variant} theme UI font": "Fonte de interface do tema {variant}",
  "The {variant} theme accent color": "Cor de destaque do tema {variant}",
  "The {variant} theme background color": "Cor de fundo do tema {variant}",
  "The {variant} theme code font": "Fonte de código do tema {variant}",
  "The {variant} theme foreground color": "Cor do primeiro plano do tema {variant}",
  "Theme copied": "Tema copiado",
  "Theme imported": "Tema importado",
  "Theme share string": "String de compartilhamento do tema",
  "Theme share string must start with codex-theme-v1:":
    "A string de compartilhamento do tema deve começar com codex-theme-v1:",
  "Theme share string does not contain valid JSON.":
    "A string de compartilhamento do tema não contém um JSON válido.",
  "Theme share payload must be an object.": "Os dados compartilhados do tema devem ser um objeto.",
  "Theme share variant must be either light or dark.":
    "A variante do tema deve ser light (claro) ou dark (escuro).",
  "Theme share theme must be an object.": "Os dados visuais do tema devem ser um objeto.",
  "Theme fonts must be an object.": "As fontes do tema devem estar em um objeto.",
  "Theme semanticColors must be an object.":
    "As cores semânticas do tema devem estar em um objeto.",
  "Theme contrast must be an integer between 0 and 100.":
    "O contraste do tema deve ser um número inteiro entre 0 e 100.",
  "Theme share codeThemeId must be a string.": "O campo codeThemeId deve ser um texto.",
  "Theme share codeThemeId must not be empty.": "O campo codeThemeId não pode estar vazio.",
  "Theme accent must be a 6-digit hex color.":
    "A cor de destaque do tema deve estar em hexadecimal com 6 dígitos.",
  "Theme ink must be a 6-digit hex color.":
    "A cor de texto do tema deve estar em hexadecimal com 6 dígitos.",
  "Theme opaqueWindows must be a boolean.": "O campo opaqueWindows deve ser verdadeiro ou falso.",
  "Theme code font must be a string or null.":
    "A fonte de código do tema deve ser um texto ou nula.",
  "Theme UI font must be a string or null.":
    "A fonte da interface do tema deve ser um texto ou nula.",
  "Theme diffAdded must be a 6-digit hex color.":
    "A cor diffAdded deve estar em hexadecimal com 6 dígitos.",
  "Theme diffRemoved must be a 6-digit hex color.":
    "A cor diffRemoved deve estar em hexadecimal com 6 dígitos.",
  "Theme skill must be a 6-digit hex color.":
    "A cor de habilidade do tema deve estar em hexadecimal com 6 dígitos.",
  "Theme surface must be a 6-digit hex color.":
    "A cor de superfície do tema deve estar em hexadecimal com 6 dígitos.",
  "Theme variant mismatch. Expected {expected}, received {received}.":
    "A variante do tema não corresponde. Esperada: {expected}; recebida: {received}.",
  "This is the active theme right now.": "Este é o tema ativo no momento.",
  "Translucent sidebar": "Barra lateral translúcida",
  "Translucent sidebar for the {variant} theme": "Barra lateral translúcida para o tema {variant}",
  "UI font": "Fonte da interface",
  "Unable to copy the theme share string.":
    "Não foi possível copiar a string de compartilhamento do tema.",
  "Unable to import that theme string.": "Não foi possível importar essa string de tema.",
  "Updated the {variant} theme pack.": "Pacote do tema {variant} atualizado.",
  "Use dark theme": "Usar tema escuro",
  "Use light theme": "Usar tema claro",
  "Use system UI font is on; theme fonts are not applied.":
    "A opção de usar a fonte de interface do sistema está ativa; as fontes do tema não serão aplicadas.",
  "Used when your system switches to {variant}.":
    "Usado quando o sistema alternar para o tema {variant}.",
  "dark mode": "modo escuro",
  "light mode": "modo claro",
  "system mode": "modo do sistema",
  "{label} hex value": "Valor hexadecimal de {label}",
  "{theme} preview: {codeTheme}": "Prévia de {theme}: {codeTheme}",
};

export default ptBRSettings;
