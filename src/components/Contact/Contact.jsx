import React from 'react';
import {
  BtnDelete,
  ContactAvatar,
  ContactName,
  ContactNumber,
} from './Contact.styled';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <>
      <ContactAvatar src={contact.avatar} alt="avatar" />
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.phone}</ContactNumber>
      <BtnDelete
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <HiOutlineTrash className="icon" />
      </BtnDelete>
    </>
  );
}
