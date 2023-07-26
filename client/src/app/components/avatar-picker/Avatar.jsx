export const Avatar = ({ avatarData }) => {
  return (
    <>
      <div className="rounded-full overflow-hidden h-[60px] w-[60px]">
        <img src={avatarData.src} alt={avatarData.label} />
      </div>
    </>
  )
}
