import {useEffect} from 'react'
import { KEYS, LETTERS } from './constants'

const usePlay=() => {
    const playAudio = (letter) => {
        const sound = KEYS.find(key => key.letter == letter).audio
        const audio = new Audio(sound)
        audio.play()
    }
    const handlePlay = (e) => {
        const letter = e.target.dataset.key||e.target.parentElement.dataset.key
        playAudio(letter)
      }

    const handlePress = (e) => {
      const letter = e.key
      if (LETTERS.includes(letter)) playAudio(letter)
    }
    
    useEffect(() => {
        window.addEventListener('keydown', e => {
            handlePress(e)
        })
    }, [])

    return {
        handlePlay,
    }
}

export default usePlay