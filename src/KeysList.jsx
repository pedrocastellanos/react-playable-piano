import { KEYS } from './constants'
import { Key } from './Key'
import usePlay from './usePlay'

export const KeysList = ({show}) => {
    const {handlePlay} = usePlay()
    return (
        <ul className="piano-keys">
            {
                KEYS.map(key => <Key key={key.letter} letter={key.letter} type={key.color} show={show} handlePlay={handlePlay} />)
            }
        </ul>
    )
}
