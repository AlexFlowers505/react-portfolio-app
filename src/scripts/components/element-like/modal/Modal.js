import React, { useContext } from 'react'
import { ModalContext } from './ModalContext'
import ModalContactList from './ModalContactList'

export default function Modal () {
    const { isModalOpen, modalType, closeModal } = useContext(ModalContext)
    const modalTypes = {
        success: 'success',
        error: 'error'
    }

    if (!isModalOpen) return null
    return (
        <div className={modalType == modalTypes.success ? 'modal modal--success' : 'modal modal--error'} onClick={closeModal}>
            <div className='modal-content' onClick={ evt => evt.stopPropagation()}>
                {modalType == modalTypes.success && (
                    <>
                        <svg className='modal-icon' stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 13V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8" />
                            <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7M16 19l2 2 4-4" />
                        </svg>
                        <div className='modal-text-wrapper'>
                            <p className='modal-text modal-text--xl'>Сообщение отправлено!</p>
                            <p className='modal-text modal-text--sm'>Я свяжусь с Вами в ближайшее время!</p>
                        </div>
                    </>
                )}
                {modalType == modalTypes.error && (
                    <>
                        <svg className='modal-icon' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"></path>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            <path d="m17 17 4 4"></path>
                            <path d="m21 17-4 4"></path>
                        </svg>
                        <div className='modal-text-wrapper'>
                            <p className='modal-text modal-text--xl'>Сообщение не отправилось!</p>
                            <p className='modal-text modal-text--sm'>Попробуйте отправить сообщение еще раз.</p>
                            <p className='modal-text modal-text--sm'>Или свяжитесь со мной другим способом:</p>
                        </div>
                        <ModalContactList />
                    </>
                )}
                <button className='btn btn-primary' onClick={closeModal}>Закрыть</button>
            </div>
        </div>
    )
}