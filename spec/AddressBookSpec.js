
describe('Address Book',function() {

	var addressBook,thisContact;

	beforeEach(function () {
		addressBook = new AddressBook();
		thisContact = new Contact();
	})

	it('Should be able to add Contact',function() {
		
		addressBook.add_contact(thisContact);
		expect(addressBook.get_contact(0)).toBe(thisContact);
	});

	it('Should be able to delete a Contact',function () {
		        
        addressBook.add_contact(thisContact);
        addressBook.delete_contact(0);
        expect(addressBook.get_contact(0)).not.toBeDefined();
	})
});
