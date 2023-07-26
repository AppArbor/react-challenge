import { Avatar } from './Avatar'

export const AvatarsModal = ({ avatarList, handlePickAvatar }) => {
  return (
    <div className="bg-[#2c3033] w-[280px] absolute top-[100%] flex flex-col items-center gap-4 drop-shadow-lg p-[14px] rounded-sm">
      <div className="absolute bottom-full border-l-transparent border-r-transparent border-l-[8px] border-r-[8px] border-b-[8px] border-b-[#2c3033]"></div>
      <p className="my-[14px] text-[#f9f9f9]">Choose your avatar</p>
      <ul className="grid grid-cols-4 gap-[14px]">
        {avatarList &&
          avatarList.length > 0 &&
          avatarList.map((avatar) => (
            <li key={avatar.id}>
              <button onClick={() => handlePickAvatar(avatar)} type="button">
                <Avatar avatarData={avatar} className="hover:border-" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
