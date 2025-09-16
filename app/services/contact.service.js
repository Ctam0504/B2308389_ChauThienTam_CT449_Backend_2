const { ObjectId, ReturnDocument } = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact =client.db().collection("contacts");
    }
    extractConactData(payload) {
        const contact = {
            name : payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phonhe,
            favourite: payload.favourite,
        };
        Object.keys(contact).forEach(
            (key) => contact[key] === underfine && deletecontact[key]
        );
        return contact;
    }
    async create(payload) {
        const contact = this.extractConactData(payload);
        const result = await this.Contact.findOneAndUpdate(
            contact,
            {
                 $set: { favourite: contact.favourite === true}
            },
            {
                returnDocument: "after", upsert: true
            }
        );
        return result;
    }
}
module.exports = ContactService;