<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="printDB.aspx.cs" Inherits="DrorProject.pages.admin.printDB" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        h2 {
            color: #333;
        }

        table {
            width: 100% !important;
            margin-left: auto;
            margin-right: auto;
            border-collapse: collapse;
            background: white;
            display: block; /* Forces width to be applied */
            overflow-x: auto; /* Prevents unnecessary scrolling */
            align-content: center;
        }



        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background: #007BFF;
            color: white;
        }

        button {
            margin: 10px;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            color: white;
            font-size: 16px;
        }

        #deleteBtn {
            background-color: red;
        }

        #updateBtn {
            background-color: blue;
        }

        #toggleBtn {
            background-color: green;
        }

        button:hover {
            opacity: 0.8;
            transform: scale(1.05);
        }
    </style>
    <script>
        function getSelectedUsers() {
            var selected = [];
            document.querySelectorAll("input[name='selectedUsers']:checked").forEach(cb => {
                if (!selected.includes(cb.value)) {
                    selected.push(cb.value);
                }
            });
            return selected.join(",");
        }

        function performAction(action) {
            var selectedIds = getSelectedUsers();

            if (selectedIds.length === 0) {
                alert("Please select at least one user.");
                return;
            }

            if (action === "update" && selectedIds.includes(",")) {
                alert("Please select only one user to update.");
                return;
            }

            document.getElementById("actionType").value = action;
            document.getElementById("selectedUsers").value = selectedIds;
            document.getElementById("adminForm").submit();
        }
    </script>


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">
        <center>

            <h2>Admin Panel - Manage Users</h2>
            <button type="button" id="deleteBtn" onclick="performAction('delete')">🗑 Delete Selected</button>
            <button type="button" id="updateBtn" onclick="performAction('update')">✏️ Update Selected</button>
            <button type="button" id="toggleBtn" onclick="performAction('togglePermissions')">🔄 Toggle Admin Permission</button>
            <form id="adminForm" method="post">
                <input type="hidden" id="selectedUsers" name="selectedUsers">
                <input type="hidden" id="actionType" name="actionType">

                <%= UsersHtml %>
                <!-- This prints the user table from the backend -->


            </form>
        </center>
    </div>
</asp:Content>
