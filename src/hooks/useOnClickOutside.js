import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = isInitialValue => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handlerClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handlerClickOutside, true)

		return () => {
			document.removeEventListener('click', handlerClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
