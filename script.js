const arrayNumeros = [2,5,7,9,3,6]
const arrayNumerosForEach = [2,5,7,9,3,6]
const arrayNumerosForFill = [3,4,5,6,7]
const arrayNumerosConcat1 = [2,5,7,9,3,6]
const arrayNumerosConcat2 = [3,4,5,6,7]


//NewForEach
function newForEach(array, functionCallBack){

    for(let index = 0; index < array.length; index++){
        functionCallBack(array[index], index, array)        
    }
    return undefined    
}

function exemplificandoForEach(element, index, array){   
    array[index] = element * 2;    
}
newForEach(arrayNumerosForEach, exemplificandoForEach)
console.log(arrayNumerosForEach);


///////////////////////////////////////////////////////////////////////////

//NewMap
function newMap(array, functionCallBack){
    let result = []

    for(let index = 0; index < array.length; index++){
        let newValue = functionCallBack(array[index])
        result.push(newValue)
    }
    return result
}

function exemplificandoMap (element){   
    return element * 3        
}
newMap(arrayNumeros, exemplificandoMap)


///////////////////////////////////////////////////////////////////////////

//NewFilter

function newFilter(array, functionCallBack){

    let result = []

    for(let index = 0; index < array.length; index++){
        let condicao = functionCallBack(array[index], index, array) 
        if(condicao === true){
           result.push(array[index])     
        }         
    }
    return result
}

function exemplificandoFilter (element, index, array){     
    return element >= 5;
}
newFilter(arrayNumeros, exemplificandoFilter)

///////////////////////////////////////////////////////////////////////////

//NewFind

function newFind(array, functionCallBack){
    
    for(let index = 0; index < array.length; index++){
        let condicao = functionCallBack(array[index], index = index, array = array)
        if(condicao){
            return array[index]
        }
    }
    return undefined
}

function exemplificandoFind (element, index, array){     
    return element > 5;
}

newFind(arrayNumeros, exemplificandoFind)

///////////////////////////////////////////////////////////////////////////

//NewFindIndex

function newFindIndex(array, functionCallBack){
    
    for(let index = 0; index < array.length; index++){
        let condicao = functionCallBack(array[index], index = index, array = array)
        if(condicao){
            return index
        }
    }
    return -1
}

function exemplificandoFindIndex (element, index, array){      
    return element > 5;
}
newFindIndex(arrayNumeros, exemplificandoFindIndex)

///////////////////////////////////////////////////////////////////////////

//NewReduce
function newReduce(array, functionCallBack, initialValue = 0){

    let result = initialValue

    for(let index = 0; index < array.length; index++){        
        result = functionCallBack(result, array[index])
    } 
    return result   
}

function exemplificandoReduce (acumulador, element){   
    return acumulador + element
    
}
newReduce(arrayNumeros, exemplificandoReduce)

///////////////////////////////////////////////////////////////////////////


//NewSome

function newSome(array, functionCallBack){    

    for(let index = 0; index < array.length; index++){
        let condicao = functionCallBack(array[index], index, array) 
        if(condicao){
            return true     
        }      
    }
    return false
}

function exemplificandoSome (element){    
    return element === 5;
}
newSome(arrayNumeros, exemplificandoSome)

///////////////////////////////////////////////////////////////////////////


//NewEvery

function newEvery(array, functionCallBack){    
    let result = true
    for(let index = 0; index < array.length; index++){
        let condicao = !functionCallBack(array[index], index, array) 
        if(condicao){
            return  false     
        }      
    }
    return result
}

function exemplificandoEvery (element){     
    return element < 10;
}

newEvery(arrayNumeros, exemplificandoEvery)

//NewFill
function newFill(array, valor, inicio = 0, fim = array.length){     

    for(let index = inicio; index < fim; index++){
       array[index] = valor
    }
    return array
    
}
newFill(arrayNumerosForFill,8,3)

///////////////////////////////////////////////////////////////////////////

//NewInludes

function newIncludes(array, searchElement, fromIndex = 0){ 

    let result = false

    for(let index = fromIndex; index < array.length; index++){        
        if(searchElement === array[index]){
            result = true    
        }      
    }
    return result
}

newIncludes(arrayNumeros, 52, 0)

///////////////////////////////////////////////////////////////////////////

//NewIndexOf

function newIndexOf(array, elementoDePesquisa, pontoInicial = 0){

    result = -1

    if(pontoInicial >= array.length){
        return result
    }

    for(let index = pontoInicial; index < array.length; index++){
        
        if(elementoDePesquisa === array[index]){
            result = index
        }
    }
    return result
}


newIndexOf(arrayNumeros, 5, 0)

///////////////////////////////////////////////////////////////////////////

function newConcat(...valorN){

    result = []

    for(let index = 0; index < valorN.length; index++){
        let concatenado = valorN[index]

        for(let index = 0; index < concatenado.length; index++){
            result.push(concatenado[index])
        }
    }
     return result
}

newConcat(arrayNumerosConcat1, arrayNumerosConcat2)


function newJoin(array, separardor = ","){
    let result = ""
    for(let index = 0; index < array.length; index++){
        result += array[index]
        if(index+1 < array.length){
            result += separardor;
        }
               
    }    
    return result
}
newJoin(arrayNumeros, "-")