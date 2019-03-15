import {Maybe, Either} from 'tsmonad'

const turns_out_to_be_100 = Maybe.just<number>(10)
    .caseOf({
        just: n => n * n,
        nothing: () => -1
    });

const turns_out_to_be_nothing = Maybe.nothing<string>()
    .caseOf({
        just: str => str,
        nothing: () => 'nothing'
    })

//fmap
const result: number =
    Maybe.just<number>(5)
        .lift(numb => numb + 5)
        .caseOf({
            just: val => val,
            nothing: () => 0
        })

const val = Maybe.just(5)
const myMonad: Maybe<number> = val.bind(val => Maybe.just(val + 10))

//console.log(result)
//console.log(turns_out_to_be_100)
//console.log(turns_out_to_be_nothing)
console.log(myMonad)
