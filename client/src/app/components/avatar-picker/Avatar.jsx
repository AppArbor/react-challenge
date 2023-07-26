import clsx from 'clsx'

export const Avatar = ({ avatarData, className, ...rest }) => {
  return (
    <>
      <div
        className={clsx(
          'rounded-full overflow-hidden h-[60px] w-[60px] hover:border-[#9ba0a3]',
          className,
        )}
        {...rest}
      >
        <img src={avatarData.src} alt={avatarData.label} />
      </div>
    </>
  )
}
