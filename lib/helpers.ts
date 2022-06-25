export const handleNewItem = (index: number, newItem: string, setNewListFn: Function) => {
    const addNewItem = (currentItems: string[]) => {
        const listCopy = [...currentItems];
        if (index <= listCopy.length - 1) {
            listCopy[index] = newItem
        } else {
            listCopy.push(newItem);
        }
        return Array.from(new Set([...listCopy, '']))
    }
    setNewListFn(addNewItem)
}

export const filterEmpties = (list: string[]) => {
    return Array.from(new Set(list)).filter(item => !!item.trim())
}