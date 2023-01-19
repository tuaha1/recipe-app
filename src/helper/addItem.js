
import { selectedItems } from "./selectedItems";

function AddItem(event) {
    if (selectedItems.includes(event.target.id)) {
        const presentItem = selectedItems.findIndex((element) => element === event.target.id);
        selectedItems.splice(presentItem, 1);
    } else {
        selectedItems.push(event.target.id);
    }

    console.log(selectedItems);
}

export default AddItem; 