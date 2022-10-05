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

    document.querySelectorAll('.upgradeSelector').forEach(selector => {
        selector.addEventListener('change', e => {
            if(e.target.checked) {
                printTotalPrice(e.target.dataset['klass'], e.target.dataset['pricefactor']);
            }
        });
    });
    
});


function printTotalPrice(klass, factor) {
    console.log(klass , factor);
    const totalPriceOutput = document.querySelector('#totalPriceOutput');
    const basePriceInput = document.querySelector('#basePriceInput');
    
    if(totalPriceOutput.textContent != '') {
        totalPriceOutput.textContent = '';
    }

    if(basePriceInput.value != '') {
        totalPriceOutput.textContent = `Sie haben ${klass} ausgewählt. Gesamtsumme beträgt ${parseFloat(factor) * parseFloat(basePriceInput.value)}.`

    } else {
        totalPriceOutput.textContent = 'Bitte geben Sie einen Basispreis ein!';
    }
}