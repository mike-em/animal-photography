import React, { useState } from 'react'
import Layout from '../components/layout'
import styled, { css, keyframes } from 'styled-components'
import Contact from '../components/Contact'
import { Formik } from 'formik'
import { DatePicker, TimePicker } from 'antd'
import locale from 'antd/es/date-picker/locale/en_GB'
import moment from 'moment'
import axios from 'axios'
import { device } from '../utils/device'

import 'antd/dist/antd.css'

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
  margin: 50px auto 0;
  padding: 20px 0;

  @media ${device.laptop} {
    padding: 20px 150px;
  }

  @media ${device.desktop} {
    padding: 20px 300px;
  }
`

const StyledDateTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
`

const StyledTitle = styled.div`
  display: flex;
  margin: 30px auto 0 auto;
  width: 100%;

  h2 {
    position: relative;
    margin: 0 auto;
    ::before {
      content: '';
      width: 120%;
      height: 2px;
      left: -10%;
      top: 4.5rem;
      background-color: black;
      position: absolute;
    }
  }
`

const StyledFormGroup = styled.label`
  position: relative;
  display: block;
  margin-bottom: 35px;
`

const Label = styled.span`
  font-size: 1.8rem;
  position: absolute;
  color: hsl(0, 0%, 15%);
  top: 4px;
  transition: all 200ms ease-in-out;
`

const StyledInputEmail = styled.input`
  border: none;
  border-bottom: 1px solid hsl(0, 0%, 15%);
  background-color: white;
  display: block;
  width: 100%;
  height: 30px;
  font-size: 1.8rem;
  color: hsl(0, 0%, 15%);
  border-radius: 0;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: white;
  }
  &:required {
    box-shadow: none;
  }

  :focus {
    outline: none;
  }
  &:focus {
    border-bottom: 1px solid hsl(0, 0%, 15%);
    background-color: white;
    &:focus + ${Label}, &:valid + ${Label} {
      transform: translate(-5px, -30px) scale(0.8);

      color: hsl(0, 0%, 15%);
    }
  }
  ${({ value }) =>
    value !== '' &&
    css`
      border-bottom: 1px solid hsl(0, 0%, 15%);
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
  border: 1px solid hsl(0, 0%, 15%);
  background-color: white;
  border-radius: 5px;
  margin-top: 31px;
  margin-bottom: -10px;
  font-size: 1.8rem;
  color: hsl(0, 0%, 15%);
  font-family: 'Raleway', sans-serif;
  box-shadow: none;
  transition: all 200ms ease-in-out;

  :hover {
    background-color: white;
  }

  :focus {
    outline: none;
    border: 1px solid hsl(0, 0%, 15%);
    background-color: white;
  }
`

const StyledButton = styled.button`
  width: 150px;
  height: 48px;
  background-color: transparent;
  color: hsl(0, 0%, 15%);
  border: 1px solid hsl(0, 0%, 15%);
  font-size: 1.8rem;
  text-transform: uppercase;
  transition: all 200ms ease-in-out;

  :hover {
    background-color: hsl(0, 0%, 15%);
    color: white;
    cursor: pointer;
  }
`

const StyledButtonSuccess = styled(StyledButton)`
  position: absolute;
  background-color: hsl(150, 40%, 80%);
  border: 1px solid hsl(150, 40%, 80%);
  color: white;
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

const Booking = () => {
  const [pickedDate, setDate] = useState('')
  const [pickedTime, setTime] = useState('')

  const onChange = (date, dateString) => {
    setDate(dateString)
  }

  const onTimeChange = (time, timeString) => {
    setTime(timeString)
  }

  const format = 'HH:mm'
  return (
    <Layout>
      <StyledTitle>
        <h2>Book Date and Time</h2>
      </StyledTitle>
      <StyledFormContainer>
        <Formik
          initialValues={{
            date: { pickedDate },
            time: { pickedTime },
            email: '',
            message: '',
          }}
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
                <StyledDateTime>
                  <DatePicker
                    onChange={onChange}
                    locale={locale}
                    format="DD-MM-YYYY"
                  />
                  <TimePicker
                    onChange={onTimeChange}
                    minuteStep={20}
                    defaultValue={moment('10:00', format)}
                    format={format}
                  />
                </StyledDateTime>
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
                <Label>Comments</Label>
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
                  thank you!
                </StyledButtonSuccess>
              )}
              <StyledButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'submitting...' : 'submit'}
              </StyledButton>
            </form>
          )}
        </Formik>
      </StyledFormContainer>
      <Contact />
    </Layout>
  )
}

export default Booking
