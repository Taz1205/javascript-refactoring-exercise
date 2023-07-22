const countTransactions = (transactions) => {
  if (!Array.isArray(transactions)) {
    throw new Error("Invalid input: should be an array");
  }

  const transactionCount = transactions.reduce((acc, transaction) => {
    acc[transaction] = (acc[transaction] || 0) + 1;
    return acc;
  }, {});

  return sortTransactions(transactionCount);
};

const sortTransactions = (transactionCount) => {
  const sortedTransactions = Object.entries(transactionCount).sort(
    ([name1, count1], [name2, count2]) =>
      count2 - count1 || name1.localeCompare(name2)
  );

  return sortedTransactions.map(([name, count]) => `${name} ${count}`);
};

export default countTransactions;
