export const App = () => {
    function func() { };
    const obj = { a: 0, b: 1 };

    return (
        <div block="Block0" x={'no'}>
            <span elem="Elem" />
            <span elem={"Elem"} mods="Mods" />
            <span elem="Elem" mods={{ m1: true }} />
            <span elem="Elem" mods={{ m1: func() }} />
            <span elem={["E1", "E2"]} mods="Mods" />
            <div block="Block1" x={'yes'}>
                <span elem="Elem" />
                <span elem={"Elem"} mods="Mods" />
                <span elem="Elem" mods={{ m1: true }} />
                <span elem="Elem" mods={{ m1: func() }} />
                <span elem={["E1", "E2"]} mods="Mods" />
            </div >
            <div block={func()} x={'maybe'}>
                <span elem="Elem" />
                <span elem={"Elem"} mods="Mods" />
                <span elem="Elem" mods={{ m1: true }} />
                <span elem="Elem" mods={{ m1: func() }} />
                <span elem={["E1", "E2"]} mods="Mods" />
            </div >
            <div block={['B0', 'B1', 'B2']} x={'maybe'}>
                <span elem="Elem" />
                <span elem={"Elem"} mods="Mods" />
                <span elem="Elem" mods={{ m1: true }} />
                <span elem="Elem" mods={{ m1: func() }} />
                <span elem={["E1", "E2"]} mods="Mods" />
            </div >
        </div >
    );
}

export const className = () => {
    return (
        <div className="0ClassName">
            <div className="1ClassName" />
            <div className={['2ClassName0', '2ClassName1']} />
            <div className={['3ClassName0', '']} />
            <div className={['4ClassName0', null]} />
            <div className={['', '']} />
            <div className={['', '6ClassName1']} />
            <div className={[]} />
            <div className={func()} />
            <div className={`${func()}`} />
            <div className={`PRE ${func()} POST`} />
            <div className={[func(), obj]} />
            <div className={`PRE ${func()}${obj} POST`} />
        </div>
    );
}

export const BLOCK = () => {
    return (
        <main block="B">
            <span block={func()} />
            <span block={obj} />
            <span block={`PRE ${func()} POST`} />
            <span block={[`PRE0 ${func()} POST0`, `PRE1 ${func()} POST1`]} />
            <span block={['B0', 'B1', 'B2']} />
            <span block={['B0', '', 'B2']} />
            <span block={['B0', func(), 'B2']} />
            <span block={['', func(), 'B2']} />
            <span block={[func(), 'B1', 'B2']} />
            <span block={[func(), 'B1', '']} />
            <span block={[func(), func(), func()]} />
        </main>
    );
}