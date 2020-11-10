const { useLayoutEffect, useRef, useState } = require("react")

function InputSup(PROPS){

    const [update, setUpdate] = useState([])

    const ref = useRef(null);

    const { onChange, onKeyDown } = PROPS;

    const props = {...PROPS};

    delete props.onChange;
    delete props.onKeyDown;

    const functionsChanges = {}

    useLayoutEffect(()=>{

        if(ref.current) ref.current();

    },[update])

    if(onChange) functionsChanges.onChange = onChangeHandler;
    else if(onKeyDown) functionsChanges.onKeyDown = onKeyDownHandler;

    function onChangeHandler(event){

        if(onChange && !onChange(event)){

            const element = event.target
            const start = element.selectionStart;

            ref.current = () => element.setSelectionRange(start, start-1)

            setUpdate([]);

        }

    }

    function onKeyDownHandler(event){

        if(onKeyDown && !onKeyDown(event)){

            const element = event.target
            const start = element.selectionStart;

            ref.current = () => element.setSelectionRange(start, start-1)

            setUpdate([]);

        }

    }

    return <input type="text" {...functionsChanges} {...props} />;

}

export { InputSup }