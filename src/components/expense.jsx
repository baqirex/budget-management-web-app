import React from "react";

const Expense = ({ expense }) => {
  return (
    <div>
      <h2 className="text-danger">Expense</h2>
      <tbody>
        {expense.map((e) => (
          <tr>
            <td>{e}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Expense;
