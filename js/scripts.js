// Temporizador de contagem regressiva
function updateCountdown() {
  // Defina a data de término para daqui a 2 dias
  const now = new Date();
  const blackFriday = new Date(now);
  blackFriday.setDate(now.getDate() + 2);
  blackFriday.setHours(23, 59, 59, 0);
  
  const gap = blackFriday - now;
  
  // Calculo dias, horas, minutos, segundos
  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);
  
  // Atualiza a exibição
  document.getElementById('countdown').innerHTML = 
    `${days}D ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
  // Quando a contagem regressiva terminar
  if (gap < 0) {
    document.getElementById('countdown').innerHTML = "OFERTA ENCERRADA";
  }
}

// Inicie a contagem regressiva e atualize a cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// Alternar FAQ com animação
document.querySelectorAll('.faq-item').forEach(item => {
  const content = item.querySelector('p');
  
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Fechar todos os outros itens
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      otherItem.classList.remove('active');
      otherItem.querySelector('p').style.display = 'none';
    });
    
    // Alternar item atual
    if (!isActive) {
      item.classList.add('active');
      content.style.display = 'block';
    }
  });
});

// Adicione funcionalidade de rolagem suave para a seção de planos ao clicar em scroll-button
const scrollButton = document.querySelector('.scroll-button');
const plansSection = document.querySelector('.plans');

scrollButton.addEventListener('click', function() {
  plansSection.scrollIntoView({ behavior: 'smooth' });
});

// Checkout Modal functionality
document.querySelectorAll('.plan-card .cta-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    const planCard = this.closest('.plan-card');
    const planName = planCard.querySelector('h3').textContent;
    const planPrice = planCard.querySelector('.price span').textContent;
    const planDiscount = planCard.querySelector('.discount-badge').textContent;
    const originalPrice = planCard.querySelector('.price s').textContent;
    
    // Atualizações do Checkout Modal
    document.getElementById('planName').textContent = planName;
    document.getElementById('planPrice').textContent = planPrice;
    document.getElementById('planDiscount').textContent = planDiscount;
    document.getElementById('originalPrice').textContent = originalPrice;
    
    document.getElementById('checkoutModal').style.display = 'block';
  });
});

document.querySelector('.modal-close').addEventListener('click', function() {
  document.getElementById('checkoutModal').style.display = 'none';
});

document.querySelectorAll('.payment-method').forEach(method => {
  method.addEventListener('click', function() {
    // Remove a classe ativa de todos os métodos
    document.querySelectorAll('.payment-method').forEach(m => 
      m.classList.remove('active'));
    
    // Adiciona a classe ativa ao metodo clicado
    this.classList.add('active');
    
    // Exibe ou esconde os campos de cartão de crédito
    const creditFields = document.getElementById('creditCardFields');
    creditFields.style.display =    
      this.dataset.method === 'credit' ? 'block' : 'none';
  });
});

// Fechar modal ao clicar fora do modal
window.addEventListener('click', function(e) {
  const modal = document.getElementById('checkoutModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Envio do formulário
document.querySelector('.checkout-form').addEventListener('submit', function(e) {
//   Se preencheu o cpf ele envia o formulário, se não preencheu conforme necessário, não envia
  if (document.getElementById('cpfInput').value === '') {
    alert('Por favor, preencha o campo de CPF.');
    e.preventDefault();
  }

//   se preencheu cpf, fecha o checkoutModal e envia um alerta informando que a compra foi efetuada
  else {
    document.getElementById('checkoutModal').style.display = 'none';
    alert('Compra efetuada com sucesso. Enviaremos um email!');
}
});

// Abrir modal dos termos
function showTerms(planType) {
  const termsModal = document.getElementById('termsModal');
  const termsContent = document.getElementById('termsContent');
  
  // Conteúdo dos termos conforme os planos
  const termsData = {
    mensal: {
      title: 'Termos do Plano Mensal',
      sections: [
        {
          title: 'Período de Contrato',
          content: 'O plano mensal tem duração de 30 dias, sem fidelidade.'
        },
        {
          title: 'Condições de Uso',
          content: 'Acesso ilimitado durante o horário de funcionamento da academia.'
        },
        {
          title: 'Política de Cancelamento',
          content: 'Cancelamento pode ser solicitado a qualquer momento, sem multa.'
        }
      ]
    },
    trimestral: {
      title: 'Termos do Plano Trimestral',
      sections: [
        {
          title: 'Período de Contrato',
          content: 'O plano trimestral tem duração de 90 dias, com renovação automática.'
        },
        {
          title: 'Condições de Uso',
          content: 'Acesso ilimitado durante o horário de funcionamento da academia.'
        },
        {
          title: 'Política de Cancelamento',
          content: 'Cancelamento pode ser solicitado antes do término do período, sem multa.'
        }
      ]
    },
    semestral: {
      title: 'Termos do Plano Semestral',
      sections: [
        {
          title: 'Período de Contrato',
          content: 'O plano semestral tem duração de 180 dias, com renovação automática.'
        },
        {
          title: 'Condições de Uso',
          content: 'Acesso ilimitado durante o horário de funcionamento da academia.'
        },
        {
          title: 'Política de Cancelamento',
          content: 'Cancelamento pode ser solicitado antes do término do período, com multa de 20%.'
        }
      ]
    },
    anual: {
      title: 'Termos do Plano Anual',
      sections: [
        {
          title: 'Período de Contrato',
          content: 'O plano anual tem duração de 365 dias, com renovação automática.'
        },
        {
          title: 'Condições de Uso',
          content: 'Acesso ilimitado durante o horário de funcionamento da academia.'
        },
        {
          title: 'Política de Cancelamento',
          content: 'Cancelamento pode ser solicitado antes do término do período, com multa de 10%.'
        }
      ]
    }
  };

  // Monta o HTML dos termos conforme o plano escolhido
  const plan = termsData[planType];
  let termsHTML = `
    <h3>${plan.title}</h3>
    ${plan.sections.map(section => `
      <div class="terms-section">
        <h4>${section.title}</h4>
        <p>${section.content}</p>
      </div>
    `).join('')}
    <div class="terms-actions">
      <div class="checkbox-group">
        <input type="checkbox" id="termsAccepted">
        <label for="termsAccepted">Li e concordo com os termos e condições</label>
      </div>
      <button class="cta-button" onclick="acceptTerms()" disabled id="acceptTermsBtn">Concordar e Continuar</button>
    </div>
  `;

  termsContent.innerHTML = termsHTML;
  termsModal.style.display = 'block';
  
  // Ativar / desativar botão aceitar com base na caixa de seleção
  document.getElementById('termsAccepted').addEventListener('change', function() {
    document.getElementById('acceptTermsBtn').disabled = !this.checked;
  });
}

function acceptTerms() {
  document.getElementById('termsModal').style.display = 'none';
  document.getElementById('finalizeButton').disabled = false;
}

// Variável para rastrear se o modal já foi exibido
let modalShown = false;

// Seleciona o modal e o botão de continuar
const exitModal = document.getElementById('exitModal');
const continueButton = document.getElementById('continueButton');

// Evento para detectar o cursor saindo da janela
document.addEventListener('mouseout', (event) => {
  if (!modalShown && event.clientY <= 0) {
    // Exibe o modal quando o cursor sai da janela
    exitModal.style.display = 'block';
    modalShown = true;
  }
});

// Evento para o botão de continuar navegando
continueButton.addEventListener('click', () => {
  exitModal.style.display = 'none'; // Esconde o modal
});

// removendo comportamento padrão de todos os links das redes sociais
document.querySelectorAll('.social').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  });
});



