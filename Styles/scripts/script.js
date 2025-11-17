document.addEventListener('DOMContentLoaded', () => {
    const extra = {
        'Elevador Lacerda': 'O elevador Lacerda trata-se do primeiro elevador urbano do mundo. Em 8 de dezembro de 1873, quando a primeira torre foi inaugurada, era o elevador mais alto do mundo, com 63 metros. A estrutura atual, de 1930, tem 72 metros de altura.[1] Faz o transporte de pessoas entre a Praça Cairu, na Cidade Baixa, e a Praça Tomé de Sousa, na Cidade Alta. É um dos principais pontos turísticos e cartão-postal da cidade. Do alto de suas torres, descortina-se a vista para a Baía de Todos-os-Santos, o Mercado Modelo e, ao fundo, o Forte de São Marcelo',
        'Moqueca Baiana': 'Sobre a muqueca importante saber que os tupis originários desta terra produziam um prato chamado pokeka, que em tupi significa “enrolado” e o forno onde cozinhavam se chamava “moquém”. Acrescente aí a tradição dos cozidos portugueses, a fartura de pescados, mariscos e crustáceos e o toque final, os temperos africanos, que acrescentaram a pimenta malagueta, o leite de coco e, principalmente, o azeite de dendê.',
        'Festa de Iemanjá': 'No dia 2 de fevereiro, e começa já de madrugada, na chamada Casa de Iemanjá, no Rio Vermelho. Ali as pessoas depositam todos os presentes que os pescadores levarão para alto mar no final do dia. É um momento de extrema importância e gratidão para o candomblé, e também um momento de festejar! Nessa festa você encontrará muita música, comidas locais, apresentações de capoeira e outros atrativos, em diversas ruas do bairro. Mas, atenção: antecipe-se para conseguir seu lugar na areia para entregar sua oferenda, pois o local fica disputado.'
    };

    // cards: expand/ocultar informação extra
    document.querySelectorAll('.card').forEach(card => {
        const btn = card.querySelector('button');
        const title = card.querySelector('.content h2')?.textContent?.trim() || '';
        btn.setAttribute('aria-expanded', 'false');

        btn.addEventListener('click', () => {
            let info = card.querySelector('.extra-info');
            if (info) {
                // ocultar
                info.remove();
                btn.setAttribute('aria-expanded', 'false');
            } else {
                // criar e mostrar
                info = document.createElement('p');
                info.className = 'extra-info';
                info.textContent = extra[title] || 'Informação adicional não disponível.';
                card.querySelector('.content').appendChild(info);
                btn.setAttribute('aria-expanded', 'true');
                info.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // curiosidades: preenche a caixa fixa (não remove automaticamente)
    const curiosities = [
        'Salvador foi a primeira capital do Brasil colonial.',
        'A Bahia tem mais de 1.000 km de litoral com praias famosas como Morro de São Paulo.',
        'O axé nasceu em Salvador na década de 1980.',
        'A culinária baiana é famosa pelo uso de azeite de dendê e leite de coco.',
        'A Festa de Iemanjá no Rio Vermelho reúne milhares de pessoas todo 2 de fevereiro.'
    ];
    const randomBtn = document.getElementById('btn');
    const curiosityBox = document.querySelector('.curiosity-box');
    if (randomBtn && curiosityBox) {
        randomBtn.addEventListener('click', () => {
            const text = curiosities[Math.floor(Math.random() * curiosities.length)];
            curiosityBox.textContent = text;
            curiosityBox.focus();
        });
    }

    // modal da galeria
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt || '';
            modalCaption.textContent = img.alt || '';
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            modalClose.focus();
        });
    });

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        modalImg.src = '';
        modalCaption.textContent = '';
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
});