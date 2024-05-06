import React, { useCallback, useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [footSize, setFootSize] = useState();
    const [dressCode, setDressCode] = useState();
    const [casualClothes, setCasualClothes] = useState();
    const [colors, setColors] = useState({light:false, dark:false, colorful: false})
    const [price, setPrice] = useState();
    const [shop, setShop] = useState();
    const [clothesBrands, setClothesBrands] = useState();
    const [shoesBrands, setShoesBrands] = useState();
    const [accessoriesBrands, setAccessoriesBrands] = useState();
    const [badClothes, setBadClothes] = useState();
    const [capsulaLinks, setCapsulaLinks] = useState();
    const [buyConcept, setBuyConcept] = useState();


    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            age, 
            weight, 
            height, 
            footSize, 
            dressCode, 
            casualClothes, 
            colors, 
            price, 
            shop, 
            clothesBrands, 
            shoesBrands, 
            accessoriesBrands, 
            badClothes, 
            capsulaLinks, 
            buyConcept,
        }
        tg.sendData(JSON.stringify(data))
    }, [
        age, 
        weight, 
        height, 
        footSize, 
        dressCode, 
        casualClothes, 
        colors, 
        price, 
        shop, 
        clothesBrands, 
        shoesBrands, 
        accessoriesBrands, 
        badClothes, 
        capsulaLinks, 
        buyConcept,
    ])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    /*
    useEffect(() => {
        if (!name || !birth) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, birth])
    */

    tg.MainButton.show();

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }
    const onChangeWeight = (e) => {
        setWeight(e.target.value)
    }
    const onChangeHeight = (e) => {
        setHeight(e.target.value)
    }
    const onChangeFootSize = (e) => {
        setFootSize(e.target.value)
    }
    const onChangeDressCode = (e) => {
        setDressCode(e.target.value)
    }
    const onChangeCasualClothes = (e) => {
        setCasualClothes(e.target.value)
    }
    const onChangeColors = (e) => {
        setColors(e.target.value)
    }
    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onChangeShop = (e) => {
        setShop(e.target.value)
    }
    const onChangeClothesBrands = (e) => {
        setClothesBrands(e.target.value)
    }
    const onChangeShoesBrands = (e) => {
        setShoesBrands(e.target.value)
    }
    const onChangeAccessoriesBrands = (e) => {
        setAccessoriesBrands(e.target.value)
    }
    const onChangeBadClothes = (e) => {
        setBadClothes(e.target.value)
    }
    const onChangeCapsulaLinks = (e) => {
        setCapsulaLinks(e.target.value)
    }
    const onChangeBuyConcept = (e) => {
        setBuyConcept(e.target.value)
    }
    

    return (
       <div className={"form"}>
        <h3>Сколько Вам лет?</h3>
        <input 
            className={'input'}
            placeholder={'Возраст'}
            type="text" 
            value={age}
            onChange={onChangeAge}
        />
        <h3>Ваш вес?</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'Кг'}
            value={weight}
            onChange={onChangeWeight}    
        />
        <h3>Ваш рост?</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'См'}
            value={height}
            onChange={onChangeHeight}    
        />
        <h3>Размер ноги</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={''}
            value={footSize}
            onChange={onChangeFootSize}    
        />
        <h3>Есть ли дресс-код?</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'опишите дресс-код'}
            value={dressCode}
            onChange={onChangeDressCode}    
        />
        <h3>Опишите комплект повседневной одежды</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={''}
            value={casualClothes}
            onChange={onChangeCasualClothes}    
        /><h3>Бюджет на капсулу</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'Рубли'}
            value={price}
            onChange={onChangePrice}    
        />
        <h3>Любимые бренды одежды</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={''}
            value={clothesBrands}
            onChange={onChangeClothesBrands}    
        />
        <h3>Любимые бренды обуви</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={''}
            value={shoesBrands}
            onChange={onChangeShoesBrands}    
        />
        <h3>Любимые бренды аксессуаров</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={''}
            value={accessoriesBrands}
            onChange={onChangeAccessoriesBrands}    
        />
        <h3>Что точно нет?</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'Например, юбки,балетки'}
            value={badClothes}
            onChange={onChangeBadClothes}    
        />
        <h3>Референсы капсул канала "The girl who"</h3>
        <input 
            className={'input'}
            type="text" 
            placeholder={'ссылки на пост'}
            value={capsulaLinks}
            onChange={onChangeCapsulaLinks}    
        />


        <select value={shop} onChange={onChangeShop} className={'select'}>
            <option value={''}>Выберите бренд</option>
            <option value={'lamoda'}>Lamoda</option>
            <option value={'wildberries'}>Wildberries</option>
            <option value={'other'}>Сайт бренда</option>
        </select>
       </div>
    );
};

export default Form;