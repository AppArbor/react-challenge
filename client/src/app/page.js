import Image from 'next/image'
import AvatarPicker from './components/avatar-picker/AvatarPicker'

const avatarList = [
  { src: 'img/avatar1.png', label: 'Avatar 1', id: 1 },
  { src: 'img/avatar2.png', label: 'Avatar 2', id: 2 },
  { src: 'img/avatar3.png', label: 'Avatar 3', id: 3 },
  { src: 'img/avatar4.png', label: 'Avatar 4', id: 4 },
  { src: 'img/avatar5.png', label: 'Avatar 5', id: 5 },
  { src: 'img/avatar6.png', label: 'Avatar 6', id: 6 },
]

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-stone-200 min-h-screen">
      <AvatarPicker avatarList={avatarList} />
    </main>
  )
}
