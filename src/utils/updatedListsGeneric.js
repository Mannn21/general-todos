export const updateListGeneric = (datas, id, updateFn) => {
    const updatedLists = datas.map(list =>
      list.id === id ? updateFn(list) : list
    );
    return updatedLists;
  };