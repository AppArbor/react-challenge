'use client'
import { useState } from 'react'

const avatarList = [
  { src: 'img/avatar1.png', label: 'Avatar 1', id: 1 },
  { src: 'img/avatar2.png', label: 'Avatar 2', id: 2 },
  { src: 'img/avatar3.png', label: 'Avatar 3', id: 3 },
  { src: 'img/avatar4.png', label: 'Avatar 4', id: 4 },
  { src: 'img/avatar5.png', label: 'Avatar 5', id: 5 },
  { src: 'img/avatar6.png', label: 'Avatar 6', id: 6 },
]

const hitApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok')
    }, 1000)
  })

export const useChangeAvatar = () => {
  const [loading, setLoading] = useState(false)

  const changeAvatar = async (id) => {
    setLoading(true)
    try {
      await hitApi()
      setLoading(false)
      return avatarList.find((av) => av.id === Number(id))
    } catch (error) {
      setLoading(false)
      return error
    }
  }

  return { changeAvatar, loading }
}
