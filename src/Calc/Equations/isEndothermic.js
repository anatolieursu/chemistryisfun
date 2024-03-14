const isEndothermic = function (eq) {
    if (!eq){
        return null;
    }

    if (eq[eq.length-1] === 'Q'){
        switch (eq[eq.length-2]){
            case "+":
                return false;
            case "-":
                return true
        }
    }

    return null;
}

module.exports = isEndothermic