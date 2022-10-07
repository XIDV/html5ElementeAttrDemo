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

    // eventListener f. D&D-Demonstration *************************************
    // f. das dragObjekt
    const dragObject = document.querySelector('#dragableImg');
    dragObject.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.id);   
    });

    // dragObject.addEventListener('drag', e => {
    //     console.log('Draging hard as fuck!!!');
    // });

    // dragObject.addEventListener('dragend', e => {
    //     console.log('No more draging here.');
    // });
    
    // f. die ddContainer
    const ddContainers = document.querySelectorAll('.ddContainer');
    ddContainers.forEach((container) => {        
        container.addEventListener('dragenter', e => {
            if(dragObject.parentElement != e.target.parentElement) {
                dragObject.style.opacity="50%";
            }
        });
        
        container.addEventListener('dragleave', e => {
            dragObject.style.opacity="100%";
        });

        container.addEventListener('dragover', e => {
            e.preventDefault();
        });

        container.addEventListener('drop', e => {
            e.preventDefault();
            const dragObjectID = e.dataTransfer.getData('text');
            if(e.target.id != dragObjectID) {
                e.target.appendChild(document.getElementById(dragObjectID));
                dragObject.style.opacity="100%";
            }
        });
    });
    

});



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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