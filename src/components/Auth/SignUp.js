import React, { useState, useContext } from 'react';
import axios from 'axios';
import { SiteContext } from './context';
import { textSpanContainsTextSpan } from 'typescript';

export default function SignUp() {
  const context = useContext(SiteContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const [success, setSuccess] = useState(false);

  let handleUserName = (e, name) => {
    console.log('this is the event', name);
    textSpanContainsTextSpan.setUser({ ...context.user, username: e });
    console.log(context.user)
  };

  let handlePassword = (e, name) => {
    console.log('this is the event', name);
    context.setUser({ ...context.user, password: e });
    console.log(context.user)
  }

  let handleSubmit = async () => {
    const api = '';
    await axios({
      method: 'post',
      url: api,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: context.user
    }).then(response => {
      context.setToken(response.data.token);

      if(response.status === 201) {
        console.log('New User was created: ', response.data.user);
        context.setUser(response.data.user);
        setSuccess(true);
      }
    })
  }
}