
describe('Address Book',function() {
	it('Should be able to add Contact',function() {
		var addressBook = new AddressBook();
		var thisContact = new Contact();
		addressBook.add_contact(thisContact);
		expect(addressBook.get_contact(0)).toBe(thisContact);
	});
});
