'use client'
import { useState } from 'react'
import { useChangeAvatar } from '@/app/hooks/avatarHooks'
import { Avatar } from './Avatar'
import clsx from 'clsx'

export const AvatarsModal = ({
  avatarList,
  closeModal,
  pickedAvatarId,
  setPickedAvatar,
}) => {
  const { changeAvatar, loading } = useChangeAvatar()
  const [updatingAvatarId, setUpdatingAvatarId] = useState()

  const handlePickAvatar = async (id) => {
    try {
      setUpdatingAvatarId(id)
      const avatar = await changeAvatar(id)
      // TODO: remove this clg after finishing
      console.log(avatar)
      setPickedAvatar(avatar)
    } catch (error) {
      // TODO: handle error when picking. Perhaps leave current avatar?
    }
    closeModal()
  }

  return (
    <>
      <div className="bg-[#2c3033] w-[280px] absolute top-[100%] flex flex-col items-center gap-4 drop-shadow-lg p-[14px] rounded-sm z-40">
        <div className="absolute bottom-full border-l-transparent border-r-transparent border-l-[8px] border-r-[8px] border-b-[8px] border-b-[#2c3033]"></div>
        <p className="my-[14px] text-[#f9f9f9]">Choose your avatar</p>
        <ul className="grid grid-cols-4 gap-[14px]">
          {avatarList &&
            avatarList.length > 0 &&
            avatarList.map((avatar) => (
              <li key={avatar.id}>
                <button
                  onClick={() => handlePickAvatar(avatar.id)}
                  type="button"
                >
                  <Avatar
                    avatarData={avatar}
                    className={clsx(
                      // TODO: improve the logic for the styling here depending on the different states: (hover, loading, selected, etc) perhaps use a wrapper or a different property
                      'border border-[#9ba0a3] hover:border-[3px]',
                      loading &&
                        pickedAvatarId !== avatar.id &&
                        updatingAvatarId === avatar.id &&
                        'border-blue-300 border-[3px] hover:border-blue-300 border-t-transparent hover:border-t-transparent',
                      pickedAvatarId === avatar.id &&
                        'border-[3px] border-[#7aa1b2]',
                    )}
                  />
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div
        className="min-h-screen fixed top-0 bottom-0 z-20 w-full"
        onClick={closeModal}
      ></div>
    </>
  )
}
