const Password = (passwordInput, setPasswordInput, handleSubmit) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            required
            value={passwordInput}
            onChange={setPasswordInput((e)=>e.target.value)}
        />
        
    </form>
  )
}

export default Password