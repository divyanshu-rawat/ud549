
function AddressBook(){
	this.contact = [];
	this.async_loading = false;
};

AddressBook.prototype.add_contact = function(obj){
	this.contact.push(obj);
	console.log(this.contact);
};

AddressBook.prototype.intial_contacts = function(){
	setTimeout(function () {
		this.async_loading = true;
	},3000);
};

AddressBook.prototype.get_contact = function(index){
	return this.contact[index];
};

AddressBook.prototype.delete_contact = function(index){
	this.contact.splice(index,1);
};
