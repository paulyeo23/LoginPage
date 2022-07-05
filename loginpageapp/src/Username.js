const Username = (usernameInput, setUsernameInput) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <input 
            type="text" 
            required
            autoFocus
            value={usernameInput}
            onChange={setUsernameInput((e)=>e.target.value)}
        />
        
    </form>
  )
}

export default Username