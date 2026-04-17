import { useState } from "react";
import type { OrderLine } from "../types";

interface OrderLinesEditorProps {
  value: OrderLine[];
  onChange: (lines: OrderLine[]) => void;
}

export function OrderLinesEditor({ value, onChange }: OrderLinesEditorProps) {
  const [lines, setLines] = useState<OrderLine[]>(value);

  function updateLine(id: string, patch: Partial<OrderLine>) {
    const updated = lines.map((l) =>
      l.id === id ? { ...l, ...patch } : l
    );
    setLines(updated);
    onChange(updated);
  }

  function addLine() {
    const newLine: OrderLine = {
      id: crypto.randomUUID(),
      sku: "",
      description: "",
      quantity: 1,
      unitPrice: 0,
      locationId: null,
    };
    const updated = [...lines, newLine];
    setLines(updated);
    onChange(updated);
  }

  function removeLine(id: string) {
    const updated = lines.filter((l) => l.id !== id);
    setLines(updated);
    onChange(updated);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h2 style={{ margin: 0 }}>Lines</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f8fafc" }}>
            <Th>SKU</Th>
            <Th>Description</Th>
            <Th>Qty</Th>
            <Th>Unit Price</Th>
            <Th>Total</Th>
            <Th></Th>
          </tr>
        </thead>

        <tbody>
          {lines.map((line) => (
            <tr key={line.id}>
              <Td>
                <input
                  value={line.sku}
                  onChange={(e) => updateLine(line.id, { sku: e.target.value })}
                />
              </Td>

              <Td>
                <input
                  value={line.description}
                  onChange={(e) =>
                    updateLine(line.id, { description: e.target.value })
                  }
                />
              </Td>

              <Td>
                <input
                  type="number"
                  min={1}
                  value={line.quantity}
                  onChange={(e) =>
                    updateLine(line.id, {
                      quantity: Math.max(1, Number(e.target.value)),
                    })
                  }
                  style={{ width: 70 }}
                />
              </Td>

              <Td>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={line.unitPrice}
                  onChange={(e) =>
                    updateLine(line.id, {
                      unitPrice: Math.max(0, Number(e.target.value)),
                    })
                  }
                  style={{ width: 100 }}
                />
              </Td>

              <Td>
                {(line.quantity * line.unitPrice).toFixed(2)}
              </Td>

              <Td>
                <button onClick={() => removeLine(line.id)}>✕</button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addLine} style={{ marginTop: 8 }}>
        + Add line
      </button>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "8px 4px",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td
      style={{
        padding: "6px 4px",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      {children}
    </td>
  );
}
