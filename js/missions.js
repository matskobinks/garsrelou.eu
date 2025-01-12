document.addEventListener('DOMContentLoaded', function() {
    const loadMissions = async () => {
        const container = document.getElementById('missions-container');
        
        // Liste de vos missions
        const missions = [
            {
                title: "Mission 1 - Création d'une API",
                date: "Avril 2024",
                description: "Développement d'une API REST pour la gestion des utilisateurs",
                tags: ["Node.js", "Express", "MongoDB"],
                link: "#",
                github: "https://github.com/votre-compte/mission-api"
            },
            {
                title: "Mission 2 - Interface d'administration",
                date: "Mai 2024",
                description: "Création d'un dashboard administrateur pour gérer le contenu du site",
                tags: ["React", "Redux", "Bootstrap"],
                link: "#",
                github: "https://github.com/votre-compte/mission-admin"
            },
            // Ajoutez autant de missions que vous voulez
        ];

        const createMissionCard = (mission) => {
            return `
                <div class="work-card">
                    <h2>${mission.title}</h2>
                    <div class="date">${mission.date}</div>
                    <div class="description">${mission.description}</div>
                    <div class="tags">
                        ${mission.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="links">
                        <a href="${mission.link}" target="_blank">Voir la mission</a>
                        ${mission.github ? `<a href="${mission.github}" target="_blank">GitHub</a>` : ''}
                    </div>
                </div>
            `;
        };

        container.innerHTML = missions.map(mission => createMissionCard(mission)).join('');
    };

    loadMissions();
}); 