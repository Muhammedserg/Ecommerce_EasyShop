export const sum = ()=> { 
return 1+2 ;
}
const Button = () => {
  return (
    <div>
      <h1>Button</h1>
      {
        sum()
      }
    </div>
  )
}

export default Button
