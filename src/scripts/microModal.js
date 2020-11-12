import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init({
        disableScroll: true,
        disableFocus: true,
        openTrigger: 'data-micromodal-trigger',
        closeTrigger: 'data-micromodal-close',
        awaitCloseAnimation: true
    });
});




