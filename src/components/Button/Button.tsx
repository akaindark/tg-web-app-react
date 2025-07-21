import './Button.css'

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return <button className={`button ${props.className}`} {...props} />
}

export default Button
