// Sample in-memory storage for receipts
const receipts = [];

// Function to add receipt to table
function addReceipt(event) {
    event.preventDefault(); // Prevent form submission

    const receiptId = document.getElementById('receiptId').value;
    const receiptDate = document.getElementById('receiptDate').value;
    const receiptAmount = document.getElementById('receiptAmount').value;
    const receiptStatus = document.getElementById('receiptStatus').value;
    const receiptFile = document.getElementById('receiptFile').value;

    // Create a new receipt object
    const newReceipt = {
        id: receiptId,
        date: receiptDate,
        amount: receiptAmount,
        status: receiptStatus,
        file: receiptFile
    };

    // Add to receipts array (could be replaced with backend API)
    receipts.push(newReceipt);

    // Update the table
    updateReceiptTable();

    // Reset the form
    document.getElementById('addReceiptForm').reset();
}




// Function to update the receipt table
function updateReceiptTable() {
    const tableBody = document.getElementById('receiptTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    receipts.forEach(receipt => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${receipt.id}</td>
            <td>${receipt.date}</td>
            <td>${receipt.amount}</td>
            <td>${receipt.status}</td>
            <td><a href="${receipt.file}" target="_blank">Download</a></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to remove receipt by ID
function removeReceipt(event) {
    event.preventDefault(); // Prevent form submission

    const receiptId = document.getElementById('removeReceiptId').value;

    // Find the index of the receipt to remove
    const index = receipts.findIndex(receipt => receipt.id === receiptId);

    if (index !== -1) {
        receipts.splice(index, 1); // Remove the receipt from the array
        updateReceiptTable(); // Update the table
        alert('Receipt removed successfully');
    } else {
        alert('Receipt ID not found');
    }

    // Reset the form
    document.getElementById('removeReceiptForm').reset();
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Dummy authentication logic (replace with actual authentication)
    if (username === 'admin' && password === 'password') {
        // Redirect to admin dashboard or member area
        alert('Login successful!');
        // window.location.href = 'dashboard.html'; // Uncomment this line to redirect to a dashboard
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
}






// member.html

// Sample in-memory storage for members
const members = [];

// Function to add or update member
function addOrUpdateMember(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('memberName').value;
    const email = document.getElementById('memberEmail').value;
    const dob = document.getElementById('memberDOB').value;
    const membershipType = document.getElementById('memberMembershipType').value;
    const phone = document.getElementById('memberPhone').value;
    const status = document.getElementById('memberStatus').value;

    // Create a new member object
    const newMember = {
        name,
        email,
        dob,
        membershipType,
        phone,
        status
    };

    // Add member to array (this can be replaced with backend API)
    members.push(newMember);

    // Update the member table
    updateMemberTable();

    // Reset the form
    document.getElementById('memberForm').reset();
}

// Function to update the member table
function updateMemberTable() {
    const tableBody = document.getElementById('memberTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    members.forEach((member, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>${member.membershipType}</td>
            <td>${member.status}</td>
            <td>
                <div class="action-btns">
                    <button onclick="editMember(${index})">Edit</button>
                    <button onclick="removeMember(${index})">Remove</button>
                </div>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to edit member
function editMember(index) {
    const member = members[index];
    document.getElementById('memberName').value = member.name;
    document.getElementById('memberEmail').value = member.email;
    document.getElementById('memberDOB').value = member.dob;
    document.getElementById('memberMembershipType').value = member.membershipType;
    document.getElementById('memberPhone').value = member.phone;
    document.getElementById('memberStatus').value = member.status;

    // Remove member from array before editing
    members.splice(index, 1);
    updateMemberTable();
}

// Function to remove member
function removeMember(index) {
    members.splice(index, 1); // Remove member from array
    updateMemberTable(); // Update the table
}

// Attach form submit handler
document.getElementById('memberForm').addEventListener('submit', addOrUpdateMember);