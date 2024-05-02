import React, { useState, useCallback, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';
import Character from './Character';
import Number from './Number';
import Length from './Length';

export default function Home() {
    const [length, setLength] = useState(6);
    const [numAllow, setNumAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);
    const [password, setPassword] = useState('');
   

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (numAllow) {
            str += '0123456789';
        }
        if (charAllow) {
            str += '@#$&';
        }
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
        console.log(pass)
    }, [length, numAllow, charAllow]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numAllow, charAllow]);

    return (
        <div className='passwordContainer'>
            <Header />
            <Input value={password} />
            <Button password={password} />
            <div className='dependecnyContainer'>
                <Length length={length} setLength={setLength} />
                <Number numAllow={numAllow} setNumAllow={setNumAllow} />
                <Character charAllow={charAllow} setCharAllow={setCharAllow} />
            </div>
        </div>
    );
}
