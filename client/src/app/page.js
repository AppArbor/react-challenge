'use client'
import Image from 'next/image'
import AvatarPicker from './components/avatar-picker/AvatarPicker'
import { useGetAvatars } from './hooks/avatarHooks'

export default function Home() {
  const { avatarList } = useGetAvatars()

  return (
    <main className="flex justify-center items-center bg-stone-200 min-h-screen">
      <AvatarPicker avatarList={avatarList} />
    </main>
  )
}
