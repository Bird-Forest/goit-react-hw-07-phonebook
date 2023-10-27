import {
  Form,
  MarkField,
  ContactName,
  ContactNumber,
  BtnAdd,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addContact({
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
        avatar: '../../image/avatar.png',
      })
    );
    event.target.reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <MarkField>Name</MarkField>
        <ContactName type="text" name="name" required />
        <MarkField>Number</MarkField>
        <ContactNumber type="tel" name="phone" required />
        <BtnAdd type="submit">Add contact</BtnAdd>
      </Form>
    </div>
  );
}
