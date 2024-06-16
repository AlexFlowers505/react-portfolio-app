import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const showModal = (content) => {
    setModalType(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setModalType(null)
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, modalType, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}