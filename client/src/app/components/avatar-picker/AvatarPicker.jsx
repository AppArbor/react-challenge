'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'

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
    <section className="flex flex-col items-center p-10 border-gray-400 border-2">
      <button type="button" onClick={handleOpenModal}>
        <Avatar avatarData={pickedAvatar} />
      </button>
      {showingOptions && (
        <ul className="grid grid-cols-4">
          {avatarList &&
            avatarList.length > 0 &&
            avatarList.map((avatar) => (
              <li key={avatar.id}>
                <button onClick={() => handlePickAvatar(avatar)}>
                  <Avatar avatarData={avatar} />
                </button>
              </li>
            ))}
        </ul>
      )}
    </section>
  )
}

export default AvatarPicker
