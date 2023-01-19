type Props = {
  label: string
  name: string
  type: string
  placeholder?: string
  className?: string
  register: Function
  rules?: Object
  full?: boolean
}

export const Input = ({
  type,
  label,
  name,
  register,
  placeholder,
  className,
  rules,
  full,
  ...rest
}: Props) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`px-5 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300 ${
          full && 'w-full'
        } ${className}`}
        {...register(name, rules)}
        {...rest}
      />
    </div>
  )
}
