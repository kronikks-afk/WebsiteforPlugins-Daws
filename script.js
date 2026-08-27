const searchInput = document.getElementById('searchInput');

if (searchInput) {
    const pluginGrid = document.getElementById('pluginGrid');
    const pluginCards = pluginGrid.getElementsByClassName('plugin-card');
    const noResultsMsg = document.getElementById('noResults');

    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        for (let i = 0; i < pluginCards.length; i++) {
            const card = pluginCards[i];
            const name = card.getAttribute('data-name');
            const category = card.getAttribute('data-category');
            const description = card.querySelector('p').textContent.toLowerCase();
            const title = card.querySelector('h3').textContent.toLowerCase();

            if (name.includes(query) || category.includes(query) || title.includes(query) || description.includes(query)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        }

        if (visibleCount === 0) {
            noResultsMsg.classList.remove('hidden');
        } else {
            noResultsMsg.classList.add('hidden');
        }
    });
}
