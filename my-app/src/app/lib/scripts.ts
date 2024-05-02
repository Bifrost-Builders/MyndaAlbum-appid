

export default function handleClickByRef(refVARIABLE) {
    if (refVARIABLE.current) {
        refVARIABLE.current.click();
    }
};