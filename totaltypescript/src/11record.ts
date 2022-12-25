import { expect, it } from 'vitest'

const createCache = () =>
{
	const cache: Record<string, string>  = {}

	const add = ( id: string, value: string ) =>
	{ 
		cache[id] = value
	}

	const remove = ( id: string ) => delete cache[id]

	return {
		cache,
		add,
		remove
	}
}

it( 'should add value to cache', () =>
{ 
	const cache = createCache()

	cache.add( 'foo', 'bar' )
	expect( cache.cache ).toHaveProperty( 'foo' )
	expect( cache.cache[ 'foo' ] ).toBe( 'bar' )
} )

it( 'should remove value from cache', () =>
{
	const cache = createCache()
	cache.add( 'foo', 'bar' )
	cache.remove( 'foo' )
	expect( cache.cache ).not.toHaveProperty( 'foo' )
	expect( cache.cache['foo'] ).toBeUndefined()
} )
