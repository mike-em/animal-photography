import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Formik } from 'formik'
import { FiCheckCircle } from 'react-icons/fi'
import axios from 'axios'

const fadeOutAnimation = props => keyframes`
  0% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
`

const StyledFormContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
`

const StyledFormGroup = styled.label`
  position: relative;
  display: block;
  margin-bottom: 35px;
`

const Label = styled.span`
  font-size: 1.8rem;
  position: absolute;
  color: hsl(150, 40%, 80%);
  top: 4px;
  transition: all 200ms ease-in-out;
`

const StyledInputName = styled.input`
  border: none;
  border-bottom: 1px solid hsl(150, 40%, 80%);
  background-color: hsl(0, 0%, 15%);
  display: block;
  width: 100%;
  height: 30px;
  font-size: 1.8rem;
  color: white;
  border-radius: 0;
  &:required {
    box-shadow: none;
  }
  :focus {
    outline: none;
  }
  &:focus {
    border-bottom: 1px solid white;
    &:focus + ${Label}, &:valid + ${Label} {
      transform: translate(-5px, -30px) scale(0.8);
      color: white;
    }
  }
  ${({ value }) =>
    value !== '' &&
    css`
      border-bottom: 1px solid white;
      &:focus + ${Label}, &:valid + ${Label} {
        transform: translate(-5px, -30px) scale(0.8);
        color: white;
      }
    `}
`

const StyledInputEmail = styled.input`
  border: none;
  border-bottom: 1px solid hsl(150, 40%, 80%);
  background-color: hsl(0, 0%, 15%);
  display: block;
  width: 100%;
  height: 30px;
  font-size: 1.8rem;
  color: white;
  border-radius: 0;
  &:required {
    box-shadow: none;
  }

  :focus {
    outline: none;
  }
  &:focus {
    border-bottom: 1px solid white;
    &:focus + ${Label}, &:valid + ${Label} {
      transform: translate(-5px, -30px) scale(0.8);
      color: white;
    }
  }
  ${({ value }) =>
    value !== '' &&
    css`
      border-bottom: 1px solid white;
      &:focus + ${Label}, &:valid + ${Label}, &:invalid + ${Label} {
        transform: translate(-5px, -30px) scale(0.8);
        color: white;
      }
    `}
`

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 10px;
  border: 1px solid hsl(150, 40%, 80%);
  background-color: hsl(0, 0%, 15%);
  border-radius: 5px;
  margin-top: 31px;
  margin-bottom: -10px;
  font-size: 1.8rem;
  color: white;
  font-family: 'Raleway', sans-serif;
  box-shadow: none;

  :focus {
    outline: none;
    border: 1px solid white;
  }
`

const StyledButton = styled.button`
  width: 150px;
  height: 48px;
  background-color: transparent;
  color: hsl(150, 40%, 80%);
  border: 1px solid hsl(150, 40%, 80%);
  font-size: 1.8rem;
  text-transform: uppercase;
  transition: all 200ms ease-in-out;

  :hover {
    background-color: hsla(150, 40%, 80%, 0.2);
    color: white;
    cursor: pointer;
  }
`

const StyledButtonSuccess = styled(StyledButton)`
  position: absolute;
  background-color: hsl(150, 40%, 80%);
  border: 1px solid hsl(150, 40%, 80%);
  &:hover {
    background-color: hsl(150, 40%, 80%);
  }
  ${({ isvisible }) =>
    isvisible &&
    css`
      animation: ${p => fadeOutAnimation(p)} 3000ms;
      -webkit-animation-fill-mode: forwards;
    `};
`

const StyledCheck = styled(FiCheckCircle)`
  margin: 0;
  padding: 0;
  position: absolute;
  font-size: 2rem;
  top: 0;
  position: relative;
  color: white;

  :hover {
    color: white;
  }
`

const ContactForm = () => {
  return (
    <StyledFormContainer>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          axios
            .post(
              'https://us-central1-mikem-contact-form.cloudfunctions.net/sendEmail',
              values
            )
            .then(res => {
              resetForm({})
              setStatus(true)
              setSubmitting(false)
            })
            .catch(err => {
              console.log(err)
              setSubmitting(false)
            })
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          status,
        }) => (
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <StyledFormGroup>
              <StyledInputName
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                required
              />
              <Label>Name</Label>
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledInputEmail
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
              <Label>Email</Label>
            </StyledFormGroup>
            <StyledFormGroup>
              <Label>Message</Label>
              <StyledTextarea
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                required
              />
            </StyledFormGroup>
            {status && (
              <StyledButtonSuccess isvisible={true}>
                <StyledCheck />
              </StyledButtonSuccess>
            )}
            <StyledButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'submitting...' : 'submit'}
            </StyledButton>
          </form>
        )}
      </Formik>
    </StyledFormContainer>
  )
}

export default ContactForm
