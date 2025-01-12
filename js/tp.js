document.addEventListener('DOMContentLoaded', function() {
    // Cette fonction chargera et affichera les TPs
    const loadTPs = async () => {
        const container = document.getElementById('tp-container');
        
        // Liste de vos TPs
        const tps = [
            {
                title: "TP1 - Site Portfolio",
                date: "Mars 2024",
                description: "Création d'un site portfolio responsive avec HTML, CSS et JavaScript",
                tags: ["HTML", "CSS", "JavaScript"],
                link: "#",
                github: "https://github.com/votre-compte/tp-portfolio"
            },
            {
                title: "TP2 - Base de données",
                date: "Mars 2024",
                description: "Création et gestion d'une base de données MySQL",
                tags: ["SQL", "MySQL", "PHP"],
                link: "#",
                github: "https://github.com/votre-compte/tp-bdd"
            },
            // Ajoutez autant de TPs que vous voulez en suivant ce modèle
        ];

        // Création des cards
        const createTPCard = (tp) => {
            return `
                <div class="work-card">
                    <h2>${tp.title}</h2>
                    <div class="date">${tp.date}</div>
                    <div class="description">${tp.description}</div>
                    <div class="tags">
                        ${tp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="links">
                        <a href="${tp.link}" target="_blank">Voir le projet</a>
                        ${tp.github ? `<a href="${tp.github}" target="_blank">GitHub</a>` : ''}
                    </div>
                </div>
            `;
        };

        // Affichage des cards
        container.innerHTML = tps.map(tp => createTPCard(tp)).join('');
    };

    loadTPs();
}); 