document.addEventListener('DOMContentLoaded', function() {
    const loadPHPProject = async () => {
        const container = document.getElementById('php-container');
        
        // Liste des mises à jour/sections du projet PHP
        const phpUpdates = [
            {
                title: "Gestion de commandes",
                status: "En cours",
                lastUpdate: "Janvier 2025",
                description: "ajout de la page login",
                features: [
                    "WIP",
                ],
                tags: ["PHP", "MySQL"],
                demo: "/content/php/commandes/index.html",
                github: "#"
            },
            // {
            //     title: "Version 1.1 - Gestion des utilisateurs",
            //     status: "En cours",
            //     lastUpdate: "Avril 2024",
            //     description: "Ajout des fonctionnalités de gestion des utilisateurs",
            //     features: [
            //         "CRUD des utilisateurs",
            //         "Système de rôles et permissions",
            //         "Interface d'administration"
            //     ],
            //     tags: ["PHP", "MySQL", "Bootstrap"],
            //     demo: "#",
            //     github: "#"
            // },
            // Ajoutez d'autres versions/mises à jour ici
        ];

        // Création des sections
        const createProjectSection = (update) => {
            return `
                <div class="project-section">
                    <h2>${update.title}</h2>
                    <div class="project-info">
                        <div class="status">
                            <strong>Statut:</strong> ${update.status}
                        </div>
                        <div class="date">
                            <strong>Dernière mise à jour:</strong> ${update.lastUpdate}
                        </div>
                    </div>
                    <div class="project-description">
                        ${update.description}
                    </div>
                    <div class="features">
                        <h3>Fonctionnalités</h3>
                        <ul>
                            ${update.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="tags">
                        ${update.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="links">
                        <a href="${update.demo}" target="_blank">Voir la démo</a>
                        <a href="${update.github}" target="_blank">Code source</a>
                    </div>
                </div>
            `;
        };

        // Affichage des sections dans l'ordre chronologique inverse
        container.innerHTML = phpUpdates.reverse().map(update => createProjectSection(update)).join('');
    };

    loadPHPProject();
}); 