/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */



    // Function to update the amount based on the selected duration
    function updateAmount() {
        const borrowDuration = document.getElementById("borrowDuration").value;
        const borrowAmountField = document.getElementById("borrowAmount");

        // Set amount based on the selected duration
        if (borrowDuration === "15") {
            borrowAmountField.value = "20 rupees";
        } else if (borrowDuration === "30") {
            borrowAmountField.value = "29 rupees";
        }
    }

    // Function to generate system-generated borrow date
    function generateBorrowDate() {
        // Your JavaScript logic to generate the date
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);
        document.getElementById("borrowDate").value = formattedDate;
    }

    // Call the function to generate borrow date when the page loads
    window.onload = generateBorrowDate;