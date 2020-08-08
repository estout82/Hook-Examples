
import React, { useState, useRef } from 'react';

const createUniqueIdFactory = () => {
    let current = 0;


    return () => {
        current += 1;
        return current;
    }
}

const EffectExample = (props) => {
    const [items, setItems] = useState([]);

    const uniqueIdFactory = useRef(createUniqueIdFactory());

    const onRowDeleteClick = (index) => {
        let newItems = items.filter((item, itemIndex) => itemIndex !== index);
        //newItems = newItems.reverse();
        setItems(newItems);
    }

    const onAddItemClick = () => {
        const newItem = { value: `I'm an item! ${items.length}`, id: uniqueIdFactory.current() };
        setItems([
            ...items,
            newItem
        ]);
    }

    return (
        <div className="card-container">
            <header className="card-header">
                <h3>Keys Explained</h3>
            </header>
            <section className="card-content">
                <p>How not to implement dynamic lists.</p>
                <p className="f-w-400">
                    When comparing previous React element tree to current React element tree, React has to make some
                    about the 'identity' of elements in order to determine what to update and what to re-create.
                    React assumes that you will place elements in the same place in the tree most of the time. It
                    assumes that the UI tree will be mostly 'stable'. Take conditional rendering for example, most of
                    the time you will either place an element or a 'null' value in place. Most of the time elements 
                    will not simply dissapear from the DOM. This way of operating is problematic when it comes do 
                    rendering dynamic list of React elements. If the order of those elements changes, React will
                    see that an element of the same type is in the same place in the tree and simply update props
                    and state on that element as nesecary, regardless of weather or not it is actualy the SAME element.
                    You can see this demonstarted below by modifing the value of an input element and then removing
                    a row that is placed before it in the DOM. The input element with the modified value will stay
                    at the same place in the tree even though it has technically updated to be in a different
                    place in the tree. This is where keys come into play. When determining weather or not to re-create
                    a host instance, React will take into account the key prop on the React element. If the same type
                    or node is in the same position in the tree and it has the SAME key as prev tree, it is same element.
                    When the keys don't match, it is a different element. Keys should be UNIQUE and the same across all
                    render cycles in the parent. This means you cannot use indexes because the same index can refer to a
                    different element depending on the state. Keys have to be unique in the containing parent. Good keys
                    are item ids, unique keys and such.
                </p>
                <div className="row p-md">
                    <button 
                     className="btn"
                     onClick={ () => onAddItemClick() }>
                        Add Item
                    </button>
                </div>
                <div className="row p-md">
                    <ol className="list-table">
                        {
                            items.map((item, index) => {
                                return (
                                    <li
                                     key={ index }
                                     style={{ gridColumn: "1 / 5" }}>
                                        <span className="col-1">{ index }</span>
                                        <span className="col-2">{ item.value }</span>
                                        <input
                                         className="input input-small col-3" 
                                         
                                        />
                                        <button 
                                         className="col-4 btn btn-cancel"
                                         onClick={ () => onRowDeleteClick(index) }>
                                            x
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
                <div className="row p-md">
                    <ol className="list-table">
                        {
                            items.map((item, index) => {
                                return (
                                    <li
                                     key={ item.id }
                                     style={{ gridColumn: "1 / 5" }}>
                                        <span className="col-1">{ index }</span>
                                        <span className="col-2">{ item.value }</span>
                                        <input
                                         className="input input-small col-3" 
                                         
                                        />
                                        <button 
                                         className="col-4 btn btn-cancel"
                                         onClick={ () => onRowDeleteClick(index) }>
                                            x
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </section>
        </div>
    );
}

export default EffectExample;