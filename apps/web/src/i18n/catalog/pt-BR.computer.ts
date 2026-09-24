// FILE: pt-BR.computer.ts
// Purpose: Brazilian Portuguese catalog for computer-use, AppSnap, profile, and usage panels.
//          Keys are the English source strings used in the UI.
// Layer: Web i18n

const ptBRComputer: Readonly<Record<string, string>> = {
  Home: "Início",
  "Rotate view": "Girar visualização",
  "Save screenshot": "Salvar captura de tela",
  "Record video": "Gravar vídeo",
  "Stop recording": "Parar gravação",
  "Shut down simulator": "Desligar simulador",
  "Detach simulator": "Desconectar simulador",
  "Volume up": "Aumentar volume",
  "Volume down": "Diminuir volume",
  Lock: "Bloquear",
  "Open Mac App Store": "Abrir a App Store do Mac",
  "Simulator helper could not start": "Não foi possível iniciar o auxiliar do simulador",
  "Touch and keyboard input": "Entrada por toque e teclado",
  "Accessibility inspection": "Inspeção de acessibilidade",
  "Video encoding": "Codificação de vídeo",
  "{items} and {last}": "{items} e {last}",
  " with Xcode {version}": " com Xcode {version}",
  " with Xcode build {version}": " com a build {version} do Xcode",
  " — {capabilities} unaffected": " — sem impacto em {capabilities}",
  "{capabilities} unavailable{toolchain}{unaffected}.":
    "Indisponível: {capabilities}{toolchain}{unaffected}.",
  "All permissions granted": "Todas as permissões foram concedidas",
  "Checking computer availability": "Verificando a disponibilidade do computador",
  "Choose Set up to check permissions and prepare computer control.":
    "Selecione Configurar para verificar as permissões e preparar o controle do computador.",
  "Choose Set up to check that Synara can see and control the desktop.":
    "Selecione Configurar para verificar se o Synara consegue ver e controlar a área de trabalho.",
  "Choose Set up to request missing permissions or open System Settings. Allow access for this Synara app, then return here to recheck.":
    "Selecione Configurar para solicitar as permissões que faltam ou abrir os Ajustes do Sistema. Permita o acesso para este app do Synara e volte aqui para verificar novamente.",
  "Computer access has not been checked": "O acesso ao computador ainda não foi verificado",
  "Computer control is off": "O controle do computador está desativado",
  "Computer control is on for this chat": "O controle do computador está ativado nesta conversa",
  "Computer control is ready": "O controle do computador está pronto",
  "Computer control is unavailable": "O controle do computador está indisponível",
  "Computer control needs setup": "O controle do computador precisa ser configurado",
  "Computer control needs {permissions}": "O controle do computador precisa de {permissions}",
  "Connected to the desktop": "Conectado à área de trabalho",
  "Desktop input is connected, but Synara cannot take screenshots. Choose Set up to check access.":
    "A entrada da área de trabalho está conectada, mas o Synara não consegue fazer capturas de tela. Selecione Configurar para verificar o acesso.",
  "Desktop unavailable": "Área de trabalho indisponível",
  "Failed attempts since the last connection: {count}.":
    "Tentativas com falha desde a última conexão: {count}.",
  "Last failure: {message}": "Última falha: {message}",
  "Press {shortcut} to stop the agent at any time.":
    "Pressione {shortcut} para interromper o agente a qualquer momento.",
  "Queued desktop turns stay cancelled — send a fresh message to continue.":
    "As interações enfileiradas na área de trabalho continuam canceladas — envie uma nova mensagem para continuar.",
  Recheck: "Verificar novamente",
  "Reconnected once since startup.": "Reconectado uma vez desde a inicialização.",
  "Reconnected {count} times since startup.": "Reconectado {count} vezes desde a inicialização.",
  "Reconnecting to desktop": "Reconectando à área de trabalho",
  "Reconnecting to the desktop": "Reconectando à área de trabalho",
  "Screen capture is unavailable": "A captura de tela está indisponível",
  "Send a message and the agent will pick up where it left off.":
    "Envie uma mensagem para o agente continuar de onde parou.",
  "Stop the agent controlling the desktop": "Interromper o agente que controla a área de trabalho",
  "Stop the agent controlling this computer": "Interromper o agente que controla este computador",
  "Synara can see and control the desktop through its computer tools.":
    "O Synara pode ver e controlar a área de trabalho com as ferramentas de computador.",
  "Synara connects to the desktop the next time an agent uses it.":
    "O Synara se conectará à área de trabalho na próxima vez que um agente a usar.",
  "The agent's desktop": "Área de trabalho do agente",
  "The agent's own desktop": "Área de trabalho própria do agente",
  "The desktop accepted that input but could not confirm it arrived. Check the screen before relying on it.":
    "A área de trabalho aceitou a entrada, mas não foi possível confirmar que ela chegou. Confira a tela antes de confiar no resultado.",
  "This Mac's desktop": "Área de trabalho deste Mac",
  "This computer's desktop": "Área de trabalho deste computador",
  "This server is running on {platform}. Computer control needs macOS, or a Wayland desktop on Linux — KWin or Hyprland, or Synara's own nested desktop.":
    "Este servidor está em {platform}. O controle do computador requer macOS ou uma área de trabalho Wayland no Linux — KWin, Hyprland ou a própria área de trabalho aninhada do Synara.",
  "Turn it on in Settings to let the agent use the desktop.":
    "Ative o controle em Configurações para permitir que o agente use a área de trabalho.",
  "Waiting for the desktop backend.": "Aguardando o backend da área de trabalho.",
  "{label} failed": "Falha em {label}",
  "{label} failed: {message}": "Falha em {label}: {message}",

  "Lets Synara notice the double-Option chord while another app owns the keyboard. Nothing you type is recorded.":
    "Permite que o Synara detecte o atalho com Option duas vezes enquanto outro app controla o teclado. Nada do que você digitar é gravado.",
  "Lets Synara capture an image of the frontmost window. Only the single window you snap is captured, only at the moment you press the chord.":
    "Permite que o Synara capture uma imagem da janela em primeiro plano. Somente a janela selecionada é capturada, apenas no momento em que você pressiona o atalho.",
  "Lets Synara move the pointer, click, and type on your behalf. Nothing is driven unless you authorize a Computer task.":
    "Permite que o Synara mova o ponteiro, clique e digite por você. Nada será controlado sem sua autorização para uma tarefa de computador.",
  "Lets Synara capture windows and the desktop so the agent can see what it is driving.":
    "Permite que o Synara capture janelas e a área de trabalho para que o agente veja o que está controlando.",
  "Lets Synara detect Escape and pause when you take over during a Computer task. This does not enable the AppSnap shortcut.":
    "Permite que o Synara detecte Esc e pause quando você assumir o controle durante uma tarefa de computador. Isso não ativa o atalho do AppSnap.",
  "Action history is not enabled on this server.":
    "O histórico de ações não está ativado neste servidor.",
  Advanced: "Avançado",
  "AppSnap is separate: it attaches a window image without giving the agent control.":
    "O AppSnap é independente: ele anexa uma imagem da janela sem dar controle ao agente.",
  "AppSnap shortcut saved": "Atalho do AppSnap salvo",
  "AppSnap shortcut saved, but unavailable": "Atalho do AppSnap salvo, mas indisponível",
  "Approve the task": "Aprove a tarefa",
  "Ask for a task": "Peça uma tarefa",
  "Available and reserved": "Disponível e reservado",
  "Available — save to apply.": "Disponível — salve para aplicar.",
  "Capture up to two modifiers and one key. Changes are saved directly to":
    "Capture até duas teclas modificadoras e uma tecla. As alterações são salvas diretamente em",
  "Check a new combination before saving.": "Verifique uma nova combinação antes de salvar.",
  "Check again": "Verificar novamente",
  "Check the shortcut format and try again.": "Verifique o formato do atalho e tente novamente.",
  "Checking macOS and other apps…": "Verificando o macOS e outros apps…",
  "Checking…": "Verificando…",
  Command: "Comando",
  "Command for new keybinding": "Comando para o novo atalho",
  "Complete any macOS authentication. If macOS asks you to quit and reopen, do so before checking again.":
    "Conclua qualquer autenticação do macOS. Se o macOS pedir para encerrar e reabrir o app, faça isso antes de verificar novamente.",
  "Computer action": "Ação no computador",
  "Computer permission setup needs attention":
    "A configuração das permissões do computador precisa de atenção",
  "Computer status is unavailable": "O status do computador está indisponível",
  "Condition (optional)": "Condição (opcional)",
  "Condition for new keybinding": "Condição para o novo atalho",
  "Condition for {label}": "Condição para {label}",
  "Could not check permissions": "Não foi possível verificar as permissões",
  "Could not check this shortcut.": "Não foi possível verificar este atalho.",
  "Could not load recent actions. Refresh to try again.":
    "Não foi possível carregar as ações recentes. Atualize para tentar novamente.",
  "Could not save shortcut": "Não foi possível salvar o atalho",
  "Current shortcut": "Atalho atual",
  "Cursor colors": "Cores do cursor",
  "Customize built-in commands and their context conditions.":
    "Personalize os comandos integrados e suas condições de contexto.",
  "Desktop abilities": "Recursos da área de trabalho",
  "Enable Computer by default in any chat. Leave this off and use /computer-use for one request without adding Computer tools to ordinary turns.":
    "Ative o uso do computador por padrão em qualquer conversa. Deixe desativado e use /computer-use para uma única solicitação, sem incluir ferramentas de computador nas interações comuns.",
  Fill: "Preenchimento",
  "Follow and stop": "Acompanhe e interrompa",
  "Getting started": "Primeiros passos",
  "Got it": "Entendi",
  Grant: "Conceder",
  "Grant each permission with the steps above. If you take longer than 10 minutes, press Set up again.":
    "Conceda cada permissão seguindo as etapas acima. Se levar mais de 10 minutos, pressione Configurar novamente.",
  Hide: "Ocultar",
  "Hide guide": "Ocultar guia",
  "Hide history": "Ocultar histórico",
  "Hide steps": "Ocultar etapas",
  "Hold a modifier, then press one other key. Esc cancels.":
    "Mantenha uma tecla modificadora pressionada e depois pressione outra tecla. Esc cancela.",
  "Hold only one modifier.": "Mantenha apenas uma tecla modificadora pressionada.",
  "Hold ⌘, ⌃, ⌥ or ⇧ first, then press the other key.":
    "Primeiro mantenha ⌘, ⌃, ⌥ ou ⇧ pressionada e depois pressione a outra tecla.",
  "If this copy of {app} is already listed, turn it on. Otherwise, drag the app from the floating guide into the list, or use + to choose this installed copy, then turn it on.":
    "Se esta cópia do {app} já estiver na lista, ative-a. Caso contrário, arraste o app do guia flutuante até a lista ou use + para escolher esta cópia instalada e ative-a.",
  "If asked, approve Computer for the task. Use the permission guide when desktop access is missing. Synara may still ask before consequential actions.":
    "Se solicitado, autorize o uso do computador para a tarefa. Consulte o guia de permissões se faltar acesso à área de trabalho. O Synara ainda pode pedir autorização antes de ações importantes.",
  "In-chat computer preview size": "Tamanho da prévia do computador na conversa",
  Keybinding: "Atalho de teclado",
  Large: "Grande",
  "Let the agent use the desktop in any chat":
    "Permitir que o agente use a área de trabalho em qualquer conversa",
  "Load older actions": "Carregar ações mais antigas",
  "Loading recent actions…": "Carregando ações recentes…",
  "Loading…": "Carregando…",
  "No backend": "Nenhum backend",
  "No recorded actions yet.": "Ainda não há ações registradas.",
  "Now press the other key…": "Agora pressione a outra tecla…",
  "Older retained actions are no longer available. Refresh to see recent actions.":
    "As ações antigas retidas não estão mais disponíveis. Atualize para ver as ações recentes.",
  "Open {pane} settings": "Abrir ajustes de {pane}",
  "Optional condition, e.g. !terminalFocus": "Condição opcional, por exemplo, !terminalFocus",
  "Permission check failed.": "Falha ao verificar as permissões.",
  "Permission granted": "Permissão concedida",
  "Permission granted.": "Permissão concedida.",
  "Permission status": "Status das permissões",
  "Permissions unchanged": "As permissões não foram alteradas",
  "Press a key or combination": "Pressione uma tecla ou combinação",
  "Press a key or combo": "Pressione uma tecla ou combinação",
  "Press a key...": "Pressione uma tecla...",
  "Press two keys…": "Pressione duas teclas…",
  "Recent Computer actions": "Ações recentes do computador",
  "Recent actions across chats on this server. Read-only observations, typed text, page contents, and file paths are not included.":
    "Ações recentes em conversas deste servidor. Observações somente de leitura, texto digitado, conteúdo de páginas e caminhos de arquivos não são incluídos.",
  "Recheck permissions": "Verificar permissões novamente",
  "Rechecking…": "Verificando novamente…",
  "Record AppSnap shortcut": "Gravar atalho do AppSnap",
  "Refresh history": "Atualizar histórico",
  "Requires the Synara desktop app on macOS.": "Requer o app de desktop do Synara no macOS.",
  Reset: "Redefinir",
  "Restart {app}": "Reiniciar {app}",
  Rim: "Contorno",
  "Save keybinding": "Salvar atalho de teclado",
  "Screen capture is not allowed yet": "A captura de tela ainda não está autorizada",
  "Set keybinding": "Definir atalho de teclado",
  "Setting up…": "Configurando…",
  "Shortcut for {label}": "Atalho para {label}",
  "Shortcut saved": "Atalho salvo",
  "Show guide": "Mostrar guia",
  "Show history": "Mostrar histórico",
  "Show the computer preview automatically when an agent drives the desktop":
    "Mostrar automaticamente a prévia do computador quando o agente controlar a área de trabalho",
  "Show the live preview the first time an agent acts on the desktop in a chat. Compact keeps it small and glanceable; Large gives it the full wide card.":
    "Mostrar a prévia ao vivo na primeira vez que o agente agir na área de trabalho durante uma conversa. O tamanho compacto facilita uma olhada rápida; o grande usa todo o espaço do cartão.",
  "Showing the latest {count} loaded actions.":
    "Exibindo as ações carregadas mais recentes: {count}.",
  "Some earlier actions are unavailable. This is not a complete history.":
    "Algumas ações anteriores estão indisponíveis. Este histórico está incompleto.",
  "Still denied after an update or rebuild? Remove this app from the list and add this copy again. Complete any macOS authentication, and restart if macOS asks you to quit and reopen.":
    "A permissão continua negada após uma atualização ou recompilação? Remova este app da lista e adicione esta cópia novamente. Conclua qualquer autenticação do macOS e reinicie se o sistema pedir para encerrar e reabrir o app.",
  Stock: "Padrão",
  "Synara already uses this for “{command}”.": "O Synara já usa este atalho para “{command}”.",
  "That key isn't supported — try another.": "Esta tecla não é compatível — tente outra.",
  "The agent can act on the desktop but cannot see it, so screenshots fail. Press Set up to reconnect.":
    "O agente pode controlar a área de trabalho, mas não consegue vê-la, então as capturas de tela falham. Pressione Configurar para reconectar.",
  "The agent can act on the desktop but cannot see it, so screenshots fail. Turn Synara on in System Settings › Privacy & Security › Screen Recording, then press Set up to reconnect.":
    "O agente pode controlar a área de trabalho, mas não consegue vê-la, então as capturas de tela falham. Ative o Synara em Ajustes do Sistema › Privacidade e Segurança › Gravação de Tela e pressione Configurar para reconectar.",
  "The agent drives its own seat, so your cursor and focus stay untouched.":
    "O agente controla sua própria sessão, sem interferir no seu cursor ou foco.",
  "The agent pointer is stock monochrome by default — like a normal pointer. Custom colors apply to new computer sessions.":
    "Por padrão, o ponteiro do agente é monocromático — como um ponteiro comum. As cores personalizadas valem para novas sessões de computador.",
  "The agent shares the computer described by this backend. Press {shortcut} at any time to stop it from acting on the desktop, and press it again to let it resume.":
    "O agente compartilha o computador descrito por este backend. Pressione {shortcut} a qualquer momento para interromper o controle da área de trabalho e pressione novamente para retomá-lo.",
  "The agent shares your Mac desktop and works in the background by default. It can bring a window forward when your task asks to watch. Background input may still affect focus. Use Stop in the chat to interrupt the task. Physical Escape interrupts the current action when Input Monitoring is granted; it does not disable future tasks.":
    "O agente compartilha a área de trabalho do seu Mac e, por padrão, trabalha em segundo plano. Ele pode trazer uma janela para frente quando a tarefa pedir para acompanhar. A entrada em segundo plano ainda pode alterar o foco. Use Parar na conversa para interromper a tarefa. Com a permissão de Monitoramento de Entrada, Esc interrompe a ação atual, mas não desativa tarefas futuras.",
  "The change is now persisted in keybindings.json.": "A alteração foi salva em keybindings.json.",
  "The server could not be reached.": "Não foi possível acessar o servidor.",
  "The shortcut is reserved while AppSnap is enabled.":
    "O atalho fica reservado enquanto o AppSnap está ativado.",
  "The shortcut will be reserved when you enable AppSnap.":
    "O atalho será reservado quando você ativar o AppSnap.",
  "This backend can observe desktop windows, but native desktop input is unavailable. Isolated headless browser actions require a verified browser runtime and an available task-scoped Escape shortcut. Use Stop in the chat to interrupt the task.":
    "Este backend pode observar as janelas da área de trabalho, mas não oferece entrada nativa. Ações isoladas do navegador sem interface exigem um runtime de navegador verificado e um atalho Esc disponível para a tarefa. Use Parar na conversa para interromper a tarefa.",
  "Type /computer-use followed by your task, for example: “/computer-use open Calculator and calculate 123 × 45.” This enables Computer for that request only. The default setting below can enable it on every turn.":
    "Digite /computer-use seguido da tarefa, por exemplo: “/computer-use abra a Calculadora e faça 123 × 45”. Isso ativa o uso do computador apenas para essa solicitação. A configuração abaixo pode ativá-lo em todas as interações.",
  "Use Grant next to a permission to walk through setup.":
    "Use Conceder ao lado de uma permissão para seguir as etapas de configuração.",
  "Use up to two modifiers and one key.": "Use até duas teclas modificadoras e uma tecla.",
  "Watch the preview while the agent works. Use Stop in the chat to interrupt the task. Closing the preview only hides it.":
    "Acompanhe a prévia enquanto o agente trabalha. Use Parar na conversa para interromper a tarefa. Fechar a prévia apenas a oculta.",
  "Watching for the change — this page updates automatically.":
    "Aguardando a alteração — esta página é atualizada automaticamente.",
  "computer control": "controle do computador",
  "cursor colors": "cores do cursor",
  "macOS permissions": "Permissões do macOS",
  none: "nenhum",
  preview: "prévia",
  "{label} color": "Cor de {label}",
  "{pane} is ready for {feature}.": "{pane} está pronto para {feature}.",
  "A previous reset is unconfirmed. Retry checks the same attempt.":
    "Uma redefinição anterior não foi confirmada. Tentar novamente verifica a mesma tentativa.",
  "Applying…": "Aplicando…",
  "Banked resets": "Redefinições acumuladas",
  "Codex limits do not need a reset right now.":
    "Os limites do Codex não precisam ser redefinidos agora.",
  "Codex limits reset.": "Limites do Codex redefinidos.",
  "Expires in {days}d {hours}h": "Expira em {days} d e {hours} h",
  "Expires in {hours}h {minutes}m": "Expira em {hours} h e {minutes} min",
  "Expires in {minutes}m": "Expira em {minutes} min",
  "Lasts until reset": "Dura até a redefinição",
  "Learn more": "Saiba mais",
  "Limit reached": "Limite atingido",
  "Next available reset": "Próxima redefinição disponível",
  "No banked resets available.": "Não há redefinições acumuladas disponíveis.",
  "No expiry listed": "Sem data de expiração informada",
  "No local usage data was found yet for the selected provider.":
    "Ainda não foram encontrados dados locais de uso para o provedor selecionado.",
  "No local usage data was found yet.": "Ainda não foram encontrados dados locais de uso.",
  "Reset result not confirmed": "Resultado da redefinição não confirmado",
  "Reset {index}": "Redefinição {index}",
  "Resets in {days}d {hours}h": "Redefine em {days} d e {hours} h",
  "Resets in {hours}h {minutes}m": "Redefine em {hours} h e {minutes} min",
  "Resets in {minutes}m": "Redefine em {minutes} min",
  "Resets soon": "Redefine em breve",
  "Retry reset": "Tentar redefinir novamente",
  "Retry this reset to check the same attempt.":
    "Tente redefinir novamente para verificar a mesma tentativa.",
  "Runs out in {duration}": "Acaba em {duration}",
  "Scanning local usage data for the selected provider.":
    "Verificando dados locais de uso do provedor selecionado.",
  "That reset was already used.": "Essa redefinição já foi usada.",
  "Usage pace: {status}": "Ritmo de uso: {status}",
  "Use one Codex reset?\nThis spends one banked reset and cannot be undone. Synara will check your current account and usage first.":
    "Usar uma redefinição do Codex?\nIsso consome uma redefinição acumulada e não pode ser desfeito. O Synara verificará sua conta atual e o uso antes.",
  "Use reset": "Usar redefinição",
  "Use when your 5-hour or weekly limit has 10% or less remaining.":
    "Use quando restarem 10% ou menos do limite de 5 horas ou semanal.",
  "{count} available": "Disponíveis: {count}",
  "{label} remaining": "{label} restantes",
  "{percentage} left": "Restam {percentage}",
  "{percent}% in deficit": "{percent}% em déficit",
  "{percent}% in reserve": "{percent}% de saldo",
  "{provider} usage": "Uso de {provider}",
  "Attach a file in the browser": "Anexar um arquivo no navegador",
  "Attach {count} files in the browser": "Anexar {count} arquivos no navegador",
  "Check a desktop Space operation": "Verificar uma operação de Spaces da área de trabalho",
  "Clear a browser field": "Limpar um campo do navegador",
  "Double-click in the browser": "Clicar duas vezes no navegador",
  "Drag in the browser": "Arrastar no navegador",
  "Hover over a browser control": "Passar o cursor sobre um controle do navegador",
  "Inspect a window without switching Spaces": "Inspecionar uma janela sem alternar Spaces",
  "Inspect desktop Spaces": "Inspecionar Spaces da área de trabalho",
  Open: "Abrir",
  "Open an isolated browser in the background": "Abrir um navegador isolado em segundo plano",
  "Open an isolated browser window": "Abrir uma janela de navegador isolada",
  "Open {site} in the browser": "Abrir {site} no navegador",
  Press: "Pressionar",
  "Release the task's desktop Space": "Liberar o Space da área de trabalho desta tarefa",
  "Replace text in a browser field": "Substituir o texto em um campo do navegador",
  "Reserve a desktop Space for this task": "Reservar um Space da área de trabalho para esta tarefa",
  "Right-click in the browser": "Clicar com o botão direito no navegador",
  Scroll: "Rolar",
  "Select a window in the task's Space": "Selecionar uma janela no Space da tarefa",
  "Switch to {app}": "Alternar para {app}",
  "at ({x}, {y})": "em ({x}, {y})",
  down: "para baixo",
  "for {count} ms": "por {count} ms",
  "for {count} seconds": "por {count} s",
  "from {from} to {to}": "de {from} para {to}",
  "in the browser": "no navegador",
  "in {app}": "em {app}",
  "in {window}": "em {window}",
  left: "para a esquerda",
  right: "para a direita",
  up: "para cima",
  "{verb} a browser dialog": "{verb} uma caixa de diálogo do navegador",
  "on “{label}”": "em “{label}”",
  "for “{label}”": "para “{label}”",
  "in “{label}”": "em “{label}”",
  Super: "Super",
  Meta: "Meta",
  Control: "Control",
  Alt: "Alt",
  Option: "Option",
  Shift: "Shift",
  Enter: "Enter",
  Escape: "Esc",
  Tab: "Tab",
  Backspace: "Apagar",
  "Up arrow": "Seta para cima",
  "Down arrow": "Seta para baixo",
  "Left arrow": "Seta para a esquerda",
  "Right arrow": "Seta para a direita",

  // User-facing Computer tool names, shared by approval and transcript rows.
  "Take a screenshot": "Fazer uma captura de tela",
  "Read the screen": "Ler a tela",
  "Measure the screen": "Medir a tela",
  "Find open windows": "Localizar janelas abertas",
  "List apps": "Listar apps",
  "Verify state": "Verificar estado",
  "Zoom into a window": "Ampliar uma janela",
  "List apps and windows": "Listar apps e janelas",
  "Read the cursor position": "Ler a posição do cursor",
  "Read the Computer playbook": "Consultar o guia de uso do computador",
  Click: "Clicar",
  "Move the agent cursor": "Mover o cursor do agente",
  Drag: "Arrastar",
  Type: "Digitar",
  "Press a key": "Pressionar uma tecla",
  "Set a field": "Definir um campo",
  "Select text": "Selecionar texto",
  "Activate a control": "Ativar um controle",
  "Open an app": "Abrir um app",
  "Activate a window": "Ativar uma janela",
  "Move or resize a window": "Mover ou redimensionar uma janela",
  "Invoke a menu item": "Acionar um item do menu",
  "Force-quit an app": "Forçar encerramento de um app",
  "Minimize or restore a window": "Minimizar ou restaurar uma janela",
  "Hide or unhide an app": "Ocultar ou reexibir um app",
  Wait: "Aguardar",
  "Read the clipboard": "Ler a área de transferência",
  "Write to the clipboard": "Gravar na área de transferência",
  "Paste text": "Colar texto",
  "Run a sequence": "Executar uma sequência",
  "Inspect the computer": "Inspecionar o computador",
  "Read the browser page": "Ler a página do navegador",
  "Prepare a browser": "Preparar um navegador",
  "Open a browser page": "Abrir uma página no navegador",
  "Click in the browser": "Clicar no navegador",
  "Type in a browser field": "Digitar em um campo do navegador",
  "Handle a browser dialog": "Lidar com uma caixa de diálogo do navegador",
  "Attach files in the browser": "Anexar arquivos no navegador",
  "Download a file": "Baixar um arquivo",
  "Use the pointer in the browser": "Usar o cursor no navegador",
  "Press Enter in the browser": "Pressionar Enter no navegador",
  "Minimize a window": "Minimizar uma janela",
  "Restore a window": "Restaurar uma janela",
  "Hide an app": "Ocultar um app",
  "Unhide an app": "Reexibir um app",
  Read: "Ler",
  Accept: "Aceitar",
  Dismiss: "Dispensar",
  "Approve once": "Aprovar uma vez",
  "Allow just this request": "Permitir apenas esta solicitação",
  "Always allow this session": "Sempre permitir nesta sessão",
  "Don't ask again this session": "Não perguntar novamente nesta sessão",
  Decline: "Recusar",
  "Reject and let the agent continue": "Recusar e permitir que o agente continue",
  "Cancel turn": "Cancelar interação",
  "Stop the current turn": "Interromper a interação atual",
  "Approve this command?": "Aprovar este comando?",
  "Approve reading this file?": "Aprovar a leitura deste arquivo?",
  "Approve this file change?": "Aprovar esta alteração de arquivo?",
  "Grant these permissions?": "Conceder estas permissões?",
  "Approve this tool call?": "Aprovar esta chamada de ferramenta?",
  "Allow Computer for this task": "Permitir o uso do computador nesta tarefa",
  "Continue routine desktop actions until this response ends. Stop cancels access. Clipboard reads still ask separately.":
    "Permitir ações comuns na área de trabalho até o fim desta resposta. Parar cancela o acesso. Leituras da área de transferência ainda exigem aprovação separada.",
  "Stop desktop for this turn, agent continues without tools":
    "Interromper o computador nesta interação; o agente continua sem as ferramentas",
  "Stop revokes new input; keys/buttons already sent may still land.":
    "Parar impede novas entradas; teclas e cliques já enviados ainda podem ser executados.",
  "Allow Computer for this task?": "Permitir o uso do computador nesta tarefa?",
  "Requested permission profile": "Perfil de permissões solicitado",
  "Review the request to continue.": "Revise a solicitação para continuar.",
  "Live usage is not available for this provider configuration.":
    "O uso ao vivo não está disponível para esta configuração do provedor.",
  "Usage is currently unavailable.": "O uso está indisponível no momento.",
  "5h": "5h",
  Current: "Atual",
  Daily: "Diário",
  Weekly: "Semanal",
  "Usage credits": "Créditos de uso",
  ahead: "abaixo do esperado",
  "on-track": "no ritmo esperado",
  behind: "acima do esperado",
  "Another conversation": "Outra conversa",
  "Connecting to the desktop…": "Conectando à área de trabalho…",
  "Computer preview": "Prévia do computador",
  "Desktop control is with {owner}.": "O controle da área de trabalho está com {owner}.",
  "Dock the computer preview back into the chat rail":
    "Encaixar a prévia do computador novamente na barra da conversa",
  "Dock the preview back into the chat rail": "Encaixar a prévia novamente na barra da conversa",
  "Float the computer preview as a draggable window":
    "Desanexar a prévia do computador em uma janela que pode ser movida",
  "Float the preview as a draggable window": "Desanexar a prévia em uma janela que pode ser movida",
  "Hide the computer preview for the rest of this task":
    "Ocultar a prévia do computador pelo restante desta tarefa",
  "Hide the preview for the rest of this task": "Ocultar a prévia pelo restante desta tarefa",
  "Input paused": "Entrada pausada",
  "Only one conversation can drive the desktop at a time. This one can still watch it.":
    "Apenas uma conversa pode controlar a área de trabalho por vez. Esta ainda pode acompanhá-la.",
  "This browser cannot decode desktop frames.":
    "Este navegador não consegue decodificar quadros da área de trabalho.",
  "Waiting for the window the agent is using…": "Aguardando a janela que o agente está usando…",
  "Stopped via Escape": "Interrompido com Esc",
  Live: "Ao vivo",
  "Agent controlling this computer": "Agente controlando este computador",
  "Agent controlling": "Agente controlando",

  // Keyboard shortcuts shared by the settings editor and the shortcut sheet.
  "Open the Create project dialog to import a local folder.":
    "Abrir a janela Criar projeto para importar uma pasta local.",
  "Search projects and threads": "Buscar projetos e conversas",
  "Open the sidebar search palette from anywhere in the app.":
    "Abrir a busca da barra lateral de qualquer lugar do app.",
  "Toggle Activity": "Alternar Atividade",
  "Show or hide running tasks, completed work, and items that need attention.":
    "Mostrar ou ocultar tarefas em andamento, trabalhos concluídos e itens que precisam de atenção.",
  "Import thread": "Importar conversa",
  "Bring an existing conversation into the current workspace.":
    "Trazer uma conversa existente para o espaço de trabalho atual.",
  "Previous space": "Espaço anterior",
  "Switch to the previous project space and restore its last working context.":
    "Alternar para o espaço de projeto anterior e restaurar o último contexto de trabalho.",
  "Next space": "Próximo espaço",
  "Switch to the next project space and restore its last working context.":
    "Alternar para o próximo espaço de projeto e restaurar o último contexto de trabalho.",
  "Jump to Void": "Ir para Void",
  "Jump to space {index}": "Ir para o espaço {index}",
  "Switch straight to the Void tab of the space switcher.":
    "Ir diretamente para a aba Void do seletor de espaços.",
  "Switch straight to this tab of the space switcher.":
    "Ir diretamente para esta aba do seletor de espaços.",
  "Start a fresh thread in the current project, or the most recent one.":
    "Iniciar uma nova conversa no projeto atual ou no mais recente.",
  "New thread in latest project": "Nova conversa no projeto mais recente",
  "Jump back into the most recently used project with a new thread.":
    "Voltar ao projeto usado mais recentemente e iniciar uma conversa.",
  "New chat": "Nova conversa",
  "Open the empty chat landing view.": "Abrir a tela inicial de conversa vazia.",
  "New terminal thread": "Nova conversa no terminal",
  "Create a thread that opens directly into terminal mode.":
    "Criar uma conversa que abre diretamente no modo de terminal.",
  "New Claude thread": "Nova conversa com Claude",
  "Start a fresh thread with Claude selected.": "Iniciar uma nova conversa com Claude selecionado.",
  "New Codex thread": "Nova conversa com Codex",
  "Start a fresh thread with Codex selected.": "Iniciar uma nova conversa com Codex selecionado.",
  "New Cursor thread": "Nova conversa com Cursor",
  "Start a fresh thread with Cursor selected.": "Iniciar uma nova conversa com Cursor selecionado.",
  "Split chat": "Dividir conversa",
  "Open the current conversation in a second pane.": "Abrir a conversa atual em um segundo painel.",
  "Previous recent view": "Visualização recente anterior",
  "Cycle backward through recently opened primary views.":
    "Percorrer para trás as visualizações principais abertas recentemente.",
  "Next recent view": "Próxima visualização recente",
  "Cycle forward through recently opened primary views.":
    "Percorrer para frente as visualizações principais abertas recentemente.",
  "Model picker": "Seletor de modelos",
  "Open the composer provider and model picker.":
    "Abrir o seletor de provedor e modelo do campo de mensagem.",
  "Next model": "Próximo modelo",
  "Cycle to the next model for the active provider (favorites first, then remaining models).":
    "Alternar para o próximo modelo do provedor ativo (favoritos primeiro, depois os demais modelos).",
  "Previous model": "Modelo anterior",
  "Cycle to the previous model for the active provider (favorites first, then remaining models).":
    "Alternar para o modelo anterior do provedor ativo (favoritos primeiro, depois os demais modelos).",
  "Reasoning picker": "Seletor de raciocínio",
  "Open the composer reasoning and trait controls.":
    "Abrir os controles de raciocínio e características no campo de mensagem.",
  "Open usage settings": "Abrir configurações de uso",
  "Open Settings → Usage for provider quota and token totals.":
    "Abrir Configurações → Uso para consultar cotas dos provedores e totais de tokens.",
  "Focus composer": "Focar no campo de mensagem",
  "Focus or blur the chat prompt composer.": "Focar ou tirar o foco do campo de mensagem.",
  "Find in thread": "Buscar na conversa",
  "Search the current transcript and jump to each matching message.":
    "Buscar na transcrição atual e ir para cada mensagem correspondente.",
  "Show or hide the terminal surface for the active thread.":
    "Mostrar ou ocultar o terminal da conversa ativa.",
  "Split terminal": "Dividir terminal",
  "Split the focused terminal, adding a new pane beside it.":
    "Dividir o terminal em foco e adicionar um painel ao lado.",
  "Split terminal right": "Dividir terminal à direita",
  "Split the focused terminal, placing the new pane to the right.":
    "Dividir o terminal em foco e colocar o novo painel à direita.",
  "Split terminal left": "Dividir terminal à esquerda",
  "Split the focused terminal, placing the new pane to the left.":
    "Dividir o terminal em foco e colocar o novo painel à esquerda.",
  "Split terminal down": "Dividir terminal abaixo",
  "Split the focused terminal, placing the new pane below.":
    "Dividir o terminal em foco e colocar o novo painel abaixo.",
  "Split terminal up": "Dividir terminal acima",
  "Split the focused terminal, placing the new pane above.":
    "Dividir o terminal em foco e colocar o novo painel acima.",
  "New terminal tab": "Nova aba do terminal",
  "Open a new tab in the focused terminal.": "Abrir uma nova aba no terminal em foco.",
  "Close terminal tab": "Fechar aba do terminal",
  "Close the focused terminal tab.": "Fechar a aba do terminal em foco.",
  "Open or close the working tree diff panel.":
    "Abrir ou fechar o painel de diferenças da árvore de trabalho.",
  "Next change": "Próxima alteração",
  "Jump the diff viewport to the next changed file.":
    "Ir para o próximo arquivo alterado no painel de diferenças.",
  "Previous change": "Alteração anterior",
  "Jump the diff viewport to the previous changed file.":
    "Ir para o arquivo alterado anterior no painel de diferenças.",
  "Toggle browser": "Alternar navegador",
  "Reveal the built-in browser panel for the active thread.":
    "Mostrar o painel de navegador integrado da conversa ativa.",
  "Toggle iOS Simulator": "Alternar Simulador do iOS",
  "Reveal the iOS Simulator panel for the active thread. macOS servers only.":
    "Mostrar o painel do Simulador do iOS na conversa ativa. Disponível apenas em servidores macOS.",
  "Copy thread ID": "Copiar ID da conversa",
  "Copy the active thread's ID to the clipboard.":
    "Copiar o ID da conversa ativa para a área de transferência.",
  "Previous visible thread": "Conversa visível anterior",
  "Cycle to the previous thread that is currently visible in the sidebar.":
    "Alternar para a conversa anterior que está visível na barra lateral.",
  "Next visible thread": "Próxima conversa visível",
  "Cycle to the next thread that is currently visible in the sidebar.":
    "Alternar para a próxima conversa que está visível na barra lateral.",
  "Jump to visible thread {index}": "Ir para a conversa visível {index}",
  "setup script": "script de configuração",
  "Focus a visible thread directly from the sidebar number row.":
    "Focar diretamente em uma conversa visível usando a fileira de números da barra lateral.",
  "Open in favorite editor": "Abrir no editor favorito",
  "Send the current thread or workspace target to your preferred editor.":
    "Enviar a conversa atual ou o destino do espaço de trabalho para o editor preferido.",
  "Save file": "Salvar arquivo",
  "Write the focused editor's unsaved changes back to disk.":
    "Gravar no disco as alterações não salvas do editor em foco.",
  "Commit and push": "Fazer commit e push",
  "Commit pending changes and push the active thread's repo.":
    "Fazer commit das alterações pendentes e enviar o repositório da conversa ativa.",
  "Open full-width terminal workspace": "Abrir espaço de trabalho de terminal em tela ampla",
  "Expand the active thread into the workspace terminal layout.":
    "Expandir a conversa ativa para o layout de terminal do espaço de trabalho.",
  "Focus terminal tab": "Focar na aba do terminal",
  "Switch the workspace to the terminal tab.":
    "Alternar o espaço de trabalho para a aba do terminal.",
  "Focus chat tab": "Focar na aba da conversa",
  "Switch the workspace back to the chat tab.":
    "Voltar o espaço de trabalho para a aba da conversa.",
  "Close active workspace panel": "Fechar painel ativo do espaço de trabalho",
  "Close the currently focused workspace panel or tab.":
    "Fechar o painel ou a aba do espaço de trabalho em foco.",
  "Toggle sidebar": "Alternar barra lateral",
  "Collapse or reveal the sidebar shell.": "Recolher ou mostrar a estrutura da barra lateral.",
  "Assign a shortcut to this built-in command.": "Atribuir um atalho a este comando integrado.",
  "Show keybindings": "Mostrar atalhos de teclado",
  "Open this sheet from anywhere without leaving your current context.":
    "Abrir esta lista de qualquer lugar sem sair do contexto atual.",
  "Available now": "Disponíveis agora",
  "These reflect the active workspace-terminal context.":
    "Estes atalhos correspondem ao contexto ativo do terminal no espaço de trabalho.",
  "These reflect the current chat and sidebar context.":
    "Estes atalhos correspondem ao contexto atual da conversa e da barra lateral.",
  "Outside workspace mode": "Fora do modo de espaço de trabalho",
  "Number-row jumps return when the terminal workspace is closed.":
    "Os atalhos da fileira de números voltam quando o espaço de trabalho do terminal é fechado.",
  "In workspace mode": "No modo de espaço de trabalho",
  "These bindings take over when the terminal switches into workspace mode.":
    "Estes atalhos entram em vigor quando o terminal muda para o modo de espaço de trabalho.",
  "Project scripts": "Scripts do projeto",
  "Custom shortcuts defined for the active project's scripts.":
    "Atalhos personalizados definidos para os scripts do projeto ativo.",

  // Keys selected from status enums and presentation tables.
  Accessibility: "Acessibilidade",
  "Input Monitoring": "Monitoramento de Entrada",
  "Screen Recording": "Gravação de Tela",
  Granted: "Concedida",
  Denied: "Negada",
  "Not requested yet": "Ainda não solicitada",
  Restricted: "Restrita",
  Unknown: "Desconhecida",
  "Effect observed": "Efeito observado",
  "Sent; effect unconfirmed": "Enviado; efeito não confirmado",
  "Not sent": "Não enviado",
  Blocked: "Bloqueado",
  Failed: "Falhou",
  "KWin plugin (KDE)": "Plugin do KWin (KDE)",
  "Hyprland plugin": "Plugin do Hyprland",
  "Isolated agent desktop (nested KWin)": "Área de trabalho isolada do agente (KWin aninhado)",
  "macOS desktop": "Área de trabalho do macOS",
  "Cua 0.28.2": "Cua 0.28.2",
  "Test backend": "Backend de teste",
  "screen capture": "captura de tela",
  input: "entrada",
  "window listing": "listagem de janelas",
  "window geometry": "geometria das janelas",
  "stacking order": "ordem de sobreposição",
  "keyboard focus": "foco do teclado",
  "window raising": "trazer janelas para frente",
  clipboard: "área de transferência",
  "ghost cursor": "cursor fantasma",
  "Close active terminal tab": "Fechar a aba ativa do terminal",
  "Close {terminal}": "Fechar {terminal}",
  "Collapse side panel": "Recolher painel lateral",
  "Collapse terminal into chat drawer": "Recolher o terminal na gaveta da conversa",
  "Expand terminal into workspace": "Expandir o terminal para o espaço de trabalho",
  "Move to its own terminal tab": "Mover para uma aba de terminal própria",
  "Open side panel": "Abrir painel lateral",
  "Split down": "Dividir para baixo",
  "Split right": "Dividir à direita",
  terminal: "terminal",
  "Could not render page {page}": "Não foi possível renderizar a página {page}",
  "Go to page {page}": "Ir para a página {page}",
  "Page {page}": "Página {page}",
  "Screen of {device}": "Tela de {device}",
  "No tabs open": "Nenhuma aba aberta",
  "Restoring tab...": "Restaurando aba...",
  "Setting up computer control": "Configurando o controle do computador",
  "macOS may ask to allow {permissions} for Synara.":
    "O macOS pode pedir autorização para o Synara usar {permissions}.",
  "Setting up the desktop may require installing a helper or allowing the permissions Synara needs.":
    "A configuração da área de trabalho pode exigir a instalação de um auxiliar ou a concessão das permissões necessárias ao Synara.",
  "Computer control still needs setup": "O controle do computador ainda precisa ser configurado",
  "Couldn't set up computer control": "Não foi possível configurar o controle do computador",
  "The server gave no reason.": "O servidor não informou o motivo.",
  "Checking {permissions}. Allow access in the macOS prompt or System Settings, then return to Synara.":
    "Verificando {permissions}. Permita o acesso no aviso do macOS ou nos Ajustes do Sistema e volte ao Synara.",
  "Setting up the agent's desktop. This installs or builds whatever this machine still needs, and may ask for your password or for desktop permissions. The first run can take a few minutes.":
    "Configurando a área de trabalho do agente. Esta etapa instala ou compila o que ainda for necessário nesta máquina e pode pedir sua senha ou permissões de acesso. A primeira execução pode levar alguns minutos.",
  "Setting up failed. {reason}": "A configuração falhou. {reason}",
  "{first} and {second}": "{first} e {second}",
  "{first}, {second}, and {third}": "{first}, {second} e {third}",
};

export default ptBRComputer;
