import React from 'react'
import myPhoto from '../../../../assets/img/pics/me-photos/photo5.jpg'
import { VscFolderLibrary as DirIcon } from 'react-icons/vsc'
import { BsCodeSlash as CodeIcon } from 'react-icons/bs'
import { GiPencilBrush as DesignToolsIcon } from 'react-icons/gi'


export default function About() {
  return (
    <section id='about-section' className='about-section' data-intersection='#about-section'>
      <h5>Общая информация</h5>
      <h2>Обо мне</h2>
			<div className='tank about-section__contents-wrapper'>
        <div className='about-section__img-outer-wrapper'>
          <div className='about-section__img-inner-wrapper'>
            <img className='about-section__img' src={myPhoto} alt="Alexander" />
          </div>
        </div>
        <div className="about-section__text-content text-content">
          <div className="text-content__cards">
            <article className="text-content__about-card about-card">
              <DesignToolsIcon className='about-card__icon' />
              <h5 className='about-card__heading'>UX/UI</h5>
              <small className='about-card__desc'>3+ года работы</small>
            </article>
            <article className="text-content__about-card about-card">
              <CodeIcon className='about-card__icon' />
              <h5 className='about-card__heading'>Фронтенд</h5>
              <small className='about-card__desc'>1.5 года работы</small>
            </article>
            <article className="text-content__about-card about-card">
              <DirIcon className='about-card__icon' />
              <h5 className='about-card__heading'>Проекты</h5>
              <small className='about-card__desc'>50+ успешно завершены</small>
            </article>
          </div>
					<p className='text-content__about-desc'>
            Меня зовут Александр, я фронтенд-разработчик и UI/UX дизайнер. Учился на графического дизайнера в Санкт-Петербургском политехническом университете (<a href='https://www.spbstu.ru/' target='_blank' rel='noopener noreferrer'>СПбПУ</a>). Вскоре выбрал самообразование, так как в программе университета было много лишнего.
            Занялся фрилансом на международной платформе <a href='https://www.upwork.com/' target='_blank' rel='noopener noreferrer'>Upwork</a>, выполняя заказы на дизайн для иностранных клиентов, что в числе прочего стало возможным благодаря моему знанию английского на разговорном уровне. В определенный момент решил развиваться в сфере IT с целью стать фронтенд-разработчиком.
            Поэтому я прошел курсы по фронтенд-разработке на React от <a href='https://htmlacademy.ru/' target='_blank' rel='noopener noreferrer'>HTML Academy</a>, после чего устроился на работу в IT компанию в качестве UX/UI дизайнера и фронтенд-разработчика, где успешно работаю и развиваюсь по сей день.
          </p>
          <a className='text-content__contact-cta btn btn-primary' href="#contacts-section">Написать мне</a>
        </div>
      </div>
    </section>
  )
}
