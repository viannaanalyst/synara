// FILE: pt-BR.dialogs.ts
// Purpose: Brazilian Portuguese catalog for app dialogs, notifications, and toasts.
//          Keys are the English source strings used in the UI.
// Layer: Web i18n

const ptBRDialogs: Readonly<Record<string, string>> = {
  // ── Shared dialog actions ──────────────────────────────────────────────────
  Save: "Salvar",
  Cancel: "Cancelar",
  "Saving...": "Salvando...",

  // ── Rename dialog ──────────────────────────────────────────────────────────
  "Rename chat": "Renomear conversa",
  "Keep it short and recognizable.": "Mantenha curto e reconhecível.",

  // ── Shortcuts dialog ───────────────────────────────────────────────────────
  "Reflects the bindings active in your current context.":
    "Reflete os atalhos ativos no seu contexto atual.",
  "Search shortcuts...": "Buscar atalhos...",
  "Search shortcuts": "Buscar atalhos",
  "No shortcuts match “{query}”.": "Nenhum atalho corresponde a “{query}”.",

  // ── Create project dialog ──────────────────────────────────────────────────
  "Create project": "Criar projeto",
  Space: "Espaço",
  "New space": "Novo espaço",
  "/path/to/project": "/caminho/para/projeto",
  "Source folder": "Pasta de origem",
  "Drop a folder here, or browse": "Solte uma pasta aqui ou navegue",
  "Project added": "Projeto adicionado",
  "Validating repository": "Validando repositório",
  "Cloning…": "Clonando…",
  "Creating…": "Criando…",
  "Clone and add": "Clonar e adicionar",
  "Cancel clone": "Cancelar clone",
  "The app server is unavailable.": "O servidor do app não está disponível.",
  "Unable to open the folder picker.": "Não foi possível abrir o seletor de pastas.",
  "Type a folder path, or drop a folder above.":
    "Digite o caminho de uma pasta ou solte uma pasta acima.",
  "Enter a GitHub repository as owner/repository or a GitHub.com repository URL.":
    "Informe um repositório do GitHub como proprietário/repositório ou uma URL de repositório do GitHub.com.",
  "Update the Synara server before adding a project from GitHub.":
    "Atualize o servidor do Synara antes de adicionar um projeto do GitHub.",
  "Choose the parent folder where the repository should be cloned.":
    "Escolha a pasta pai onde o repositório deve ser clonado.",
  "Choose a valid folder name without slashes, reserved device names, or a trailing dot.":
    "Escolha um nome de pasta válido, sem barras, nomes de dispositivo reservados ou ponto final.",
  "GitHub clone cancelled. You can retry safely.":
    "Clone do GitHub cancelado. Você pode tentar novamente com segurança.",
  "Project creation cancelled.": "Criação do projeto cancelada.",
  "An error occurred while adding the project.": "Ocorreu um erro ao adicionar o projeto.",
  "Thread deleted, but worktree removal failed":
    "Conversa excluída, mas não foi possível remover a worktree",
  "Could not remove {path}. {message}": "Não foi possível remover {path}. {message}",
  "Command approval requested.": "Aprovação de comando solicitada.",
  "File-read approval requested.": "Aprovação de leitura de arquivo solicitada.",
  "File-change approval requested.": "Aprovação de alteração de arquivo solicitada.",
  "Permission approval requested.": "Aprovação de permissão solicitada.",
  "Tool approval requested.": "Aprovação de ferramenta solicitada.",
};

export default ptBRDialogs;
