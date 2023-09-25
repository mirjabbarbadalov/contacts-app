function Header({ setModal, modal }) {
  return (
    <div className=" flex-col fixed w-full bg-[#053B50] text-[#EEEEEE] flex align-middle justify-center text-[40px] font-bold py-5 tracking-wide  ">
      <h1 className="mx-auto">My Contacts</h1>
      <button
        onClick={() => {
          setModal(!modal);
        }}
        className="text-xl bg-[#176B87] w-fit mx-auto px-6 py-3 rounded-md mt-3"
      >
        {modal ? "Close" : "Add New Contact"}
      </button>
    </div>
  );
}

export default Header;
