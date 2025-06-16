function trackDescriptionLinks() {
    document.addEventListener('click', function (e) {
        let clickedElement = e.target.closest('a');

        if (clickedElement) {
            let descriptionSection = document.querySelector('ytd-video-secondary-info-renderer');

            if (descriptionSection && descriptionSection.contains(clickedElement)) {
                e.preventDefault();

                let clickedLink = clickedElement.href;

                chrome.storage.local.get({ ytLinks: [] }, function (result) {
                    let updatedLinks = result.ytLinks;
                    updatedLinks.unshift({
                        url: clickedLink,
                        time: new Date().toLocaleString()
                    });
                    updatedLinks = updatedLinks.slice(0, 10); 
                    chrome.storage.local.set({ ytLinks: updatedLinks }, function () {
                        console.log('Link saved:', clickedLink);
                        window.open(clickedLink, '_blank');
                    });
                });
            }
        }
    });
}


const observer = new MutationObserver(() => {
    if (document.querySelector('ytd-video-secondary-info-renderer')) {
        trackDescriptionLinks();
    }
});


observer.observe(document.body, { childList: true, subtree: true });
