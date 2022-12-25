import { Equal, Expect } from "./helpers/utils"

const addListener = ( onFocusChange: unknown, ) =>
{
	window.addEventListener( 'focus', ( ) => onFocusChange(true) )

	window.addEventListener( 'blur', () => onFocusChange(false) )
}

addListener( ( isFocused ) =>
{
	console.log( { isFocused } );
	type tests = [Expect<Equal<typeof isFocused, boolean>>]	
})