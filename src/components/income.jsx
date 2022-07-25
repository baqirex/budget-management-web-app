import React from "react";
const Income = ({ income }) => {
  return (
    <div>
      <h2 className="text-success">Income</h2>
      <tbody>
        {income.map((i) => (
          <tr>
            <td>{i}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Income;
