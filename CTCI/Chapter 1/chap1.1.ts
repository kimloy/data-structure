/* 
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 
*/

export const isUnique = (str: string) => {
    for(let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]) return false;
        }
    }
    return true;
}

export const isUniqueV2 = (str: string) => {
    const map = new Map();
    
    for(let i =0; i < str.length; i++){
        if(map.has(str[i])) return false;
        else map.set(str[i], i);
    }
    return true;

}

export const isUniqueV3 = (str: string) => {
    const set = new Set();

    for(let i = 0; i < str.length; i++){
        if(set.has(str[i])) return false;
        else set.add(str[i]);
    }
    return true;
}

console.log(isUnique("abcd"));
console.log(isUnique("aabbccdd"));

console.log(isUniqueV2("abcd"))
console.log(isUniqueV2("aabbccdd"));

console.log(isUniqueV3("abcd"))
console.log(isUniqueV3("aabbccdd"));

