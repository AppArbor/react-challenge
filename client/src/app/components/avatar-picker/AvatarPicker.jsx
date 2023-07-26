'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'
import { AvatarsModal } from './AvatarsModal'
import { useChangeAvatar } from '@/app/hooks/avatarHooks'

const AvatarPicker = ({ avatarList }) => {
  const [pickedAvatar, setPickedAvatar] = useState(avatarList[0])
  const [showingOptions, setShowingOptions] = useState(false)

  const handleOpenModal = () => {
    setShowingOptions(true)
  }

  const handleCloseModal = () => {
    setShowingOptions(false)
  }

  return (
    <section className="flex flex-col items-center p-4 relative">
      <button type="button" onClick={handleOpenModal}>
        <Avatar avatarData={pickedAvatar} className="hover:border" />
      </button>
      {showingOptions && (
        <AvatarsModal
          avatarList={avatarList}
          closeModal={handleCloseModal}
          pickedAvatarId={pickedAvatar.id}
          setPickedAvatar={setPickedAvatar}
        />
      )}
    </section>
  )
}

export default AvatarPicker
