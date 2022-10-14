import React, { useCallback, useEffect } from 'react';
import './Form.css';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('Individual');
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject
    }
    tg.sendData(JSON.stringify(data));
  }, [tg, street, country, subject]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    }
  }, [onSendData, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data',
    })
  }, [tg.MainButton]);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street, tg.MainButton]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }


  return (
    <div className="form">
      <h3>Please input your data</h3>
      <input
        className="input"
        type={'text'}
        placeholder={'Country'}
        value={country}
        onChange={onChangeCountry}
      />

      <input
        className="input"
        type={'text'}
        placeholder={'Street'}
        value={street}
        onChange={onChangeStreet}
      />

      <select
        className="select"
        value={subject}
        onChange={onChangeSubject}
      >
        <option value={'Individual'}>Individual</option>

        <option value={'Entity'}>Entity</option>
      </select>

    </div>
  )
}

export default Form