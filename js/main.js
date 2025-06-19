const areaSensoryDescriptors = {
    area1: "A faint, cold woodsmoke lingers from the darkness ahead.",
    area2: "The air grows stale, tinged with a faint earthy decay and a glistening slime.",
    area3: "A leathery, metallic scent and the echo of fluttering wings drift from this direction.",
    area4: "The dry, still air carries a faint scraping, as if bones shift unseen.",
    area5: "The thick, musty smell of old paper and dust wafts from the shadows.",
    area6: "A carrion stench and the wet crunch of gnawing teeth emanate from the gloom.",
    area7: "The scent of old, dry wood and dust floats from the silent darkness.",
    area8: "A pulse of acrid mildew and faintly glowing green light seeps from the cavern mouth.",
    area9: "The charnel reek of ancient death and a low, sub-audible growl echo from the vast dark.",
    area10: "A chill, fishy odor and the sound of slow, unseen ripples drift from the black water.",
    area11: "The warmth of a magical brazier and the smell of unwashed bodies seep from the doorway.",
    area12: "The tang of cold metal and the faint crackle of green flame drift from the smelter.",
    area13: "A faint, electric tang and the illusion of distant starlight shimmer from the passage.",
    area14: "An unnatural chill and the whisper of voices brush against your senses.",
    area15: "The air vibrates with arcane energy and the green flame casts shadowless light.",
    area16: "The deafening boom of surging water and a damp, mineral tang fill the air.",
    area17: "The cool, damp scent of smooth stones and old water lingers in the cramped passage.",
    area18: "The echo of falling water and the scent of wet stone rise from the rift.",
    area19: "A rhythmic booming and the sickly-sweet scent of burning magic pulse from the darkness."
};

const ritualEffects = [
    { name: "Grasping Skeletons", description: "Skeletal arms burst from the ground, grasping at the characters. (DEX save or restrained)", duration: 1 },
    { name: "Whispers of Madness", description: "Echoing whispers inflict psychic damage. (WIS save or take psychic damage)", duration: 1 },
    { name: "Dimensional Instability", description: "Space warps, causing random teleportation. (CHA save or be teleported)", duration: 1 },
    { name: "Necrotic Eruption", description: "A wave of necrotic energy washes over the area. (CON save or take necrotic damage)", duration: 1 },
    { name: "Shadowy Tendrils", description: "Tendrils of shadow attempt to ensnare the characters. (STR save or be grappled)", duration: 1 },
    { name: "Wave of Despair", description: "A wave of hopelessness washes over the characters. (WIS save or become frightened)", duration: 3 }
];

let dungeonState = {
    turn: 1,
    effects: [],
    marchingOrder: Array(15).fill(null),
    characters: [],
    currentArea: null,
    ritualCycle: 0
};

function saveDungeonState() {
    localStorage.setItem('dungeonState', JSON.stringify(dungeonState));
}

function loadDungeonState() {
    const data = localStorage.getItem('dungeonState');
    if (data) {
        dungeonState = JSON.parse(data);
    }
}


function buildSensoryRollTable(areaContent) {
    const exitsSectionMatch = areaContent.match(/<h3[^>]*>Exits<\/h3>\s*<ul[^>]*>([\s\S]*?)<\/ul>/i);
    if (!exitsSectionMatch) return '';
    const exitsList = exitsSectionMatch[1];

    const areaLinkRegex = /<a [^>]*data-area="(area\d+)"[^>]*>(.*?)<\/a>/g;
    let match, links = [];
    while ((match = areaLinkRegex.exec(exitsList)) !== null) {
        links.push({
            areaId: match[1],
            label: match[2].replace(/<[^>]+>/g, '').trim()
        });
    }
    if (links.length === 0) return '';

    let html = `<div class="mt-2">
  <strong>Roll for Uneasy Sensory Clues:</strong>
  <ul class="list-decimal list-inside text-secondary-text mt-1">`;
    links.forEach(link => {
        const desc = areaSensoryDescriptors[link.areaId] || "(no descriptor)";
        html += `<li><strong>${link.label}:</strong> ${desc}</li>`;
    });
    html += `</ul>
  <span class="text-xs text-secondary-text">Roll 1d${links.length} when describing the exits to give players a random, unsettling clue.</span>
</div>`;
    return html;
}

areas.forEach(area => {
    if (!area.content.includes('>Exits<')) return;
    area.content = area.content.replace(
        /(<h3[^>]*>Exits<\/h3>\s*<ul[^>]*>[\s\S]*?<\/ul>)/i,
        (match) => match + buildSensoryRollTable(area.content)
    );
});

function displayArea(areaId) {
    const area = areas.find(a => a.id === areaId);
    if (area) {
        dungeonState.currentArea = areaId;
        saveDungeonState();

        if (window.currentSection) {
            window.currentSection.classList.remove('active');
        }
        const areaContentDisplay = document.getElementById('area-content-display');
        const welcomeMessage = document.getElementById('welcome-message');
        areaContentDisplay.innerHTML = `
      <h2 class="text-3xl font-bold text-primary-text mb-4 border-b-2 border-accent pb-2">${area.name}</h2>
      <img src="images/${area.id.replace('area', '')}.png" alt="${area.name}" class="area-image">
      ${area.content}`;
        areaContentDisplay.classList.add('active');
        welcomeMessage.style.display = 'none';
        window.currentSection = areaContentDisplay;

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.area === areaId) {
                link.classList.add('active');
            }
        });
        document.getElementById('main-content').scrollTop = 0;

        document.querySelectorAll('.area-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                displayArea(link.dataset.area);
            });
        });
    }
}

function initializeUI() {
    const navigation = document.getElementById('navigation');
    areas.forEach(area => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = area.name;
        link.classList.add('block', 'p-2', 'rounded-md', 'hover:bg-secondary-bg', 'nav-link', 'text-primary-text', 'hover:text-accent', 'transition-colors', 'duration-150');
        link.dataset.area = area.id;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            displayArea(area.id);
        });
        listItem.appendChild(link);
        navigation.appendChild(listItem);
    });

    document.querySelectorAll('.area-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            displayArea(link.dataset.area);
        });
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

function initializeTurnTracker() {
    const turnNumberSpan = document.getElementById('turn-number');
    const advanceTurnBtn = document.getElementById('advance-turn');
    const resetTurnsBtn = document.getElementById('reset-turns');
    const encounterCheckBtn = document.getElementById('encounter-check');
    const encounterResultSpan = document.getElementById('encounter-result');
    const effectList = document.getElementById('effect-list');
    const addEffectForm = document.getElementById('add-effect-form');
    const marchingOrderGrid = document.getElementById('marching-order-grid');
    const addCharacterForm = document.getElementById('add-character-form');
    const characterList = document.getElementById('character-list');
    const saveStateBtn = document.getElementById('save-state');
    const loadStateBtn = document.getElementById('load-state');
    const ritualCycleDisplay = document.getElementById('ritual-cycle-display');
    const ritualWarning = document.getElementById('ritual-warning');
    const currentRitualEffect = document.getElementById('current-ritual-effect');
    const triggerRitualEffectBtn = document.getElementById('trigger-ritual-effect');

    function renderTurnTracker() {
        turnNumberSpan.textContent = dungeonState.turn;
        effectList.innerHTML = '';
        dungeonState.effects.forEach((effect, index) => {
            const effectDiv = document.createElement('div');
            effectDiv.className = 'text-sm mb-2 p-2 border rounded border-gray-600';
            let content = `<div class="flex justify-between items-center">
                               <span><strong>${effect.name}</strong> - ${effect.duration} turns left</span>
                               <button data-index="${index}" class="remove-effect-btn text-red-500 hover:text-red-700 ml-2">X</button>
                           </div>`;
            if (effect.description) {
                content += `<div class="text-xs text-gray-400 mt-1">${effect.description}</div>`;
            }
            effectDiv.innerHTML = content;
            effectList.appendChild(effectDiv);
        });

        marchingOrderGrid.innerHTML = '';
        for (let i = 0; i < 15; i++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.dataset.index = i;
            cell.value = dungeonState.marchingOrder[i] || '';
            cell.classList.add('w-full', 'h-8', 'text-center', 'border', 'bg-gray-100', 'dark:bg-gray-700', 'dark:text-white');
            marchingOrderGrid.appendChild(cell);
        }
        characterList.innerHTML = dungeonState.characters.join(', ');
        ritualCycleDisplay.textContent = dungeonState.ritualCycle;
        if (dungeonState.ritualCycle > 0 && dungeonState.ritualCycle % 6 === 0) {
            ritualWarning.textContent = 'A powerful surge of necrotic energy is imminent!';
        } else {
            ritualWarning.textContent = '';
        }
    }

    effectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-effect-btn')) {
            const index = parseInt(e.target.dataset.index);
            dungeonState.effects.splice(index, 1);
            renderTurnTracker();
            saveDungeonState(); // Ensure state is saved after removing an effect
        }
    });

    advanceTurnBtn.addEventListener('click', () => {
        dungeonState.turn++;
        dungeonState.effects = dungeonState.effects.map(e => ({ ...e, duration: e.duration - 1 })).filter(e => e.duration > 0);
        dungeonState.ritualCycle++;
        renderTurnTracker();
        saveDungeonState();
    });

    resetTurnsBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset the turn tracker?')) {
            dungeonState.turn = 1;
            dungeonState.effects = [];
            dungeonState.ritualCycle = 0;
            renderTurnTracker();
            saveDungeonState(); // Ensure state is saved after resetting turns
        }
    });

    encounterCheckBtn.addEventListener('click', () => {
        const roll = Math.floor(Math.random() * 8) + 1;
        encounterResultSpan.textContent = `Rolled ${roll}. ${roll === 1 ? 'Encounter!' : 'No encounter.'}`;
    });

    addEffectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('effect-name');
        const durationInput = document.getElementById('effect-duration');
        const descriptionInput = document.getElementById('effect-description');
        dungeonState.effects.push({ 
            name: nameInput.value, 
            duration: parseInt(durationInput.value),
            description: descriptionInput.value
        });
        nameInput.value = '';
        durationInput.value = '';
        descriptionInput.value = '';
        renderTurnTracker();
        saveDungeonState();
    });

    addCharacterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('character-name');
        if (nameInput.value) {
            dungeonState.characters.push(nameInput.value);
            nameInput.value = '';
            renderTurnTracker();
            saveDungeonState();
        }
    });

    marchingOrderGrid.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT') {
            const index = parseInt(e.target.dataset.index);
            dungeonState.marchingOrder[index] = e.target.value;
            saveDungeonState();
        }
    });

    triggerRitualEffectBtn.addEventListener('click', () => {
        const effect = ritualEffects[Math.floor(Math.random() * ritualEffects.length)];
        dungeonState.effects.push({ name: effect.name, duration: effect.duration, description: effect.description }); // Duration of 3 turns for ritual effects
        currentRitualEffect.innerHTML = `<strong>${effect.name}:</strong> ${effect.description}`;
        renderTurnTracker();
        saveDungeonState();
    });

    saveStateBtn.addEventListener('click', () => {
        saveDungeonState();
        alert('State saved!');
    });

    loadStateBtn.addEventListener('click', () => {
        loadDungeonState();
        renderTurnTracker();
        alert('State loaded!');
    });

    renderTurnTracker();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    initializeTurnTracker();
});