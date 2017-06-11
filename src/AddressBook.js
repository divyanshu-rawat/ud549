
function AddressBook(){
	this.contact = [];
};

AddressBook.prototype.add_contact = function(obj){
	this.contact.push(obj);
};

AddressBook.prototype.get_contact = function(index){
	return this.contact[index];
};
