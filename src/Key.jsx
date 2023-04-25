export const Key = ({type, letter, show, handlePlay}) => {
  return (
    <li className={"key "+ type} data-key={letter} onClick={handlePlay}>
        {show &&
            <span>{letter}</span>
        }
    </li>
  )
}
