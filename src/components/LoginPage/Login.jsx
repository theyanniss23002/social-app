import React from 'react'
import style from './Login.module.scss'
import {useForm} from 'react-hook-form'

const LoginForm = () => {

  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch("login"))

  return (
    <div className={style.columnContent}>
      <span className={style.loginTitle}>Login in Social React App</span>
      <span className={style.loginSubtitle}>Welcome back! Log in to your account to view today's clients:</span>
      <form className={style.login} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.loginFields}>
          <div className={style.loginFieldsWrapper}>
            <input className={style.loginFieldsWrapperInput} placeholder="Login" type={'text'} name={'login'}
                   id={'login'} autoComplete="new-password"
                   aria-invalid={errors.login ? "true" : "false"}
                   ref={register({
                     required: {
                       value: true,
                       message: 'This is required entry field'
                     },
                     maxLength: {
                       value: 3,
                       message: 'Max length exceeded'
                     },
                     minLength: {
                       value: 4,
                       message: 'Min length exceeded'
                     }
                   })}/>
            <label className={style.loginFieldsWrapperLabel} htmlFor={'login'}>Login:</label>
            {errors.login && errors.login.type === "required" &&
            <span className={style.loginFieldsWrapperError} role="alert">{errors.login.message}</span>}
            {errors.login && errors.login.type === "maxLength" && (
              <span className={style.loginFieldsWrapperError} role="alert">{errors.login.message}</span>)}
            {errors.login && errors.login.type === "minLength" && (
              <span className={style.loginFieldsWrapperError} role="alert">{errors.login.message}</span>)}
          </div>
          <div className={style.loginFieldsWrapper}>
            <input className={style.loginFieldsWrapperInput} placeholder={'Password'} type={'password'}
                   name={'password'} id={'password'} autoComplete={'off'}
                   ref={register({
                     required: "Required entry field",
                     minLength: {
                       value: 5,
                       message: "min length is 5"
                     }
                   })}/>
            <label className={style.loginFieldsWrapperLabel} htmlFor={'password'}>Password:</label>
            {errors.password &&
            <span className={style.loginFieldsWrapperError} role="alert">{errors.password.message}</span>}
          </div>
          <div className={style.loginFieldsButtons}>
            <input className={style.loginFieldsButtonsCheckbox} id={'remember'} type={'checkbox'} name={'rememberMe'}
              //  ref={register({
              //    name: 'rememberMe',
              //    defaultChecked: !!register.defaultChecked,
              //    // checked: 'boolean' ? "true" : "false",
              //    type: 'checkbox',
              //  })}
                   ref={register}
            />
            <label className={style.loginFieldsButtonsCheckboxText} htmlFor={'remember'}>Remember Me</label>
            <button className={style.loginFieldsButtonsSubmit} type={'submit'}>Log in</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
