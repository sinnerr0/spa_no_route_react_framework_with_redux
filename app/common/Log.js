class Log {
    constructor() {
    }

    getClassName(thisClass) {
        let className = thisClass.name || (thisClass && thisClass.constructor && thisClass.constructor.name);
        if (className) {
            className = '[' + className + ']';
        }
        return className;
    }

    getArguments(thisClass, arg) {
        let className = this.getClassName(thisClass);
        let args;
        if (className) {
            args = [className].concat(Array.prototype.splice.call(arg, 1, arg.length))
        } else {
            args = Array.prototype.splice.call(arg, 0, arg.length);
        }
        return args;
    }

    info(thisClass) {
        console.info.apply(this, this.getArguments(thisClass, arguments));
    }

    debug(thisClass) {
        if (__DEVELOPMENT__) {
            console.log.apply(this, this.getArguments(thisClass, arguments));
        }
    }

    warn(thisClass) {
        console.warn.apply(this, this.getArguments(thisClass, arguments));
    }

    error(thisClass) {
        console.error.apply(this, this.getArguments(thisClass, arguments));
    }
}


export default new Log();