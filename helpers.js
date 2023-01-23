export class HTML {

    /**
     * Creates and adds list item to provided list
     * @param {Object} person - Person Object containing fetched data
     * @param {HTMLUListElement} list - List to append list item to
     */
    static addPersonListItem(person, list) {
        let newLi = document.createElement("li");
        this.createAndAppendListItemLabel(person.name, newLi);
        this.createAndAppendListItemButton("Show Dog Info", newLi, { dogId: person.dogId }); 
        list.append(newLi);
    }

    /**
     * Creates and appends person list item label and sets class name
     * @param {String} name - Text for list item label (Person name)
     * @param {HTMLLIElement} li - List item to append label to
     */
    static createAndAppendListItemLabel(name, li) {
        let liLabel = document.createElement("h4");
        liLabel.innerText = name;
        liLabel.setAttribute('class', 'person-li');
        li.append(liLabel);
    }

    /**
     * Creates and appends button to list item and sets class name
     * @param {String} text - Button text
     * @param {HTMLLIElement} li - List item to append button to
     * @param {Object} dataset - Optional dataset object containing entity ID's
     */
    static createAndAppendListItemButton(text, li, dataset = null) {
        let newBtn = document.createElement("button");
        newBtn.innerText = text;
        newBtn.setAttribute("class", "dog-info-btn");
        if (dataset) {
            let key = Object.keys(dataset)[0];
            newBtn.setAttribute(`data-${key}`, dataset[key]);
        }
        li.append(newBtn);        
    }

    static renderDogInfo(dog, div) {
        this.createAndAppendHeader(dog, div);
        this.createAndAppendDogStatsList(dog, div);
    }

    static createAndAppendHeader(dog, element) {
        let header = document.createElement("h2");
        header.setAttribute("id", "dog-header")
        header.innerText = dog.name;
        element.append(header);
    }

    static createAndAppendDogStatsList(dog, element) {
        let list = document.createElement("ul");
        list.setAttribute("id", "dog-stats-list")
        element.append(list);
        ["Breed", "Age"].forEach( attr => this.createAndAppendDogAttributeListItem(attr, dog, list));
    }

    static createAndAppendDogAttributeListItem(attr, dog, list) {
        let li = document.createElement("li");
        li.innerText = `${attr} - ${dog[attr.toLowerCase()]}`;
        list.append(li);
    }
}