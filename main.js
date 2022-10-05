document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');

    // eventListener f. demoDialogClose
    document.querySelector('#demoDialogClose').addEventListener('click', e => {
        document.querySelector('#demoDialog').close();
    });


    const demoDialogModal = document.querySelector('#demoModalDialog');

    // eventListener f. openModalDialog
    document.querySelector('#openModalDialog').addEventListener('click', e => {
        demoDialogModal.showModal();
    });

    // eventListener f. demoDialogCloseModal
    document.querySelector('#demoDialogCloseModal').addEventListener('click', e => {
        if(document.querySelector('#wantRealyClose').checked) {
            demoDialogModal.close();
        }
    });
});