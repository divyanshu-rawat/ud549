
function AddressBook(){
	this.contact = [];
};

AddressBook.prototype.add_contact = function(obj){
	this.contact.push(obj);
	console.log(this.contact);
};

AddressBook.prototype.get_contact = function(index){
	return this.contact[index];
};

AddressBook.prototype.delete_contact = function(index){
	this.contact.splice(index,1);
};
