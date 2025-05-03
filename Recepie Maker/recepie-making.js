class foodStall {
  constructor(recepie) {
    this.recepie = recepie;
  }

  getRecepie(role, targetItem) {
    if(role === 'user' || role === 'admin') {
      let res = this.recepie.filter((val) => val.item === targetItem);
      return res.length === 0 ? 'No such item in the database' : res.map((val) => val.ingre);
    }
  }

  insertRecepie(role, newID, obj) {
    if(role === 'admin') {
      for (let i of this.recepie) {
        if (i.id === newID) { 
          return 'Recepie already exists in the DB';
        }
      }
  
      this.recepie.push({ id: newID, ...obj }); 
      return `Recepie added successfully`;
    } else {
      return 'You dont have access to modify the DB';
    }
  }

  getAll(role) {
    if(role === 'admin' || role === 'user') {
      return this.recepie;
    }
  }

  deleteRecepie(role, name) {
    if (role === 'admin') {
      const index = this.recepie.findIndex((val) => val.item === name);
      if (index !== -1) {
        this.recepie = [
          ...this.recepie.slice(0, index),
          ...this.recepie.slice(index + 1)
        ];
        return `Recepie with name ${name} deleted successfully.`;
      } else {
        return `No recepie found with name ${name}.`;
      }
    } else {
      return 'You do not have access to delete recepies.';
    }
  }

  updateRecepie(role, name, newObj) {
    if (role === 'admin') {
      const index = this.recepie.findIndex((val) => val.item === name);
      if (index !== -1) {
        this.recepie[index] = { ...this.recepie[index], ...newObj };
        return `Recepie with name ${name} updated successfully.`;
      } else {
        return `No recepie found with name ${name}.`;
      }
    } else {
      return 'You do not have access to update recepies.';
    }
  }
}

const recepie = [
  { 
    item: 'samosa',
    ingre: '1 cup Maida, 100g Boiled potato, spices, 1 cup water, oil 200ml'
  }, 
  {
    item: 'tea',
    ingre: '1 cup milk, 1tbsp tea leaves, 1tsp sugar'
  },
  {
    item: 'poha',
    ingre: '50g Poha, 1/2 onion, spices, 2tbsp oil, chillis, curry leaves'
  }, 
  {
    item: 'roti',
    ingre: 'wheat flour, water'
  }, 
  {
    item: 'roti',
    ingre: 'wheat flour, water, masala'
  }
];

const fs = new foodStall(recepie);
const newRecepie = { item: 'coffee', ingre: '1 cup milk, 1tbsp coffee powder, 1tsp sugar' };


console.log(fs.insertRecepie('admin', 5, newRecepie)); 
console.log(fs.insertRecepie('admin', 2, newRecepie));
console.log(fs.getRecepie('user', 'chai')); 
console.log(fs.getRecepie('user', 'tea')); 

console.log(fs.getAll('user'));
console.log(fs.deleteRecepie('admin', 'tea'));
console.log(fs.deleteRecepie('user', 'tea'));
console.log(fs.getAll('admin'));

const updatedRecepie = {item: 'coffee', ingre: '1 cup milk, 1tbsp coffee powder, 2tsp sugar'}
console.log(fs.updateRecepie('admin','coffee', updatedRecepie));

//crud : create, read, update, delete
//[recepes ..
//]
//function to delete, update, read and getAll recepies
