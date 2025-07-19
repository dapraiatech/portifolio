# Da Praia Tech - Portfólio

Site institucional minimalista para apresentar projetos da Da Praia Tech, empresa especializada em desenvolvimento web e automações.

## 🚀 Características

- **Design Minimalista**: Interface limpa e moderna
- **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Visualizador de Projetos**: Modal interativo para exibir sites dentro do próprio site
- **Performance Otimizada**: Carregamento rápido e animações suaves

## 📁 Estrutura do Projeto

```
DA PRAIA TECH/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🎨 Funcionalidades

### Visualizador de Projetos
- Modal responsivo para exibir sites
- Controles intuitivos (fechar com X, ESC ou clicando fora)
- Animações suaves de entrada e saída
- Estado de loading durante carregamento

### Design Responsivo
- Layout adaptável para diferentes tamanhos de tela
- Tipografia otimizada para legibilidade
- Gradientes modernos e cores harmoniosas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript**: Funcionalidades interativas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Inter

## 📱 Projetos Incluídos

- **Barbearia**: Site institucional para barbearia
  - URL: https://dapraiatech.github.io/barbearia/
- **Mega Script**: Site para bot de automação do Lineage 2
  - URL: https://l2megascript.github.io/MegaScript/

## 🔧 Como Adicionar Novos Projetos

Para adicionar um novo projeto ao portfólio:

1. Adicione um novo card na seção `.projects-grid` no `index.html`:

```html
<div class="project-card">
    <div class="project-info">
        <h4>Nome do Projeto</h4>
        <p>Descrição do projeto</p>
        <button class="view-project-btn" onclick="loadProject('URL_DO_PROJETO')">
            <i class="fas fa-external-link-alt"></i>
            Visualizar Projeto
        </button>
    </div>
</div>
```

2. Atualize a função `loadProject()` no `script.js` para incluir o novo projeto:

```javascript
if (url.includes('barbearia')) {
    projectTitle.textContent = 'Barbearia - Visualizador';
} else if (url.includes('novo-projeto')) {
    projectTitle.textContent = 'Novo Projeto - Visualizador';
}
```

## 🚀 Como Executar

1. Clone ou baixe os arquivos
2. Abra o `index.html` em um navegador web
3. Ou hospede em um servidor web para melhor performance

## 📞 Contato

**Da Praia Tech** - Desenvolvimento e Automações

---

© 2024 Da Praia Tech. Todos os direitos reservados. 