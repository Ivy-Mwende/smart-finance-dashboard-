// Smart Finance Dashboard - Starter Script

// Handle expense form submission
document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.querySelector(".form-section form");
  const incomeForm = document.querySelectorAll(".form-section form")[1];

  if (expenseForm) {
    expenseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = expenseForm.querySelector("input[type='text']").value;
      const amount = expenseForm.querySelector("input[type='number']").value;
      console.log("Expense added:", name, amount);
      alert(`Expense added: ${name} - $${amount}`);
    });
  }

  if (incomeForm) {
    incomeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const source = incomeForm.querySelector("input[type='text']").value;
      const amount = incomeForm.querySelector("input[type='number']").value;
      console.log("Income added:", source, amount);
      alert(`Income added: ${source} - $${amount}`);
    });
  }
});
