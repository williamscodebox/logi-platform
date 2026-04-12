import { useEffect, useState } from "react";
import { getInventory } from "../../api/inventory"

export const Inventory = () => {
 const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getInventory();
        setInventory(data.status);
      } catch (err) {
        console.error("Failed to load inventory:", err);
      }
    };

    void load(); // avoids floating Promise warning
  }, []);

  return (
    <div>
        <h1>Inventory</h1>
        <p>{inventory}</p>
    </div>
    )
}

export default Inventory