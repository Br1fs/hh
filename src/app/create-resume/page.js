'use client'
import Header from '@/components/header/index'
import Input from '@/components/input';
import SelectData from '@/components/SelectData';
import {useEffect, useState } from 'react';

import ModalAddExp from '@/components/ModalAddExp';

export default function CreateResume() {

  const [modalExpIsOpen, setModalExpIsOpen] = useState(false)

  const closeModalExp = () =>  {
    setModalExpIsOpen(false)
  }

  return (
    <main>
      <Header />
      <div className='container ptb7'>
        <h1>Ваше резюме</h1>

        <h3>Контактные данные</h3>
        <Input placeholder="" type="text" label="Имя" size="fieldset-md" />
        <Input placeholder="" type="text" label="Фамилия" size="fieldset-md" />
        <Input placeholder="" type="text" label="Мобильный телефон" size="fieldset-md" />
        <Input placeholder="" type="text" label="Город проживания" size="fieldset-md" />

        <h3>Основная информация</h3>

        <SelectData size="fieldset-sm" label='Дата рождения'/>
        <fieldset className={"fieldset fieldset-sm"}>
            <label>Пол</label>

            <div className='radio-group'>
              <div className='radio'>
                <input type="radio" name="gender" id="g1"/>
                <label for="g1">Мужской</label>
              </div>
              <div className='radio'>
                <input type="radio" name="gender" id="g2"/>
                <label for="g2">Женский</label>
              </div>
            </div>
        </fieldset>
        <Input placeholder="" type="text" label="Гражданство" size="fieldset-md" />
        
        <h3>Специальность</h3>
        <Input placeholder="" type="text" label="Желаемая должность" size="fieldset-lg" />


        <fieldset className={"fieldset fieldset-lg"}>
            <label>Зарплата</label>

              <div className='salary'>
                <input placeholder="" type="text" className='input'/>
                <select className='input'>
                  <option>KZT</option>
                  <option>USD</option>
                  <option>RUB</option>
                </select>
                  на руки
              </div>
        </fieldset>

        <h3>Опыт работы</h3>
        {modalExpIsOpen &&<ModalAddExp close={closeModalExp}/>}
        <fieldset className={"fieldset fieldset-lg"}>
            <label>Место работы</label>

              <div className='exp'>
                <div>

                </div>
                <button className='button button-primary-bordered' onClick={() => setModalExpIsOpen(true)}>Добавить место работы</button>
              </div>
        </fieldset>
      </div>
    </main>
  )
}
