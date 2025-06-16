document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get({ ytLinks: [] }, (result) => {
        const linksContainer = document.getElementById('links');

        if (result.ytLinks.length === 0) {
            linksContainer.innerHTML = '<p>No recent links found.</p>';
        } else {
            linksContainer.innerHTML = '';
            result.ytLinks.forEach((linkObj) => {
                const linkElement = document.createElement('a');
                linkElement.href = linkObj.url;
                linkElement.target = '_blank';
                linkElement.textContent = `${linkObj.url} (Clicked at: ${linkObj.time})`;

                linksContainer.appendChild(linkElement);
            });
        }
    });
});
