const Password = (passwordInput, setPasswordInput, handleSubmit) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            required
            value={passwordInput}
            onChange={(e)=>setPasswordInput(e.target.value)}
        />
        
    </form>
  )
}

export default Password