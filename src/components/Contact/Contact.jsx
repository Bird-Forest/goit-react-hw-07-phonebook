import React from 'react';
import {
  BtnDelete,
  ContactAvatar,
  ContactName,
  ContactNumber,
  ContactWrap,
} from './Contact.styled';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { nanoid } from '@reduxjs/toolkit';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactWrap id={contact.id} key={nanoid()}>
      <ContactAvatar src={contact.avatar} alt="avatar" />
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.phone}</ContactNumber>
      <BtnDelete type="button" onClick={handleDelete}>
        <HiOutlineTrash className="icon" />
      </BtnDelete>
    </ContactWrap>
  );
}
