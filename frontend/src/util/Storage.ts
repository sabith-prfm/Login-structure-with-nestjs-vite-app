import { IStorageKeys } from "../Types/storage/IStorageProps"

export const setStorageItem =(key:IStorageKeys, value: string| object)=>{
  localStorage.setItem(key,JSON.stringify(value))
}

export const getStorageItem =(key:IStorageKeys)=>{
    return localStorage.getItem(key)
}

export const clearStorageItem = ()=>{
    localStorage.clear();
}