'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'
import { AvatarsModal } from './AvatarsModal'

const AvatarPicker = ({ avatarList }) => {
  const [pickedAvatar, setPickedAvatar] = useState(avatarList[0])
  const [showingOptions, setShowingOptions] = useState(false)

  const handleOpenModal = () => {
    setShowingOptions(true)
  }

  const handlePickAvatar = (avatar) => {
    setPickedAvatar(avatar)
    setShowingOptions(false)
  }
  return (
    <section className="flex flex-col items-center p-4 relative">
      <button type="button" onClick={handleOpenModal}>
        <Avatar avatarData={pickedAvatar} />
      </button>
      {showingOptions && (
        <AvatarsModal
          avatarList={avatarList}
          handlePickAvatar={handlePickAvatar}
        />
      )}
    </section>
  )
}

export default AvatarPicker
