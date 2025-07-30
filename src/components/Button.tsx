const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <button
      className={`text-[var(--tg-theme-button-text-color)] bg-[var(--tg-theme-button-color)] px-3 py-2 ${props.className}`}
      {...props}
    />
  )
}

export default Button
