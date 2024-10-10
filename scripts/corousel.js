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
        "prev": document.querySelector(privates.setting.prev),
        "next": document.querySelector(privates.setting.next),
        "points": document.querySelectorAll(privates.setting.points)
    };

    privates.opt = {
        "position": 0,
        "max_position": privates.setting.max_position ? privates.setting.max_position : document.querySelector(privates.setting.wrap).children.length
    };

    // Control
    if (privates.sel.prev !== null) {
        privates.sel.prev.addEventListener('click', () => {
            this.prev_slide();
        });
    }

    if (privates.sel.next !== null) {
        privates.sel.next.addEventListener('click', () => {
            this.next_slide();
        });
    }

    if (privates.sel.points !== null) {
        privates.sel.points.forEach((element, index) => {
            element.addEventListener('click', () => {
                change_position(index);
            });
        });
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


        if (privates.opt.position === privates.opt.max_position - 1) {
            privates.sel.next.classList.add('disabled');
        }
        else {
            privates.sel.next.classList.remove('disabled');
        }


        if (privates.opt.position === 0) {
            privates.sel.prev.classList.add('disabled');
        }
        else {
            privates.sel.prev.classList.remove('disabled');
        }

        if (!privates.setting.several_wrap) {
            privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position * 100 * privates.setting.slide_coefficient}%)`;
        }
        else {
            privates.sel.wrap.forEach((element) =>
                element.style["transform"] = `translateX(-${privates.opt.position * 100 * privates.setting.slide_coefficient}%)`);
        };

    };

    /* Public methods */
    // Prev slide
    this.prev_slide = () => {

        if (privates.opt.position !== 0) {
            change_position(privates.opt.position - 1);
        }

        //if (privates.opt.position < 0) {
        //    privates.sel.wrap.classList.add('s-notransition');
        //    privates.opt.position = privates.opt.max_position - 1;
        //}


    };


    // Next slide
    this.next_slide = () => {

        if (privates.opt.position !== privates.opt.max_position - 1) {
            change_position(privates.opt.position + 1);
        }



        //if (privates.opt.position >= privates.opt.max_position - 1) {
        //    privates.opt.position = 0;
        //}


    };
}