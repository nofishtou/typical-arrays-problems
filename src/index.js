
exports.min = function min (array) {
    if(array === undefined || array.length === 0) {
        return 0
    }

    return array.reduce((res, el) => {
        if(res > el) {
            res = el
        }
        
        return res
    })
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) {
        return 0
    }
        
    return array.reduce((res, el) => {
        if(res < el) {
            res = el
        }
        
        return res
    })
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0) {
        return 0
    } else {
        let result = array.reduce((res, el) => {
            res += el
            
            return res
        })
    
        result = result/ array.length
    
        return result 
    }

}
