var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var itemInput = document.getElementById('item');
const itemSuggestions = document.getElementById('itemSuggestions');
var j = 0;



//Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e) {
    if (document.getElementById('item').value != "") {
        e.preventDefault();

        // Get input value
        var newItem = document.getElementById('item').value;
        localStorage.setItem(newItem, newItem);
        // Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        // Create delete button element
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn-x';
        deleteButton.innerText = 'X';

        li.appendChild(deleteButton);
        itemList.appendChild(li);

        // Clear 
        document.getElementById('item').value = '';
    }
}

function loadItems() {

    for (let i = 0; i < Object.keys(localStorage).length; i++) {

        var keys = Object.keys(localStorage);
        // Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add text node with input value
        li.appendChild(document.createTextNode(localStorage.getItem(keys[i])));

        // Create delete button element
        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn-x';
        deleteButton.innerText = 'X';

        li.appendChild(deleteButton);
        itemList.appendChild(li);

        // Clear 
        document.getElementById('item').value = '';
    }
}

loadItems();




// Remove Items
function removeItem(e) {
    if (e.target.classList.contains('btn-x')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            for (let i = 0; i < Object.keys(localStorage).length; i++) {
                var keys = Object.keys(localStorage);
                if (li.innerText == `${keys[i]}X`) {
                    localStorage.removeItem(keys[i]);
                }
            }
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else { item.style.display = 'none'; }
    });


}

// Suggestions
function addSuggestions(e) {

    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(item => {
        var itemName = item.firstChild.textContent;

        if (text.length > 2 && itemName.toLowerCase().indexOf(text) != -1) {
            if (!itemSuggestions.innerText.includes(itemName)) {
                var li = document.createElement('li');
                li.setAttribute('tabIndex', '-1');
                li.classList.add('suggestedItem');
                li.addEventListener('keydown', focusSuggestion);
                li.appendChild(document.createTextNode(itemName));
                itemSuggestions.appendChild(li);
            }
        }

    })

}
function deleteSuggestion(e) {
    if (e.keyCode === 8 && itemSuggestions.children.length > 0) {
        for (let i = 0; i < itemSuggestions.children.length; i++) {
            if (!itemSuggestions.children[i].textContent.includes(e.innerText)) {
                itemSuggestions.removeChild(itemSuggestions.children[i]);
            }
        }
    }
}

// Move through suggested items with arrow keys
function focusSuggestion(e) {
    if (itemSuggestions.children.length > 0) {
        switch (e.keyCode) {
            case 40:
                if (e.target.nextElementSibling != null) {
                    e.target.nextElementSibling.focus();
                } else if (e.target.nextElementSibling == null) {
                    e.target.parentElement.firstChild.focus();
                }
                break;
            case 38:
                if (e.target.previousElementSibling != null
                    && e.target.previousElementSibling != undefined
                    && e.target.previousElementSibling.classList.contains('suggestedItem')) {
                    e.target.previousElementSibling.focus();

                } else {
                    e.target.parentElement.lastElementChild.focus();
                };
                break;
            case 13:
                item.value = e.target.textContent;
                break;
            case 27:
                e.target.parentElement.innerHTML = '';
        }
    }
}

function focusSuggestionFilter(e) {
    if (itemSuggestions.children.length > 0) {
        switch (e.keyCode) {
            case 40:
                e.target.nextElementSibling.firstChild.focus();
                break;
            case 38:
                e.target.nextElementSibling.lastChild.focus();
                break;
        }
    }
}

filter.addEventListener('input', addSuggestions);
filter.addEventListener('keydown', deleteSuggestion);
filter.addEventListener('keydown', focusSuggestionFilter);


