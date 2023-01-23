export class Api {
    
    static async getAllPeople() {
        let res = await fetch("db.json");
        let data = await res.json();
        return data.people;
    }

    static async getDogById(id) {
        let res = await fetch("db.json");
        let data = await res.json();
        return data.dogs.find(d => d.id === id);
    }
}
