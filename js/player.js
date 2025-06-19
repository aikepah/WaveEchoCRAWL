document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const imageNav = document.getElementById('image-nav');
    const effectList = document.getElementById('player-effect-list');
    const marchingOrderGrid = document.getElementById('player-marching-order-grid');

    const sceneImages = {
        'area1': ['a1.png', 'a1.webp', 'a1a.png', 'a1b.png', 'a1c.png'],
        'area2': ['a2.png', 'a2.webp', 'a2a.png'],
        'area3': ['a3.png', 'a3.webp', 'a3a.png'],
        'area4': ['a4.png', 'a4a.png', 'a4b.png'],
        'area5': ['a5.png', 'a5a.png'],
        'area6': ['a6.png'],
        'area8': ['a8.png'],
        'area9': ['a9.png'],
        'area10': ['a10.png'],
        'area11': ['a11.png'],
        'area12': ['a12.png'],
        'area13': ['a13.png'],
        'area14': ['a14.png'],
        'area15': ['a15.png'],
        'area16': ['a16.png'],
        'area18': ['a18.png'],
        'area19': ['a19.png'],
    };

    let currentImageIndex = 0;
    let currentAreaImages = [];

    function renderImage() {
        if (currentAreaImages.length > 0) {
            imageContainer.innerHTML = `<img src="images/${currentAreaImages[currentImageIndex]}" alt="Scene Image" class="mx-auto">`;
        } else {
            imageContainer.innerHTML = '<p class="text-center">No scene image available for this area.</p>';
        }
        renderNav();
    }

    function renderNav() {
        imageNav.innerHTML = '';
        if (currentAreaImages.length > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.className = 'bg-interactive text-interactive-fg px-4 py-2 rounded hover:bg-accent mx-2';
            prevButton.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex - 1 + currentAreaImages.length) % currentAreaImages.length;
                renderImage();
            });

            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.className = 'bg-interactive text-interactive-fg px-4 py-2 rounded hover:bg-accent mx-2';
            nextButton.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex + 1) % currentAreaImages.length;
                renderImage();
            });

            imageNav.appendChild(prevButton);
            imageNav.appendChild(nextButton);
        }
    }

    function renderEffects(effects) {
        effectList.innerHTML = '';
        if (effects && effects.length > 0) {
            const ul = document.createElement('ul');
            ul.className = 'list-disc list-inside space-y-2';
            effects.forEach(effect => {
                const li = document.createElement('li');
                let content = `<strong>${effect.name}</strong> (${effect.duration} turns remaining)`;
                if (effect.description) {
                    content += `<br><span class="text-xs">${effect.description}</span>`;
                }
                li.innerHTML = content;
                ul.appendChild(li);
            });
            effectList.appendChild(ul);
        } else {
            effectList.innerHTML = '<p>No active effects.</p>';
        }
    }

    function renderMarchingOrder(order) {
        marchingOrderGrid.innerHTML = '';
        if (order && order.length > 0) {
            order.forEach(character => {
                const cell = document.createElement('div');
                cell.className = 'p-2 border rounded text-center bg-primary-bg';
                cell.textContent = character || '';
                marchingOrderGrid.appendChild(cell);
            });
        }
    }

    function updatePlayerView() {
        const stateData = localStorage.getItem('dungeonState');
        if (stateData) {
            const dungeonState = JSON.parse(stateData);
            if (dungeonState.currentArea) {
                currentAreaImages = sceneImages[dungeonState.currentArea] || [];
                currentImageIndex = 0;
                renderImage();
            }
            renderEffects(dungeonState.effects);
            renderMarchingOrder(dungeonState.marchingOrder);
        }
    }

    window.addEventListener('storage', (event) => {
        if (event.key === 'dungeonState') {
            updatePlayerView();
        }
    });

    // Initial load
    updatePlayerView();
});
