import { FormContact, FormInput, FormLabel } from './FormContact.styled'

const Form = () => {
  return (
    <>
      <FormContact>
        <FormLabel htmlFor="fullName">* Full Name:</FormLabel>
        <FormInput
          id="fullName"
          placeholder="John Rosie"
          type="name"
          name="name"
          pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
          title="A name may consist of only three to 30 letters, apostrophe, dashes and spaces. For example Adrian, Jac Mercer, d'Artagnan, Alexander Repeta, etc."
          required
        ></FormInput>
        <FormLabel htmlFor="email">* E-mail:</FormLabel>
        <FormInput
          id="email"
          placeholder="johnrosie@gmail.com"
          type="email"
          name="email"
          title="Email may consist of letters, numbers and the obligatory @ symbol."
          required
        ></FormInput>
        <FormLabel htmlFor="phone">* Phone:</FormLabel>
        <FormInput
          id="phone"
          type="tel"
          name="tel"
          pattern="[789][0-9]{9}"
          placeholder="380961234567"
          required
        ></FormInput>
        <FormLabel htmlFor="message">Message:</FormLabel>
        <FormInput
          id="message"
          placeholder="My message...."
          maxlength="500"
        ></FormInput>
      </FormContact>
    </>
  )
}

export default Form
