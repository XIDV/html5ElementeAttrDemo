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

    // eventListener f. d. Verarbeitung der Eingaben in demoDefineAttr und der data-Attribute
    const basePriceInput = document.querySelector('#basePriceInput');
    const upgradeSelectors = document.querySelectorAll('.upgradeSelector');
    basePriceInput.addEventListener('change', e => {
        upgradeSelectors.forEach(selector => {
            if(selector.checked) {
                printTotalPrice(selector.dataset['klass'], selector.dataset['pricefactor']);
            }
        });
    });
    
    upgradeSelectors.forEach(upgradeSelector => {
        upgradeSelector.addEventListener('change', e => {
            if(upgradeSelector.checked) {  
                printTotalPrice(upgradeSelector.dataset['klass'], upgradeSelector.dataset['pricefactor']);
            }
        });
    });
});

function printTotalPrice(klass, factor) {
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