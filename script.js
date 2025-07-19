// Função para carregar um projeto no modal
function loadProject(url) {
    const modal = document.getElementById('projectModal');
    const iframe = document.getElementById('projectFrame');
    const projectTitle = document.getElementById('projectTitle');
    
    // Define o título baseado na URL
    if (url.includes('barbearia')) {
        projectTitle.textContent = 'Barbearia - Visualizador';
    } else if (url.includes('MegaScript')) {
        projectTitle.textContent = 'Mega Script - Visualizador';
    } else if (url.includes('restaurante')) {
        projectTitle.textContent = 'Restaurante - Visualizador';
    } else {
        projectTitle.textContent = 'Projeto - Visualizador';
    }
    
    // Carrega o site no iframe
    iframe.src = url;
    
    // Exibe o modal
    modal.style.display = 'block';
    
    // Previne scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeProject() {
    const modal = document.getElementById('projectModal');
    const iframe = document.getElementById('projectFrame');
    
    // Limpa o src do iframe
    iframe.src = '';
    
    // Esconde o modal
    modal.style.display = 'none';
    
    // Restaura scroll do body
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProject();
        }
    });
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProject();
        }
    });
});

// Adicionar animação de loading ao iframe
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('projectFrame');
    
    iframe.addEventListener('load', function() {
        // Remove classe de loading se existir
        iframe.classList.remove('loading');
    });
    
    iframe.addEventListener('loadstart', function() {
        // Adiciona classe de loading
        iframe.classList.add('loading');
    });
}); 