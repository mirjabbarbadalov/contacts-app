import React, { useState, useEffect } from "react";
import Contact from "./Contact";

function ContactsContainer() {
  const [contactsArray, setContactsArray] = useState(null);

  async function getContacts() {
    try {
      const response = await fetch("./src/db/contacts.json");
      const data = await response.json();
      setContactsArray(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-10 min-h-[86vh] w-full bg-[#D0E7D2] px-8 pt-[180px] pb-6">
        {contactsArray &&
          contactsArray.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </div>
    </>
  );
}

export default ContactsContainer;
