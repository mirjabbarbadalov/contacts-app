import { useState } from "react";
import ContactsContainer from "./Components/ContactsContainer";
import Header from "./Components/Header";
import FormModal from "./Components/FormModal";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header modal={modal} setModal={setModal} />
      <ContactsContainer />
      <FormModal modal={modal} setModal={setModal} />
    </div>
  );
}
