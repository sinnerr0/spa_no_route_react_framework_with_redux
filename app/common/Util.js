class Util {
    getFormatDate(/**Date*/dt, f) {
        if (!dt.valueOf())
            return " ";
        var h, weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        return f.replace(/(yyyy|yy|MM|dd|E|HH|hh|mm|ss|a\/p|AMPM)/gi, ($1) => {
            switch ($1) {
                case "yyyy":
                    return dt.getFullYear();
                case "yy":
                    return dt.getFullYear().toString().substr(-2);
                case "MM":
                    return this.numToStr(dt.getMonth() + 1, 2);
                case "dd":
                    return this.numToStr(dt.getDate(), 2);
                case "E":
                    return weekName[dt.getDay()];
                case "HH":
                    return this.numToStr(dt.getHours(), 2);
                case "hh":
                    return this.numToStr((( h = dt.getHours() % 12) ? h : 12), 2);
                case "mm":
                    return this.numToStr(dt.getMinutes(), 2);
                case "ss":
                    return this.numToStr(dt.getSeconds(), 2);
                case "a/p":
                    return dt.getHours() < 12 ? "오전" : "오후";
                case "AMPM":
                    return dt.getHours() < 12 ? "AM" : "PM";
                default:
                    return $1;
            }
        });
    }

    numToStr(no, length, max) {
        if (max != null && no > max) {
            return max;
        }
        var result = "" + no;
        for (var i = length - 1; i > 0; i--) {
            var tmp = Math.pow(10, i);
            if (no < tmp) {
                result = "0" + result;
            }
        }
        return result;
    }

    jsonEqual(a, b, isRemoveChildren) {
        const replacer = (key, value) => {
            if (isRemoveChildren && key === 'children') {
                return undefined;
            }
            return value;
        };
        return JSON.stringify(a, replacer) === JSON.stringify(b, replacer);
    }

    /**
     * 특수 문자를 HTML로 변환
     * @param s
     * @returns {string|*}
     */
    encodeHtml(s) {
        if (!this.encodeHtmlElement) {
            this.encodeHtmlElement = document.createElement("div");
        }
        this.encodeHtmlElement.innerText = this.encodeHtmlElement.textContent = s;
        s = this.encodeHtmlElement.innerHTML;
        return s;
    }

    /**
     * 시간을 그리는 타이머를 설정한다.(OS 시간에 맞춰 동작하게 함)
     * @param callback 시간 업데이트 콜백
     * @returns {object} 타이머 객체
     */
    startTimer(callback) {
        if (!callback) {
            return;
        }
        let timerObj = {};
        G.Log.debug(this, 'startTimer');
        let timerProcess = () => {
            G.Log.debug(this, 'startTimer set');
            callback.call(callback);
            let seconds = (new Date()).getSeconds();
            timerObj.timerId = setTimeout(timerProcess, (60 - seconds) * 1000);
        };
        timerProcess();
        return timerObj;
    }

    /**
     * 시간 타이머를 종료한다.
     * @param timerObj Util.startTimer에서 return 된 timer 객체
     */
    stopTimer(timerObj) {
        G.Log.debug(this, 'stopTimer');
        if (timerObj && timerObj.timerId) {
            G.Log.debug(this, 'stopTimer clear');
            clearTimeout(timerObj.timerId);
        }
    }
}
export default new Util();