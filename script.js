// *Tabs 

function openTabs(evt, tabName) {
    document.querySelectorAll('.tabcontent').forEach(tab => {
        tab.style.display = "none";
    });

    document.querySelectorAll('.tablinks').forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');
}


document.getElementById("defaultOpen").click();



// *Cards Functionality 

const payOriginal = document.querySelector('.pay-original');
const payModified = document.querySelector('.pay-modified');

const receiveOriginal = document.querySelector('.receive-original');
const receiveModified = document.querySelector('.receive-modified');

const approveOriginal = document.querySelector('.approve-original');
const approveModified = document.querySelector('.approve-modified');


let isPayModified = false;


function toggleContent(isModified) {
    if (isModified) {
        toggleCardDisplay(payOriginal, payModified);
        toggleCardDisplay(receiveOriginal, receiveModified);
        toggleCardDisplay(approveOriginal, approveModified);
    } else {
        toggleCardDisplay(payModified, payOriginal);
        toggleCardDisplay(receiveModified, receiveOriginal);
        toggleCardDisplay(approveModified, approveOriginal);
    }
}


function toggleCardDisplay(hideElement, showElement) {
    hideElement.classList.add('hidden');
    showElement.classList.remove('hidden');
}

document.getElementById('pay-card').addEventListener('click', function() {
    if (!isPayModified) {
        toggleContent(true);
        isPayModified = true;
    }
});


document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'pay-button') {
        toggleContent(false);
        isPayModified = false;
    }
});


// *Mobile Tabs 


function txnAccount(evt, txnAccount) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    
    for (i = 0; i < tabcontent1.length; i++) {
        tabcontent1[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
        tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }

    document.getElementById(txnAccount).style.display = "block";
    
    evt.currentTarget.className += " active";

    const transactionsButton = document.getElementById("activeTab");
    if (txnAccount === 'Account-Mobile') {
        transactionsButton.innerHTML = '<i class="fa-solid fa-angle-left"></i> Pay'; 
    } else {
        transactionsButton.innerHTML = '<img src="images/arrows.svg" alt="Img"> Transactions'; // Reset to original when Transactions tab is active
    }
}


document.getElementById("activeTab").click();