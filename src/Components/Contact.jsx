import React, { useState } from "react";

function Contact({ contact }) {
  const [isEdit, setIsEdit] = useState(false);
  const [fristName, setFirstName] = useState(contact.first_name);
  const [lastName, setlastName] = useState(contact.last_name);
  const [username, setUsername] = useState(contact.username);
  const [gmail, setGmail] = useState(contact.gmail);
  const [telephone, setTelephone] = useState(contact.telephone_number);

  // console.log(firstName);

  function handleSubmit(e) {
    e.preventDefault();
    if (isEdit) {
      console.log("submitted");
      setIsEdit(false);
      console.log(fristName, lastName, username);
    }
  }

  return (
    <div className="w-[400px] bg-[#176B87] text-[#EEEEEE] py-3 px-6 text-xl rounded-xl shadow-2xl">
      {!isEdit && (
        <>
          <ul className="flex flex-col gap-3 ">
            <li className="text-2xl font-bold text-[#eca72c]">Contact Info:</li>
            <li className="flex align-middle">
              <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                First Name:
              </span>
              {contact.first_name}
            </li>
            <li className="flex align-middle">
              <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                Last Name:
              </span>{" "}
              {contact.last_name}
            </li>
            <li className="flex align-middle">
              <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                Username:
              </span>{" "}
              {contact.username}
            </li>
            <li className="flex align-middle">
              <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                Email:
              </span>{" "}
              {contact.gmail}
            </li>
            <li className="flex align-middle">
              <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                Phone:
              </span>{" "}
              {contact.telephone_number}
            </li>
          </ul>
          <div className="flex align-middle justify-between py-3 px-5 mt-4">
            <button
              onClick={() => setIsEdit(true)}
              className="bg-[#6a994e] w-[100px] rounded-md py-2 px-4 hover:bg-[#56823c] font-bold text-[#EEEEEE]"
            >
              {!isEdit ? "Edit" : "Save"}
            </button>
            <button
              onClick={() => {
                console.log(contact.id);
              }}
              className={`bg-[#ff3333] w-[100px] rounded-md py-2 px-4 hover:bg-[#f90000] font-bold text-[#EEEEEE] ${
                isEdit
                  ? "disabled:pointer-events-none opacity-50 cursor-not-allowed"
                  : ""
              }  `}
            >
              Delete
            </button>
          </div>
        </>
      )}

      {isEdit && (
        <>
          <form action="" onSubmit={handleSubmit}>
            <ul className="flex flex-col gap-3 ">
              <li className="text-2xl font-bold text-[#eca72c]">
                Contact Info:
              </li>
              <li className="flex align-middle">
                <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                  First Name:
                </span>
                <input
                  value={fristName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-[220px] outline-none text-black  px-3"
                  type="text"
                  placeholder="first name"
                  required
                />
              </li>
              <li className="flex align-middle">
                <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                  Last Name:
                </span>{" "}
                <input
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  className="w-[220px] outline-none text-black  px-3"
                  type="text"
                  placeholder="last name"
                  required
                />
              </li>
              <li className="flex align-middle">
                <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                  Username:
                </span>{" "}
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-[220px] outline-none text-black  px-3"
                  type="text"
                  placeholder="username"
                  required
                />
              </li>
              <li className="flex align-middle">
                <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                  Email:
                </span>{" "}
                <input
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  className="w-[220px] outline-none text-black  px-3"
                  type="email"
                  placeholder="email"
                  required
                />
              </li>
              <li className="flex align-middle">
                <span className="text-[rgb(246,207,13)] font-semibold mr-2">
                  Phone:
                </span>{" "}
                <input
                  value={telephone}
                  onChange={(e) => {
                    setTelephone(e.target.value);
                  }}
                  className="w-[200px] outline-none text-black  px-3"
                  type="text"
                  placeholder="phone"
                  required
                />
              </li>
            </ul>
            <div className="flex align-middle justify-between py-3 px-5 mt-4">
              <input
                value="Save"
                type="submit"
                className="bg-[#6a994e] w-[100px] rounded-md py-2 px-4 hover:bg-[#56823c] font-bold text-[#EEEEEE] cursor-pointer "
              />

              <button
                className={`bg-[#ff3333] w-[100px] rounded-md py-2 px-4 hover:bg-[#f90000] font-bold text-[#EEEEEE] ${
                  isEdit
                    ? "disabled:pointer-events-none opacity-50 cursor-not-allowed"
                    : ""
                }  `}
              >
                Delete
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Contact;
