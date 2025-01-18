import Grocery from "./Grocery";

export default function GroceriesList({groceries, onChangeGroceries, onDeleteGrocery}) {
    return (
        <>
            <ul>
                {
                    groceries.map(
                        grocery => (
                            <li key={grocery.id}>
                                <Grocery grocery={grocery} onChangeGroceries={onChangeGroceries} onDeleteGrocery={onDeleteGrocery} />
                            </li>
                        )
                    )
                }
            </ul>
        </>
    );
}