function Carousel (setting) {

    /* Scope privates methods and properties */
    let privates = {};

    /* Privates properties */
    privates.setting = setting;

    if (privates.setting.several_wrap === undefined) {
        privates.setting.several_wrap = false;
    }

    privates.sel = {
        "main": document.querySelector(privates.setting.main),
        "wrap": privates.setting.several_wrap ? document.querySelectorAll(privates.setting.wrap) : document.querySelector(privates.setting.wrap),
        "children": document.querySelector(privates.setting.wrap).children,
        "prev": document.querySelectorAll(privates.setting.prev),
        "next": document.querySelectorAll(privates.setting.next),
        "points": document.querySelectorAll(privates.setting.points)
    };

    privates.opt = {
        "position": 0,
        "max_position": privates.setting.max_position ? privates.setting.max_position : document.querySelector(privates.setting.wrap).children.length
    };

    // Control
    if (privates.sel.prev.length > 0) {
        for (let elem of privates.sel.prev) {
            elem.addEventListener('click', () => {
                this.prev_slide();
            });
        }
    }

    if (privates.sel.next.length > 0) {
        for (let elem of privates.sel.next) {
            elem.addEventListener('click', () => {
                this.next_slide();
            });
        }
    }

    if (privates.sel.points !== null) {
        privates.sel.points.forEach((element, index) => {
            element.addEventListener('click', () => {
                change_position(index);
            });
        });
    }

    let x0 = null;

    function unify (e) { return e.changedTouches ? e.changedTouches[0] : e; };


    function lock (e) { x0 = unify(e).clientX; };


    const move = (e) => {
        if (x0 || x0 === 0) {
            let dx = unify(e).clientX - x0, s = Math.sign(dx);

            if (dx < 0) {
                this.next_slide();
            }
            else {
                this.prev_slide();
            }

            x0 = null;
        }
    };
    if (privates.sel.wrap !== null && privates.sel.wrap.length > 1) {
        privates.sel.wrap.forEach((element) => {
            element.addEventListener('touchmove', e => { e.preventDefault(); }, false);
            element.addEventListener('mousedown', lock, false);
            element.addEventListener('touchstart', lock, false);

            element.addEventListener('mouseup', move, false);
            element.addEventListener('touchend', move, false);
        });
    }

    else {
        privates.sel.wrap.addEventListener('touchmove', e => { e.preventDefault(); }, false);
        privates.sel.wrap.addEventListener('mousedown', lock, false);
        privates.sel.wrap.addEventListener('touchstart', lock, false);

        privates.sel.wrap.addEventListener('mouseup', move, false);
        privates.sel.wrap.addEventListener('touchend', move, false);
    }

    const change_position = (newpos) => {
        privates.opt.position = newpos;

        privates.sel.points.forEach((element, index) => {

            if (privates.opt.position === index) {
                element.classList.add('selected');
            }
            else {
                element.classList.remove('selected');
            }
        });

        if (privates.sel.next.length != 0 && privates.sel.prev.length != 0) {
            change_arrows();
        }

        if (!privates.setting.several_wrap) {
            privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position * 100 * privates.setting.slide_coefficient}%)`;
        }
        else {
            privates.sel.wrap.forEach((element) =>
                element.style["transform"] = `translateX(-${privates.opt.position * 100 * privates.setting.slide_coefficient}%)`);
        };

    };

    const change_arrows = () => {
        if (privates.opt.position === privates.opt.max_position - 1) {
            for (let elem of privates.sel.next) {
                elem.classList.add('disabled');
            }
        }
        else {
            for (let elem of privates.sel.next) {
                elem.classList.remove('disabled');
            }
        }


        if (privates.opt.position === 0) {
            for (let elem of privates.sel.prev) {
                elem.classList.add('disabled');
            }
        }
        else {
            for (let elem of privates.sel.prev) {
                elem.classList.remove('disabled');
            }
        }
    };

    /* Public methods */
    // Prev slide
    this.prev_slide = () => {

        if (privates.opt.position !== 0) {
            change_position(privates.opt.position - 1);
        }

    };


    // Next slide
    this.next_slide = () => {

        if (privates.opt.position !== privates.opt.max_position - 1) {
            change_position(privates.opt.position + 1);
        }

    };
}



